import React from 'react'
import { Link } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { LinkFill } from '../utils'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

export default function CompanyCTA({}: Props) {
  const { t } = useI18next()

  const link = t('takeMeToCompany')
  const text = t('visitCompanyDescription')
  const header = t('visitCompanyHeader')

  const productionSectionHeader = t('productionSectionHeader')
  const productionSectionSubeader = t('productionSectionSubeader')
  const productionSectionDescription = t('productionSectionDescription')

  const presentationSectionHeader = t('presentationSectionHeader')
  const presentationSectionSubeader = t('presentationSectionSubeader')
  const presentationSectionDescription = t('presentationSectionDescription')

  const routeCompany = '/company'

  return (
    <section className="w-full overflow-hidden bg-teal-800 dark:bg-gray-800">
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {/* CTA */}
        <div className="relative z-0 w-full p-12 lg:px-16 lg:py-24">
          <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-y-3">
            <h2 className="w-full text-center font-lexend text-3xl font-bold tracking-tighter text-secondary dark:text-tertiary lg:text-4xl">
              {header}
            </h2>
            <p className="block px-2 py-2 text-center tracking-tighter text-white">{text}</p>
            <LinkFill text={link} link={routeCompany} light />
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Link to={`${routeCompany}#presentation`} className="group relative block bg-black">
            <StaticImage
              alt={`company-showcase-${presentationSectionHeader}`}
              src="../../images/company-1.webp"
              placeholder="blurred"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40 xl:h-[32rem]"
            />

            <div className="absolute top-0 left-0 p-8">
              <p className="text-sm font-extrabold uppercase tracking-widest text-secondary dark:text-secondary">
                {presentationSectionHeader}
              </p>
              <p className="text-2xl font-bold text-white">{presentationSectionSubeader}</p>
              <div className="mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{presentationSectionDescription}</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to={`${routeCompany}#production`} className="group relative block bg-black">
            <StaticImage
              src="../../images/company-2.webp"
              alt={`company-showcase-${productionSectionHeader}`}
              placeholder="blurred"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-40 xl:h-[32rem]"
            />

            <div className="absolute top-0 left-0 p-8">
              <p className="text-sm font-extrabold uppercase tracking-widest text-secondary dark:text-secondary">
                {productionSectionHeader}
              </p>
              <p className="text-2xl font-bold text-white">{productionSectionSubeader}</p>
              <div className="mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{productionSectionDescription}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
