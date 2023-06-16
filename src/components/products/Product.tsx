import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { ProductFrontmatter } from '../../types'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { ArrowTopRightOnSquareIcon, PaintBrushIcon, StarIcon } from '@heroicons/react/24/solid'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {
  product: ProductFrontmatter
}

export default function Product({ product }: Props) {
  const { t } = useI18next()
  const coverImage = getImage(product.featuredImage)

  return (
    <li className="group relative">
      {/* Floating top left */}
      <div className="absolute left-3 top-3 z-10 flex items-center justify-center gap-x-1.5">
        {product.color ? (
          <div className={classNames('rounded-full p-1 shadow', product.color)}>
            <PaintBrushIcon className="h-4 w-4 text-white" />
          </div>
        ) : null}

        {product.pinned ? (
          <div className="rounded-full bg-gradient-to-br from-teal-400 via-indigo-400 to-violet-700 p-1 shadow">
            <StarIcon className="h-4 w-4 text-white" />
          </div>
        ) : null}
      </div>

      {/* Floating top right */}
      <div className="absolute right-3 top-3 z-10 flex items-center justify-center gap-x-1.5">
        {product.sample ? (
          <div className="rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow">
            {product.sample}
          </div>
        ) : (
          <div className="rounded-md bg-gray-800 px-2 py-1 text-xs text-rose-500 shadow">N/A</div>
        )}
      </div>

      {/* Card body */}
      <Link to={product.slug} className="block h-60 w-full overflow-hidden rounded-t-xl">
        {coverImage ? (
          <GatsbyImage
            alt={`product-${product.name}`}
            image={coverImage}
            className="duration-400 aspect-square h-full w-full object-cover transition hover:scale-110 hover:opacity-80"
          />
        ) : (
          <div className="aspect-square h-full w-full bg-primary transition hover:opacity-80 dark:bg-tertiary/50" />
        )}
      </Link>

      {/* Card footer */}
      <div
        className="flex w-full flex-col gap-y-2 rounded-b-xl bg-white 
          px-3.5 py-2 font-normal dark:bg-white/10"
      >
        {/* Top line */}
        <div className="flex items-center justify-between text-sm font-bold">
          <Link
            to={product.slug}
            className="transition hover:text-primary hover:underline hover:opacity-90 dark:hover:text-secondary"
          >
            {t(product.name)}
          </Link>
          <Link to={product.slug}>
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary transition hover:opacity-75 dark:text-tertiary" />
          </Link>
        </div>
      </div>
    </li>
  )
}
