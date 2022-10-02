import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import remarkEmoji from 'remark-emoji';
import cloudflare from '@astrojs/cloudflare';
const target = ['chrome87', 'edge88', 'es2022', 'firefox78', 'safari14'];

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		mdx({
			remarkPlugins: [remarkEmoji],
		}),
	],
	vite: {
		build: {
			target,
		},
		esbuild: {
			target,
		},
	},
	site: 'https://redstone.rugmj.dev',
	output: 'server',
	adapter: cloudflare(),
});
