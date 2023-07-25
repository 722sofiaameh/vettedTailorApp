/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      boxShadow: {
        '3xl':'7px 0px 106px 0px rgba(0, 0, 0, 0.10)',
      },
      colors:{
        bgColor:'var(--grad, linear-gradient(171deg, rgba(0, 240, 255, 0.80) 8.85%, rgba(83, 118, 255, 0.80) 42.71%, rgba(0, 12, 182, 0.80) 100%))',
        textGray:'var(--gray-2, #4F4F4F)',
        blue:'#000CB6',
        gray:'#F9F9F9',
        darkGray:'#212135',
        faintGray:' var(--gray-3, #828282)',
        pink:'#B7076B',
        Gray_:'#5E5E5E'
      }
    },
  },
  plugins: [],
}

