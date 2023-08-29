/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": {
          "100": "hsla(193, 78%, 93%, 1)",
          "250": "hsla(193, 78%, 80%, 1)",
          "400": "hsla(193, 78%, 60%, 1)",
          "500": "hsla(193, 78%, 47%, 1)",
          "600": "hsla(193, 78%, 39%, 1)",
          "700": "hsla(193, 78%, 30%, 1)",
          "900": "hsla(193, 78%, 15%, 1)"
        }
      }
    },
  },
  plugins: [],
}
