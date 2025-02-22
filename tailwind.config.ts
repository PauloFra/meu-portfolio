/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: { 900: "#111827", 800: "#1F2937", 700: "#374151" },
        blue: { 600: "#3B82F6" },
      },
    },
  },
  plugins: [],
};
