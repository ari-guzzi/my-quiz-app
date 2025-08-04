/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        UNBlue: '#3993DD',
        Bole: '#6A3E37',
        PinkLavender: '#E0ACD5',
        Isabelline: '#F4EBE8',
        Turquoise: '#29E7CD'
      },
      fontFamily: {
        PlusJakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
        schoolbell: ['Schoolbell', 'cursive'],
      },
    },
  },
  plugins: [],
}
