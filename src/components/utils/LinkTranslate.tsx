import React from 'react'
import clsx from 'clsx'
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
      className={clsx(
        `group flex w-full items-center justify-center gap-x-1 rounded border-2 px-8 py-3 text-sm 
        font-medium shadow transition hover:-translate-y-1 sm:w-auto lg:gap-x-2`,
        alt
          ? `border-white bg-white/70 text-primary hover:bg-white dark:bg-white/30 dark:text-white dark:hover:bg-white dark:hover:text-tertiary`
          : `border-secondary bg-secondary/70 text-white hover:bg-secondary dark:border-tertiary 
          dark:bg-tertiary/25 dark:text-white dark:hover:bg-tertiary`,
      )}
    >
      <span>{text}</span>
      {arrow ? <ArrowLongRightIcon className="mt-[1px] h-5 w-5 opacity-25 transition group-hover:opacity-100" /> : null}
    </Link>
  )
}
