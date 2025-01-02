/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#3eb5fa",
        secondary: "#64748b",
        dark: "#1c1917",
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
