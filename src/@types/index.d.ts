export type Language = 'en' | 'pt'

export type Card = {
  title: string
  image: string
  content: JSX.Element | JSX.Element[]
}

export type FAQ = {
  question: JSX.Element | JSX.Element[]
  answer: JSX.Element | JSX.Element[]
}
