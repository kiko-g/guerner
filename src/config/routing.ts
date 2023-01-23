interface Routes {
  home: string
  company: string
  contacts: string
  products: {
    main: string
    agriculture: string
    construction: string
  }
  info: {
    privacyPolicy: string
    termsAndConditions: string
  }
}

const pt: Routes = {
  home: '/pt/',
  company: '/pt/empresa/',
  products: {
    main: '/pt/produtos/',
    agriculture: '/pt/produtos/agricultura/',
    construction: '/pt/produtos/construcao/',
  },
  contacts: '/pt/contactos/',
  info: {
    privacyPolicy: '/pt/info/politica-de-privacidade/',
    termsAndConditions: '/pt/info/termos-e-condicoes/',
  },
}

const en: Routes = {
  home: '/en/',
  company: '/en/company/',
  products: {
    main: '/en/products/',
    agriculture: '/en/products/agriculture/',
    construction: '/pt/products/construction/',
  },
  contacts: '/pt/contacts/',
  info: {
    privacyPolicy: '/en/info/privacy-policy/',
    termsAndConditions: '/pt/info/terms-and-conditions/',
  },
}

const routes = {
  pt: pt,
  en: en,
}

export default routes
