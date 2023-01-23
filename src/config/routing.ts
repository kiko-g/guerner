interface Routes {
  home: string
  company: string
  contacts: string
  products: {
    main: string
    agriculture: string
    construction: string
    agricultureMd?: {
      produto1: string
      produto2: string
      produto3: string
      produto4: string
      produto5: string
    }
    constructionMd?: {
      produto1: string
      produto2: string
      produto3: string
      produto4: string
      produto5: string
    }
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
    agricultureMd: {
      produto1: '/pt/produtos/agricultura/produto1',
      produto2: '/pt/produtos/agricultura/produto2',
      produto3: '/pt/produtos/agricultura/produto3',
      produto4: '/pt/produtos/agricultura/produto4',
      produto5: '/pt/produtos/agricultura/produto5',
    },
    constructionMd: {
      produto1: '/pt/produtos/construcao/produto1',
      produto2: '/pt/produtos/construcao/produto2',
      produto3: '/pt/produtos/construcao/produto3',
      produto4: '/pt/produtos/construcao/produto4',
      produto5: '/pt/produtos/construcao/produto5',
    },
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
    construction: '/en/products/construction/',
    agricultureMd: {
      produto1: '/en/products/agriculture/produto1',
      produto2: '/en/products/agriculture/produto2',
      produto3: '/en/products/agriculture/produto3',
      produto4: '/en/products/agriculture/produto4',
      produto5: '/en/products/agriculture/produto5',
    },
    constructionMd: {
      produto1: '/en/products/construction/produto1',
      produto2: '/en/products/construction/produto2',
      produto3: '/en/products/construction/produto3',
      produto4: '/en/products/construction/produto4',
      produto5: '/en/products/construction/produto5',
    },
  },
  contacts: '/pt/contacts/',
  info: {
    privacyPolicy: '/en/info/privacy-policy/',
    termsAndConditions: '/pt/info/terms-and-conditions/',
  },
}

const routes = {
  pt,
  en,
}

export default routes
