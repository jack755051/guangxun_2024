/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,ts}"],
  mode: 'jit',
  prefix:'tw-',
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'card-with-charts': '#313131',
        'card-with-charts-text-2':'#FFFFFF',
        'card-with-charts-background-1': '#F7F7F7',
        'card-with-charts-background-2': '#D5D5D5'
      }
    },
  },
    variants: {
    extend: {},
  },
  plugins: [],
}

