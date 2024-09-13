/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      height: {
        '1/4-screen': '25vh',  // Adding a custom height utility
        '1/3-screen': '33vh'
      },
      width: {
        '1/2-screen': '50vw'  // Adding a custom width utility
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation : {
        'blink-caret': 'blink 1s step-end infinite',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}