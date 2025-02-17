/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode class support
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: "#00ffff",
        neonMagenta: "#ff00ff",
        neonPurple: "#bf40bf",
        darkBg: "#121212",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        futuristic: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
