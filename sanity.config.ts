import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const env = globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
};

export default defineConfig({
  name: "lexin-solutions",
  title: "Lexin Solutions",
  projectId: env.process?.env?.SANITY_STUDIO_PROJECT_ID ?? "replace-me",
  dataset: env.process?.env?.SANITY_STUDIO_DATASET ?? "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
