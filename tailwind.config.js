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
        'light-bg':'#EAEDF2',
        'light-active':'#282B31',
        'light-inactive':'#A6ADB1',
        'light-btn':'#DDE1E8',
        'blue':'#1750FF',

        'dark-active':'#5F5F6E',
        'purple':'#4447E2',
        'dark-btn':'#2D2D3A',
        'dark-bg':'#131419',
        'dark-bg-seconary':'#1C1C24'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
