import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { graphql, useStaticQuery } from 'gatsby'
import { SparklesIcon, GlobeEuropeAfricaIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

type Frontmatter = {
  lang: string
  title: string
  section1: string
  section1Topics: string[]
  section2: string
  section2Topics: string[]
  section3: string
  section3Topics: string[]
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

  return (
    <div className="px-4 py-16 text-white lg:px-0">
      <h2 className="mb-3 text-center text-3xl font-semibold tracking-tighter md:mb-6 md:text-4xl">
        {title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: html }}
        className="mx-auto mb-8 max-w-md text-center text-sm lg:text-base"
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center space-y-10">
        <Section title={section1} topics={section1Topics} iconName={GlobeEuropeAfricaIcon} />
        <Section title={section2} topics={section2Topics} iconName={SparklesIcon} />
        <Section title={section3} topics={section3Topics} iconName={PencilSquareIcon} />
      </div>
    </div>
  )
}

type SectionProps = {
  title: string
  topics: string[]
  iconName: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

function Section({ title, topics, iconName }: SectionProps) {
  const icon = {
    icon: iconName,
  }
  return (
    <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 rounded-xl bg-black/20 px-4 py-8 lg:mx-0">
      <div className="flex items-start justify-center gap-4">
        <icon.icon className="h-12 w-12 lg:h-14 lg:w-14" />
        <span className="ml-0 max-w-[12rem] text-center font-lexend text-lg font-normal leading-6 lg:text-xl">
          {title}
        </span>
      </div>

      <ul className="list-inside text-center text-sm font-normal tracking-tight">
        {topics.map((topic, topicIdx) => (
          <li key={`topic-1.${topicIdx}`} className="">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}
