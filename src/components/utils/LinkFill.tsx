import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {
  text: string
  link: string
  light?: boolean
}

export default function LinkFill({ text, link, light = false }: Props) {
  return (
    <Link
      to={link}
      className={classNames(
        'group relative flex items-center justify-center gap-x-2 rounded-sm border-2 border-primary px-8 py-3',
        light ? 'border-tertiary dark:border-tertiary' : 'border-primary dark:border-tertiary'
      )}
    >
      <span className="absolute inset-y-0 left-0 w-[4px] bg-tertiary/60 transition-all group-hover:w-full dark:bg-tertiary/60"></span>
      <span className="relative text-sm font-medium text-white transition-colors group-hover:text-white">
        {text}
      </span>
      <ArrowLongRightIcon className="z-20 mt-[1px] inline-flex h-5 w-5 text-white transition" />
    </Link>
  )
}
