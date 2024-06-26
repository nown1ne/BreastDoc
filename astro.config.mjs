import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import alpine from "@astrojs/alpinejs";
import dotenv from "dotenv";
import vercel from "@astrojs/vercel/serverless";

dotenv.config();
// import alpine
// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  markdown: {
    drafts: true,
    shikiConfig: { theme: "css-variables" },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  site: "https://lexingtonthemes.com",
  integrations: [tailwind(), image(), compress(), sitemap(), mdx(), alpine()],
});
