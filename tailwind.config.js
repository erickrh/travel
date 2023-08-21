/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./src/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('./src/img/sanFranciscoDesktop.jpg')",
        'yosemite': "url('./src/img/yosemite.jpg')",
        'LA': "url('../public/img/LA.jpg')",
        'seattle': "url('./src/img/seattle.jpg')",
        'new_york': "url('./src/img/new_york.jpg')",
        'norway': "url('./src/img/norway.jpg')",
        'sydney': "url('./src/img/sydney.jpg')",
        'miami': "url('../public/img/miami.jpg')",
        'switzerland': "url('./src/img/switzerland.jpg')",
        'bali': "url('../public/img/bali.jpg')",
        'europe': "url('../public/img/europe.jpg')",
        'iceland': "url('./src/img/iceland.jpg')",
        'chicago': "url('../public/img/chicago.jpg')",
        },
        colors: {
          'primary':"#CC2D4A",
          'secondary':"#8FA206",
          'tertiary':"#61AEC9",
        },
        fontFamily: { 
          Montserrat: ["Montserrat", "sans-serif"],
        },
    },
  },
  plugins: [],
  darkMode: 'class',
}
