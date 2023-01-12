import React from 'react'
import { Link } from 'gatsby'

type Props = {
  title: string
}

const Footer = ({ title }: Props) => {
  return (
    <footer className="z-10 flex flex-col bg-navy pt-0 text-sm text-white dark:bg-navy md:pt-2 md:text-base">
      <div className="mx-4 md:mx-8">
        <div className="flex items-center justify-between border-b py-3 md:py-4">
          {/* Left column */}
          <div className="flex flex-col items-start gap-y-4 md:gap-y-8">
            <Link to="/" className="flex items-center justify-center gap-x-2">
              <img className="h-12 w-12 rounded-full" src={'/images/avatar.png'} alt={title} />
              <h5 className="flex max-w-xs flex-col font-headings text-sm font-medium md:text-base md:font-bold">
                <span>Guerner &</span>
                <span>Irmãos S.A.</span>
              </h5>
            </Link>
          </div>

          {/* Right column */}
          <ul
            className="flex flex-col gap-y-0 text-right text-sm tracking-tight 
            md:gap-y-1 md:text-base md:tracking-normal"
          >
            <li>
              <Link to="/" className="transition hover:underline hover:opacity-80">
                Sobre nós
              </Link>
            </li>

            <li>
              <Link to="/" className="transition hover:underline hover:opacity-80">
                Localizações
              </Link>
            </li>

            <li>
              <Link to="/" className="transition hover:underline hover:opacity-80">
                Termos e Condições
              </Link>
            </li>

            <li>
              <Link to="/" className="transition hover:underline hover:opacity-80">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-y-1 py-2 md:flex-row md:gap-y-0 md:py-4">
          <span className="md:text-center">© 2022 {title}™</span>
          <span className="text-white/50">
            Made by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://kikogoncalves.com"
              className="font-bold transition-all hover:text-white hover:underline"
            >
              Francisco Gonçalves
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
