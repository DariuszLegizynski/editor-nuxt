/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
		"./assets/css/global.css",
	],
	theme: {
		extend: {
			colors: {
				primary: "hsl(6, 14%, 72%)",
				secondary: "hsl(7, 14%, 85%)",
				tertiary: "hsl(16, 28%, 40%)",
				contrast: "hsl(46, 65%, 52%)",
				black: "hsl(5, 0%, 0%)",
				white: "hsl(5, 0%, 100%)",
			},
			screens: {
				xxs: "375px",
				xs: "425px",
				"3xl": "1920px",
			},
		},
	},
	plugins: [],
}
