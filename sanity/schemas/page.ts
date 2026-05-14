import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Website Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Page URL",
      description: "The URL path after lexinsolutions.com, for example contact or resources/scaas.",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "kind", title: "Kind", type: "string", initialValue: "page", hidden: true }),
    defineField({ name: "eyebrow", title: "Small Label Above Heading", type: "string" }),
    defineField({ name: "description", title: "Page Summary", type: "text", rows: 3 }),
    defineField({ name: "ctaLabel", title: "Button Label", type: "string" }),
    defineField({ name: "ctaHref", title: "Button Link", type: "string" }),
    defineField({
      name: "sections",
      title: "Content Sections",
      description: "Optional simple content sections for this page. Codex controls how these look in Astro.",
      type: "array",
      of: [{ type: "section" }],
    }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
