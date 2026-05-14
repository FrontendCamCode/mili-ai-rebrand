import { defineField, defineType } from "sanity";

export const sectionBlock = defineType({
  name: "section",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
    defineField({
      name: "items",
      title: "Cards / Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "text", title: "Text", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
  ],
});
