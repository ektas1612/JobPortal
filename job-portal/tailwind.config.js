/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'curious-blue': {
        '50': '#f3f7fc',
        '100': '#e5eff9',
        '200': '#c6ddf1',
        '300': '#94c1e5',
        '400': '#589fd5',
        '500': '#3584c2',
        '600': '#2569a4',
        '700': '#1f5485',
        '800': '#1e486e',
        '900': '#1e3d5c',
        '950': '#14283d',
    },
    
      }
    },
  },
  plugins: [],
}

