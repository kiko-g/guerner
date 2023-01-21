import React from 'react'
import { routes, translations } from '../../config'
import { useLanguage } from '../../hooks/useLanguageContext'
import { LinkTranslate } from '../utils'

type Props = {}

export default function HeroBanner({}: Props) {
  const { language } = useLanguage()
  const title = translations[language].phrases.home.title
  const welcome = translations[language].phrases.home.welcome
  const statement = translations[language].phrases.home.statement

  const routeProducts = routes[language].products.main
  const routeContacts = routes[language].contacts

  const takeMeToProducts = translations[language].phrases.home.visitProducts.takeMeThere
  const takeMeToContacts = translations[language].phrases.home.visitContacts.takeMeThere

  return (
    <section className="relative w-full bg-banner bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-black/25 to-black/50 dark:from-black/50 dark:to-black/75" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{welcome}</span>
            <strong className="mx-auto block font-extrabold tracking-tighter text-secondary dark:bg-transparent dark:text-secondary">
              {title}
            </strong>
          </h1>

          <p className="mx-auto mt-4 sm:text-xl sm:leading-relaxed">{statement}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-center">
            <LinkTranslate text={takeMeToProducts} link={routeProducts} />
            <LinkTranslate text={takeMeToContacts} link={routeContacts} alt />
          </div>
        </div>
      </div>
    </section>
  )
}
