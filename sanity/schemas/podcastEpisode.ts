import { defineField, defineType } from "sanity";

export const podcastEpisode = defineType({
  name: "podcastEpisode",
  title: "Podcast Episode",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Episode Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Episode URL",
      description: "Use the full path, for example podcast/the-mro-flow.",
      type: "slug",
      options: { source: "title", maxLength: 160 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "kind", title: "Kind", type: "string", initialValue: "podcastEpisode", hidden: true }),
    defineField({ name: "eyebrow", title: "Small Label", type: "string", initialValue: "Podcast" }),
    defineField({ name: "description", title: "Episode Summary", type: "text", rows: 3 }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "embedUrl", title: "Embed URL", type: "url" }),
    defineField({ name: "takeaways", title: "Key Takeaways", type: "array", of: [{ type: "string" }] }),
  ],
});
