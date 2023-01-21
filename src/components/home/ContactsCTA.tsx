import React from 'react'
import { routes, translations } from '../../config'
import { LinkFill } from '../utils'

type Props = {}

export default function ContactsCTA({}: Props) {
  const text = translations.pt.phrases.home.visitContacts.description
  const header = translations.pt.phrases.home.visitContacts.header
  const takeMeThere = translations.pt.phrases.home.visitContacts.takeMeThere

  return (
    <section className="bg-cta-dark relative z-0 w-full p-12 lg:px-16 lg:py-24">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-b from-black/20 via-black/30 to-black/40" />
      <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
        <h2 className="w-full text-center font-headings text-2xl font-bold tracking-tighter text-secondary dark:text-secondary xl:text-3xl">
          {header}
        </h2>
        <p className="block w-full px-2 py-2 text-center tracking-tighter text-white">{text}</p>
        <LinkFill text={takeMeThere} link={routes.pt.contacts} light />
      </div>
    </section>
  )
}
