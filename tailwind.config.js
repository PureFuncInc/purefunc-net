/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
  theme: {
    colors: {
      "purefunc-1": "#00386B",
      "purefunc-2": "#E89619",
      "purefunc-3": "#A7C957",
    }
  }
}
