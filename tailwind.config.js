/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html,jsx}"
  ],
  theme: {
    extend: {
      
      colors: {
        'myRed': 'rgb(255,0,0)',
        
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}

