import React from 'react'
import { routes, translations } from '../../config'
import { LinkFill } from '../utils'
import NavigateCtaDiv from './NavigateCtaDiv'
import { Agriculture, Construction } from '../../images'

type Props = {}

export default function ProductsCTA({}: Props) {
  const linkConstruction = routes.pt.products.construction
  const linkAgriculture = routes.pt.products.agriculture

  const headerText = translations.pt.phrases.home.visitProducts.header
  const productsText = translations.pt.phrases.home.visitProducts.description
  const takeMeThere = translations.pt.phrases.home.visitProducts.takeMeThere
  const takeMeThereAgriculture = translations.pt.phrases.home.visitProducts.takeMeThereAgriculture
  const takeMeThereConstruction = translations.pt.phrases.home.visitProducts.takeMeThereConstruction

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Products */}
        <div className="order-2 grid grid-cols-2 lg:order-1 lg:grid-cols-1">
          <NavigateCtaDiv
            image={Agriculture}
            link={linkAgriculture}
            actionText={takeMeThereAgriculture}
          />
          <NavigateCtaDiv
            image={Construction}
            link={linkConstruction}
            actionText={takeMeThereConstruction}
          />
        </div>

        {/* CTA */}
        <div
          className="relative z-0 order-1 w-full bg-cta bg-cover bg-no-repeat p-12 
          dark:bg-cta-dark lg:order-2 lg:px-16 lg:py-24"
        >
          <div
            className="absolute top-0 left-0 -z-10 h-full w-full 
            bg-gradient-to-b from-black/20 via-black/30 to-black/40"
          />
          <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
            <h2
              className="w-full text-center font-headings text-2xl font-bold tracking-tighter 
            text-secondary dark:text-secondary xl:text-3xl"
            >
              {headerText}
            </h2>
            <p className="block px-2 py-2 text-center tracking-tighter text-white">
              {productsText}
            </p>
            <LinkFill text={takeMeThere} link={routes.pt.products.main} />
          </div>
        </div>
      </div>
    </section>
  )
}
