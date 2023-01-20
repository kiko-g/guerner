interface Translation {
  colors: {
    black: string
    white: string
    red: string
    blue: string
    green: string
    gray: string
    brown: string
    yellow: string
    orange: string
    pink: string
    purple: string
  }
  category: {
    all: string
    um: string
    dois: string
    três: string
    quatro: string
  }
  phrases: {
    home: {
      title: string
      welcome: string
      statement: string
      visitCompany: {
        header: string
        description: string
        takeMeThere: string
      }
      visitProducts: {
        header: string
        description: string
        takeMeThere: string
        takeMeThereAgriculture: string
        takeMeThereGardening: string
      }
      visitContacts: {
        header: string
        description: string
        takeMeThere: string
      }
    }
    footer: {
      terms: string
      privacy: string
    }
  }
}

const pt: Translation = {
  colors: {
    black: `preto`,
    white: `branco`,
    red: `vermelho`,
    blue: `azul`,
    green: `verde`,
    gray: `cinzento`,
    brown: `castanho`,
    yellow: `amarelo`,
    orange: `laranja`,
    pink: `rosa`,
    purple: `roxo`,
  },
  category: {
    all: `todos`,
    um: `um`,
    dois: `dois`,
    três: `três`,
    quatro: `quatro`,
  },
  phrases: {
    home: {
      title: `Guerner & Irmãos`,
      welcome: `Welcome to`,
      statement: `Missão e/ou visão da empresa`,
      visitCompany: {
        header: `Quem somos nós?`,
        description: `A Guerner & Irmãos, SA, tem como atividade a produção de têxteis técnicos para a agricultura e construção civil, utilizando como matéria-prima principal o polietileno.`,
        takeMeThere: `Conheça-nos melhor`,
      },
      visitProducts: {
        header: `Produtos`,
        description: `Aqui estão os produtos!`,
        takeMeThere: `Ver produtos e ofertas`,
        takeMeThereAgriculture: `Ver produtos de Agricultura`,
        takeMeThereGardening: `Ver produtos de Jardinagem`,
      },
      visitContacts: {
        header: `Tem alguma pergunta?`,
        description: `Não hesite em contactar-nos.`,
        takeMeThere: `Contacte-nos`,
      },
    },
    footer: {
      terms: `Termos e Condições`,
      privacy: `Política de Privacidade`,
    },
  },
}

const en: Translation = {
  colors: {
    black: `black`,
    white: `white`,
    red: `red`,
    blue: `blue`,
    green: `green`,
    gray: `gray`,
    brown: `brown`,
    yellow: `yellow`,
    orange: `orange`,
    pink: `pink`,
    purple: `purple`,
  },
  category: {
    all: `all`,
    um: `um`,
    dois: `dois`,
    três: `três`,
    quatro: `quatro`,
  },
  phrases: {
    home: {
      title: `Guerner & Irmãos`,
      welcome: `Welcome to`,
      statement: `Mission statement or vision from the company`,
      visitCompany: {
        header: `Who are we?`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.`,
        takeMeThere: `Get to know us better`,
      },
      visitProducts: {
        header: `Products lorem`,
        description: `Here are the products lorem!`,
        takeMeThere: `See products`,
        takeMeThereAgriculture: `Check out agriculture products`,
        takeMeThereGardening: `Check out gardening products`,
      },
      visitContacts: {
        header: `Any questions?`,
        description: `Don't hesitate to contact us`,
        takeMeThere: `Contact us`,
      },
    },
    footer: {
      terms: `Terms and Conditions`,
      privacy: `Privacy Policy`,
    },
  },
}

const translation = {
  pt: pt,
  en: en,
}

export default translation
