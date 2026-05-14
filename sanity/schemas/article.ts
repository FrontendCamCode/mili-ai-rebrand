import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Article Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Article URL",
      description: "Use the full path, for example blog/eating-from-the-pantry.",
      type: "slug",
      options: { source: "title", maxLength: 160 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "kind", title: "Kind", type: "string", initialValue: "article", hidden: true }),
    defineField({ name: "eyebrow", title: "Small Label", type: "string", initialValue: "Article" }),
    defineField({ name: "description", title: "Short Excerpt", type: "text", rows: 3 }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "articleBody", title: "Article Body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
  ],
});
