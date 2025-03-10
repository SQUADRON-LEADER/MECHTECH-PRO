/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#121212',
        'deep-green': '#1B5E20',
        'neon-yellow': '#F4C430',
        'dark-gray': '#2E2E2E',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(244, 196, 48, 0.5)',
        'neon-hover': '0 0 25px rgba(244, 196, 48, 0.8)',
      },
    },
  },
  plugins: [],
};