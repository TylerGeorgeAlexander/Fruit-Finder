/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#5A4AE3",
        secondary: "#4AE35A",
        accent: "#E34A87",
        neutral: "#3521D9",
        "base-100": "#E34A87",
      },
    }, "cmyk", "dark", "cupcake"],
  },
};
