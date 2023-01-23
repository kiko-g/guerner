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
        primary: '#124842',
        secondary: '#2ddf62', // #df803f
        tertiary: '#9687ec',
      },
      backgroundImage: {
        // path relative to src/styles
        banner: 'url(../images/hero/banner.png)',
        building: 'url(../images/building.png)',
        cta: 'url(../images/backgrounds/cta.png)',
        'cta-dark': 'url(../images/backgrounds/cta-dark.png)',
        'cta-tailwind': 'url(../images/backgrounds/cta-tailwind.jpg)',
        agriculture: 'url(../images/products/agriculture.png)',
        construction: 'url(../images/products/construction.png)',
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
        lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
        headings: ['Lexend', ...defaultTheme.fontFamily.sans],
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
      },
      animation: {
        lava: 'lava 5s ease infinite',
        dark: 'dark 400ms ease-in-out',
        light: 'light 400ms ease-in-out',
        wipe: 'wipe-enter 1s',
        gradient: 'gradient 10s ease-in-out infinite',
      },
      backgroundPosition: {
        'center-half': '60% 27%',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
