import { createClient } from "@sanity/client";
import { seedPages, type SeedPage } from "../data/sitemap";

export type CmsSection = {
  _type: "section";
  eyebrow?: string;
  heading?: string;
  body?: string;
  items?: Array<{ title: string; text?: string }>;
};

export type CmsPage = SeedPage & {
  seoTitle?: string;
  author?: string;
  publishedAt?: string;
  embedUrl?: string;
  downloadUrl?: string;
  takeaways?: string[];
  sections?: CmsSection[];
};

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET ?? "production";
const apiVersion = import.meta.env.SANITY_API_VERSION ?? "2025-01-01";

export const hasSanityConfig = Boolean(projectId && dataset);

const client = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

const pageProjection = `{
  title,
  "slug": slug.current,
  eyebrow,
  description,
  kind,
  ctaLabel,
  ctaHref,
  duration,
  author,
  publishedAt,
  embedUrl,
  downloadUrl,
  takeaways,
  seoTitle,
  sections[]{
    _type,
    eyebrow,
    heading,
    body,
    items[]{title, text}
  }
}`;

export async function getCmsPage(slug: string): Promise<CmsPage | undefined> {
  const fallback = seedPages.find((page) => page.slug === slug);

  if (!client) return fallback;

  const page = await client.fetch<CmsPage | null>(
    `*[_type in ["page", "resource", "article", "podcastEpisode"] && slug.current == $slug][0]${pageProjection}`,
    { slug },
  );

  return page ?? fallback;
}

export async function getCmsPages(): Promise<CmsPage[]> {
  if (!client) return seedPages;

  const pages = await client.fetch<CmsPage[]>(
    `*[_type in ["page", "resource", "article", "podcastEpisode"] && defined(slug.current)]${pageProjection}`,
  );

  const slugs = new Set(pages.map((page) => page.slug));
  return [...pages, ...seedPages.filter((page) => !slugs.has(page.slug))];
}

export function getRelatedPages(kind: CmsPage["kind"], currentSlug?: string) {
  return seedPages.filter((page) => page.kind === kind && page.slug !== currentSlug).slice(0, 9);
}

export function getListingPages(slug: string) {
  if (slug === "blog") return seedPages.filter((page) => page.kind === "article");
  if (slug === "podcast") return seedPages.filter((page) => page.kind === "podcastEpisode");
  return [];
}
