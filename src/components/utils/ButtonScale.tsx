import React from 'react'

type Props = {
  text: string
}

export default function ButtonScale({ text }: Props) {
  return (
    <button
      className="group flex items-center justify-center gap-x-2 rounded bg-primary px-12 py-3 
      text-sm font-medium text-white shadow transition hover:scale-110 hover:opacity-90 dark:bg-primary"
    >
      <span>{text}</span>
    </button>
  )
}
