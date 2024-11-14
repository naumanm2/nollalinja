/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      display: ["Kurdis", "sans-serif"],
    },
    extend: {
      fontSize: {
        "10xl": "16rem",
      },
      fontFamily: {
        condensed: ["Kurdis Condensed", "sans-serif"],
      },
      colors: {
        ivory: "#d5d0ca",
        blue: "#3285da",
      },
    },
  },
  plugins: [],
};
