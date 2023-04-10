import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { CheckCircleIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function LanguageSwitch({}: Props) {
  const [open, setOpen] = useState(false)
  const { languages, language, originalPath } = useI18next()

  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex w-full cursor-pointer items-center justify-center gap-x-0.5 rounded-sm bg-secondary/40 py-1 pl-3 pr-2 text-sm transition hover:bg-secondary/70 dark:bg-tertiary/50 dark:hover:bg-tertiary/70 md:gap-x-0 md:pl-3 md:pr-1.5"
      >
        <span className="block truncate uppercase tracking-wide">{language}</span>
        <ChevronUpDownIcon
          className="mt-[1px] h-[1.1rem] w-[1.1rem] text-gray-300 md:h-5 md:w-5"
          aria-hidden="true"
        />
      </button>
      {open ? (
        <ul className="absolute mt-2 w-full overflow-auto rounded bg-gray-50 py-1.5 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {languages.map((lang, langIdx) => {
            const active = language === lang
            return (
              <li
                key={langIdx}
                className={classNames(
                  'group relative z-50 cursor-pointer select-none py-1 px-2.5 text-sm transition hover:bg-primary/80 hover:text-white dark:hover:bg-tertiary/80 md:py-2 md:px-2.5 md:text-sm',
                  active
                    ? 'bg-primary/20 text-primary dark:bg-tertiary/20 dark:text-tertiary'
                    : 'text-gray-800'
                )}
              >
                <Link
                  to={originalPath}
                  language={lang}
                  className="flex items-center justify-start gap-x-1"
                >
                  <span
                    className={classNames(
                      'truncate uppercase group-hover:text-white',
                      active ? 'font-bold text-primary dark:text-tertiary' : 'font-normal'
                    )}
                  >
                    {lang}
                  </span>
                  {active ? (
                    <CheckCircleIcon
                      className="mt-0 h-4 w-4 text-primary group-hover:text-white dark:text-tertiary md:h-4 md:w-4"
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
