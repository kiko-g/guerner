import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { useMediaQuery } from 'usehooks-ts'
import { PlayCircleIcon as PlayCircleIconSolid, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon, PlayCircleIcon as PlayCircleIconOutline } from '@heroicons/react/24/outline'
import { t } from 'i18next'

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
  const { language } = useI18next()

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

  const [autoplay, setAutoplay] = useState(true)

  return (
    <section className="py-6 lg:py-12">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-transparent px-8 py-4 lg:bg-black/20 lg:px-16 lg:py-12 lg:dark:bg-white/[4%]">
        <div className="absolute right-8 top-8">
          <button
            onClick={() => setAutoplay(prev => !prev)}
            className="flex flex-col gap-0 text-white transition hover:scale-125 hover:opacity-80"
          >
            <span>
              {autoplay ? (
                <PlayCircleIconSolid className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
              ) : (
                <PlayCircleIconOutline className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
              )}
            </span>
            <span className="text-xs font-light uppercase">{autoplay ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        <h3 className="mb-8 text-center text-3xl font-bold tracking-tighter text-white lg:text-4xl">{title}</h3>
        {autoplay ? <HistoryMoving history={history} /> : <HistoryStatic history={history} />}
      </div>
    </section>
  )
}

function HistoryMoving({ history }: { history: HistoryEntry[] }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { t } = useI18next()
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null)

  const radius = 18
  const strokeWidth = 4
  const skipTime = 8000 // 8 seconds
  const updateRate = 100 // 100 milliseconds
  const slides = isMobile ? 1 : 3
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI

  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  const historySliced = useMemo(() => history.slice(index, index + slides), [index, slides])
  const disabledLeft = useMemo(() => index === 0, [index])
  const disabledRight = useMemo(() => index === history.length - slides, [index, history.length, slides])

  const resetAutoAdvanceTimer = () => {
    if (autoAdvanceTimer.current) {
      clearInterval(autoAdvanceTimer.current)
    }
    autoAdvanceTimer.current = setInterval(() => {
      setIndex(prevIndex => (prevIndex < history.length - slides ? prevIndex + 1 : 0))
      setProgress(0)
    }, skipTime)
  }

  const previousItem = () => {
    setProgress(0) // reset progress on index change
    setIndex(prev => (prev > 0 ? prev - 1 : 0))
    resetAutoAdvanceTimer()
  }

  const nextItem = () => {
    setProgress(0) // reset progress on index change
    setIndex(prev => (prev < history.length - slides ? prev + 1 : prev))
    resetAutoAdvanceTimer()
  }

  useEffect(() => {
    resetAutoAdvanceTimer()
    return () => {
      if (autoAdvanceTimer.current) {
        clearInterval(autoAdvanceTimer.current)
      }
    }
  }, [history.length, slides])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = oldProgress + circumference / (skipTime / updateRate)
        return newProgress >= circumference ? 0 : newProgress
      })
    }, updateRate)

    return () => clearInterval(progressInterval)
  }, [circumference, skipTime, updateRate])

  return (
    <div>
      {/* Progress Circle */}
      <div className="absolute left-8 top-8">
        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} className="absolute">
          <circle
            className="fill-transparent stroke-white dark:stroke-emerald-400"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} className="absolute">
          <circle
            className="fill-transparent stroke-white/20 dark:stroke-emerald-400/10"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={0}
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

      {/* Navigation Arrows */}
      <nav className="flex w-full items-center justify-between border-t border-gray-200 transition-all lg:border-transparent">
        <button
          disabled={disabledLeft}
          onClick={previousItem}
          className="inline-flex items-center gap-2 py-3 pr-0 text-sm font-medium text-gray-300 hover:text-white enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-20 md:pr-1"
        >
          <ArrowLongLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        <div>
          <p className="text-sm font-light text-white">
            {index + 1} {t('of')} {history.length - slides + 1}
          </p>
        </div>

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

function HistoryStatic({ history }: { history: HistoryEntry[] }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const slides = isMobile ? 1 : 3

  const [index, setIndex] = useState(0)
  const historySliced = useMemo(() => history.slice(index, index + slides), [index, slides])
  const disabledLeft = useMemo(() => index === 0, [index])
  const disabledRight = useMemo(() => index === history.length - slides, [index, history.length, slides])

  function previousItem() {
    setIndex(prev => (prev > 0 ? prev - 1 : 0))
  }

  function nextItem() {
    setIndex(prev => (prev < history.length - slides ? prev + 1 : prev))
  }

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
      className="relative mb-6 transform animate-opacity-transition transition-all ease-in-out sm:mb-0"
    >
      <div className="flex items-center">
        <div className="z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 ring-2 ring-white dark:bg-tertiary dark:ring-gray-800 sm:ring-8">
          <CalendarDaysIcon className="h-4 w-4 text-white" />
        </div>
        <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
      </div>

      <div className="mt-3 w-full">
        <div className="mb-0 flex w-full items-center gap-x-1">
          <time className="block text-base font-bold leading-none text-orange-500 dark:text-orange-200">
            {entry.date}
          </time>
          <span className="text-base font-light text-white opacity-30 dark:text-white">({index + entryIdx + 1})</span>
        </div>
        <p className="min-h-full min-w-full text-sm font-normal tracking-tight text-gray-300 dark:text-gray-400 sm:pr-4 md:min-h-[7rem]">
          {entry.text}
        </p>
      </div>
    </li>
  ))
}
