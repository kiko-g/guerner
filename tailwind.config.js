/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          925: '#121217',
        },
        ice: '#ecf3f6', // dce4f0
        dim: '#181d29', // 121721
        navy: '#121926',
        darkish: '#2B2D39',
        dark: '#252832',
        darker: '#1e2028',
        darkest: '#1a1c23',
        lightish: '#ebedf0',
        light: '#f2f4f7',
        lighter: '#f7f7f7',
        lightest: '#ffffff',
        primary: '#104842', // 124842
        secondary: '#10dfa8', // 2ddf62
        tertiary: '#26c490',
        quaternary: '#ff895f',
      },
      backgroundImage: {
        // path relative to src/styles
      },
      maxWidth: {
        screen: '100vw',
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      boxShadow: {
        'inner-md': 'inset 0px 0px 2px 2px rgb(0 0 0 / 0.1)',
        'inner-xl': 'inset 0px 0px 4px 4px rgb(0 0 0 / 0.1)',
      },
      fontFamily: {
        sans: [
          'Inter var, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
        lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        dark: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        light: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' },
        },
        lava: {
          '0%': { backgroundPosition: '0% 90%' },
          '50%': { backgroundPosition: '100% 45%' },
          '100%': { backgroundPosition: '0% 90%' },
        },
        'slide-left': {
          '100%': { left: '0' },
        },
        'wipe-enter': {
          '0%': { transform: 'scale(0, 0.025)' },
          '50%': { transform: 'scale(1, 0.025)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        floating: {
          '0%': { transform: 'translate(0px,  0px)' },
          '50%': { transform: 'translate(15px, 50px)' },
          '100%': { transform: 'translate(0px, -0px)' },
        },
        'sway-min': {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px) rotate(-7deg)' },
          '25%': { transform: 'translateX(14px) translateY(-7px) rotate(-4deg)' },
          '50%': { transform: 'translateX(-7px) translateY(14px) rotate(-3deg)' },
          '75%': { transform: 'translateX(7px) translateY(7px) rotate(-6deg)' },
        },
        opacityHalfToFull: {
          '0%': { opacity: 0.25 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        lava: 'lava 5s ease infinite',
        dark: 'dark 400ms ease-in-out',
        light: 'light 400ms ease-in-out',
        wipe: 'wipe-enter 1s',
        gradient: 'gradient 10s ease-in-out infinite',
        'pulse-medium': 'pulse 5s ease-in-out infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        floating: 'floating 3s ease-in-out infinite',
        sway: 'sway 3s infinite',
        'opacity-transition': 'opacityHalfToFull 500ms ease-in-out',
      },
      backgroundPosition: {
        'center-half': '60% 27%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
