import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://FrontendCamCode.github.io",
  base: "/mili-ai-rebrand",
  integrations: [sitemap()],
});
