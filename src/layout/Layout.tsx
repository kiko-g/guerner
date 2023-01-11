import React from 'react'
import { Seo, Hero, BackToTopButton, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'

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
        className="flex min-h-screen flex-col overflow-clip bg-ice font-prose font-medium text-gray-800 opacity-[99%] dark:bg-darkest dark:text-white"
      >
        <Navbar location={location} title={title} special={home} />
        {home ? <Hero location={location} title={title} /> : null}
        {children ? (
          <div className="container z-10 mx-auto my-auto px-0 py-2 lg:px-4 lg:py-4">{children}</div>
        ) : null}
        <BackToTopButton />
        <Footer title={title} />
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
