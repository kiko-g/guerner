import React from 'react'
import { Link } from 'gatsby'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

type Props = {
  link: string
  image: string
  actionText: string
}

export default function NavigateCtaDiv({ link, image, actionText }: Props) {
  return (
    <Link to={link} className="group relative bg-center">
      <img
        src={image}
        className="h-full grayscale-[60%] transition duration-300 group-hover:grayscale-0"
      />
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
        <div
          className="z-50 mx-auto flex h-full w-full items-center justify-center gap-x-2
              font-lexend text-3xl font-normal text-white opacity-30 duration-500 group-hover:opacity-100"
        >
          <span className="transition hover:underline hover:opacity-80">{actionText}</span>
          <ArrowLongRightIcon className="h-8 w-8" />
        </div>
      </div>
    </Link>
  )
}
