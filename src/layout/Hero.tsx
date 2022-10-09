import React from 'react'
import NavbarCondensed from './NavbarCondensed'

type Props = {
  title: string
  location: string
}

const Hero = ({ title, location }: Props) => {
  return (
    <div className="m-0 h-screen w-screen p-0">
      <div className="grid h-full w-full grid-cols-2">
        {/* Heading and gradient */}
        <div className="flex flex-col h-full w-full bg-teal-900 py-12 px-12">
          <div className="flex items-center justify-start gap-x-4 p-2">
            <img className="h-16 w-16 rounded-full shadow" src={'/images/avatar.png'} alt="Francisco Gonçalves" />
            <h2 className="font-headings text-3xl font-bold text-white">{title ? title : 'Unknown'}</h2>
          </div>

          <div className="my-auto">
            <p className="text-5xl font-bold text-white max-w-sm">Guerner & Irmãos S.A.</p>
          </div>
        </div>

        {/* Navbar and images */}
        <div className="h-full w-full bg-inherit">
          <NavbarCondensed location={location} />
        </div>
      </div>
    </div>
  )
}

export default Hero
