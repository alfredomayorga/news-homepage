/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      red: '#F15D51',
      yellow: '#E9AA52',
      black: '#00001A',
      silver: '#C5C6CE',
      gray: '#5E607A',
      white: '#FFFDFA',
    },
    fontSize: {
      body: ['15px', '26px'],
      xs: ['18px', '24px'],
      sm: ['20px', '24px'],
      md: ['32px', '32px'],
      lg: ['40px', '40px'],
      xl: ['56px', '56px'],
    },
    extend: {},
  },
  plugins: [],
}
