import React from 'react'
import config from '../../config'
import translations from '../../../static/translations.json'
import { Link } from 'gatsby'

type Props = {
  title: string
}

const Footer = ({ title }: Props) => {
  const links = [
    {
      name: translations.pt.phrases.footer['Terms and Conditions'],
      route: config.pt.routes.footer.termsAndConditions,
    },
    {
      name: translations.pt.phrases.footer['Privacy Policy'],
      route: config.pt.routes.footer.privacyPolicy,
    },
  ]

  return (
    <footer className="z-10 flex flex-col bg-navy text-sm text-white dark:bg-navy md:text-base">
      <div className="mx-4 py-1 md:mx-8 md:py-2">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Left column */}
          <div className="flex flex-col items-start gap-y-4 md:gap-y-8">
            <Link
              to={config.pt.routes.home}
              className="group flex items-center justify-center gap-x-2"
            >
              <img className="h-12 w-12 rounded-full" src={'/images/avatar.png'} alt={title} />
              <h5
                className="flex max-w-xs flex-col font-headings text-sm font-medium 
                transition group-hover:underline md:text-base md:font-bold"
              >
                <span>Guerner &</span>
                <span>Irmãos S.A.</span>
              </h5>
            </Link>
          </div>

          {/* Right column */}
          <ul
            className="flex flex-col gap-y-0 text-right text-sm font-normal 
            tracking-tight md:gap-y-0.5 md:text-base md:tracking-tight"
          >
            {links.map((link, linkIdx) => (
              <li key={`link-${linkIdx}`}>
                <Link
                  to={link.route}
                  className="transition hover:text-tertiary hover:underline dark:hover:text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-y-1 py-2 md:flex-row md:gap-y-0 md:py-2">
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
