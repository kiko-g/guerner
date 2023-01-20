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
        className="h-full grayscale-[40%] transition duration-300 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <div
          className="absolute h-full w-full bg-primary/0 group-hover:animate-wipe
          group-hover:bg-primary/40 dark:bg-secondary/0 group-hover:dark:bg-secondary/40"
        />

        <div
          className="z-50 mx-auto flex h-full w-full items-center justify-center gap-x-2
          font-lexend text-xl font-normal text-white opacity-30 duration-500 group-hover:opacity-100 lg:text-3xl"
        >
          <span className="transition hover:opacity-80 group-hover:animate-bounce">
            {actionText}
          </span>
          <ArrowLongRightIcon className="h-8 w-8 group-hover:animate-bounce" />
        </div>
      </div>
    </Link>
  )
}
