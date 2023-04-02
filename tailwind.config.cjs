/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sofia Pro", ...fontFamily.sans],
        serif: ["Rooney Pro", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
