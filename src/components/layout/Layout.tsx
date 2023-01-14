import React from 'react'
import { Seo, BackToTopButton, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

type Props = {
  children: any
  location: string
  home?: boolean
}

const Layout = ({ children, location, home }: Props) => {
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
          'flex min-h-screen mb-auto flex-col overflow-clip font-prose font-medium',
          home
            ? 'bg-primary text-gray-800 dark:bg-navy dark:text-white'
            : 'bg-ice text-gray-800 dark:bg-navy dark:text-white'
        )}
      >
        <Navbar location={location} title={title} special={home} />
        <div
          className={classNames(
            'z-10 mx-auto mb-auto',
            home ? 'w-full' : 'container max-w-7xl px-3 py-3 md:px-2 md:py-2'
          )}
        >
          {children}
        </div>
        {home ? <BackToTopButton /> : null}
        <Footer title={title} />
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
