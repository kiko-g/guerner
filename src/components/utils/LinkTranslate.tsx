import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {
  text: string
  link: string
  alt?: boolean
  arrow?: boolean
}

export default function LinkTranslate({ text, link, alt = false, arrow = false }: Props) {
  return (
    <Link
      to={link}
      className={classNames(
        `group flex w-full items-center justify-center gap-x-1 rounded border-2 px-8 py-3 text-sm 
        font-medium shadow transition hover:-translate-y-1 sm:w-auto lg:gap-x-2`,
        alt
          ? `border-white bg-white/80 text-primary hover:bg-white dark:border-black 
          dark:bg-black/50 dark:text-white dark:hover:bg-black/90`
          : `border-primary bg-primary/80 text-white hover:bg-primary dark:border-secondary 
          dark:bg-secondary/60 dark:hover:bg-secondary`
      )}
    >
      <span>{text}</span>
      {arrow ? (
        <ArrowLongRightIcon className="mt-[1px] h-5 w-5 opacity-25 transition group-hover:opacity-100" />
      ) : null}
    </Link>
  )
}
