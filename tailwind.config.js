/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      small: '0.625rem',
      xs: '0.75rem',
      sm: '0.8rem',
      lg: '1.125rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'subTitle': '2rem',

    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        100: "#FFF",
        200: "#FAFAFA",
        300: "#F5F5F5",
        400: "#EEEEEE",
        500: "#E0E0E0",
        600: "#BDBDBD",
        700: "#9E9E9E",
        800: "#757575",
      },
      warning:{
        300:'#F82C2C',
      },
      grey: {
        100: "#f7fafc",
        200: "#4D5254",
        300: "#252F3D",
        400: "#969696",
        500: "#a0aec0",
      },
      yellow:{
        300: "#FFC000",
        400: "#FFC000",
        500: "#FFC000",
        600: "#FFC000",
      },
      blue:{
        100: "#E3EEFF",
        200: "#2C7EF8",
        300: "#2C7EF8",
      },
      green: {
        100: "#6dbf55",
        200: "#a0bf55",
        300: "#85BF55",
        400: "#5BB59A",
        500: "#59AE43",
        600: "#0891b2",
        700: "#0e7490",
        800: "#73bf55",
      },
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      // ...
    },
  },
  plugins: [],
};
