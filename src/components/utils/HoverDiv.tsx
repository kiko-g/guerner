import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function HoverDiv({ children }: Props) {
  return (
    <div className="group absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-gradient-to-b from-black/0 via-black/0 to-black/0 object-cover hover:from-black/40 hover:via-black/60 hover:to-black/80 hover:transition-all">
      <div className="hidden transition group-hover:flex">{children}</div>
    </div>
  )
}
