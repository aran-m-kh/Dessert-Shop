/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      '2xs': { min: '300px' },
      mob: {max: '799px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      tab: { min: '800px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      des: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1259px' }, // Desktop wide.
      '2xl': { min: '1359px' } // Desktop widescreen.
    },
    extend: {},
  },
  plugins: [],
}

