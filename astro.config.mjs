import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.ailenahuel.cl/',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});