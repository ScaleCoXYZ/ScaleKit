/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // This allows the parent application to override these settings
  important: true,
  daisyui: {
    themes: ["light", "dark"], // specify which themes you want to use
    // other daisyUI config options...
  }
};
