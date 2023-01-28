import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { Category, Color } from '../../types'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { ArrowTopRightOnSquareIcon, PaintBrushIcon, StarIcon } from '@heroicons/react/24/solid'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Frontmatter = {
  lang: string
  name: string
  slug: string
  pinned: boolean
  color: Color
  category: Category
  featuredImage: IGatsbyImageData
}

type Props = {
  product: Frontmatter
}

export default function Product({ product }: Props) {
  const { t } = useI18next()
  const coverImage = getImage(product.featuredImage)

  return (
    <li className="relative group">
      {/* Floating top left */}
      <div className="absolute top-3 left-3 z-10 flex items-center justify-center gap-x-1.5">
        {product.color ? (
          <div className={classNames('rounded-full p-1 shadow', product.color)}>
            <PaintBrushIcon className="w-4 h-4 text-white" />
          </div>
        ) : null}

        {product.pinned ? (
          <div className="p-1 rounded-full shadow bg-gradient-to-br from-teal-400 via-indigo-400 to-violet-700">
            <StarIcon className="w-4 h-4 text-white" />
          </div>
        ) : null}
      </div>

      {/* Floating top right */}
      <div className="absolute top-3 right-3 z-10 flex items-center justify-center gap-x-1.5">
        {product.category ? (
          <div className="px-2 py-1 text-xs text-white rounded-md shadow bg-slate-800">
            {t(`categories.${product.category}`)}
          </div>
        ) : (
          <div className="px-2 py-1 text-xs rounded-md shadow bg-slate-800 text-rose-500">N/A</div>
        )}
      </div>

      {/* Card body */}
      <Link to={product.slug} className="block w-full overflow-hidden h-60 rounded-t-xl">
        {coverImage ? (
          <GatsbyImage
            alt={`product-${product.name}`}
            image={coverImage}
            className="object-cover w-full h-full transition duration-400 aspect-square hover:scale-110 hover:opacity-80"
          />
        ) : (
          <div className="w-full h-full transition aspect-square bg-primary hover:opacity-80 dark:bg-secondary/50" />
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
            {product.name}
          </Link>
          <Link to={product.slug}>
            <ArrowTopRightOnSquareIcon className="w-6 h-6 transition text-primary hover:opacity-75 dark:text-secondary" />
          </Link>
        </div>
      </div>
    </li>
  )
}
