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
        'LA': "url('./src/img/LA.jpg')",
        'seattle': "url('./src/img/seattle.jpg')",
        'new_york': "url('./src/img/new_york.jpg')",
        'norway': "url('./src/img/norway.jpg')",
        'sydney': "url('./src/img/sydney.jpg')",
        'miami': "url('./src/img/miami.jpg')",
        'switzerland': "url('./src/img/switzerland.jpg')",
        'bali': "url('./src/img/bali.jpg')",
        'chicago': "url('./src/img/chicago.jpg')",
        'europe': "url('./src/img/europe.jpg')",
        'iceland': "url('./src/img/iceland.jpg')",
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
