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
        className="flex min-h-screen flex-col overflow-clip bg-ice font-prose font-medium 
        text-gray-800 opacity-[99%] dark:bg-navy dark:text-white"
      >
        <Navbar location={location} title={title} special={home} />
        <div
          className={classNames('container z-10 mx-auto my-auto px-0 py-2 md:px-4 md:py-4', home ? '' : 'max-w-7xl')}
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
  location: 'Unknown'
}

export default Layout
