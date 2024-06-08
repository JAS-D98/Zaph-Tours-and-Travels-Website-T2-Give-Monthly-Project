/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#8b9940",
        default: "#232323",
        teal: "#fff",
      },
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'white': '#ffffff',
      //   'purple': '#3f3cbb',
      //   'midnight': '#121063',
      //   'metal': '#565584',
      //   'tahiti': '#3ab7bf',
      //   'silver': '#ecebff',
      //   'bubble-gum': '#ff77e9',
      //   'bermuda': '#78dcca',
      // },
    },
  },
  plugins: [],
};
