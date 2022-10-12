import { Link } from 'gatsby'
import React from 'react'
import NavbarCondensed from './NavbarCondensed'

type Props = {
  title: string
  location: string
}

const Hero = ({ title, location }: Props) => {
  return (
    <div className="m-0 h-screen w-screen p-0">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
        {/* Heading and gradient */}
        <div className="hidden h-full w-full flex-col bg-primary dark:bg-dark py-12 px-12 lg:flex">
          <Link to="/" className="flex items-center justify-start gap-x-4 p-2 transition hover:opacity-80">
            <img className="h-16 w-16 rounded-full shadow" src={'/images/avatar.png'} alt={title} />
            <h2 className="font-headings text-3xl font-bold text-white">{title ? title : 'Unknown'}</h2>
          </Link>

          <div className="my-auto max-w-sm text-white">
            <p className="text-5xl font-bold">Guerner & Irmãos S.A.</p>
            <p className="text-lg font-normal">Texto curto sobre a empresa.</p>
          </div>
        </div>

        {/* Navbar and images */}
        <div className="h-full w-full bg-inherit">
          <NavbarCondensed location={location} />
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="overview"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
