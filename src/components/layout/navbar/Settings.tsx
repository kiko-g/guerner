import React from 'react'
import classNames from 'classnames'
import useDarkMode from '../../../hooks/useDarkMode'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CheckCircleIcon, Cog8ToothIcon as Cog8ToothIconSolid } from '@heroicons/react/24/solid'
import {
  ChevronDownIcon,
  Cog8ToothIcon as Cog8ToothIconOutline,
  MinusIcon,
} from '@heroicons/react/24/outline'

export default function Settings() {
  return (
    <Popover className="relative h-7 w-7">
      {({ open }) => (
        <>
          <Popover.Button>
            {open ? (
              <Cog8ToothIconSolid className="h-full w-full" />
            ) : (
              <Cog8ToothIconOutline className="h-full w-full" />
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-md transform px-4 sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
                <div className="relative flex flex-col gap-2 bg-white p-4 dark:bg-slate-800">
                  <LanguageSwitcher />
                  <DarkModeToggler />
                  <AnalyticsLink />
                </div>
                <div className="bg-slate-100 p-4 dark:bg-slate-700">
                  <Feedback />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

function LanguageSwitcher() {
  const [open, setOpen] = React.useState(false)
  const { t, languages, language, originalPath } = useI18next()

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-700"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="48" height="48" rx="8" className="fill-[#ecfdf5] dark:fill-[#e9fff5]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth={0}
              viewBox="-8 -8 40 40"
              className="fill-[#10b981] dark:fill-tertiary"
            >
              <path
                fillRule="evenodd"
                d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z"
                clipRule="evenodd"
              />
            </svg>
          </svg>
        </div>
        <div className="ml-2 flex w-full items-center justify-between px-2">
          <div className="flex flex-col">
            <p className="text-left text-sm font-medium text-gray-900 dark:text-white">
              {t('selectLang')}
            </p>
            <p className="text-left text-sm text-gray-500 dark:text-gray-300">
              {t('currentLang')} <span className="uppercase">{language}</span>
            </p>
          </div>
          {open ? (
            <MinusIcon className="h-5 w-5 text-gray-900 dark:text-white" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-900 dark:text-white" />
          )}
        </div>
      </button>

      {open ? (
        <ul className="mt-1 w-full max-w-[6rem] self-end overflow-auto rounded bg-slate-200 py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {languages.map((lang, langIdx) => {
            const active = language === lang
            return (
              <li
                key={langIdx}
                className={classNames(
                  'group relative z-50 cursor-pointer select-none px-2.5 py-1 text-sm transition hover:bg-primary/80 hover:text-white dark:hover:bg-tertiary/80 md:px-2 md:py-1 md:text-sm',
                  active
                    ? 'bg-primary/10 text-primary dark:bg-tertiary/10 dark:text-tertiary'
                    : 'text-gray-800'
                )}
              >
                <Link
                  to={originalPath}
                  language={lang}
                  className="flex items-center justify-between gap-x-1"
                >
                  <span
                    className={classNames(
                      'truncate uppercase group-hover:text-white',
                      active ? 'text-primary dark:text-tertiary' : 'font-normal'
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

function DarkModeToggler() {
  const [enabled, setEnabled] = useDarkMode()
  const { t } = useI18next()

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-700"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="8" className="fill-[#ecfdf5] dark:fill-[#e9fff5]" />
          {enabled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth={0}
              viewBox="-6 -6 36 36"
              className="fill-[#10b981] stroke-[#10b981] dark:fill-tertiary dark:stroke-tertiary"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth={0}
              viewBox="-6 -6 36 36"
              className="fill-[#10b981] stroke-[#10b981] dark:fill-tertiary dark:stroke-tertiary"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          )}
        </svg>
      </div>
      <div className="ml-4">
        <p className="text-left text-sm font-medium text-gray-900 dark:text-white">
          {t('darkMode')}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {enabled ? t('enabled') : t('disabled')}
        </p>
      </div>
    </button>
  )
}

function AnalyticsLink() {
  return (
    <Link
      to="#"
      className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-700"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="8" className="fill-[#ecfdf5] dark:fill-[#e9fff5]" />
          <rect x="13" y="32" width="2" height="4" className="fill-[#6ee7b7] dark:fill-[#7febb7]" />
          <rect x="17" y="28" width="2" height="8" className="fill-[#6ee7b7] dark:fill-[#7febb7]" />
          <rect
            x="21"
            y="24"
            width="2"
            height="12"
            className="fill-[#6ee7b7] dark:fill-[#7febb7]"
          />
          <rect
            x="25"
            y="20"
            width="2"
            height="16"
            className="fill-[#6ee7b7] dark:fill-[#7febb7]"
          />
          <rect x="29" y="16" width="2" height="20" className="fill-[#10b981] dark:fill-tertiary" />
          <rect x="33" y="12" width="2" height="24" className="fill-[#10b981] dark:fill-tertiary" />
        </svg>
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-900 dark:text-white">Analytics</p>
        <p className="text-sm text-gray-500 dark:text-gray-300">Keep track of your growth</p>
      </div>
    </Link>
  )
}

function Feedback() {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      to="https://github.com/kiko-g/guerner/issues"
      className="dark:hover:bg-slate- flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-slate-600"
    >
      <span className="flex items-center">
        <span className="text-sm font-medium text-gray-900 dark:text-white">Feedback</span>
      </span>
      <span className="block text-sm text-gray-500 dark:text-gray-200">
        Open an issue to get developer support
      </span>
    </Link>
  )
}
