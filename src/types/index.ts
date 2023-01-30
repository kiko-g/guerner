export type Language = 'pt' | 'en'

export type NavItem = {
  title: string
  location: string
  icon: JSX.Element
}

export type Colors = {
  black: string
  gray: string
  gold: string
  white: string
  red: string
  blue: string
  green: string
  yellow: string
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
