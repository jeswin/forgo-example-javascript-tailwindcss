const colors = require("tailwindcss/colors");

module.exports = {
  purge: { enabled: true, content: ["./public/**/*.html", "./src/**/*.jsx"] },
  theme: {
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      violet: colors.fuchsia,
      black: colors.black,
      cyan: colors.cyan,
      orange: colors.orange,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      current: "currentColor",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
