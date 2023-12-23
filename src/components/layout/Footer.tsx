import React from 'react'
import { Link } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import classNames from 'classnames'

type Props = {
  title: string
}

export default function Footer({ title }: Props) {
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
    <footer className="z-10 flex flex-col bg-navy px-8 py-8 text-sm text-white dark:bg-gray-800 lg:px-12 lg:py-12 lg:text-base">
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
            <h3 className="text-center text-2xl font-medium tracking-tighter lg:tracking-normal">
              Guerner & Irmãos S.A.
            </h3>
          </Link>
        </div>

        <div className="mt-4">
          <p className="text-center text-sm tracking-tight text-gray-200 dark:text-gray-300">
            © {new Date().getFullYear()} Guerner & Irmãos S.A. All rights reserved.
          </p>
        </div>

        <ul className="mt-16 flex w-full flex-col flex-wrap items-center justify-center gap-2 lg:flex-row lg:gap-4">
          {links.map((link, linkIdx) => (
            <li key={`link-${linkIdx}`}>
              <Link
                to={link.route}
                className="whitespace-nowrap text-center text-sm font-medium tracking-tight text-white transition hover:underline hover:opacity-80 lg:text-base"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex gap-3 lg:mt-4">
          <li className="group text-white opacity-60 transition hover:text-blue-400 hover:opacity-100">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kiko-g"
              className="flex w-full items-center justify-center gap-x-1 transition hover:opacity-60"
            >
              <span className="lowercase text-gray-400">{t('madeBy')} </span>
              <span className="font-bold">Francisco Gonçalves</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
