import React from 'react'
import { routes, translations } from '../../config'
import { Link } from 'gatsby'

type Props = {
  title: string
}

const Footer = ({ title }: Props) => {
  const links = [
    {
      name: translations.pt.phrases.footer.terms,
      route: routes.pt.info.termsAndConditions,
    },
    {
      name: translations.pt.phrases.footer.privacy,
      route: routes.pt.info.privacyPolicy,
    },
  ]

  return (
    <footer
      className="z-10 flex flex-col border-t border-transparent bg-navy 
      text-sm text-white dark:border-white/10 dark:bg-navy md:text-base"
    >
      <div className="mx-4 py-1 md:mx-8 md:py-2">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Left column */}
          <div className="flex flex-col items-start gap-y-4 md:gap-y-8">
            <Link to={routes.pt.home} className="group flex items-center justify-center gap-x-3">
              <img className="h-12 w-12 rounded-full" src={'/images/icon.png'} alt={title} />
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
                  className="transition hover:text-secondary hover:underline dark:hover:text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-y-1 py-2 md:flex-row md:gap-y-0 md:py-2">
          <span className="md:text-center">© 2022 {title}™</span>
          <span className="text-white/25">
            Made by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kiko-g"
              className="font-bold transition-all hover:text-blue-400 hover:underline"
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
