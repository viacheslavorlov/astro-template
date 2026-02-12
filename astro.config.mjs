import keystatic from "@keystatic/astro";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";
import removeConsole from "vite-plugin-remove-console";

const { SITE_URL, PORT, NODE_ENV, DOMAIN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  output: "server",
  prefetch: {
    defaultStrategy: "hover",
  },
  devToolbar: {
    enabled: false,
  },
  security: {
    checkOrigin: true,
    allowedDomains: [
      {
        hostname: "localhost",
        protocol: "http",
        port: "4321",
      },
      {
        hostname: DOMAIN,
        protocol: "https",
        port: "443",
      },
    ],
  },
  env: {
    schema: {
      SITE_URL: envField.string({
        access: "public",
        default: "http://localhost:4321",
        context: "client",
        optional: false,
      }),
      PORT: envField.number({
        context: "server",
        access: "public",
        default: 4321,
      }),
      PUBLIC_STRAPI_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      STRAPI_URL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      TOKEN_BOT: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      CHAT_ID: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
  server: {
    port: Number.parseInt(PORT),
    headers: {
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    },
  },
  site: SITE_URL,
  build: { inlineStylesheets: "always" },
  integrations: [
    ...(process.env.NODE_ENV === "production" ? [] : [keystatic()]),
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
      // Disable debug mode.
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
      process.env.NODE_ENV === "production" &&
        removeConsole({ externalValues: ["error", "warn", "log"] }),
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
