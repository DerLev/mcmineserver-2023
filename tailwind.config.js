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
      mono: [ 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace' ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
