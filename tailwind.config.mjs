/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
	  serif: ["PPEditorial", "serif"],
    },
    extend: {
      fontFamily: {
        condensed: ["KurdisCondensed", "sans-serif"],
        display: ["Kurdis", "sans-serif"],
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
        "md": "max(1.2vw,16px)",
        "lg": "max(2vw,24px)",
        "xl": "max(4vw,40px)",
      },
      colors: {
        ivory: "#d5d0ca",
        blue: "#3285da",
        blueHover:"#3285dae6",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
