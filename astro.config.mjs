import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://www.ailenahuel.cl/',
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});