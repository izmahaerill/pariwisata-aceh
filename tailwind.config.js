/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-primary": "#FFA006",
        "gray-secondary": "#F2F2F2",
      },
      boxShadow: {
        base: "1px 2px 5px 1px rgba(0, 0, 0, 0.3);",
      },
    },
  },
  plugins: [],
};
