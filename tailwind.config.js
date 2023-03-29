/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'appBgImage': "url(./assets/background.jpg)",
      },
      colors: {
        leftMenuBg: "#22222299",
        searchBarColor: "#848484",
        searchBarInputColor: "#00000080",
        appBgColor: "bg-gradient-to-tr from-emerald-700 to-green-800"
      }
    },
  },
  plugins: [],
}