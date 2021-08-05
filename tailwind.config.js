const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          dark: 'rgba(31, 32, 34)',
          darkest: '#1a1b1d',
          ...colors.gray,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
