/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Montserrat', 'sans-serif'],
    },

    extend: {
      colors: {
        'black': '#312C2C',
        'dark-gray': '#444243',
        'gray': '#646060',
        'orange': '#F0A23C',
      },
    },
  },
  plugins: [],
};
