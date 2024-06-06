/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter': "url('/public/image/asset 48.jpeg')",
        'chair-poster': "url('/public/image/asset 47.jpeg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}