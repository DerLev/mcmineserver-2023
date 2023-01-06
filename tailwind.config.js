const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'gray': colors.zinc,
      },
      screens: {
        'canhover': {'raw': '(hover: hover)'},
      },
    },
    fontFamily: {
      display: [ '"Karla"', 'sans-serif' ],
      body: [ '"Montserrat"', 'sans-serif' ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
