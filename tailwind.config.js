/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "Soft-orange": "#e9ab53",
        "Soft-red": "hsl(5, 85%, 63%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": "hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
