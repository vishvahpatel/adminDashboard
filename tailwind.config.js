/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#23eaa1a9',
        'custom-blue': 'rgb(9, 179, 195)'
      },
    },
  },
  plugins: [],
}

