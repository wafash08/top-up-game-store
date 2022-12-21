/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        brand: {
          gray: "#7E8CAC",
          blue: "#0C145A",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
