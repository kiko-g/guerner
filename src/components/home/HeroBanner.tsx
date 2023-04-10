import React from 'react'
import { LinkTranslate } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {}

export default function HeroBanner({}: Props) {
  const { t } = useI18next()

  const title = t('title')
  const welcome = t('welcome')
  const statement = t('statement')

  const routeProducts = '/products'
  const routeContacts = '/contacts'

  const takeMeToProducts = t('takeMeToProducts')
  const takeMeToContacts = t('takeMeToContacts')

  return (
    <section className="relative w-full bg-transparent dark:bg-gray-900/50">
      <div className="blob fixed -bottom-48 -left-48 z-[-1] h-[75vh] w-[25%] rotate-[15hhhhyhhj0deg] animate-pulse-slow rounded-full blur-[200px] transition-all" />
      <div className="blob fixed -top-48 -right-48 z-[-1] h-[75vh] w-[25%] rotate-[140deg] animate-sway animate-pulse-medium rounded-full blur-[200px] transition-all" />

      <div className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span>{welcome}</span>
            <strong className="mx-auto block font-extrabold tracking-tighter text-secondary dark:bg-transparent dark:text-tertiary">
              {title}
            </strong>
          </h1>

          <p className="mx-auto mt-4 sm:text-xl sm:leading-relaxed">{statement}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center">
            <LinkTranslate text={takeMeToProducts} link={routeProducts} />
            <LinkTranslate text={takeMeToContacts} link={routeContacts} alt />
          </div>
        </div>
      </div>
    </section>
  )
}
