import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cookieconsent from "@jop-software/astro-cookieconsent";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
  ],
});
