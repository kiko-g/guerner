import React from 'react'
import { socials } from '../utils'
import { Link } from 'gatsby'

type Props = {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => {
  return (
    <footer className="z-10 flex flex-col bg-primary text-sm text-white md:text-base">
      <div className="mx-24">
        <div className="flex items-center justify-between border-b py-4 md:py-8">
          <div className="flex flex-col items-start gap-y-8">
            <Link to="/">
              <img className="h-12 w-12 rounded-full" src={'/images/avatar.png'} alt={siteTitle} />
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

          <ul className="flex flex-col gap-y-1 text-right">
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
                Outras coisas
              </Link>
            </li>

            <li>
              <Link to="/" className="transition hover:underline hover:opacity-80">
                Mais cenas
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between py-4 md:py-8">
          <span className="sm:text-center">© 2022 {siteTitle}™</span>
          <ul className="flex gap-x-8">
            <Link to="/" className="transition hover:underline hover:opacity-80">
              Política de Privacidade
            </Link>
            <Link to="/" className="transition hover:underline hover:opacity-80">
              Termos e Condições
            </Link>
          </ul>
          <span className="text-secondary">
            Made by{' '}
            <a
              href="https://kikogoncalves.com"
              className="font-bold transition-all hover:underline hover:opacity-80"
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
