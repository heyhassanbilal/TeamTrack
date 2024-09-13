/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'], // Add Righteous font
        inter: ['Inter', 'sans-serif'],
      }
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.27) 22.1%, rgba(102, 102, 102, 0.27) 100%)',
    },
  },
  plugins: [],
};
