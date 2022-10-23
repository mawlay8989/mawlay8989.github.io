const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
  	 '*.html',
  	 '*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: {
		   DEFAULT: '#C0392B',
			  '50': '#E2867C',
			  '100': '#DF7C72',
			  '200': '#DB695D',
			  '300': '#D65548',
			  '400': '#D14233',
			  '500': '#C0392B',
			  '600': '#AB3326',
			  '700': '#962D22',
			  '800': '#81261D',
			  '900': '#6D2018'
      },
      yellow: colors.amber,
      blue: {
		    DEFAULT: '#2980B9',
		  '50': '#74B6E0',
		  '100': '#6AB0DE',
		  '200': '#55A5D9',
		  '300': '#409AD5',
		  '400': '#2E8ECE',
		  '500': '#2980B9',
		  '600': '#2472A4',
		  '700': '#20638F',
		  '800': '#1B557A',
		  '900': '#164666'
      },
      green: {
      	DEFAULT: '#27AE60',
		  '50': '#6ADE9B',
		  '100': '#60DB94',
		  '200': '#4BD786',
		  '300': '#36D278',
		  '400': '#2CC36B',
		  '500': '#27AE60',
		  '600': '#229955',
		  '700': '#1E8449',
		  '800': '#19703E',
		  '900': '#145B32'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
