/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '480px' },                       // Mobile devices – 320px — 480px
      'sm': { 'min': '481px', 'max': '768px' },       // iPads, Tablets – 481px — 768px
      'md': { 'min': '769px', 'max': '1024px' },      // Small screens, laptops – 769px — 1024px
      'lg': { 'min': '1025px', },                     // Desktops, large screens – 1025px — 1200px

    },
  },
  plugins: [],
}
