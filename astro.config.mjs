import mdx from "@astrojs/mdx";
// import preact from "@astrojs/preact";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: true,
  },
  // site: "http://astro-template.ru", // TODO
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
    sitemap(),
  ],
  adapter: node({
    mode: "standalone", //todo
  }),
});
