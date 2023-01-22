import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Seo, BackToTopButton, Navbar, Footer } from '.'
import { LanguageProvider, useLanguage } from '../../hooks/useLanguageContext'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  children: ReactNode
  location?: string
  home?: boolean
}

export default function Layout({ children, location = 'Unknown', home = false }: Props) {
  const { language } = useLanguage()
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
    <LanguageProvider>
      <Seo title={location} lang={language} />
      <div
        id="layout"
        className={classNames(
          'mb-auto flex min-h-screen flex-col overflow-clip font-prose font-medium',
          home
            ? 'home bg-primary text-gray-800 dark:bg-navy dark:text-white'
            : 'bg-ice text-gray-800 dark:bg-navy dark:text-white'
        )}
      >
        <Navbar location={location} title={title} special={home} />
        <div
          className={classNames(
            'z-10 mx-auto mb-auto',
            home ? 'w-full' : 'container max-w-7xl px-5 py-5 md:px-3 md:py-3'
          )}
        >
          {children}
        </div>
        <BackToTopButton />
        <Footer title={title} />
      </div>
    </LanguageProvider>
  )
}
