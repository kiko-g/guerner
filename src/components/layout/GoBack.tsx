import React from 'react'
import { Link } from 'gatsby'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'

type Props = {
  url: string
  text?: string
}

export default function GoBack({ url, text }: Props) {
  return (
    <Link
      to={url}
      className="flex items-center justify-center gap-x-2 
      text-primary transition hover:opacity-80 dark:text-white"
    >
      <ArrowSmallLeftIcon className="h-5 w-5" />
      <span className="font-bold">{text === undefined ? 'Voltar' : text}</span>
    </Link>
  )
}
