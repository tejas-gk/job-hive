/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1e90ff",
        "blue-color-dark": "#2a68ff",
        "card-shadow": "#f7f8f9",
        "card-shadow-dark": "#e9ecef",
        "text-color": "#252b36",
        'hardly-visible':"#ccc",
      },
    },
  },
  plugins: [],
};
