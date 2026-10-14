export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'verdeTokSeg': '#00935f',
      'verdeEscuro': '#007a4f',
      'pretoTokSeg': '#343132',
      'pretoHover': '#616161',
      'verdeFosco': "#afd8ae",
      'button': '#333333',
      'white': '#ffffff',
      'dark': '#1d232a',
      'dark2': '#262e37',
      'gray' : '#F6F6F6',
      'erro': '#fca5a5',
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
  },
  plugins: [
    require('daisyui'),
  ],
  important: true,
};
