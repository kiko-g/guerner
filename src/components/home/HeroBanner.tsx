import React from 'react'
import { Link } from 'gatsby'
import { routes, translations } from '../../config'
import { LinkTranslate } from '../utils'

type Props = {}

export default function HeroBanner({}: Props) {
  const title = translations.pt.phrases.home.title
  const welcome = translations.pt.phrases.home.welcome
  const statement = translations.pt.phrases.home.statement
  const goToProducts = translations.pt.phrases.home.visitProducts.takeMeThere
  const goToContacts = translations.pt.phrases.home.visitContacts.takeMeThere

  return (
    <section className="relative w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center">
            <LinkTranslate text={goToProducts} link={routes.pt.products.main} />
            <LinkTranslate text={goToContacts} link={routes.pt.contacts} alt />
          </div>
        </div>
      </div>
    </section>
  )
}
