/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      screens: {
        'phone': '570px',
        'laptop': '710px',
        lg: '1077px'
      },
      colors: {
        'BerkelyBlue': '#08345E',
        'UranianBlue': '#B3E1FA',
        'Isabelline': '#F8F6F2',
        'Vanilla': '#F2E7BA',
        'Green': '#7DB588',
        'Grey': '#D9D9D9',
        'Orange': '#FFB13C',
        'Dark': '#1E1E1E'
      },
      fontSize: {
        'h1': ['96px', '116px'],
        'h2': ['52px', '63px'],
        'h3': ['40px', '85px'],
        'h4': ['40px', '48px'],
        'h5': ['36px', '44px'],
        'p1': ['30px', '36px'],
        'p2': ['24px', '29px'],
        'p3': ['20px', '24px'],
        'p4': ['16px', '19px'],
        'p5': ['12px', '15px'],
        's1': ['128px', '225px'],
        's2': ['60px', '105px'],
        's3': ['35px', '70px'],
        's4': ['24px', '42px']
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        pacifico: 'Pacifico, sans-serif'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}