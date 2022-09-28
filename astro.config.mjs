import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
const target = ['chrome87', 'edge88', 'es2022', 'firefox78', 'safari14'];


// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  vite: {
    build: {
      target
    },
    esbuild: {
      target
    }
  },
  site: 'https://redstone.rugmj.dev'
});