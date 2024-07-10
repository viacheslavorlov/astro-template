import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import node from "@astrojs/node";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: true
  },
  site: 'http://astro-template.ru', // TODO
  integrations: [tailwind(), preact(), mdx(), sitemap(), compress()],
  adapter: node({
    mode: "standalone"
  })
});