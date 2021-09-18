module.exports = {
  purge: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          150: "#FFDEE9",
        },
        blue: {
          150: "#B5FFFC",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
