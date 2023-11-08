import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "200": "#808080",
          "300": "#A3A3A3",
          "400": "#E0E5EB",
          "500": "#555C66",
        },
        orange: {
          "300": "#F9AC44",
          "400": "#F0781D",
          "500": "#F48024",
          "600": "#ED7218",
        },
        blue: {"300": "#ADCCE9"},
      },
    },
    fontSize: {
      xs: ["13px", {lineHeight: ""}],
      sm: ["16px", {lineHeight: "26px"}],
      md: ["18px", {lineHeight: "22px", letterSpacing: "0.36px"}],
      base: ["20px", {lineHeight: ""}],
      lg: ["24px", {lineHeight: ""}],
      xl: ["36px", {lineHeight: "58px"}],
      "2xl": ["48px", {lineHeight: ""}],
      "3xl": ["60px", {lineHeight: "66px"}],
      "4xl": ["68px", {lineHeight: "75px"}],
      "5xl": ["72px", {lineHeight: "115px"}],
      "6xl": ["96px", {lineHeight: "154px"}],
    },
    fontFamily: {
      "open-Sans": ["'Open Sans'", ...fontFamily.sans],
      "roboto-Condensed": ["'Roboto Condensed'", ...fontFamily.sans],
      roboto: ["'Roboto'", ...fontFamily.sans],
      oswald: ["'Oswald'", ...fontFamily.sans],
      inter: ["'Inter'", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
