import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercelEdge from '@astrojs/vercel/edge';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelEdge(),
  site: 'https://bryanvelo.so',
  integrations: [mdx(), sitemap()],
});
