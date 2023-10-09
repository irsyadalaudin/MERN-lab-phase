/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'22': '5.76rem',
				'26': '6.6rem',
				'62': '15.45rem',
				'85': '21.2rem',
				'90': '91.7vh',
				'93': '93.2vh',
				'94': '56.3rem',
				'95': '57.7rem',
				'97': '73rem',
				'450': '450px',
			},
			fontSize: {
				'4xl':['2.5rem', '2rem']
			},
		},
	},
	plugins: [],
}
