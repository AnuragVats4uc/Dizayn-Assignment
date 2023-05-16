/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "var(--backgroundPrimary)",
      },
      colors: {
        textGradient: "var(--text-gradient)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quinary: "var(--quinary)",
        senary: "var(--senary)",
        septenary: "var(--septenary)",
        octonary: "var(--octonary)",
        nonary: "var(--nonary)",
        denary: "var(--denary)",
        bottomColor:"var(--activeBottomColor)"
      },
      fontFamily: {
        Moneta: ["Moneta"],
        Archivo: ["Archivo"],
        Inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
