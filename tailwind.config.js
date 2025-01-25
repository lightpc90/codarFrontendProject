const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      animation: {
        spin360: 'spin360 0.5s ease-in-out',
        spin360Reverse: "spin360Reverse 0.5s ease-in-out",
        slideUp: 'slideUp 0.5s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out forwards',
      },
      keyframes: {
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': {transform: 'rotate(360deg)'},
        },
        spin360Reverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(-15%)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-15%)', opacity: '1' },
          '60%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
};
