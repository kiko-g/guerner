import React from 'react'
import classNames from 'classnames'
import type { ProductFrontmatter } from '../types'
import { useMediaQuery } from 'usehooks-ts'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { GoBack, Layout } from '../components/layout'
import { PencilIcon } from '@heroicons/react/24/outline'
import '../styles/product.css'

type MarkdownData = {
  html: string
  frontmatter: ProductFrontmatter
}

type Props = {
  data: {
    markdownRemark: MarkdownData
  }
}

export default function ProductTemplate({ data }: Props) {
  const { t } = useI18next()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const { frontmatter, html } = data.markdownRemark
  const coverImage = getImage(frontmatter.featuredImage)
  const routeGoBack = `/products/${frontmatter.sector}`

  return (
    <Layout location={frontmatter.name}>
      <main className="product">
        <header className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center justify-between gap-2">
            <GoBack url={routeGoBack} />
            <h1 className="hidden lg:block">{frontmatter.name}</h1>
          </div>

          <div className="mt-4 flex w-full flex-col border-b border-primary/20 dark:border-white/20 lg:flex-row">
            {/* For more info */}
            <div className="flex flex-1 items-center gap-4 py-3">
              <span className="h-12 w-12 bg-emerald-600"></span>
              <div className="flex flex-col">
                <span>{t('more-info')}</span>
                <span className="font-bold">{process.env.GATSBY_GUERNER_EMAIL_ADDRESS}</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-start justify-start gap-8 border-l-0 border-t border-primary/20 py-4 pl-0 text-left text-sm tracking-tighter dark:border-white/20 lg:items-center lg:justify-end lg:border-l lg:border-t-0 lg:py-0 lg:pl-8">
              <div className="flex flex-col">
                <span>{t('sector')}</span>
                <span className="max-w-[8rem] text-sm font-bold tracking-tighter lg:max-w-full">
                  {t(frontmatter.sector)}
                </span>
              </div>

              <div className="flex flex-col">
                <span>{t('sample')}</span>
                <span className="font-bold uppercase tracking-tighter">{frontmatter.sample}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Name and description */}
        <div className="flex flex-col py-4">
          <h1 className="mb-4 max-w-xs text-4xl font-semibold">{frontmatter.name}</h1>
          <p className="max-w-md leading-relaxed">{frontmatter.description}</p>
        </div>

        {/* Characteristics Banner */}
        {frontmatter.characteristics.length > 0 ? (
          <ul className="mt-4 flex flex-col flex-wrap gap-8 border-y border-primary/20 py-4 dark:border-white/20 md:flex-row">
            {frontmatter.characteristics.map((c, cIdx) => (
              <li key={`characteristic-${cIdx}`} className="flex items-center gap-2">
                <span className="h-6 w-6 bg-emerald-600"></span>
                <span className="text-sm tracking-tighter">{c}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Image Grid */}
        <div className="grid h-96 w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="w-full bg-emerald-600/10 dark:bg-emerald-500/10"></div>

          <div className="grid w-full grid-cols-1 gap-4">
            <div className="w-full bg-emerald-600/10 dark:bg-emerald-500/10"></div>
            <div className="w-full bg-emerald-600/10 dark:bg-emerald-500/10"></div>
          </div>
        </div>

        {/* Dimensions */}
        <div className="flow-root w-full overflow-x-auto">
          <h5 className="w-full border-b border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
            {t('dimensions')}
          </h5>

          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-primary/20 text-xs tracking-tighter dark:divide-white/20 lg:text-sm">
              <thead className="w-full min-w-full">
                {frontmatter.dimensions.slice(0, 1).map((row, rowIdx) => {
                  const [a, b, c, d, e, f, g] = row
                  return (
                    <tr key={`dimension-head-${rowIdx}`} className="text-gray-900 dark:text-white">
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-0 pr-3 text-left text-sm font-semibold lg:pl-0"
                      >
                        {a}
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        {b}
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        {c}
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        {d}
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        {e}
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        {f}
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold"
                      >
                        {g}
                      </th>
                    </tr>
                  )
                })}
              </thead>
              <tbody className="divide-y divide-primary/10 dark:divide-white/10">
                {frontmatter.dimensions
                  .slice(1, frontmatter.dimensions.length)
                  .map((row, rowIdx) => {
                    const [a, b, c, d, e, f, g] = row
                    return (
                      <tr key={`dimension-row-${rowIdx}`}>
                        <td className="w-0 whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-gray-900 dark:text-white lg:pl-0">
                          {a}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {b}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {c}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {d}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {e}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {f}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {g}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customizable Success Banner */}
        {frontmatter.customizable && (
          <div className="flex w-full flex-col items-start gap-2 rounded bg-emerald-600/10 px-4 py-4 dark:bg-emerald-500/20 lg:flex-row lg:items-center lg:gap-4">
            <PencilIcon className="hidden h-6 w-6 text-emerald-700 dark:text-emerald-400 lg:flex lg:h-8 lg:w-8" />
            <p className="max-w-lg text-sm font-normal tracking-tighter text-emerald-900 dark:text-white lg:font-medium lg:tracking-normal">
              {frontmatter.customizableText}
            </p>
          </div>
        )}

        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Benefits */}
          <div className="w-full">
            <h5 className="w-full border-b border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
              {t('benefits')}
            </h5>
            <ul className="z-50 list-disc space-y-1 py-4">
              {frontmatter.benefits.map((b, bIdx) => (
                <li key={`benefit-${bIdx}`} className="flex items-center gap-2">
                  <span className="text-sm tracking-tighter">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="w-full">
            <h5 className="w-full border-b border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
              {t('specifications')}
            </h5>
            <p className="py-4 text-sm tracking-tighter">{frontmatter.specifications}</p>
          </div>
        </div>

        {/* Compostion */}
        <div className="w-full">
          <h5 className="w-full border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
            {t('composition')}
          </h5>
          <ul className="grid w-full grid-flow-row grid-cols-1 gap-x-12 lg:grid-cols-2">
            {frontmatter.comp.map((c, cIdx) => (
              <li
                key={`comp-${cIdx}`}
                className={classNames(
                  'flex items-center gap-2 border-b border-primary/20 py-4 dark:border-white/20',
                  isMobile ? cIdx < 1 && 'border-t' : cIdx < 2 && 'border-t'
                )}
              >
                <span className="h-6 w-6 bg-emerald-600"></span>
                <span className="text-sm tracking-tighter">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($language: String!, $id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        lang
        pinned
        slug

        name
        sector
        sample
        description
        color
        category
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        dimensions
        characteristics
        customizable
        customizableText
        benefits
        specifications
        comp
      }
    }
    locales: allLocale(filter: { ns: { in: ["common"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
