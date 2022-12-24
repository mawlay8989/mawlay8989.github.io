/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#2980B9',
          '50': '#F0F7FC',
          '100': '#DFEEF8',
          '200': '#BEDCF0',
          '300': '#9CCBE9',
          '400': '#7BB9E2',
          '500': '#59A7DA',
          '600': '#3896D3',
          '700': '#2980B9',
          '800': '#1F608B',
          '900': '#15405D'
        },
      },
    },
  },
  plugins: [],
}
