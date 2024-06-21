/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'blue': '#245cbc',
      'black': '#FFFFFF',
    fontFamily: {
        'sans': ['Lato', 'sans-serif'],
      },
      width: {
        '1216px': '1216px', // Largura personalizada
      },
      height: {
        '401px': '401px', // Altura personalizada
      },
    },
  },
  plugins: [],
}