import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import removeConsole from "vite-plugin-remove-console";
import { loadEnv } from "vite";

const { SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: "server",
  security: {
    checkOrigin: true,
  },
  site: SITE_URL, // TODO
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
    partytown({
      // Example: Disable debug mode.
      config: { debug: false },
    }),
  ],
  adapter: node({
    mode: "standalone", //todo
  }),
  vite: {
    plugins: [
      {
        name: "html-minifier",
        async transformIndexHtml(html) {
          const htmlnano = require("htmlnano");
          const result = await htmlnano.process(html, {
            removeComments: true, // Удаляем комментарии
          });
          return result.html;
        },
      },
      process.env.NODE_ENV === "production" && removeConsole({ externalValues: ["error", "warn"] }),
    ],
    build: {
      terserOptions: {
        format: {
          comments: false, // Удаляем комментарии
        },
      },
    },
  },
});
