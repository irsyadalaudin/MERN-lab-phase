/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'2,5': '0.7rem',
				'18': '4.5rem',
				'22': '5.76rem',
				'26': '6.6rem',
				'45': '11.2rem',
				'61': '15.3rem',
				'62': '15.45rem',
				'85': '21.2rem',
				'89': '91vh',
				'90': '92.5vh',
				'93': '93.2vh',
				'94': '56.3rem',
				'95': '57.7rem',
				'97': '73rem',
				'98': '85rem',
			},
			fontSize: {
				'4xl': '2.5rem',
			},
			lineHeight: {
				'4xl': '1rem'
			},
		},
	},
	plugins: [],
}
