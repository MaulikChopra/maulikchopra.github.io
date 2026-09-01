/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Path to all your components
  ],
  theme: {
    extend: {
      fontFamily: {
        // sora: ['"Sora"', "sans-serif"],
        newsreader: ['"Newsreader"', "sans-serif"],
      },
      colors: {
        blue: "#0d47a1",
        darkPurple: "#87209e",
        black: "black",
        white: "white",
        textColor: "#E46C4D",
        //#f76363 old
        secondaryColor: "#E46C4D",
        backgroundColor: "#010810",
      },
      // fontSize: {
      //   base: "16px",
      // },
    },
  },
  plugins: [],
};
