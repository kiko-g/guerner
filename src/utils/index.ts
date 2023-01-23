// @ts-nocheck
import { routes, translations } from '../config'
import { Language } from '../types'

function translateRoute(pathname: string, currLang: Language, nextLang: Language): string {
  let nextRoute = null

  Object.keys(routes[currLang]).forEach(key => {
    if (typeof routes[currLang][key] === 'object') {
      // object
      Object.keys(routes[currLang][key]).forEach(innerKey => {
        if (routes[currLang][key][innerKey] === pathname) {
          nextRoute = routes[nextLang][key][innerKey]
          return
        }
      })
    } else if (routes[currLang][key] === pathname) {
      // string
      nextRoute = routes[nextLang][key]
      return
    }
  })

  console.log('Next route: ', nextRoute)
  return nextRoute
}

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

export const switchRouteLanguage = (currentLanguage: Language, nextLanguage: Language): string => {
  if (typeof window === 'undefined') return `/${nextLanguage}`

  const nextRoute = translateRoute(window.location.pathname, currentLanguage, nextLanguage)
  return nextRoute ? nextRoute : `/${nextLanguage}`
}
