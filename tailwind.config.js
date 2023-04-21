/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '1280px',
      },
      screens: {
        '2xl': {'max': '1535px'},

        'xl': {'max': '1279px'},

        'lg': {'max': '1023px'},

        'md': {'max': '867px'},

        'sm': {'max': '639px'},

        'xs': {'max': '400px'},
      },
      gridTemplateColumns: {
        // Simple auto fit
        'autoFit': 'repeat(auto-fit, minmax(288px, 1fr))',
      },
      
    }
  },
  plugins: [],
}

