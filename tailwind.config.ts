module.exports = {
  content: [
    "./src/pages/*.{tsx,ts}",
    "./src/pages/**/*.{tsx,ts}",
    "./src/components/**/*.{tsx,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      "roboto-bold": ["RobotoSlab-Bold"],
      "roboto-regular": ["RobotoSlab-Regular"],
      "roboto-light": ["RobotoSlab-Light"],
    },
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(360deg, rgba(242, 250, 255, 0) 3.82%, rgba(243, 250, 255, 0.873284) 48.56%, #F3FAFF 63.29%, rgba(244, 250, 255, 0.688169) 79.47%, rgba(248, 252, 255, 0) 93.09%)",
      },
      colors: {
        green: {
          650: "#10a370",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
