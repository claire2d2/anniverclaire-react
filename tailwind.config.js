/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cedarville: ['"Cedarville Cursive"', "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        limelight: ["Limelight", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
