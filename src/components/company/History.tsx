import React, { useEffect, useMemo, useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'usehooks-ts'
import { PlayCircleIcon as PlayCircleIconSolid, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { PlayCircleIcon as PlayCircleIconOutline } from '@heroicons/react/24/outline'

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

  const [isMoving, setIsMoving] = useState(true)

  return (
    <section className="py-6 lg:py-12">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-transparent px-8 py-4 lg:bg-black/20 lg:px-16 lg:py-12 lg:dark:bg-white/[4%]">
        <div className="absolute right-8 top-8">
          <button
            onClick={() => setIsMoving(prev => !prev)}
            className="flex flex-col gap-0 text-white transition hover:scale-125 hover:opacity-80"
          >
            <span>
              {isMoving ? (
                <PlayCircleIconSolid className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
              ) : (
                <PlayCircleIconOutline className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
              )}
            </span>
            <span className="text-xs font-light uppercase">{isMoving ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        <h3 className="mb-8 text-center text-3xl font-bold tracking-tighter text-white lg:text-4xl">{title}</h3>
        {isMoving ? (
          <HistoryMoving history={history} isMobile={isMobile} />
        ) : (
          <HistoryStatic history={history} isMobile={isMobile} />
        )}
      </div>
    </section>
  )
}

function HistoryMoving({ history, isMobile }: { history: HistoryEntry[]; isMobile: boolean }) {
  const radius = 14
  const strokeWidth = 2
  const skipTime = 5000 // 5 seconds
  const updateRate = 100 // 100ms seconds
  const slides = isMobile ? 1 : 3
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI

  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // interval for auto-advancing slides
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex < history.length - slides ? prevIndex + 1 : 0))
      setProgress(0) // reset progress on index change
    }, skipTime)

    return () => clearInterval(interval)
  }, [history.length, slides, skipTime])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = oldProgress + circumference / (skipTime / updateRate)
        return newProgress >= circumference ? 0 : newProgress
      })
    }, updateRate)

    return () => clearInterval(progressInterval)
  }, [circumference, skipTime])

  const historySliced = useMemo(() => history.slice(index, index + slides), [index, slides])

  return (
    <div>
      {/* Progress Circle */}
      <div className="absolute left-8 top-8">
        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
          <circle
            className="fill-transparent stroke-white"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      </div>

      {/* History Content */}
      <ul className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
        <HistoryContent historySliced={historySliced} index={index} />
      </ul>
    </div>
  )
}

function HistoryStatic({ history, isMobile }: { history: HistoryEntry[]; isMobile: boolean }) {
  const [index, setIndex] = useState(0)
  const slides = isMobile ? 1 : 3

  const disabledLeft = useMemo(() => index === 0, [index])
  const disabledRight = useMemo(() => index > history.length - slides, [index, history.length, slides])

  const previousItem = () => {
    setIndex(prev => (prev > 0 ? prev - 1 : 0))
  }

  const nextItem = () => {
    setIndex(prev => (prev < history.length - slides ? prev + 1 : prev))
  }

  const historySliced = useMemo(() => history.slice(index, index + slides), [index, slides])

  return (
    <div>
      {/* History Content */}
      <ul className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
        <HistoryContent historySliced={historySliced} index={index} />
      </ul>

      {/* Navigation Arrows */}
      <nav className="flex w-full items-center justify-between border-t border-gray-200 transition-all lg:border-transparent">
        <button
          disabled={disabledLeft}
          onClick={previousItem}
          className="inline-flex items-center gap-2 py-3 pr-0 text-sm font-medium text-gray-300 hover:text-white enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 md:pr-1"
        >
          <ArrowLongLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          disabled={disabledRight}
          onClick={nextItem}
          className="inline-flex items-center gap-2 py-3 pl-0 text-sm font-medium text-gray-300 hover:text-white enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 md:pl-1"
        >
          <ArrowLongRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  )
}

function HistoryContent({ index, historySliced }: { index: number; historySliced: HistoryEntry[] }) {
  return historySliced.map((entry, entryIdx) => (
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
        <p className="min-h-full min-w-full text-sm font-normal tracking-tight text-gray-300 dark:text-gray-400 md:min-h-[8rem]">
          {entry.text}
        </p>
      </div>
    </li>
  ))
}
