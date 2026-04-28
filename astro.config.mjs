import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://catalogo-26.vercel.app',

  output: 'server',

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});
