const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#282B31',
      'secondary': '#5F5F6E',
      'inactive': '#A6ADB1',
      'warning': '#E24444',
      'white': '#fff',
      'white-defused': '#ffffff45'
    },
    backgroundColor: {
      'light': '#EAEDF2',
      'dark': '#131419',
      'dark-lighter': '#1C1C24',
      'warning': '#e2444424',
      'btn-light': '#DDE1E8',
      'btn-dark': '#2D2D3A',
      'blue': '#1750FF',
      'white': '#fff',
      'purple': '#3f51b5',
    },
    borderColor: {
      'transparent': 'transparent',
      'blue': '#1750FF',
      'purple': '#3f51b5',
      'light': '#EAEDF2',
      'dark': '#2D2D3A',
      'extra-light': '#DDE1E8',
      'warning': '#E24444'
    },
    extend: {
      boxShadow: {
        'light': '1px 0px 74px 4px rgb(56 50 124 / 8%)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
