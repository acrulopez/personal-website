/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cream: '#fffdd0',
				caramel: '#FFD59A'
			},
			visibility: ['hover', 'focus']
		}
	},
	plugins: []
};
