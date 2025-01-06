/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./course.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#FFC60F',
        brandSecondary: '#32227E',
        textDescription: '#808080',
        shadowColor: '#18103CA8',
        bgColorPrimary: "#211754",
        bgColorSecondary: "#18103C",
        bgColorBody: "#EDEBFA",
        hotColor: "#FF7547",
        successColor: "#40D14C",
        gold: "#FFC60F",
        purple: "#9747FF"
      },
      boxShadow: {
        'custom': '0px 2px 10px 0px rgba(0, 0, 0, 0.14)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}