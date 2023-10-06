/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "384px",
      },
      colors: {
        primary: {
          1: "#150734",
          2: "#0f2557",
          3: "#28559a",
          4: "#3778c2",
          5: "#4b9fe1",
          6: "#63bce5",
          7: "#7ed5ea",
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
