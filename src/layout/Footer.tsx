import React from 'react'
import { socials } from '../utils'
import { Link } from 'gatsby'

type Props = {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => {
  return (
    <footer className="z-10 flex flex-col bg-primary text-sm text-white dark:bg-darker md:text-base">
      <div className="mx-4 md:mx-24">
        <div className="flex items-center justify-between border-b py-4 md:py-8">
          <div className="flex flex-col items-start gap-y-4 md:gap-y-8">
            <Link to="/" className="flex items-center justify-center gap-x-2">
              <img className="h-12 w-12 rounded-full" src={'/images/avatar.png'} alt={siteTitle} />
              <h5 className="flex max-w-xs flex-col font-headings text-sm font-medium md:text-base md:font-bold">
                <span>Guerner &</span>
                <span>Irmãos S.A.</span>
              </h5>
            </Link>
            <div className="flex space-x-1 sm:justify-center md:mt-0 md:space-x-2">
              {socials
                .filter(social => social.shown)
                .map((social, socialIdx) => (
                  <a
                    target="_blank"
                    href={social.url}
                    key={`social-${socialIdx}`}
                    aria-labelledby={social.label}
                    className={`transition ${social.label}`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox={social.viewBox ? social.viewBox : '0 0 24 24'}
                      aria-hidden="true"
                    >
                      {social.svg.map((d, dIdx) => (
                        <path fillRule="evenodd" d={d} clipRule="evenodd" key={`social-${socialIdx}-svg-${dIdx}`} />
                      ))}
                    </svg>
                  </a>
                ))}
            </div>
          </div>

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

        <div className="flex flex-col items-center justify-between gap-y-2 py-4 md:flex-row md:gap-y-0 md:py-8">
          <span className="sm:text-center">© 2022 {siteTitle}™</span>
          <span className="text-secondary">
            Made by{' '}
            <a href="https://kikogoncalves.com" className="font-bold transition-all hover:underline hover:opacity-80">
              Francisco Gonçalves
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
