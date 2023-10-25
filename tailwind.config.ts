/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f9f9ff',
          150: '#f4f4ff',
          200: '#d2d2fd',
          300: '#adabf9',
          400: '#8989ff',
          500: '#7371F9',
          600: '#413f7c',
          650: '#2f2e51',
          700: '#323149',
          800: '#292841'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
