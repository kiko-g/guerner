import React from 'react'
import { LinkFill } from '../utils'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {}

export default function ContactsCTA({}: Props) {
  const { t } = useI18next()

  const header = t('visitContactsHeader')
  const description = t('visitContactsDescription')
  const takeMeThere = t('visitContactsTakeMeThere')

  const routeContacts = '/contacts'

  return (
    <section className="relative z-0 w-full animate-gradient bg-teal-500 px-12 py-12 dark:bg-slate-800 lg:px-16 lg:py-24">
      <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
        <h2 className="w-full text-center font-lexend text-2xl font-bold tracking-tighter text-primary dark:text-secondary xl:text-3xl">
          {header}
        </h2>
        <p className="block w-full px-2 py-2 text-center tracking-tighter text-white">
          {description}
        </p>
        <LinkFill text={takeMeThere} link={routeContacts} />
      </div>
    </section>
  )
}
