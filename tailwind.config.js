/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: '#e8eef2', // dce4f0
        navy: '#162027',
        darkish: '#2B2D39',
        dark: '#252832',
        darker: '#1e2028',
        darkest: '#1a1c23',
        lightish: '#ebedf0',
        light: '#f2f4f7',
        lighter: '#f7f7f7',
        lightest: '#ffffff',
        primary: '#124845',
        secondary: '#df803f',
        tertiary: '#14B8A6',
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
        prose: ['Inter', ...defaultTheme.fontFamily.sans],
        headings: ['Montserrat', ...defaultTheme.fontFamily.sans],
        code: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
        source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
        system: defaultTheme.fontFamily.sans,
        flow: 'Flow',
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
      },
      animation: {
        lava: 'lava 5s ease infinite',
        dark: 'dark 400ms ease-in-out',
        light: 'light 400ms ease-in-out',
      },
      backgroundPosition: {
        'center-half': '60% 27%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
