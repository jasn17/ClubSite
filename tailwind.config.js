/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        '1/4-screen': '25vh',  // Adding a custom height utility
        '1/3-screen': '33vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
      },
      width: {
        '1/2-screen': '50vw',  // Adding a custom width utility
        '3/4-screen': '75vw',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'blink-caret': 'blink 1s step-end infinite',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],  // Custom font family
      },
      clipPath: {
        'angled': 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)',  // Custom clip path
      },
      fontSize: {
        'responsive': 'clamp(1rem, 2vw, 1.5rem)',
      },
      padding: {
        'responsive': 'clamp(1rem, 3vw, 2rem)',
      },
      margin: {
        'responsive': 'clamp(1rem, 3vw, 2rem)',
      },
    },
  },
  plugins: [],
}