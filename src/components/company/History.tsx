import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'usehooks-ts'

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

type Props = {}

export default function History({}: Props) {
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
  const html = node!.html
  const title = node!.frontmatter.title
  const history = node!.frontmatter.history

  const [index, setIndex] = React.useState(0)
  const slides = React.useMemo(() => (isMobile ? 1 : 3), [isMobile])
  const disabledLeft = React.useMemo(() => index === 0, [index])
  const disabledRight = React.useMemo(() => index > history.length - 1 - slides, [index, history])
  const historySliced = React.useMemo(() => history.slice(index, index + slides), [index, slides])

  const previousItem = () => {
    setIndex(prev => prev - 1)
  }

  const nextItem = () => {
    setIndex(prev => prev + 1)
  }

  return (
    <section className="py-6 lg:py-12">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-transparent px-4 py-4 lg:bg-black/20 lg:px-8 lg:py-12">
        <h3 className="mb-8 text-center text-3xl font-bold tracking-tighter text-white lg:text-4xl">
          {title}
        </h3>

        <div className="flex items-center justify-center gap-4 text-white">
          <button
            onClick={previousItem}
            disabled={disabledLeft}
            className="flex flex-1 items-center justify-center self-stretch rounded-l px-1 transition enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ChevronLeftIcon className="h-6 w-6 lg:h-8 lg:w-8" />
          </button>

          <ul className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3">
            {historySliced.map((entry, entryIdx) => (
              <li className="relative mb-6 sm:mb-0" key={`history-entry-${entry.date}-${entryIdx}`}>
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
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    #{index + entryIdx + 1}
                  </h3>
                  <time className="mb-2 block font-lexend text-base font-bold leading-none text-secondary dark:text-secondary">
                    {entry.date}
                  </time>
                  <p className="min-h-[10rem] text-sm font-normal tracking-tight text-gray-300 dark:text-gray-400">
                    {entry.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={nextItem}
            disabled={disabledRight}
            className="flex flex-1 items-center justify-center self-stretch rounded-r px-1 transition enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
