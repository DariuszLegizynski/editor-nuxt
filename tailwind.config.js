/** @type {import('tailwindcss').Config} */
export default {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(16, 14%, 72%)",
				secondary: "hsl(210, 29%, 24%)",
				tertiary: "hsl(144, 35%, 75%)",
				contrast: "	hsl(46, 65%, 52%)",
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


