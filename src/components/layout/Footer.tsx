import React from 'react'
import { Link } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import classNames from 'classnames'

type Props = {
  title: string
  special?: boolean
}

export default function Footer({ title, special }: Props) {
  const { t } = useTranslation()

  const links = [
    {
      name: t('privacyPolicy'),
      route: '/policy',
    },
    {
      name: t('termsAndConditions'),
      route: '/terms',
    },
  ]

  return (
    <footer
      className={classNames(
        'z-10 flex flex-col px-8 py-12 text-sm text-white md:px-12 md:py-16 md:text-base',
        special
          ? 'bg-[radial-gradient(164.75%_100%_at_50%_0%,#2ddf6240_0%,#124842_48.73%)] dark:bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]'
          : 'bg-primary dark:bg-navy'
      )}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start gap-2 font-normal">
          <Link
            to={'/'}
            className="group flex items-center justify-center gap-x-4 transition hover:opacity-80"
          >
            <img
              alt={title}
              src="/images/icon.png"
              className="h-10 w-10 rounded-full bg-primary shadow-2xl drop-shadow-2xl"
            />
            <h3 className="text-2xl font-medium">Guerner & Irmãos S.A.</h3>
          </Link>
        </div>

        <div className="mt-4">
          <p className="text-sm tracking-tight text-gray-200 dark:text-gray-300">
            © {new Date().getFullYear()} Guerner & Irmãos S.A. All rights reserved.
          </p>
        </div>

        <ul className="mt-16 flex w-full flex-row flex-wrap items-center justify-center gap-4">
          {links.map((link, linkIdx) => (
            <li key={`link-${linkIdx}`}>
              <Link
                to={link.route}
                className="whitespace-nowrap text-center text-sm font-medium tracking-tight text-white transition hover:underline hover:opacity-80 md:text-base"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex gap-3">
          <li className="group opacity-80 transition hover:opacity-80">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kiko-g"
              className="flex w-full items-center justify-center gap-x-1 transition hover:opacity-60"
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
