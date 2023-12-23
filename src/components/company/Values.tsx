import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {
  ArrowLongRightIcon,
  CursorArrowRaysIcon,
  MapIcon,
  PencilSquareIcon,
  ViewfinderCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'

type NavAction = {
  title: string
  topics: string[]
  href: string
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  iconClasses: string
}

type Frontmatter = {
  lang: string
  title: string
  section1: string
  section1Topics: string[]
  section2: string
  section2Topics: string[]
  section3: string
  section3Topics: string[]
  section4: string
  section4Topics: string[]
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

export default function Values({}: Props) {
  const { t, language } = useI18next()
  const data: Data = useStaticQuery(graphql`
    query ValuesQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(company.*/values)/" } }) {
        nodes {
          id
          html
          frontmatter {
            lang
            title
            section1
            section1Topics
            section2
            section2Topics
            section3
            section3Topics
            section4
            section4Topics
          }
        }
      }
    }
  `)

  const node = data.allMarkdownRemark.nodes.find(node => node.frontmatter.lang === language)
  const title = node!.frontmatter.title
  const html = node!.html
  const section1 = node!.frontmatter.section1
  const section1Topics = node!.frontmatter.section1Topics
  const section2 = node!.frontmatter.section2
  const section2Topics = node!.frontmatter.section2Topics
  const section3 = node!.frontmatter.section3
  const section3Topics = node!.frontmatter.section3Topics
  const section4 = node!.frontmatter.section4
  const section4Topics = node!.frontmatter.section4Topics

  const actions: NavAction[] = [
    {
      title: section1,
      topics: section1Topics,
      href: '/products',
      icon: ViewfinderCircleIcon,
      iconClasses: 'bg-teal-50 group-hover:bg-teal-600 group-hover:text-white text-teal-600',
    },
    {
      title: section2,
      topics: section2Topics,
      href: '/products',
      icon: MapIcon,
      iconClasses: 'bg-orange-50 group-hover:bg-orange-600 group-hover:text-white text-orange-600',
    },
    {
      title: section3,
      topics: section3Topics,
      href: '/products',
      icon: PencilSquareIcon,
      iconClasses: 'bg-sky-50 group-hover:bg-sky-600 group-hover:text-white text-sky-600',
    },
    {
      title: section4,
      topics: section4Topics,
      href: '/products',
      icon: CursorArrowRaysIcon,
      iconClasses: 'bg-rose-50 group-hover:bg-rose-600 group-hover:text-white text-rose-600',
    },
  ]

  return (
    <div className="max-w-5xl rounded-none bg-black/20 px-4 py-16 text-white dark:bg-white/[4%] lg:rounded-3xl lg:px-0">
      <h2 className="mb-3 text-center text-3xl font-semibold tracking-tighter lg:mb-6 lg:text-4xl">{title}</h2>
      <p
        dangerouslySetInnerHTML={{ __html: html }}
        className="mx-auto mb-8 max-w-xl text-center text-sm lg:text-base"
      />

      <div className="mx-8 flex flex-col divide-y divide-white/10 overflow-hidden rounded-lg border border-transparent bg-transparent dark:border-secondary/0 dark:bg-secondary/10 md:grid md:grid-cols-2 md:gap-px md:divide-y-0 lg:mx-16">
        {actions.map((action, actionIdx) => (
          <Link
            to={action.href}
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'group relative bg-white/5 p-6 transition focus-within:ring-2 focus-within:ring-inset focus-within:ring-white hover:bg-white/10 dark:bg-secondary/5 dark:hover:bg-secondary/20',
            )}
          >
            <span className={classNames(action.iconClasses, 'inline-flex rounded-lg p-4 transition')}>
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="mt-3 block font-lexend text-base font-semibold leading-6 text-gray-200 dark:text-white">
              {action.title}
            </span>
            <ul className="mt-2 text-sm tracking-tight text-gray-300 dark:text-gray-200">
              {action.topics.map(topic => (
                <li key={topic} className="flex items-start">
                  <span className="flex h-5 items-center">
                    <span className="h-1 w-1 rounded-full bg-tertiary dark:bg-secondary" aria-hidden="true" />
                  </span>
                  <span className="ml-2 flex-1">{topic}</span>
                </li>
              ))}
            </ul>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-300 dark:text-gray-300 dark:group-hover:text-white"
              aria-hidden="true"
            >
              <ArrowLongRightIcon className="h-5 w-5 transition group-hover:-rotate-45 md:h-6 md:w-6" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
