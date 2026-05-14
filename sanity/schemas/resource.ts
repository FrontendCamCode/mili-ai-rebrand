import { defineField, defineType } from "sanity";

export const resource = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Resource Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Resource URL",
      description: "Use the full path, for example resources/scaas.",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "kind", title: "Kind", type: "string", initialValue: "resource", hidden: true }),
    defineField({ name: "eyebrow", title: "Small Label", type: "string", initialValue: "Resource" }),
    defineField({ name: "description", title: "Resource Summary", type: "text", rows: 3 }),
    defineField({ name: "downloadUrl", title: "Download URL", type: "url" }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string", initialValue: "Download" }),
    defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
    defineField({ name: "sections", title: "Supporting Sections", type: "array", of: [{ type: "section" }] }),
  ],
});
