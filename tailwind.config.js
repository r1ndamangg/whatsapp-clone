/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "custom-dark": "#202C33",
        "custom-gray": "#6a7175",
        "custom-dark-blue": "#2a3942",
        "custom-gray-blue": "#2a3942",
        "custom-slate": "#8696a0",
        "custom-teal": "#005c4b",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
