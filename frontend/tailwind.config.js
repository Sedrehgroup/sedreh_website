const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary1: "#071507",
      primary2: "#E4F7E3",
      primary3: "#95DD91",
      primary4: "#0F2B0D",
      primary: "#419971",
      black1: "#202020",
      white1: "#FFFFFF",
      ED: "#EDEDED",
      F9: "#F9F9F9",
      CB: "#CBCBCB",
      Seventy: "#757575",
    },
    extend: {},
  },
};
