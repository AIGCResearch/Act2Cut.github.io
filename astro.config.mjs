import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aigcresearch.github.io',
  base: '/Act2Cut.github.io',
  integrations: [tailwind()],
});
