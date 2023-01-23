import { translations } from '../config'

// finds whether strings are matching depending on the strictness specified in simple
export const strIncludes = (str: string, query: string, simple?: boolean) =>
  simple
    ? str.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
    : str
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/\s+/g, '')
        .replace('.', '')
        .replace(':', '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))

// splits title into two strings at the penultimate space
export const divideTitle = (title: string) => [
  title.slice(0, title.lastIndexOf(' ', title.lastIndexOf(' ') - 1)),
  title.slice(title.lastIndexOf(' ', title.lastIndexOf(' ') - 1)),
]
