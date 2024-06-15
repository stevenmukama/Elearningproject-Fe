/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: [
				'Inter',

				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
			Poppins: ['Poppins', 'sans-serif'],
			koho: ['KoHo', 'sans-serif'],
			Santepheap: ['Santepheap'],
			koh: ['Koh Santepheap'],
		},
		extend: {
			animation: {
				scroll: 'scroll 30s linear infinite',
			},
			keyframes: {
				scroll: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
		},
	},

	plugins: [],
};
