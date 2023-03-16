/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--spaceMono-font)', 'mono','monospace'],
				serif: ['var(--avara-font)','serif'],
				sans: ['var(--suisseIntl-font)', 'sans']
      },
      screens: {
        print: {raw: 'print'},
        screen: {raw: 'screen'},
      },
      height: {
        'screen-100dvh' : '100dvh',
        'screen-100svh' : '100svh',
        'screen-100lvh' : '100lvh',
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],

}