import React from 'react'
import classNames from 'classnames'

type Props = {
  text: string
  alt?: boolean
}

export default function ButtonTranslate({ text, alt = false }: Props) {
  return (
    <button
      className={classNames(
        alt
          ? 'w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow transition hover:-translate-y-1 dark:text-tertiary sm:w-auto'
          : 'w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow transition hover:-translate-y-1 dark:bg-tertiary sm:w-auto',
      )}
    >
      {text}
    </button>
  )
}
