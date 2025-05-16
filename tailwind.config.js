/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors : {
        primary : "#FF6464",
        secondary : "#00A8CC",
        secondary_light : "#EDF7FA",
        dark :  "#21243D",
        light : "#8695A4",  
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}