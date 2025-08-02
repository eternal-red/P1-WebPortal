/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',  // cream - page background  
        surface: '#F5F3F4',     // light grey - rounded "card" boxes
        accent: '#d62826',      // red - every non-neutral UI element
        'text-black': '#000000', // primary text
        'text-white': '#FFFFFF', // inverse text on red backgrounds
      },
    },
  },
  plugins: [],
};
