/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4f46e5', // Indigo 600
        secondary: '#64748b', // Slate 500
        dark: '#0f172a', // Slate 900
      }
    },
  },
  plugins: [],
}
