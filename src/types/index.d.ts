export type Language = 'pt' | 'en'

export type NavItem = {
  title: string
  location: string
  icon: JSX.Element
}

export type Colors = {
  black: string
  gray: string
  white: string
  red: string
  blue: string
  green: string
  yellow: string
  orange: string
  beige: string
  gold: string
  silver: string
}

export type Color = keyof Colors | ''

export interface Categories {
  all: string
  um: string
  dois: string
  três: string
  quatro: string
}

export type Category = keyof Categories | ''

export type ProductFrontmatter = {
  lang: string
  pinned: boolean
  slug: string
  name: string
  sector: string
  sample: string
  description: string
  color: Color
  category: Category
  featuredImage: IGatsbyImageData
  characteristics: string[]
  dimensions: string[][]
  customizable: boolean
  customizableText: string
  benefits: string[]
  specifications: string
  comp: string[]
}
