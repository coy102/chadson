const { withChadson } = require('./src/libs/withChadson')

/** @type {import('tailwindcss').Config} */
module.exports = withChadson({
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './stories/**/*.{html,js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-animate')],
})
