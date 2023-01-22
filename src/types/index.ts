export type Language = 'pt' | 'en'

export type NavItem = {
  title: string
  location: string
  icon: JSX.Element
}

export type Colors = {
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

export type Color = keyof Colors | ''

export interface Categories {
  all: string
  um: string
  dois: string
  três: string
  quatro: string
}

export type Category = keyof Categories | ''
