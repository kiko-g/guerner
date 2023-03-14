import React from 'react'
import { LinkTranslate } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Banner } from '../../images'

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
    <section className="relative w-full">
      <img
        src={Banner}
        alt="Welcome to Guerner Banner"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-black/25 to-black/50 dark:from-black/50 dark:to-black/75" />
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-4 py-64 text-white sm:px-6 lg:flex lg:items-center lg:px-8">
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
