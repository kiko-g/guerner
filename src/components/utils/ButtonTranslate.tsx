import React from 'react'
import clsx from 'clsx'

type Props = {
  text: string
  alt?: boolean
}

export default function ButtonTranslate({ text, alt = false }: Props) {
  return (
    <button
      className={clsx(
        alt
          ? 'w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow transition hover:-translate-y-1 sm:w-auto dark:text-tertiary'
          : 'w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow transition hover:-translate-y-1 sm:w-auto dark:bg-tertiary',
      )}
    >
      {text}
    </button>
  )
}
