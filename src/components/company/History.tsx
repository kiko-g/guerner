import React, { useEffect, useMemo, useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'usehooks-ts'
import classNames from 'classnames'

type Frontmatter = {
  lang: string
  title: string
  history: HistoryEntry[]
}

type HistoryEntry = {
  date: string
  text: string
}

type MarkdownData = {
  html: string
  frontmatter: Frontmatter
}

type Data = {
  allMarkdownRemark: {
    nodes: MarkdownData[]
  }
}

export default function History() {
  const { t, language } = useI18next()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const data: Data = useStaticQuery(graphql`
    query HistoryQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(company.*/history)/" } }) {
        nodes {
          id
          html
          frontmatter {
            lang
            title
            history {
              date
              text
            }
          }
        }
      }
    }
  `)

  const node = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === language)
  const title = node!.frontmatter.title
  const history = node!.frontmatter.history

  const skipTime = 7500 // 7.5 seconds
  const [index, setIndex] = useState(0)
  const [slides, setSlides] = useState(isMobile ? 1 : 3)
  const disabledLeft = useMemo(() => index === 0, [index])
  const disabledRight = useMemo(() => index > history.length - 2, [index, history])
  const historySliced = useMemo(() => history.slice(index, index + slides), [index, slides])

  useEffect(() => {
    const updateSlides = () => setSlides(isMobile ? 1 : 3)
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [isMobile])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex < history.length - slides ? prevIndex + 1 : 0))
    }, skipTime)

    return () => clearInterval(interval)
  }, [history.length, slides])

  const previousItem = () => {
    setIndex(prev => prev - 1)
  }

  const nextItem = () => {
    setIndex(prev => prev + 1)
  }

  const calculatePagination = () => {
    let start = Math.max(index - 1, 0)
    let end = Math.min(start + slides, history.length)
    if (end >= history.length) {
      start = Math.max(history.length - slides, 0)
      end = history.length
    }
    return Array.from({ length: end - start }, (_, i) => start + i)
  }

  const renderPaginationButtons = calculatePagination().map(pageNum => (
    <button
      key={pageNum}
      aria-current={index === pageNum ? 'page' : undefined}
      onClick={() => setIndex(pageNum)}
      className={classNames(
        'inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all',
        index === pageNum
          ? 'bg-secondary/70 hover:opacity-80 dark:bg-tertiary/50'
          : 'hover:bg-white/10 dark:hover:bg-white/10',
      )}
    >
      {pageNum + 1}
    </button>
  ))

  return (
    <section className="py-6 lg:py-12">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-transparent px-8 py-4 lg:bg-black/20 lg:px-16 lg:py-12 lg:dark:bg-white/[4%]">
        <h3 className="mb-8 text-center text-3xl font-bold tracking-tighter text-white lg:text-4xl">{title}</h3>

        <ul className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
          {historySliced.map((entry, entryIdx) => (
            <li
              key={`history-entry-${entry.date}-${entryIdx}`}
              className="animate-opacity-transition relative mb-6 transform transition-all ease-in-out sm:mb-0"
            >
              <div className="flex items-center">
                <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 ring-2 ring-white dark:bg-tertiary dark:ring-gray-800 sm:ring-8">
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
              </div>

              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-white dark:text-white">#{index + entryIdx + 1}</h3>
                <time className="mb-2 block font-lexend text-base font-bold leading-none text-secondary dark:text-secondary">
                  {entry.date}
                </time>
                <p className="min-h-full min-w-full text-sm font-normal tracking-tight text-gray-300 dark:text-gray-400 md:min-h-[10rem]">
                  {entry.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <nav className="flex w-full items-center justify-between border-t border-gray-200 transition-all lg:border-transparent">
          <div className="flex w-0 flex-1">
            <button
              disabled={disabledLeft}
              onClick={previousItem}
              className="inline-flex items-center gap-2 py-3 pr-0 text-sm font-medium text-gray-300 hover:text-white enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 md:pr-1"
            >
              <ArrowLongLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden md:flex md:self-stretch">{renderPaginationButtons}</div>

          <div className="flex w-0 flex-1 justify-end">
            <button
              disabled={disabledRight}
              onClick={nextItem}
              className="inline-flex items-center gap-2 py-3 pl-0 text-sm font-medium text-gray-300 hover:text-white enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 md:pl-1"
            >
              <ArrowLongRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  )
}
