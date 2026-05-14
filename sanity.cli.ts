import { defineCliConfig } from "sanity/cli";

const env = globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
};

export default defineCliConfig({
  api: {
    projectId: env.process?.env?.SANITY_STUDIO_PROJECT_ID ?? "replace-me",
    dataset: env.process?.env?.SANITY_STUDIO_DATASET ?? "production",
  },
});
