/* * @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "black": "#000",
      "white": "#fff",
      "primary": "#5F0080",
      "secondary": "#BD76FF",
      "content": "#333333",
      "accent": "#FA622F",
      "error": "#F03F40",
      "gray": {
        50: "#F9F9F9",
        100: "#E1E1E1",
        200: "#C4C4C4",
        300: "#A6A6A6",
        400: "#898989",
        500: "#6B6B6B",
        600: "#565656",
        700: "#404040",
        800: "#2B2B2B",
        900: "#151515",
      },
      "blue": {
        100: "#CCE0FF",
        200: "#99C2FF",
        300: "#66A3FF",
        400: "#3385FF",
        500: "#0066FF",
        600: "#0052CC",
        700: "#003D99",
        800: "#002966",
        900: "#001433",
      }
    },
    extend: {
      fontSize: {
        sm: "12rem",
        md: "16rem",
        lg: "21.3rem",
        xl: "28.4rem",  
        xxl: "37.9rem",
        xxxl: "50.5rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
  },
}