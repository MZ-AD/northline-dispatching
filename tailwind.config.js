/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        stats: "1200px",
      },
      colors: {
        "brand-aqua": "#00AEEF",
        "brand-aqua-dark": "#0095D6",
        "brand-slate": "#101828",
        "brand-mist": "#F0F4F8",
        "brand-navy": "#0B132B",
        "brand-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
