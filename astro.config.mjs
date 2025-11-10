import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.besthuntsvilledjs.com',
  integrations: [sitemap()],
  output: 'static'
});
