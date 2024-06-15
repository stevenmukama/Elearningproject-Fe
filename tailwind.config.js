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
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-500%)' },
				},
			},
			animation: {
				scroll: 'scroll 5s linear infinite',
			},
		},
	},
	plugins: [],
};
