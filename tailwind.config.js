/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          base: 'Poppins, sans-serif',
          krona: '"Krona one", sans-serif',
        },
        colors: {
          dark: '#0C080B',
          green: '#1E3329',
          yellow: '#FFD470',
          'light-grey': '#ECECEC',
          'dark-grey': '#B8B8B8',
          light: '#FAFAFA',
      },
    },
  },
  plugins: [],
}

