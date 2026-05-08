// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	base: '/mother',
	site: 'https://feliz-dia-mama-harvar.netlify.app/',
	vite: {
		plugins: [tailwindcss()],
	},
})
