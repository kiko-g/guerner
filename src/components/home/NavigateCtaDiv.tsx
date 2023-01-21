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
    <Link to={link} className="group relative overflow-hidden bg-center">
      <img
        src={image}
        className="h-64 max-h-full w-full object-cover blur-xl
        transition duration-300 group-hover:blur-0 lg:h-96"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <div className="absolute h-full w-full bg-black/60 transition group-hover:bg-black/40" />

        <div
          className="z-50 flex h-full w-full items-center justify-center gap-x-2
          text-center font-lexend text-lg text-white font-normal opacity-80 
          duration-500 group-hover:opacity-100 lg:text-3xl lg:opacity-50"
        >
          <span className="transition hover:opacity-80 group-hover:translate-x-2">
            {actionText}
          </span>
          <ArrowLongRightIcon className="h-8 w-8 transition group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}

/*
export default function NavigateCtaDiv({ link, image, actionText }: Props) {
  return (
    <Link to={link} className="group relative bg-center">
      <img
        src={image}
        className="h-64 max-h-full w-full object-cover grayscale-[50%] transition 
        duration-300 group-hover:grayscale-0 lg:h-96"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <div
          className="absolute h-full w-full bg-primary/0 group-hover:animate-wipe
          group-hover:bg-primary/40 dark:bg-secondary/0 group-hover:dark:bg-secondary/40"
        />

        <div
          className="z-50 flex h-full w-full items-center justify-center gap-x-2
          text-center font-lexend text-lg font-normal opacity-80 
          duration-500 group-hover:opacity-100 lg:text-3xl lg:opacity-0"
        >
          <span className="transition hover:opacity-80 group-hover:animate-bounce">
            {actionText}
          </span>
          <ArrowLongRightIcon className="hidden h-8 w-8 group-hover:animate-bounce lg:flex" />
        </div>
      </div>
    </Link>
  )
}
*/
