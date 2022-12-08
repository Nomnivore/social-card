/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["fantasy"]
  },
  extend: {
    backgroundImage: {
      'logo': "url('../src/images/socialcardlogo.png')",
    }
  }
};
