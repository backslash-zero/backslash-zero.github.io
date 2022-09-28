/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        SuisseIntl : ['SuisseIntl'],
        SuisseWorks : ['SuisseWorks'],
        SuisseIntlMono : ['SuisseIntlMono'],
        sans: ['SuisseIntl', 'sans-serif'],
        serif: ['SuisseWorks', 'serif'],
        mono: ['SuisseIntlMono', 'mono'],
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