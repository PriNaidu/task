/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./public/index.html",            
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 15px 0px rgba(0, 0, 0, 0.6)', 
      },
    },
  },
  plugins: [],
}

