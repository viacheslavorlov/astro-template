/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
  //  Настраивать цвета и анимации тут
	// 	extend: {
	// 		colors: {
	// 			'text-light': '#fff',
	// 			'text-dark': '#412708',
	// 			'bg-light': '#F0DAC4',
	// 			'bg-dark': '#52392C',
	// 			inactive: '#B1B1B1CC',
	// 		},
	// 		animation: {
	// 			appear: 'appear 0.3s linear 1',
	// 			slideIn: 'slideIn 0.3s linear 1',
	// 		},
	// 		keyframes: {
	// 			appear: {
	// 				'0%': {
	// 					opacity: 0,
	// 				},
	// 				'100%': {
	// 					opacity: 1,
	// 				},
	// 			},
	// 			slideIn: {
	// 				'0%': {
	// 					left: '-200%',
	// 				},
	// 				'100%': {
	// 					left: 0,
	// 				},
	// 			},
	// 		},
	// 	},
	},
	plugins: [require('@tailwindcss/typography')],
};
