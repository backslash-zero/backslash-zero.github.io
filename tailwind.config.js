/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Crimson : ['Crimson Text'],
        JetBrains : ['JetBrains Mono'],
        mono: ['JetBrains', 'mono','monospace', ...defaultTheme.fontFamily.mono],
				serif: ['Crimson', 'serif', , ...defaultTheme.fontFamily.serif],
				sans: ['sans', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}