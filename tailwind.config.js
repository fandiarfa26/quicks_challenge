/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F80ED',
        'primary-dark': '#1366d6',
        'primary-light': '#E9F3FF',
        'secondary-dark': '#4F4F4F',
        'secondary': '#828282',
        'secondary-light': '#E0E0E0',
        'secondary-white': '#F2F2F2',
        'indicator-orange': '#F8B76B',
        'indicator-purple': '#8785FF',
        'indicator-red': '#EB5757',
        'indicator-yellow': '#F2C94C',
        'chats-purple-light': '#EEDCFF',
        'chats-purple-dark': '#9B51E0',
      },
      fontFamily: {
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
