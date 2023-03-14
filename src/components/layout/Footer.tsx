import React from 'react'
import { Link } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

type Props = {
  title: string
}

export default function Footer({ title }: Props) {
  const { t } = useTranslation()

  const links = [
    {
      name: t('termsAndConditions'),
      emoji: '📗',
      route: 'info/terms-and-conditions',
    },
    {
      name: t('privacyPolicy'),
      emoji: '👨‍⚖️',
      route: 'info/politica-privacidade',
    },
  ]

  return (
    <footer className="z-10 flex flex-col border-t border-transparent bg-navy px-4 py-4 text-sm text-white dark:border-white/10 dark:bg-navy md:px-8 md:py-8 md:text-base">
      <div className="flex items-end justify-between py-2 md:py-3">
        {/* Left column */}
        <div className="flex flex-col items-start gap-2 font-normal">
          <Link
            to={'/'}
            className="group flex items-center justify-center gap-x-3 rounded px-4 py-4 transition hover:bg-white/10"
          >
            <img
              alt={title}
              src={'/images/icon.png'}
              className="h-16 w-16 rounded-full bg-primary p-0.5 shadow"
            />
            <div className="flex flex-col gap-0.5">
              <span>© {new Date().getFullYear()}</span>
              <span className="flex flex-col text-sm font-normal transition group-hover:underline md:text-base">
                Guerner & Irmãos S.A.
              </span>
            </div>
          </Link>
        </div>

        {/* Right column */}
        <ul
          className="flex flex-col gap-y-1 text-right text-sm font-normal 
            tracking-tight md:gap-y-3 md:text-base md:tracking-tight"
        >
          {links.map((link, linkIdx) => (
            <li
              key={`link-${linkIdx}`}
              className="group rounded border border-secondary/25 bg-secondary/25 transition hover:border-secondary hover:bg-secondary/50"
            >
              <Link
                to={link.route}
                className="flex w-full items-center justify-center gap-x-1 px-4 py-2 transition"
              >
                <span className="text-white">{link.name}</span>
                <span>{link.emoji}</span>
              </Link>
            </li>
          ))}
          <li className="group rounded border border-blue-500/25 bg-blue-500/25 transition hover:border-blue-500 hover:bg-blue-500/50">
            <Link
              target="_blank"
              rel="noreferrer"
              to="https://github.com/kiko-g"
              className="flex w-full items-center justify-center gap-x-1 px-4 py-2 transition"
            >
              <span className="lowercase text-gray-400">{t('madeBy')} </span>
              <span className="font-bold text-white">Francisco Gonçalves</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
