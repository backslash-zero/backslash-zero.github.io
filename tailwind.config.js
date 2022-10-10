/** @type {import('tailwindcss').Config} */
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
        mono: ['JetBrains', 'mono','monospace'],
				serif: ['Crimson', 'serif']
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