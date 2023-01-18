export type Language = string

export interface Routes {
  home: string
  company: string
  contacts: string
  products: {
    main: string
    agriculture: string
    gardening: string
  }
  info: {
    privacyPolicy: string
    termsAndConditions: string
  }
}

export interface Translation {
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
    footer: {
      'Terms and Conditions': string
      'Privacy Policy': string
    }
  }
}
