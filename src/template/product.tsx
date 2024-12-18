import React from 'react'
import clsx from 'clsx'
import type { ProductFrontmatter } from '../types'
import { useMediaQuery } from 'usehooks-ts'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image'
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
  const routeGoBack = `/products/${frontmatter.sector}`

  const { featuredImage, secondaryImage, tertiaryImage } = React.useMemo(() => {
    const featuredImage = getImage(frontmatter.featuredImage)
    const secondaryImage = getImage(frontmatter.secondaryImage)
    const tertiaryImage = getImage(frontmatter.tertiaryImage)

    return { featuredImage, secondaryImage, tertiaryImage }
  }, [frontmatter])

  const unsplash = false
  const isMockImageGrid =
    !unsplash && featuredImage !== undefined && secondaryImage !== undefined && tertiaryImage !== undefined

  return (
    <Layout location={frontmatter.name} fullWidth>
      <main className="product">
        <header className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center justify-between gap-2 bg-tertiary/10 px-4 py-4">
            <GoBack url={routeGoBack} text={t('goback')} />
            <h1 className="hidden lg:block">{frontmatter.name}</h1>
          </div>

          <div className="mt-4 flex w-full flex-col border-b border-primary/20 lg:flex-row dark:border-white/20">
            {/* For more info */}
            <div className="flex flex-1 items-center gap-4 py-3">
              <span className="h-12 w-12 bg-tertiary dark:bg-tertiary"></span>
              <div className="flex flex-col">
                <span>{t('more-info')}</span>
                <span className="font-bold">{process.env.GATSBY_GUERNER_EMAIL_ADDRESS}</span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-start justify-start gap-8 border-l-0 border-t border-primary/20 py-4 pl-0 text-left text-sm tracking-tighter lg:items-center lg:justify-end lg:border-l lg:border-t-0 lg:py-0 lg:pl-8 dark:border-white/20">
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
        <div className="flex gap-8 py-4">
          <div className="flex flex-1 flex-col">
            <h1 className="mb-4 max-w-sm text-4xl font-semibold underline decoration-secondary dark:decoration-tertiary">
              {frontmatter.name}
            </h1>
            <p className="max-w-lg leading-relaxed">{frontmatter.description}</p>
          </div>

          <div className="flex w-4 flex-col bg-gradient-to-b from-tertiary to-secondary" />
        </div>

        {/* Characteristics Banner */}
        {frontmatter.characteristics !== null && frontmatter.characteristics.length > 0 ? (
          <ul className="mt-4 flex flex-col flex-wrap gap-4 border-y border-primary/20 py-4 lg:flex-row lg:gap-8 dark:border-white/20">
            {frontmatter.characteristics
              .sort((a, b) => (a < b ? 1 : -1))
              .map((c, cIdx) => (
                <li key={`characteristic-${cIdx}`} className="flex items-center gap-3">
                  <span className="relative">
                    <span className="absolute -top-2 left-0 h-4 w-4 rounded-full bg-primary dark:bg-tertiary"></span>
                    <span className="absolute -top-2 left-2.5 h-4 w-4 rounded-full bg-tertiary dark:bg-white"></span>
                  </span>
                  <span className="ml-6 text-sm tracking-tighter">{c}</span>
                </li>
              ))}
          </ul>
        ) : null}

        {/* Image Grid */}
        {isMockImageGrid ? (
          <ImageGrid featuredImage={featuredImage} secondaryImage={secondaryImage} tertiaryImage={tertiaryImage} />
        ) : (
          <UnsplashImageGrid />
        )}

        {/* Dimensions */}
        <div className="flow-root w-full overflow-x-auto">
          <h5 className="w-full border-b border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
            {t('dimensions')}
          </h5>

          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-primary/20 text-xs tracking-tighter lg:text-sm dark:divide-white/20">
              <thead className="w-full min-w-full">
                {frontmatter.dimensions.slice(0, 1).map((row, rowIdx) => {
                  const [a, b, c, d, e, f, g] = row
                  return (
                    <tr key={`dimension-head-${rowIdx}`} className="text-zinc-900 dark:text-white">
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-0 pr-3 text-left text-sm font-semibold lg:pl-0"
                      >
                        {a}
                      </th>
                      <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold">
                        {b}
                      </th>
                      <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold">
                        {c}
                      </th>
                      <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold">
                        {d}
                      </th>
                      <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold">
                        {e}
                      </th>
                      <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold">
                        {f}
                      </th>
                      <th scope="col" className="whitespace-nowrap px-3 py-3.5 text-left text-sm font-semibold">
                        {g}
                      </th>
                    </tr>
                  )
                })}
              </thead>
              <tbody className="divide-y divide-primary/10 dark:divide-white/10">
                {frontmatter.dimensions.slice(1, frontmatter.dimensions.length).map((row, rowIdx) => {
                  const [a, b, c, d, e, f, g] = row
                  return (
                    <tr key={`dimension-row-${rowIdx}`}>
                      <td className="w-0 whitespace-nowrap py-4 pl-0 pr-3 text-sm font-medium text-zinc-900 lg:pl-0 dark:text-white">
                        {a}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 dark:text-zinc-400">{b}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 dark:text-zinc-400">{c}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 dark:text-zinc-400">{d}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 dark:text-zinc-400">{e}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 dark:text-zinc-400">{f}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 dark:text-zinc-400">{g}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customizable Success Banner */}
        {frontmatter.customizable && (
          <div className="flex w-full flex-col items-start gap-2 rounded bg-emerald-600/10 px-4 py-4 lg:flex-row lg:items-center lg:gap-4 dark:bg-emerald-500/20">
            <PencilIcon className="hidden h-6 w-6 text-emerald-700 lg:flex lg:h-8 lg:w-8 dark:text-emerald-400" />
            <p className="text-sm font-normal tracking-tighter text-emerald-900 lg:font-medium lg:tracking-normal dark:text-white">
              {frontmatter.customizableText}
            </p>
          </div>
        )}

        {/* Compostion */}
        <div className="w-full">
          <h5 className="w-full border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
            {t('composition')}
          </h5>
          <ul className="grid w-full grid-flow-row grid-cols-1 gap-x-12 lg:grid-cols-1">
            {frontmatter.composition.map((c, cIdx) => (
              <li
                key={`composition-${cIdx}`}
                className={clsx(
                  'flex items-center gap-2 border-b border-primary/20 py-4 dark:border-white/20',
                  isMobile ? cIdx < 1 && 'border-t' : cIdx < 2 && 'border-t',
                )}
              >
                <span className="relative">
                  <span className="absolute -top-[9px] left-0 h-5 w-5 rounded-full bg-primary dark:bg-secondary"></span>
                  <span className="absolute -top-[9px] left-3 h-5 w-5 rounded-full bg-tertiary dark:bg-white"></span>
                </span>
                <span className="ml-8 text-sm tracking-tighter">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits and Specifications */}
        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-0 pb-16 lg:grid-cols-2">
          <div className="w-full">
            <h5 className="w-full border-b border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
              {t('benefits')}
            </h5>
            <ul className="z-50 list-inside list-disc space-y-1 py-4">
              {frontmatter.benefits.map((b, bIdx) => (
                <li key={`benefit-${bIdx}`}>
                  <span className="text-sm tracking-tighter">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h5 className="w-full border-b border-primary/20 py-4 font-lexend text-lg font-semibold dark:border-white/20">
              {t('specifications')}
            </h5>
            <p className="py-4 text-sm tracking-tighter">{frontmatter.specifications}</p>
          </div>
        </div>

        <div className="flex w-full items-start justify-start bg-tertiary/10 px-4 py-4">
          <GoBack url={routeGoBack} text={t('goback')} />
        </div>
      </main>
    </Layout>
  )
}

function MockImageGrid() {
  return (
    <div className="grid h-96 w-full grid-cols-1 gap-4 lg:grid-cols-2">
      <div className="w-full bg-emerald-600/10 dark:bg-emerald-500/10"></div>

      <div className="grid w-full grid-cols-1 gap-4">
        <div className="w-full bg-emerald-600/10 dark:bg-emerald-500/10"></div>
        <div className="w-full bg-emerald-600/10 dark:bg-emerald-500/10"></div>
      </div>
    </div>
  )
}

type ImageGridProps = {
  featuredImage: IGatsbyImageData
  secondaryImage: IGatsbyImageData
  tertiaryImage: IGatsbyImageData
}

function ImageGrid({ featuredImage, secondaryImage, tertiaryImage }: ImageGridProps) {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-zinc-100 p-8 lg:flex-row dark:bg-zinc-300/5">
      <div className="my-auto w-full lg:flex-1">
        <GatsbyImage image={featuredImage} alt="featured" className="my-auto w-full rounded object-cover shadow-xl" />
      </div>
      <div className="my-auto hidden w-full lg:block lg:flex-1">
        <GatsbyImage image={secondaryImage} alt="secondary" className="w-full rounded object-cover shadow-xl" />
      </div>
      <div className="my-auto hidden w-full lg:block lg:flex-1">
        <GatsbyImage image={tertiaryImage} alt="tertiary" className="w-full rounded object-cover shadow-xl" />
      </div>
    </div>
  )
}

function UnsplashImageGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 overflow-hidden lg:grid-cols-2">
      <StaticImage
        alt="product-1"
        placeholder="blurred"
        src="https://source.unsplash.com/random/?agriculture"
        className="max-h-[200px] lg:max-h-[416px]"
      />

      <div className="hidden w-full lg:grid lg:grid-cols-1 lg:gap-4">
        <StaticImage
          alt="product-2"
          placeholder="blurred"
          src="https://source.unsplash.com/random/?gardening"
          className="h-full lg:max-h-[200px]"
        />
        <StaticImage
          alt="product-3"
          placeholder="blurred"
          src="https://source.unsplash.com/random/?garden"
          className="h-full lg:max-h-[200px]"
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  fragment imageData on ImageSharp {
    gatsbyImageData(width: 396, placeholder: DOMINANT_COLOR, formats: [AUTO])
  }

  query ($language: String!, $id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        lang
        pinned
        shown
        slug

        name
        sector
        sample
        description
        color
        category
        featuredImage {
          childImageSharp {
            ...imageData
          }
        }
        secondaryImage {
          childImageSharp {
            ...imageData
          }
        }
        tertiaryImage {
          childImageSharp {
            ...imageData
          }
        }
        dimensions
        characteristics
        customizable
        customizableText
        benefits
        specifications
        composition
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
