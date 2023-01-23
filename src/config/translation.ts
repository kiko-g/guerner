import { Categories, Colors } from '../types'

interface Translation {
  categoriesName: string
  location: {
    home: string
    company: string
    products: {
      main: string
      agriculture: string
      construction: string
    }
    contacts: string
  }
  colors: Colors
  category: Categories
  phrases: {
    home: {
      title: string
      welcome: string
      statement: string
      visitCompany: {
        header: string
        description: string
        takeMeThere: string
        goToPresentationSection: {
          header: string
          subheader: string
          description: string
        }
        goToProductionSection: {
          header: string
          subheader: string
          description: string
        }
      }
      visitProducts: {
        header: string
        description: string
        takeMeThere: string
        takeMeThereAgriculture: string
        takeMeThereConstruction: string
      }
      visitContacts: {
        header: string
        description: string
        takeMeThere: string
      }
    }
    company: {
      title: string
      text: string
      sectionIds: {
        welcome: string
        presentation: string
        production: string
      }
    }
    products: {
      header: string
      pageText: string
      agriculture: {
        title: string
        text: string
        takeMeThere: string
      }
      construction: {
        title: string
        text: string
        takeMeThere: string
      }
    }
    contacts: {
      title: string
      text: string
      form: {
        header: string
        text: string
        placeholders: {
          name: string
          location: string
          subject: string
          phone: string
          message: string
          terms: string
        }
      }
    }
  }
  navbar: {
    home: string
    company: string
    products: string
    contacts: string
  }
  footer: {
    terms: string
    privacy: string
  }
}

const pt: Translation = {
  categoriesName: `Categorias`,
  location: {
    home: 'Início',
    company: 'Empresa',
    products: {
      main: 'Produtos',
      agriculture: 'Agricultura',
      construction: 'Construção',
    },
    contacts: 'Contactos',
  },
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
      welcome: `Bem vindo à`,
      statement: `Téxteis e fábricas de alto rendimento`,
      visitCompany: {
        header: `Quem somos nós?`,
        description: `A Guerner & Irmãos, SA, tem como atividade a produção de têxteis técnicos para a agricultura e construção civil, utilizando como matéria-prima principal o polietileno.`,
        takeMeThere: `Conheça-nos melhor`,
        goToPresentationSection: {
          header: `Apresentação`,
          subheader: `Empresa e a sua história`,
          description: `Navegue diretamente para a secção que fala sobre as origens, costumes e práticas da Guerner & Irmãos.`,
        },
        goToProductionSection: {
          header: `Produção`,
          subheader: `Metodologias da empresa`,
          description: `Navegue diretamente para a secção que descreve os setores e metodologias de produção da Guerner & Irmãos.`,
        },
      },
      visitProducts: {
        header: `O que fornecemos?`,
        description: `Aqui estão os produtos!`,
        takeMeThere: `Ver produtos e ofertas`,
        takeMeThereAgriculture: `Ver produtos de Agricultura`,
        takeMeThereConstruction: `Ver produtos de Construção`,
      },
      visitContacts: {
        header: `Tem alguma pergunta?`,
        description: `Não hesite em contactar-nos.`,
        takeMeThere: `Contacte-nos`,
      },
    },
    company: {
      title: `Empresa`,
      text: `A Guerner & Irmãos, SA, tem como atividade a produção de têxteis técnicos para a agricultura e construção civil, utilizando como matéria-prima principal o polietileno.`,
      sectionIds: {
        welcome: `bem-vindo`,
        presentation: `apresentacao`,
        production: `producao`,
      },
    },
    products: {
      header: `Produtos`,
      pageText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.`,
      agriculture: {
        title: `Agricultura`,
        text: `Têxteis e fábricas de alto rendimento`,
        takeMeThere: `Ver listagens dos produtos`,
      },
      construction: {
        title: `Construção`,
        text: `Materiais de construção de alta qualidade`,
        takeMeThere: `Ver listagens dos materiais`,
      },
    },
    contacts: {
      title: `Contactos`,
      text: `Nesta página pode entrar em contacto connosco`,
      form: {
        header: `Entre em contacto`,
        text: `Preencha o formulário ao lado para nos enviar um email com as suas informações.`,
        placeholders: {
          name: `Nome completo`,
          location: `Cidade, País`,
          subject: `Assunto da mensagem`,
          phone: `+351 91 827 11 05`,
          message: `Conteúdo da mensagem`,
          terms: `Li e aceito os`,
        },
      },
    },
  },
  navbar: {
    home: `Início`,
    company: `Empresa`,
    products: `Produtos`,
    contacts: `Contactos`,
  },
  footer: {
    terms: `Termos e Condições`,
    privacy: `Política de Privacidade`,
  },
}

const en: Translation = {
  categoriesName: `Categories`,
  location: {
    home: 'Home',
    company: 'Company',
    products: {
      main: 'Products',
      agriculture: 'Agriculture',
      construction: 'Construction',
    },
    contacts: 'Contacts',
  },
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
      statement: `High-Performance Textiles and Technical Fabrics`,
      visitCompany: {
        header: `Who are we?`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.`,
        takeMeThere: `Get to know us better`,
        goToPresentationSection: {
          header: `Presentation`,
          subheader: `Get to know the company and its history`,
          description: `Navigate directly to the section that dives into the origins and traditions of Guerner & Irmãos.`,
        },
        goToProductionSection: {
          header: `Production`,
          subheader: `Get to know the methologies of the company`,
          description: `Navigate directly yo the section that takes a look at the production sectors and methologies of Guerner & Irmãos.`,
        },
      },
      visitProducts: {
        header: `Products lorem`,
        description: `Here are the products lorem!`,
        takeMeThere: `See products`,
        takeMeThereAgriculture: `Check out agriculture products`,
        takeMeThereConstruction: `Check out construction products`,
      },
      visitContacts: {
        header: `Any questions?`,
        description: `Don't hesitate to contact us`,
        takeMeThere: `Contact us`,
      },
    },
    company: {
      title: `Company`,
      text: `Texto mas em inglês`,
      sectionIds: {
        welcome: `welcome`,
        presentation: `presentation`,
        production: `production`,
      },
    },
    products: {
      header: `Products`,
      pageText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.`,
      agriculture: {
        title: `Agriculture`,
        text: `High-Performance Textiles and Technical Fabrics`,
        takeMeThere: `Show me the listings`,
      },
      construction: {
        title: `Construction`,
        text: `High-quality Building Materials`,
        takeMeThere: `Show me the listings`,
      },
    },
    contacts: {
      title: `Contactos`,
      text: `Nesta página pode entrar em contacto connosco`,
      form: {
        header: `Entre em contacto`,
        text: `Preencha o formulário ao lado para nos enviar um email com as suas informações.`,
        placeholders: {
          name: `Nome completo`,
          location: `Cidade, País`,
          subject: `Assunto da mensagem`,
          phone: `+351 91 234 45 78`,
          message: `Conteúdo da mensagem`,
          terms: `Li e aceito os `,
        },
      },
    },
  },
  navbar: {
    home: `Home`,
    company: `Company`,
    products: `Products`,
    contacts: `Contacts`,
  },
  footer: {
    terms: `Terms and Conditions`,
    privacy: `Privacy Policy`,
  },
}

const translation = {
  pt: pt,
  en: en,
}

export default translation
