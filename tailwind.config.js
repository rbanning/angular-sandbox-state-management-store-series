/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.amber,
        accent: colors.amber,       //alias for secondary
        warn: colors.rose,
        neutral: colors.slate
      },  
    },
  },
  plugins: [],
}

