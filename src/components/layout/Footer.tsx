import React from 'react'
import { Link } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

type Props = {
  title: string
  special?: boolean
}

export default function Footer({ title, special }: Props) {
  const { t } = useTranslation()

  const links = [
    {
      name: t('privacyPolicy'),
      emoji: '👨‍⚖️',
      route: '/policy',
    },
    {
      name: t('termsAndConditions'),
      emoji: '📗',
      route: '/terms',
    },
  ]

  return (
    <footer
      className={`z-10 flex flex-col bg-gray-900 px-4 py-8 text-sm text-white ${
        special ? 'dark:bg-slate-900/80' : 'dark:bg-navy'
      } md:px-8 md:py-8 md:text-base`}
    >
      <div className="flex flex-col items-center justify-center gap-8 py-2 md:flex-row md:items-end md:justify-between md:py-3">
        {/* Left column */}
        <div className="order-2 flex flex-col items-start gap-2 font-normal md:order-1">
          <Link
            to={'/'}
            className="group flex items-center justify-center gap-x-4 rounded bg-teal-500/10 px-4 py-4 transition hover:bg-teal-500/20"
          >
            <img
              alt={title}
              src={'/images/icon.png'}
              className="h-12 w-12 rounded-full bg-primary p-0.5 shadow"
            />
            <div className="flex flex-col gap-0.5">
              <span>© {new Date().getFullYear()}</span>
              <span className="flex flex-col text-sm font-normal transition md:text-base">
                Guerner & Irmãos S.A.
              </span>
            </div>
          </Link>
        </div>

        {/* Right column */}
        <ul className="order-1 flex flex-col gap-y-2 text-right text-sm font-normal tracking-tight md:order-2 md:gap-y-3 md:text-base md:tracking-tight">
          {links.map((link, linkIdx) => (
            <li
              key={`link-${linkIdx}`}
              className="group rounded border border-secondary/50 bg-secondary/25 transition hover:border-secondary hover:bg-secondary/50"
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
          <li className="group rounded border border-blue-500/50 bg-blue-500/25 transition hover:border-blue-500 hover:bg-blue-500/50">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kiko-g"
              className="flex w-full items-center justify-center gap-x-1 px-4 py-2 transition"
            >
              <span className="lowercase text-gray-400">{t('madeBy')} </span>
              <span className="font-bold text-white">Francisco Gonçalves</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
