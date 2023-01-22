import React from 'react'
import { routes, translations } from '../../config'
import { Link } from 'gatsby'
import { useLanguage } from '../../hooks/useLanguageContext'

type Props = {
  title: string
}

export default function Footer({ title }: Props) {
  const { language } = useLanguage()

  const links = [
    {
      name: translations[language].footer.terms,
      route: routes[language].info.termsAndConditions,
    },
    {
      name: translations[language].footer.privacy,
      route: routes[language].info.privacyPolicy,
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
            <Link
              to={routes[language].home}
              className="group flex items-center justify-center gap-x-3"
            >
              <img
                alt={title}
                src={'/images/icon.png'}
                className="h-12 w-12 rounded-full bg-primary p-0.5 shadow"
              />
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
