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
      'dark': '#191e24',
      'dark2': '#1d232a',
    },
  },
  extend: {},
  plugins: [
    require('daisyui'),
  ],
  important: true,
};
