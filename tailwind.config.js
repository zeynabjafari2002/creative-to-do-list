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
      // backgroundImage: {
      //   'body-background': "url('/img/botanical-cannabis-leaf-wallpaper-with-empty-space_52683-51644.jpg')",
      // }
    },
  },
  plugins: [],
}

