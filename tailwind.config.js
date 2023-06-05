/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['"PT Sans"', 'sans-serif']
    },
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-down-1': 'fade-in-down 1s ease-out',
        'fade-in-down-2': 'fade-in-down 2s ease-out',
        'fade-in-down-3': 'fade-in-down 3s ease-out',
        'fade-in-down-4': 'fade-in-down 4s ease-out',
        'fade-in-down-5': 'fade-in-down 5s ease-out',
        'fade-in-down-6': 'fade-in-down 6s ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}