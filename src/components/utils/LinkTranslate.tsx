import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

type Props = {
  text: string
  link: string
  alt?: boolean
}

export default function LinkTranslate({ text, link, alt = false }: Props) {
  return (
    <Link
      to={link}
      className={classNames(
        alt
          ? 'w-full rounded bg-white/90 px-12 py-3 text-sm font-medium text-primary shadow transition hover:-translate-y-1 dark:text-primary sm:w-auto'
          : 'w-full rounded bg-primary/90 px-12 py-3 text-sm font-medium text-white shadow transition hover:-translate-y-1 dark:bg-secondary/90 sm:w-auto'
      )}
    >
      {text}
    </Link>
  )
}
