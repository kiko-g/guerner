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
    <>
      <Seo title={location} />
      <div
        id="layout"
        className={classNames(
          'mb-auto flex min-h-screen flex-col overflow-clip font-prose font-medium',
          special
            ? 'bg-primary text-gray-800 dark:bg-navy dark:text-white'
            : 'bg-ice text-gray-800 dark:bg-navy dark:text-white'
        )}
      >
        <Navbar location={location} title={title} special={special} />
        <div
          className={classNames(
            'z-10 mx-auto mb-auto',
            special ? 'w-full' : 'container max-w-7xl px-4 py-4 md:px-3 md:py-3'
          )}
        >
          {children}
        </div>
        <BackToTopButton />
        <Footer title={title} />
      </div>
    </>
  )
}
