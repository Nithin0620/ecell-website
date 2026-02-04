/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0F172A',
        },
        pastel: {
          blue: '#DCEEFF',
          green: '#DFF7E8',
        },
        main: {
          blue: '#2563EB',
          green: '#22C55E',
        },
        muted: '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
