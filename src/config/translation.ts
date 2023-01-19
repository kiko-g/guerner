import { Translation } from './types'

const pt: Translation = {
  colors: {
    black: 'preto',
    white: 'branco',
    red: 'vermelho',
    blue: 'azul',
    green: 'verde',
    gray: 'cinzento',
    brown: 'castanho',
    yellow: 'amarelo',
    orange: 'laranja',
    pink: 'rosa',
    purple: 'roxo',
  },
  category: {
    all: 'todos',
    um: 'um',
    dois: 'dois',
    três: 'três',
    quatro: 'quatro',
  },
  phrases: {
    home: {
      title: 'Guerner & Irmãos',
      welcome: 'Welcome to',
      statement: 'Missão e/ou visão da empresa',
      goToCompany: 'Conheça-nos melhor',
      goToProducts: 'Ver produtos e ofertas',
      goToContacts: 'Contacte-nos',
      visitCompanyHeader: 'Lorem, ipsum dolor sit amet',
      visitCompanyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
    },
    footer: {
      terms: 'Termos e Condições',
      privacy: 'Política de Privacidade',
    },
  },
}

const en: Translation = {
  colors: {
    black: 'black',
    white: 'white',
    red: 'red',
    blue: 'blue',
    green: 'green',
    gray: 'gray',
    brown: 'brown',
    yellow: 'yellow',
    orange: 'orange',
    pink: 'pink',
    purple: 'purple',
  },
  category: {
    all: 'all',
    um: 'um',
    dois: 'dois',
    três: 'três',
    quatro: 'quatro',
  },
  phrases: {
    home: {
      title: 'Guerner & Irmãos',
      welcome: 'Welcome to',
      statement: 'Mission statement or vision from the company',
      goToCompany: 'Get to know us better',
      goToProducts: 'See products',
      goToContacts: 'Contact us',
      visitCompanyHeader: 'Lorem, ipsum dolor sit amet',
      visitCompanyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.',
    },
    footer: {
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
    },
  },
}

const translation = {
  pt: pt,
  en: en,
}

export default translation
