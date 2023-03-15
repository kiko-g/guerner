import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function LanguageSwitch({}: Props) {
  const [open, setOpen] = useState(false)
  const { languages, language, originalPath } = useI18next()

  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex w-full cursor-pointer items-center justify-center gap-x-0.5 rounded bg-black/40 py-1 pl-3 pr-2 text-sm shadow transition hover:bg-black/70 dark:bg-white/20 dark:hover:bg-white/40 md:gap-x-1 md:pl-3 md:pr-1.5"
      >
        <span className="block truncate uppercase tracking-wide">{language}</span>
        <ChevronUpDownIcon
          className="mt-[1px] h-[1.1rem] w-[1.1rem] text-gray-300 md:h-5 md:w-5"
          aria-hidden="true"
        />
      </button>
      {open ? (
        <ul
          className="absolute mt-2 w-full overflow-auto rounded bg-gray-50 py-1.5 
        text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {languages.map((lang, langIdx) => {
            const active = language === lang
            return (
              <li
                key={langIdx}
                className={classNames(
                  `group relative z-50 cursor-pointer select-none py-1 px-2.5 
                  text-sm transition hover:bg-teal-700 hover:text-white md:py-1.5
                  md:px-2.5 md:text-base`,
                  active ? 'bg-teal-100 text-teal-800' : 'text-gray-800'
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
                      active ? 'font-bold text-teal-700 ' : 'font-normal'
                    )}
                  >
                    {lang}
                  </span>
                  {active ? (
                    <CheckIcon
                      className="mt-0 h-4 w-4 text-teal-700 group-hover:text-white md:h-[1.1rem] md:w-[1.1rem]"
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
