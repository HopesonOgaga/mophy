/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'search': "url('/build/icons/search.png')",
      }
    },
  },
  plugins: [],
}

