/* * @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        currentColor: "currentColor",
        "black": "#000",
        "white": "#fff",
        "primary": "#5F0080",
        "secondary": "#BD76FF",
        "content": "#333333",
        "accent": "#FA622F",
        "error": "#F03F40",
        "border": "#D9D9D9",
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
      fontSize: {
        "8": "8rem",
        "10": "10rem",
        sm: "12rem",
        "14": "14rem",
        md: "16rem",
        "18": "18rem",
        lg: "21.3rem",
        "24": "24rem",
        xl: "28.4rem", 
        "36": "36rem",
        xxl: "37.9rem",
        xxxl: "50.5rem",
      },
      width: {
        "1": "1rem",
        "2": "2rem",
        "8": "8rem",
        "18": "18rem",
        "30": "30rem",
        "36": "36rem",
        "42": "42rem",
        "82": "82rem",
        "140": "140rem",
        "150": "150rem",
        "174": "174rem",
        "340": "340rem",
        "400": "400rem",
        "1050": "1050rem",
      },
      height: {
        "6": "6rem",
        "10": "10rem",
        "12": "12rem",
        "13": "13rem",
        "14": "14rem",
        "18": "18rem",
        "24": "24rem",
        "30": "30rem",
        "36": "36rem",
        "40": "40rem",
        "42": "42rem",
        "44": "44rem",
        "50": "50rem",
        "54": "54rem",
        "60": "60rem",
        "640": "640rem",
      },
      borderRadius: {
        "none": "0",
        "1": "1rem",
        DEFAULT: "4rem",
        "16": "16rem",
        'full': '9999px',
      },
      spacing: {
        "2": "2rem",
        "4": "4rem",
        "8": "8rem",
        "12": "12rem",
        "16": "16rem",
        "20": "20rem",
        "24": "24rem",
        "28": "28rem",
        "32": "32rem",
        "44": "44rem",
        "54": "54rem",
        "56": "56rem",
        "80": "80rem",
        "87": "87rem",
      },
    },
  },
  plugins: [],
  corePlugins: {
  },
}