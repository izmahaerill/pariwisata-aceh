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
      dropShadow: {
        customShadow: "4px 4px 6px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
