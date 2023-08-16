import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { ProductFrontmatter } from '../../types'
import { GatsbyImage, IGatsbyImageData, StaticImage, getImage } from 'gatsby-plugin-image'
import { ArrowTopRightOnSquareIcon, PaintBrushIcon, StarIcon } from '@heroicons/react/24/solid'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {
  product: ProductFrontmatter
}

export default function Product({ product }: Props) {
  const { t } = useI18next()
  const route = `${product.lang}-${product.slug}`
  const showPinned = false
  const showSample = false
  const showUnsplashImage = false
  const showCharacteristics = false

  return (
    <li className="group">
      {/* Card body */}
      <Link title={product.name} to={route} className="relative block h-60 w-full overflow-hidden">
        {showUnsplashImage ? (
          <UnsplashImage product={product} key={`product-${product.name}`} />
        ) : (
          <CoverImage key={`product-${product.name}`} product={product} />
        )}

        {/* Floating top left */}
        <div className="absolute left-3 top-3 z-20 flex items-center justify-center gap-x-1.5">
          {product.pinned && showPinned ? (
            <div className="rounded-full bg-gradient-to-br from-teal-400 via-indigo-400 to-violet-700 p-1 shadow">
              <StarIcon className="h-4 w-4 text-white" />
            </div>
          ) : null}
        </div>

        {/* Floating top right */}
        <div className="absolute right-3 top-3 z-10 flex items-center justify-center gap-x-1.5">
          {showSample ? (
            product.sample ? (
              <div
                title={product.sample}
                className="rounded-md bg-gray-800 px-2 py-1 font-lexend text-xs font-light text-white shadow"
              >
                {product.sample}
              </div>
            ) : (
              <div className="rounded-md bg-gray-800 px-2 py-1 text-xs text-rose-500 shadow">
                N/A
              </div>
            )
          ) : null}
        </div>

        {/* Floating bottom right */}
        <div className="absolute bottom-2 right-4 z-10 flex items-center justify-center gap-x-1.5">
          {/* <span className="hidden text-xs font-normal text-white group-hover:flex">See more</span> */}
          <ArrowLongRightIcon className="h-5 w-5 text-white transition group-hover:-rotate-45 rounded-full group-hover:bg-black/20" />
        </div>
      </Link>

      {/* Card footer */}
      <Link
        to={route}
        className="mt-2 flex flex-col items-start justify-between space-y-1 truncate"
      >
        <p
          title={product.name}
          className="flex-1 self-stretch truncate text-sm font-normal capitalize leading-snug tracking-tighter text-gray-700 group-hover:overflow-visible group-hover:text-ellipsis group-hover:whitespace-normal dark:text-white"
        >
          {product.name}
        </p>
        {showCharacteristics ? (
          <p
            title={product.characteristics.join(', ')}
            className="truncate text-xs font-normal capitalize leading-snug tracking-tighter text-gray-500 dark:text-gray-400"
          >
            {product.characteristics.length === 0
              ? 'N/A'
              : product.characteristics.join(', ').slice(0, 40) +
                (product.characteristics.length > 40 ? '...' : '')}
          </p>
        ) : null}
      </Link>
    </li>
  )
}

function UnsplashImage({ product }: { product: ProductFrontmatter }) {
  return (
    <img
      loading="lazy"
      alt={`product-${product.name}`}
      src={`https://source.unsplash.com/random/?${encodeURIComponent(product.name)}`}
      className="duration-400 aspect-square h-full w-full object-cover transition group-hover:scale-110 group-hover:opacity-90"
    />
  )
}

function CoverImage({ product }: { product: ProductFrontmatter }) {
  const coverImage = getImage(product.featuredImage)

  return coverImage ? (
    <GatsbyImage
      alt={`product-${product.name}`}
      image={coverImage}
      className="duration-400 aspect-square h-full w-full object-cover transition group-hover:scale-110 group-hover:opacity-90"
    />
  ) : (
    <div className="aspect-square h-full w-full bg-primary transition hover:opacity-80 dark:bg-tertiary/50" />
  )
}
