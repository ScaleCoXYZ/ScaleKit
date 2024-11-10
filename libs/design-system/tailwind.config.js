/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [require("daisyui"), require("@layouts-css/tailwindcss-plugin")],
  // This allows the parent application to override these settings
  important: true,
  daisyui: {
    themes: ["light", "dark"], // specify which themes you want to use
    // other daisyUI config options...
  }
};
