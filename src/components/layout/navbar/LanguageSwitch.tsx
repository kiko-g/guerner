import React, { useState } from 'react'
import clsx from 'clsx'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { CheckCircleIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function LanguageSwitch({}: Props) {
  const [open, setOpen] = useState(false)
  const { languages, language, originalPath } = useI18next()

  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex w-full cursor-pointer items-center justify-center gap-x-0.5 rounded-sm bg-secondary/40 py-1 pl-3 pr-2 text-sm transition hover:bg-secondary/70 lg:gap-x-0 lg:pl-3 lg:pr-1.5 dark:bg-tertiary/50 dark:hover:bg-tertiary/70"
      >
        <span className="block truncate uppercase tracking-wide">{language}</span>
        <ChevronUpDownIcon className="mt-[1px] h-[1.1rem] w-[1.1rem] text-gray-300 lg:h-5 lg:w-5" aria-hidden="true" />
      </button>
      {open ? (
        <ul className="absolute mt-2 w-full overflow-auto rounded bg-white py-1.5 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {languages.map((lang, langIdx) => {
            const active = language === lang
            return (
              <li
                key={langIdx}
                className={clsx(
                  'group relative z-50 cursor-pointer select-none px-2.5 py-1 text-sm transition hover:bg-primary/80 hover:text-white lg:px-2.5 lg:py-2 lg:text-sm dark:hover:bg-tertiary/80',
                  active ? 'bg-primary/10 text-primary dark:bg-tertiary/10 dark:text-tertiary' : 'text-gray-800',
                )}
              >
                <Link
                  to={originalPath}
                  language={lang}
                  placeholder="Language Switch"
                  className="flex items-center justify-start gap-x-1"
                >
                  <span
                    className={clsx(
                      'truncate uppercase group-hover:text-white',
                      active ? 'font-bold text-primary dark:text-tertiary' : 'font-normal',
                    )}
                  >
                    {lang}
                  </span>
                  {active ? (
                    <CheckCircleIcon
                      className="mt-0 h-4 w-4 text-primary group-hover:text-white lg:h-4 lg:w-4 dark:text-tertiary"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
