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
          550: '#5957E8',
          600: '#413f7c',
          650: '#2f2e51',
          700: '#323149',
          800: '#292841'
        },
        clay: {
          500: '#292841'
        },
        slate: {
          300: '#D0D3DA'
        },
        gray: {
          100: '#F5F6F8',
          200: '#F8F8FA',
          500: '#737680'
        },
        red: {
          300: '#E05FA3'
        },
        green: {
          300: '#12D480'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
