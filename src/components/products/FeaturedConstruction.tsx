import React from 'react'
import { routes, translations } from '../../config'
import { LinkFill } from '../utils'

type Props = {}

export default function FeaturedConstruction({}: Props) {
  const title = translations.pt.phrases.products.construction.title
  const text = translations.pt.phrases.products.construction.text
  const takeMeThere = translations.pt.phrases.products.construction.takeMeThere
  const route = routes.pt.products.construction

  return (
    <section className="w-full overflow-hidden rounded bg-construction bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-l from-black/75 via-black/50 to-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="flex flex-col items-center text-center sm:text-right md:items-end">
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:mb-1 md:text-5xl">
            {title}
          </h2>
          <p
            className="max-w-md text-sm font-normal leading-tight text-white/90 
            md:mt-6 md:block md:text-lg md:leading-relaxed"
          >
            {text}
          </p>
          <div className="mt-4 sm:mt-8">
            <LinkFill link={route} text={takeMeThere} />
          </div>
        </div>
      </div>
    </section>
  )
}
