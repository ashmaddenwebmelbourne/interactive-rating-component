/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				overpass: ['Overpass', 'sans-serif'],
			},
			backgroundImage: {
				'background-gradient': 'radial-gradient(circle, #232A34 0%, #181E27 100%)',
			},
		},
		colors: {
			'dark-blue': '#262E38',
			'light-grey': '#969FAD',
			orange: '#FC7614',
			white: '#FFFFFF',
			'very-dark-blue': '#131518',
		},
	},
	plugins: [],
};
