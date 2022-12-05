/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'brick': "url('./Img/peakpx.jpg)"
      },
      fontFamily: {
        Alexandria: ['"Alexandria","sans-serif"'],
        PirataOne: ['"Pirata One", cursive']
      }
    },
  },
  plugins: [],
}
