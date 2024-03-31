/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        TossBlue: '#0064FF',
        TossGray: '#202632',
      },
    },
  },
  plugins: [],
};
