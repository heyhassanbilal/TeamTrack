/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"], // Add Righteous font
      },
    },
  },
  plugins: [],
};
