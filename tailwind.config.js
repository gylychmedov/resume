module.exports = {
  content: [
    "./src/pages/*.{tsx,ts}",
    "./src/pages/**/*.{tsx,ts}",
    "./src/components/**/*.{tsx,ts}",
  ],
  theme: {
    fontFamily: {
      "hacker-normal": ["Hacker-type"],
      "montserrat-bold": ["Montserrat-Bold"],
      "montserrat-medium": ["Montserrat-Medium"],
    },

    extend: {
      colors: {
        green: {
          650: "#10a370",
        },
      },
    },
  },
  plugins: [],
};
