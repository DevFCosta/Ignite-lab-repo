/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 17,
        lg: 20,
        xl: 24,
        xxl: 32,
      },
      colors: {
        black: "#000",
        white: "#fff",
        transparent: "transparent",
        gray: {
          900: "#121214",
          400: "#7C7C8A",
          800: "#202024",
          100: "#E1E1E6",
          200: "#c4c4cc",
        },

        cyan: { 500: "#81d8f7", 300: "#9BE1FB" },
      },
      fontFamily: {
        sans: "Inter,sans-serif",
      },
    },
  },
  plugins: [],
};
