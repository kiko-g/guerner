import React from 'react'
import { Link } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {
  title: string
}

export default function Footer({ title }: Props) {
  const { t } = useI18next()

  const links = [
    {
      name: t('termsAndConditions'),
      route: 'info/terms-and-conditions',
    },
    {
      name: t('privacyPolicy'),
      route: 'info/politica-privacidade',
    },
  ]

  return (
    <footer className="z-10 flex flex-col text-sm text-white border-t border-transparent bg-navy dark:border-white/10 dark:bg-navy md:text-base">
      <div className="py-1 mx-4 md:mx-8 md:py-2">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Left column */}
          <div className="flex flex-col items-start gap-y-4 md:gap-y-8">
            <Link to={'/'} className="flex items-center justify-center group gap-x-3">
              <img
                alt={title}
                src={'/images/icon.png'}
                className="h-12 w-12 rounded-full bg-primary p-0.5 shadow"
              />
              <h5 className="flex flex-col max-w-xs text-sm font-medium transition font-headings group-hover:underline md:text-base md:font-bold">
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

        <div className="flex flex-col items-center justify-between py-2 gap-y-1 md:flex-row md:gap-y-0 md:py-2">
          <span className="md:text-center">
            © {new Date().getFullYear()} {title}™
          </span>
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
