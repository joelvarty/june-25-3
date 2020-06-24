const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	purge: [
		'./src/**/*.js',
		'./src/**/*.jsx',
	],
	plugins: [
		require('@tailwindcss/ui'),
	]
}