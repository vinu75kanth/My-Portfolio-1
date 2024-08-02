/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./index.html",
    "./src/Work.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'firstImage' : "url('/src/assets/background.png')",
      },
      margin:{
        'pad':"9%",
      },
      backgroundColor:{
        back:"hsla(0, 0%, 80%, 0.205)",
      },
      colors:{
        proj : "hsla(341, 96%, 46%, 0.745)",
      }
    },
  },
  plugins: [],
}

