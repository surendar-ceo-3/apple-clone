/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      'apple-gray': '#f5f5f7',
      'apple-dark': '#1d1d1f',
      'apple-blue': '#0071e3',
    },
    animation: {
      'gradient': 'gradient 3s ease infinite',
      'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      gradient: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center'
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center'
        }
      }
    }
  }
},
  plugins: [],
}