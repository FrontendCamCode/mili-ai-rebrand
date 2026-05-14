export type PageKind = "page" | "resource" | "article" | "podcastEpisode" | "listing";

export type SeedPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  kind: PageKind;
  ctaLabel?: string;
  ctaHref?: string;
  duration?: string;
};

const blogDescriptions: Record<string, string> = {
  "eating-from-the-pantry": "How disciplined inventory consumption turns idle stock into working capital.",
  "driving-out-failures-one-material-at-a-time": "A practical look at reducing recurring failures through better material data.",
  "the-top-10-issues-in-eam-maintenance-(and-how-to-navigate-them)": "The common maintenance and EAM issues that prevent teams from moving faster.",
  "supply-chain-top-10": "Ten pressure points that show up repeatedly across indirect material supply chains.",
  "we-all-need-to-live-in-a-world-full-on-bom-s": "Why complete bills of material matter for maintenance planning and uptime.",
  "mro-impacts-of-criticality-lead-times": "How criticality and lead times affect MRO stocking decisions.",
  "mro-reorder-quantity-(roq)-calculation": "A plain-English guide to reorder quantity calculations for MRO teams.",
  "mro-purchasing-automation-sorry-i-m-too-busy-and-comfortable-with-doing-it-manually": "Why manual purchasing work persists and where automation can help.",
  "mro-stock-accuracy": "The operating cost of inaccurate stock records and how to correct them.",
  "mro-the-good-the-bad-and-the-ugly": "A grounded view of what is working and what is not in MRO operations.",
  "mro-how-are-we-doing-and-where-are-we-going-part-1": "Part one of Lexin's view on the current state and future direction of MRO.",
  "mro-how-are-we-doing-and-where-are-we-going-part-2": "Part two of Lexin's view on the current state and future direction of MRO.",
};

const podcastDurations: Record<string, string> = {
  "the-mro-flow": "7 minutes",
  "prioritizing-work-connecting-supply-chain": "12 minutes",
  "material-requirements-planning": "6 minutes",
  "inventory-cataloguing": "6 minutes",
};

const titleFromSlug = (slug: string) =>
  slug
    .split("/")
    .at(-1)!
    .replace(/\([^)]*\)/g, (match) => match.toUpperCase())
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bAnd\b/g, "&")
    .replace(/\bMro\b/g, "MRO")
    .replace(/\bRoq\b/g, "ROQ")
    .replace(/\bBom\b/g, "BOM")
    .replace(/\bIso14224\b/g, "ISO14224")
    .replace(/\bScaas\b/g, "Supply Chain as a Service");

export const sitemapSlugs = [
  "contact",
  "partners-hidden",
  "eam-mro-flow",
  "pilot",
  "report",
  "demo",
  "success",
  "popcorn",
  "trust",
  "blog",
  "podcast",
  "resources/capability-uplift",
  "resources/scaas",
  "resources/maintenance-health-check",
  "resources/supply-chain-review",
  "mili",
  "blog/eating-from-the-pantry",
  "blog/driving-out-failures-one-material-at-a-time",
  "blog/the-top-10-issues-in-eam-maintenance-(and-how-to-navigate-them)",
  "blog/supply-chain-top-10",
  "blog/we-all-need-to-live-in-a-world-full-on-bom-s",
  "blog/mro-impacts-of-criticality-lead-times",
  "blog/mro-reorder-quantity-(roq)-calculation",
  "blog/mro-purchasing-automation-sorry-i-m-too-busy-and-comfortable-with-doing-it-manually",
  "blog/mro-stock-accuracy",
  "blog/mro-the-good-the-bad-and-the-ugly",
  "blog/mro-how-are-we-doing-and-where-are-we-going-part-1",
  "blog/mro-how-are-we-doing-and-where-are-we-going-part-2",
  "podcast/return-parts",
  "podcast/christmas-special",
  "podcast/issue-parts",
  "podcast/kitting",
  "podcast/receive-parts",
  "podcast/sourcing-procurement",
  "podcast/check-inventory",
  "podcast/the-demand-signal",
  "podcast/the-mro-flow",
  "podcast/why-catalog-materials",
  "podcast/guiding-principles",
  "podcast/mro",
  "podcast/tim-justin-gentlemen-assemble",
  "podcast/asug-best-practices-for-oil-gas-and-energy-2025",
  "podcast/the-importance-of-lead-times",
  "podcast/supply-chain-effectiveness-kpis",
  "podcast/transforming-procurement-automation",
  "podcast/gold-coast-fight-night-recap",
  "podcast/guest-show-with-norm-poynter",
  "podcast/guest-show-with-mark-cooper",
  "podcast/iso14224-failure-codes-material-master",
  "podcast/prioritizing-work-connecting-supply-chain",
  "podcast/material-requirements-planning",
  "podcast/inventory-cataloguing",
] as const;

export const seedPages: SeedPage[] = sitemapSlugs.map((slug) => {
  const isBlog = slug.startsWith("blog/");
  const isPodcast = slug.startsWith("podcast/");
  const isResource = slug.startsWith("resources/");
  const isListing = slug === "blog" || slug === "podcast";
  const title = titleFromSlug(slug);

  if (isBlog) {
    const key = slug.replace("blog/", "");
    return {
      slug,
      title,
      eyebrow: "Article",
      description: blogDescriptions[key] ?? "Field notes and practical guidance from Lexin Solutions.",
      kind: "article",
      ctaLabel: "Speak with our team",
      ctaHref: "/contact",
    };
  }

  if (isPodcast) {
    const key = slug.replace("podcast/", "");
    return {
      slug,
      title,
      eyebrow: "Podcast",
      description: "A short Lexin conversation about the practical details of maintenance, MRO, and supply chain execution.",
      kind: "podcastEpisode",
      duration: podcastDurations[key] ?? "Lexin podcast",
      ctaLabel: "All podcast episodes",
      ctaHref: "/podcast",
    };
  }

  if (isResource) {
    return {
      slug,
      title,
      eyebrow: "Resource",
      description: "Download the latest Lexin information sheets to learn more about what we do and how we do it.",
      kind: "resource",
      ctaLabel: "Download",
      ctaHref: "/contact",
    };
  }

  return {
    slug,
    title,
    eyebrow: isListing ? "Discover" : "Lexin Solutions",
    description: isListing
      ? `Browse Lexin ${slug} content from the CMS.`
      : "A CMS-managed Lexin page ready for campaign content, forms, proof points, and reusable sections.",
    kind: isListing ? "listing" : "page",
    ctaLabel: slug === "trust" ? "Request security documents" : "Contact our team",
    ctaHref: "/contact",
  };
});

export const getSeedPage = (slug: string) => seedPages.find((page) => page.slug === slug);
