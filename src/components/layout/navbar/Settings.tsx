import React from 'react'
import clsx from 'clsx'
import useDarkMode from '../../../hooks/useDarkMode'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CheckCircleIcon, Cog8ToothIcon as Cog8ToothIconSolid } from '@heroicons/react/24/solid'
import {
  ChatBubbleLeftRightIcon,
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
                <div className="relative flex flex-col gap-2 bg-white p-4 dark:bg-zinc-800">
                  <LanguageSwitcher />
                  <DarkModeToggler />
                  <ComplaintsLink />
                  {/* <AnalyticsLink /> */}
                  {/* <AdminPageLink /> */}
                </div>
                <div className="bg-zinc-100 p-4 dark:bg-zinc-700">
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
        className="flex w-full items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-zinc-700"
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
        <div className="ml-4 flex h-full w-full items-start justify-between self-stretch pr-2">
          <div className="flex flex-col">
            <p className="text-left text-sm font-medium text-zinc-900 dark:text-white">{t('selectLang')}</p>
            <p className="text-left text-sm font-normal leading-tight tracking-tight text-zinc-500 dark:text-zinc-300">
              {t('currentLang')} <span className="uppercase">{language}</span>
            </p>
          </div>

          <span className="self-center">
            {open ? (
              <MinusIcon className="h-5 w-5 text-zinc-900 dark:text-white" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-zinc-900 dark:text-white" />
            )}
          </span>
        </div>
      </button>

      {open ? (
        <ul className="mt-1 self-end overflow-auto rounded bg-dark/5 text-sm dark:bg-white/5">
          {languages.map((lang, langIdx) => {
            const active = language === lang
            return (
              <li
                key={langIdx}
                className={clsx(
                  'group relative z-50 cursor-pointer select-none px-3 py-2 text-sm transition hover:text-white lg:text-sm',
                  active
                    ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-500 hover:text-white dark:bg-emerald-700/50 dark:text-emerald-200 dark:hover:bg-emerald-500'
                    : 'text-zinc-800 hover:bg-emerald-500 dark:text-white dark:hover:bg-emerald-500',
                )}
              >
                <Link
                  placeholder="current"
                  to={originalPath}
                  language={lang}
                  className="flex items-center justify-start gap-x-1"
                >
                  <span
                    className={clsx(
                      'truncate uppercase group-hover:text-white',
                      active ? 'text-emerald-500' : 'font-normal',
                    )}
                  >
                    {lang}
                  </span>
                  {active ? (
                    <CheckCircleIcon
                      className="mt-0 h-4 w-4 text-emerald-500 group-hover:text-white lg:h-4 lg:w-4"
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
      className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-zinc-700"
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
      <div className="ml-4 flex h-full flex-col items-stretch self-stretch">
        <p className="text-left text-sm font-medium text-zinc-900 dark:text-white">{t('darkMode')}</p>
        <p className="text-sm font-normal leading-tight tracking-tight text-zinc-500 dark:text-zinc-300">
          {enabled ? t('enabled') : t('disabled')}
        </p>
      </div>
    </button>
  )
}

function AnalyticsLink() {
  const { t } = useI18next()

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://vercel.com/kiko-g-s-team/guerner/analytics?environment=production&period=30d"
      className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-zinc-700"
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
          <rect x="21" y="24" width="2" height="12" className="fill-[#6ee7b7] dark:fill-[#7febb7]" />
          <rect x="25" y="20" width="2" height="16" className="fill-[#6ee7b7] dark:fill-[#7febb7]" />
          <rect x="29" y="16" width="2" height="20" className="fill-[#10b981] dark:fill-tertiary" />
          <rect x="33" y="12" width="2" height="24" className="fill-[#10b981] dark:fill-tertiary" />
        </svg>
      </div>
      <div className="ml-4 flex h-full flex-col items-stretch self-stretch">
        <p className="text-sm font-medium text-zinc-900 dark:text-white">{t('analytics')}</p>
        <p className="text-sm font-normal leading-tight tracking-tight text-zinc-500 dark:text-zinc-300">
          {t('analytics.description')}
        </p>
      </div>
    </a>
  )
}

function ComplaintsLink() {
  const { t } = useI18next()

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://guerner.workky.com/portal-denuncias"
      className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-zinc-700"
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
            fill="none"
            viewBox="-6 -6 36 36"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 fill-[#10b981] stroke-[#ecfdf5] dark:fill-tertiary dark:stroke-[#e9fff5]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </svg>
      </div>
      <div className="ml-4 flex h-full flex-col items-stretch self-stretch">
        <p className="text-sm font-medium text-zinc-900 dark:text-white">{t('complaints')}</p>
        <p className="text-sm font-normal leading-tight tracking-tight text-zinc-500 dark:text-zinc-300">
          {t('complaints.description')}
        </p>
      </div>
    </a>
  )
}

function AdminPageLink() {
  const { t } = useI18next()

  return (
    <Link
      to="/admin"
      placeholder="current"
      className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-zinc-700"
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
            fill="none"
            viewBox="-6 -6 36 36"
            strokeWidth={1.5}
            stroke="currentColor"
            className="fill-trans stroke-[#10b981] dark:fill-[#e9fff5] dark:stroke-tertiary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
        </svg>
      </div>
      <div className="ml-4 flex h-full flex-col items-stretch self-stretch">
        <p className="text-sm font-medium text-zinc-900 dark:text-white">{t('admin')}</p>
        <p className="text-sm font-normal leading-tight tracking-tight text-zinc-500 dark:text-zinc-300">
          {t('admin.description')}
        </p>
      </div>
    </Link>
  )
}

function Feedback() {
  const { t } = useI18next()

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/kiko-g/guerner/issues"
      className="dark:hover:bg-zinc- flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-zinc-200 focus:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:ring-opacity-50 dark:hover:bg-zinc-600"
    >
      <p className="mb-0.5 text-sm font-medium text-zinc-900 dark:text-white">{t('feedback')}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-200">{t('feedback.description')}</p>
    </a>
  )
}
