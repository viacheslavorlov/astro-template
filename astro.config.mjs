import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import preact from "@astrojs/preact";
import node from "@astrojs/node";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  security: {
    checkOrigin: true,
  },
  site: "http://astro-template.ru", // TODO
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
    sitemap(),
    compress(),
  ],
  adapter: node({
    mode: "standalone", //todo
  }),
});
