/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'verdeTokSeg': '#00a96e',
      'pretoTokSeg': '#343132',
      'pretoHover': '#616161',
      'verdeFosco': "#afd8ae",
      'button': '#333333',
      'white': '#ffffff',
    }
    extend: {
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
  plugins: [
    require('daisyui'),
  ],
}