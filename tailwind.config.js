/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'90': '91.7vh',
				'93': '93vh'
			},
			fontSize: {
				'4xl':['2.6rem', '2.5rem']
			},
		},
	},
	plugins: [],
}
