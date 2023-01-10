/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,scss}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        "roboto-slab": ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
