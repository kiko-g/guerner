import React from 'react'
import { Link } from 'gatsby'
import { routes, translations } from '../../config'

type Props = {}

export default function HeroBanner({}: Props) {
  const title = translations.pt.phrases.home.title
  const welcome = translations.pt.phrases.home.welcome
  const statement = translations.pt.phrases.home.statement
  const goToProducts = translations.pt.phrases.home.goToProducts
  const goToContacts = translations.pt.phrases.home.goToContacts

  return (
    <section className="relative w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-black/25 to-black/50 dark:from-black/50 dark:to-black/75" />
      <div className="relative max-w-screen-xl px-4 py-64 mx-auto text-white sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{welcome}</span>
            <strong className="mx-auto block font-extrabold tracking-tighter bg-white/50 w-min whitespace-nowrap text-primary dark:bg-transparent dark:text-secondary">
              {title}
            </strong>
          </h1>

          <p className="mx-auto mt-4 sm:text-xl sm:leading-relaxed">{statement}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-center">
            <Link
              to={routes.pt.products.main}
              className="block w-full px-12 py-3 text-sm font-medium text-white transition rounded shadow :ring bg-primary hover:opacity-90 focus:outline-none active:bg-primary dark:bg-secondary dark:active:bg-secondary sm:w-auto"
            >
              {goToProducts}
            </Link>

            <Link
              to={routes.pt.contacts}
              className="block w-full px-12 py-3 text-sm font-medium transition bg-white rounded shadow text-primary hover:opacity-90 focus:outline-none focus:ring active:text-primary dark:text-secondary dark:active:text-secondary sm:w-auto"
            >
              {goToContacts}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
