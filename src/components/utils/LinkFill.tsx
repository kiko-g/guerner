import React from 'react'
import { Link } from 'gatsby'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {
  text: string
  link: string
}

export default function LinkFill({ text, link }: Props) {
  return (
    <Link
      to={link}
      className="group relative flex items-center justify-center gap-x-2 rounded-sm border-2 border-primary px-8 py-3"
    >
      <span className="absolute inset-y-0 left-0 w-[4px] bg-secondary/75 transition-all group-hover:w-full"></span>
      <span className="relative text-sm font-medium text-white transition-colors group-hover:text-white">
        {text}
      </span>
      <ArrowLongRightIcon className="z-20 inline-flex h-5 w-5 text-white transition" />
    </Link>
  )
}
