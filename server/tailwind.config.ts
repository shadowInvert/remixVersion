import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
// import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import { addDynamicIconSelectors } from "@iconify/tailwind";
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "365px",
      ss: "635px",
      xxl: "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "6": "6px",
        "8": "8px",
        "9": "1rem",
        "10": "2rem",
      },
      spacing: {
        "3xl": "1rem",
        "4xl": "2rem",
        "5xl": "4rem",
        "6xl": "5rem",
        "7xl": "6rem",
      },
      margin: {
        "1px": "1px",
      },
      height: {
        128: "40rem",
      },
      weight: {
        128: "60em",
      },
      animation: {
        "bounce-slow": "bounce  3s ease infinite alternate",
        "ping-slow": "ping 5s  cubic-bezier(0, 0, 0.2, 1) infinite",
        "typing-1": "typing 3s steps(262, end) , cursol 1s step-end infinite",
        modalslide: "popslide 0.6s",
        modalup: "popup 1s",
        modaldown: "popdown 1s",
        slideshow1: "slideshow1 12s",
        slideshow2: "slideshow2 12s",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "50em" },
        },
        popslide: {
          from: {
            transform: "translatex(110%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        popup: {
          from: {
            transform: "translatey(110%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        popdown: {
          from: {
            transform: "translateY(-50%)",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        slideshow1: {
          "0%": { opacity: "1", transform: "scale(1.0)" },
          "30%": { opacity: "1" },
          "40%": { opacity: "0", transform: "scale(1.15)" },
          "90%": { opacity: "0" },
          "100%": { opacity: "1", transform: "scale(1.0)" },
        },
        slideshow2: {
          "0%": { opacity: "0" },
          "30%": { opacity: "0", transform: "scale(1.1)" },
          "40%": { opacity: "1" },
          "60%": { opacity: "1" },
          "70%": { opacity: "0", transform: "scale(1.0)" },
          "100%": { opacity: "0" },
        },
        slideshow3: {
          "0%": { opacity: "0" },
          "60%": { opacity: "0", transform: "scale(1.0)" },
          "70%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1.1)" },
        },
        // cursol:{
        //   '0%':{ border-color: 'transparent' },
        //   '50%':{ border-color: 'black' } ,
        //   '100%':{ border-color: 'transparent' },
        // }
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    // https://icon-sets.iconify.design/
    // iconsPlugin({
    // 利用したい icon collection を利用する
    // https://icones.js.org/
    // collections: getIconCollections(["fxemoji"]),
    // }),
  ],
} satisfies Config;
