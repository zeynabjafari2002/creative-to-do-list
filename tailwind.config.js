/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index/index.{html,js}"],
  theme: {
    extend: {
      margin:{
        800:'800px',
        1000:'1000px',
        400:'400px',
      },
      fontFamily:{
        'cursive':"cursive"
      },
      padding:{
        3:'3px'
      }
    },
  },
  plugins: [],
}

