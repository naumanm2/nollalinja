/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontFamily: {
        display: ["KurdisTest-ExtraWideExtraBold", "sans-serif"],
        kondensed: ['KurdisTest-CondensedExtraBold', "sans-serif"],
      },
      keyframes: {
        fade: {
          from: {
            opacity: 100,
          },
          to: {
            opacity: 0,
          },
        },
      },
      animation: {
        logo: "fade .25 ease-in-out 1s forwards",
        bg: "fade .5s ease-in-out 1s forwards",
      },
      fontSize: {
        "10xl": "16rem",
      },
      colors: {
        ivory: "#d5d0ca",
        blue: "#3285da",
      },
    },
  },
  plugins: [],
};
