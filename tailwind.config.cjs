/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#085701",
        white: "#F5f5f5",
      },
      fontFamily: {
        head: ["Manrope", "sans-serif"],
      },
    },

    plugins: [],
  },
};
