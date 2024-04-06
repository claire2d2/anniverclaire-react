/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cedarville: ['"Cedarville Cursive"', "sans-serif"],
        yesteryear: ["Yesteryear", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
