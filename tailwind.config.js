/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rebel-pink': '#F8A5C2',
        'rebel-orange': '#FF6B35',
        'rebel-peach': '#FFF5F5',
        'rebel-yellow': '#F4D03F',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'handwriting': ['Kalam', 'cursive'],
      }
    },
  },
  plugins: [],
}
