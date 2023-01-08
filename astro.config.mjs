import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import smartypants from "remark-smartypants";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollections: true,
  },
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx({
      remarkPlugins: [smartypants, externalLinks, remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypeSlug,
        rehypePrism,
        rehypeAccessibleEmojis,
      ],
    }),
    preact(),
  ],
});
