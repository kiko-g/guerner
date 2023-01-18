import React, { ReactNode } from 'react'
import { Seo, BackToTopButton, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  location?: string
  language?: string
  home?: boolean
}

const Layout = ({ children, location = 'Unknown', language = 'pt', home = false }: Props) => {
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
      <Seo title={location} lang={language} />
      <div
        id="layout"
        className={classNames(
          'mb-auto flex min-h-screen flex-col overflow-clip font-prose font-medium',
          home
            ? 'bg-primary text-gray-800 dark:bg-navy dark:text-white'
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
    </>
  )
}

export default Layout
