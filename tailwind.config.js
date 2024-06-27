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
			koh: ['Koh Santepheap'],
		},
		extend: {
			animation: {
				scroll: 'scroll 30s linear infinite',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
		},
	},

	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.truncate-words-10': {
					overflow: 'hidden',
					display: '-webkit-box',
					'-webkit-line-clamp': '3', // Adjust this number based on the number of lines you want
					'-webkit-box-orient': 'vertical',
				},
			});
		},
	],
};
