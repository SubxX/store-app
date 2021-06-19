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
      extend: {},
      colors:{
        'white':'#fff',
        'light':'#EAEDF2',
        'light-active':'#282B31',
        'light-inactive':'#A6ADB1',
        'light-btn':'#DDE1E8',
        'blue':'#1750FF',
        'warning':'#E24444',
        'warning-light':'#e2444424',

        'dark-active':'#5F5F6E',
        'purple':'#4447E2',
        'dark-btn':'#2D2D3A',
        'dark':'#131419',
        'dark-secondary':'#1C1C24',
      },
      boxShadow:{
        'light':'1px 0px 74px 4px rgb(56 50 124 / 8%)'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
