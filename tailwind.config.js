/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      gold: "#E1AA5D", // This is the hex code for gold
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  },
  plugins: [],
}