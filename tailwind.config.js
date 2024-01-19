/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			blue: '#1fb6ff',
			pink: '#ff49db',
			orange: '#ff7849',
			green: '#13ce66',
			'gray-dark': '#273444',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
		},
	},
	extend: {
		fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
};
