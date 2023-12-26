import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { LinkFill } from '../utils'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {}

export default function ProductsCTA({}: Props) {
  const { t } = useI18next()

  const headerText = t('visitProductsHeader')
  const productsText = t('visitProductsDescription')
  const takeMeThere = t('visitProductsTakeMeThere')
  const takeMeThereAgriculture = t('visitProductsTakeMeThereAgriculture')
  const takeMeThereConstruction = t('visitProductsTakeMeThereConstruction')

  const routeProducts = '/products'
  const routeAgriculture = '/products/agriculture'
  const routeConstruction = '/products/construction'

  return (
    <section className="relative w-full bg-primary/50 dark:bg-gray-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Products */}
        <div className="order-2 grid grid-cols-2 lg:order-1 lg:grid-cols-1">
          <Link to={routeAgriculture} className="group relative overflow-hidden bg-center">
            <StaticImage
              src="../../images/agriculture.jpg"
              placeholder="blurred"
              alt={`guerner-nav-agriculture`}
              className="max-h-full min-h-[16rem] w-full object-cover blur-sm transition duration-300 group-hover:blur-0 lg:min-h-[20rem]"
            />
            <div className="absolute inset-0 flex h-full w-full items-center justify-center">
              <div className="absolute h-full w-full bg-black/60 transition group-hover:bg-black/40" />
              <div className="z-50 flex h-full w-auto items-center justify-center gap-x-2 px-4 text-center font-lexend text-lg font-normal text-white opacity-80 duration-500 group-hover:opacity-100 lg:w-full lg:text-3xl lg:opacity-50">
                <span className="transition hover:opacity-80 group-hover:translate-x-2">{takeMeThereAgriculture}</span>
                <ArrowLongRightIcon className="hidden h-8 w-8 transition group-hover:translate-x-2 lg:flex" />
              </div>
            </div>
          </Link>

          <Link to={routeConstruction} className="group relative overflow-hidden bg-center">
            <StaticImage
              src="../../images/construction.jpg"
              placeholder="blurred"
              alt={`guerner-nav-construction`}
              className="max-h-full min-h-[16rem] w-full object-cover blur-sm transition duration-300 group-hover:blur-0 lg:min-h-[20rem]"
            />
            <div className="absolute inset-0 flex h-full w-full items-center justify-center">
              <div className="absolute h-full w-full bg-black/60 transition group-hover:bg-black/40" />
              <div className="z-50 flex h-full w-auto items-center justify-center gap-x-2 px-4 text-center font-lexend text-lg font-normal text-white opacity-80 duration-500 group-hover:opacity-100 lg:w-full lg:text-3xl lg:opacity-50">
                <span className="transition hover:opacity-80 group-hover:translate-x-2">{takeMeThereConstruction}</span>
                <ArrowLongRightIcon className="hidden h-8 w-8 transition group-hover:translate-x-2 lg:flex" />
              </div>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="relative z-0 order-1 w-full p-12 lg:order-2 lg:px-16 lg:py-24">
          <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
            <h2 className="w-full text-center font-lexend text-3xl font-bold tracking-tighter text-secondary lg:text-4xl dark:text-tertiary">
              {headerText}
            </h2>
            <p className="block px-2 py-2 text-center tracking-tighter text-white">{productsText}</p>
            <LinkFill text={takeMeThere} link={routeProducts} light />
          </div>
        </div>
      </div>
    </section>
  )
}
