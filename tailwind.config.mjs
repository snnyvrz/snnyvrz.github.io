/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      vazir: ["Vazir", "sans-serif"],
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["light", "synthwave"],
  },
  darkMode: ["class", '[data-theme="synthwave"]'],
};
