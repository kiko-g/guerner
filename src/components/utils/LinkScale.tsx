import React from 'react'
import { Link } from 'gatsby'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {
  text: string
  link: string
  nav?: boolean
  light?: boolean
}

export default function LinkScale({ text, link, nav = false, light = false }: Props) {
  return (
    <Link
      to={link}
      className="group flex items-center justify-center gap-x-2 rounded bg-primary px-12 py-3 
      text-sm font-medium text-white shadow transition hover:scale-110 hover:opacity-90 dark:bg-primary"
    >
      <span>{text}</span>
      {nav ? <ArrowLongRightIcon className="mt-[1px] inline-flex h-5 w-5 transition" /> : null}
    </Link>
  )
}
