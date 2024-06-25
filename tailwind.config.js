/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'blue': '#245cbc',
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
      },
      fontSize: {
        '24px': '24px',
      },
      width: {
        '1216px': '1216px', // Largura personalizada
      },
    },
  },
  plugins: [],
}