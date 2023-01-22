import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { translations } from '../../config'
import { Category, Color } from '../../types'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { useLanguage } from '../../hooks/useLanguageContext'
import { ArrowTopRightOnSquareIcon, PaintBrushIcon, StarIcon } from '@heroicons/react/24/solid'

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
  const { language } = useLanguage()
  const coverImage = getImage(product.featuredImage)
  console.log(product.name, product.featuredImage, 1)

  return (
    <li className="group relative">
      {/* Floating top left */}
      <div className="absolute top-3 left-3 z-10 flex items-center justify-center gap-x-1.5">
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
      <div className="absolute top-3 right-3 z-10 flex items-center justify-center gap-x-1.5">
        {product.category ? (
          <div className="rounded-md bg-slate-800 px-2 py-1 text-xs text-white shadow">
            {translations[language].category[product.category]}
          </div>
        ) : (
          <div className="rounded-md bg-slate-800 px-2 py-1 text-xs text-rose-500 shadow">N/A</div>
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
          <div className="aspect-square h-full w-full bg-primary transition hover:opacity-80 dark:bg-secondary/50" />
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
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-primary transition hover:opacity-75 dark:text-secondary" />
          </Link>
        </div>
      </div>
    </li>
  )
}
