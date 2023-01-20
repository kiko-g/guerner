import React from 'react'

type Props = {
  text: string
}

export default function ButtonFill({ text }: Props) {
  return (
    <button className="group relative inline-block overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring">
      <span className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full"></span>

      <span className="relative text-sm font-medium text-primary transition-colors group-hover:text-white">
        {text}
      </span>
    </button>
  )
}
