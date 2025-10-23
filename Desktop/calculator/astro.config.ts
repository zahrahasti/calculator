import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [
		icon(),
	],
	base: 'calculator',
	trailingSlash: 'ignore',
	build: {
		format: 'file',
		assets: 'assets',
	},
	server: {
		port: 3000,
		host: '127.0.0.1',
		open: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
