import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Seo, BackToTopButton, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {
  children: ReactNode
  location?: string
  special?: boolean
}

export default function Layout({ children, location = 'Unknown', special = false }: Props) {
  const { t, language } = useI18next()
  const data = useStaticQuery(graphql`
    query titleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata?.title || 'Site Title'

  return (
    <div
      id="layout"
      className={classNames(
        'mb-auto flex min-h-screen flex-col overflow-clip font-sans font-medium opacity-[99%]',
        special
          ? 'bg-primary text-gray-800 dark:bg-gray-900 dark:text-white'
          : 'bg-ice text-gray-800 dark:bg-gray-800 dark:text-white'
      )}
    >
      <Seo title={location} />
      <Navbar location={location} title={title} special={special} />
      <div
        className={classNames(
          'z-10 mx-auto mb-auto flex-1',
          special ? 'w-full' : 'container max-w-6xl px-4 md:px-3'
        )}
      >
        {children}
      </div>
      <BackToTopButton />
      <Footer title={title} special={special} />
    </div>
  )
}
