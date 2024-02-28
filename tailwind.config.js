/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#403DE1',
        secondary: '#C3C9FF',
        seatPrimary : '#27273F'
      }
    },
  },
  plugins: [],
}