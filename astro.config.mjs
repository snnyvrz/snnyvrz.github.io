import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://snnyvrz.github.io",
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fa"]
  }
});