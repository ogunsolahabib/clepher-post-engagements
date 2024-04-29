import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-once": 'bounce-once 0.4s ease-in-out',
      },
      keyframes: {
        "bounce-once": {
          '0%, 100%': {
            transform: 'scale(1,1) translate(0, 0)',
          },
          '50%': {
            transform: 'scale(1.5,1.5) translate(0, 10px)',
          },
        },
      },
      colors: {
        tag: "#deefff"
      }
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      'winter',
      'night',
    ],

    // darkTheme: "dark", // name of one of the included themes for dark mode
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
    darkTheme: false,
  },

}

