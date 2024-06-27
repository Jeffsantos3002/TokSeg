/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'verdeTokSeg': '#00935f',
      'pretoTokSeg': '#343132',
      'pretoHover': '#616161',
      'verdeFosco': "#afd8ae",
      'button': '#333333',
      'white': '#ffffff',
      'dark': '#1d232a'
    }
  },
  plugins: [
    require('daisyui'),
  ],
  important: true,
}

