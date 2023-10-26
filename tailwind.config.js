/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary01: '#FFDC60',
        primary02: '#595698',
        secondary01: '#292930',
        secondary02: '#555555',
        secondary03: '#F6F6F6',
      }
    },
  },
  plugins: [],
}