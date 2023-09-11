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
				'93': '93.2vh'
			},
			fontSize: {
				'4xl':['2.5rem', '2rem']
			},
		},
	},
	plugins: [],
}
