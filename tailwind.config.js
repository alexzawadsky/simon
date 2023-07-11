/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['americantypewriter', 'cursive'],
        secondary: ['anton', 'cursive']
      },
      colors: {
        secondary: '#32353e',
        accent: '#bc8f8f',
        accentdim: '#a97070'
      }
    },
  },
  plugins: [],
}

