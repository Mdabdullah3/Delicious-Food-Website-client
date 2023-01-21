module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        night: {
          primary: "#F7CA3E",
          secondary: "#ffff",
          neutral: "#F3F4F6",
          "base-100": "#0A0F1F",
          info: "#F9BA39",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
      {
        light: {
          primary: "#40A944",
          secondary: "#0D0D0D",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#F9BA39",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
