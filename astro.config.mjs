// @ts-nocheck
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatpuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({
	site: 'https://nocturnale.github.io',
	base: '/indoc',

	integrations: [
		starlight({
			
			title: 'InDoc',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Nocturnale' }],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'introduction/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [starlightCatpuccin()],
		}),
	],
});
