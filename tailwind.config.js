/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
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
      },
      screens:{
        '412': '412px',
        '360': '360px',
        '601' : '601px',
        '768' : '768px',
        '800' : '800px',
        '962' : '962px',
        '1280' : '1280px',
      },
      fontFamily: {
        "josefin": ["Josefin Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}

