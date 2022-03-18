module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        whiite: "#FFFBF4",
        greey: "#4A4A4A",
        bluue: "#CBE2FF",
        reed: "#D64852",
        yeellow: "#F2DB44",
        primary: "#81E09C",
        light: "#F5F8F8",
        primary: "#30A781",
        "primary-light": "#83DCBE",
      },
      fontFamily: {
        pacifico: ["Pacifico", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
