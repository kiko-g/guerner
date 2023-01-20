import React from 'react'
import { routes, translations } from '../../config'
import NavigateCtaDiv from './NavigateCtaDiv'

type Props = {}

export default function HeroProducts({}: Props) {
  const linkGardening = routes.pt.products.gardening
  const linkAgriculture = routes.pt.products.agriculture
  const takeMeThereGardening = translations.pt.phrases.home.visitProducts.takeMeThereAgriculture
  const takeMeThereAgriculture = translations.pt.phrases.home.visitProducts.takeMeThereGardening

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NavigateCtaDiv
          link={linkAgriculture}
          actionText={takeMeThereAgriculture}
          image="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6"
        />
        <NavigateCtaDiv
          link={linkGardening}
          actionText={takeMeThereGardening}
          image="https://images.unsplash.com/photo-1672803949246-85b33371c7ab"
        />
      </div>
    </section>
  )
}
