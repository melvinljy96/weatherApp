/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark': "url('/public/bg-dark.png')",
        'light': "url('/public/bg-light.png')",
      },
      colors: {
        'darker-purple': '#2B2443',
        'dark-purple': '#3D2D6C',
        'not-dark-purple': '#4F3792',
        'normal-purple': '#6C40B5',
        'firstlight-mode': '#C0A9E9',
        'secondlight-mode': '#D5C1EE',
        'thirdlight-mode': '#E6DAF4',
      },
    },
  },
  plugins: [],
}

