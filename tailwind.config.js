/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors:{
      'verdeTokSeg': '#00935f',
      'pretoTokSeg': '#343132',
      'pretoHover': '#616161',
      'verdeFosco': "#afd8ae",
      'button': '#333333',
      'white': '#ffffff',
    },
  },
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
    'dark': '#1d232a',


  plugins: [
    require('daisyui'),
  ],
  important: true,
};
