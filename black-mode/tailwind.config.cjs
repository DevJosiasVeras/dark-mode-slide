/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'myshadow': '2px 8px 9px 4px rgba(0,0,0,0.79)'
      }
    },
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif']
    }
  },
  plugins: [],
}
