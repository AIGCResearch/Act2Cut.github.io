import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Local build (default): base='/' so paths work as relative after localize.mjs
// Deploy build: BUILD_MODE=deploy preserves the GitHub Pages subpath
const base = process.env.BUILD_MODE === 'deploy' ? '/Act2Cut.github.io' : '/';

export default defineConfig({
  site: 'https://aigcresearch.github.io',
  base,
  integrations: [tailwind()],
});
