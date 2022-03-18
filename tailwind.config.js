module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        whiite: "#F8ECDA",
        greey: "#313E50",
        bluue: "#CBE2FF",
        reed: "#D64852",
        yeellow: "#F2DB44",
        primary: "#81E09C",
        light: "#F5F8F8",
        primary: "#30A781",
        "primary-light": "#83DCBE",
      },
      fontFamily: {
        bakbak: ["Bakbak One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
