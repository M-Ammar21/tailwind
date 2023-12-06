/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: "true",
      padding: "0px",
    },

    extend: {
      colors: {
        clifford: "#da373d",
        primary: "#8b5cf6",
        dark: "#0f172a",
      },
      fontFamily: {
        poppins: "poppins",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

