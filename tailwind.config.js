/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    bone: '#f9f7f1',
    footer: '#383961',
    blue: {
      100: '#dbeafe',
      200: '#bfdbfe',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    gray: {
      100: '#f3f4f6',
      300: '#d1d5db',
      500: '#6b7280',
      600: '#4b5563',
    },
  },},
  },
  plugins: [],
}


  