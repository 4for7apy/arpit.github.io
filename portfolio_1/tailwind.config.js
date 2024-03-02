/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColor: "#dfe9f5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        darkBox: "#384152",
        darkText: "#9aa1ae"
      },
      boxShadow: {
        panelShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        mainShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
      },
    },
  },
  plugins: [],
}

