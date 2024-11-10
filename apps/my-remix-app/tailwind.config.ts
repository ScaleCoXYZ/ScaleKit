import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "../../libs/design-system/src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("../../libs/design-system/tailwind.config.js")],
} satisfies Config;
