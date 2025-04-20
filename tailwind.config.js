/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: [
        'Georgia',
        'ui-serif',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
    },
    extend: {},
  },
  plugins: [],
}