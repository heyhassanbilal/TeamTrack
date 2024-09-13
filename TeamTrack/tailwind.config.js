/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        righteous: ["Righteous", "sans-serif"], // Add Righteous font
      },
=======
        righteous: ['Righteous', 'sans-serif'], // Add Righteous font
      }
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.27) 22.1%, rgba(102, 102, 102, 0.27) 100%)',
>>>>>>> 03d6a2bd041f51d7c18404722b564af4fdf668ce
    },
  },
  plugins: [],
};
