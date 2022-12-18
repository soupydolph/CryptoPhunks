/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['phunkphont'],
      body: ['inter']
    },
    extend: {
      colors: {
        primary: '#FF04B4'
      }
    },
  },
  plugins: [],
}
