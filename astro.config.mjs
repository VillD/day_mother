// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://feliz-dia-mama-harvar.netlify.app/',
	base: '/mother',
	vite: {
		plugins: [tailwindcss()],
	},
})
