import { translations } from '../config'

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
