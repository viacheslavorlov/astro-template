import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import node from "@astrojs/node";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: true
  },
  integrations: [tailwind(), preact(), compress()],
  adapter: node({
    mode: "standalone"
  })
});