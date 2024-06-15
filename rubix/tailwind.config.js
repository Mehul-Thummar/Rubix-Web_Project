const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "flowbite.content()",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter': "url('/public/image/asset 48.jpeg')",
        'chair-poster': "url('/public/image/asset 47.jpeg')",
      }
    },
  },
  plugins: [flowbite.plugin(), nextui()],
}