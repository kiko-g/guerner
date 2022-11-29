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
    query SiteTitleQuery {
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
      <div id="layout" className="layout">
        {home ? <Hero location={location} title={title} /> : <Navbar location={location} siteTitle={title} />}
        {children ? <div className={home ? 'py-4' : 'content'}>{children}</div> : null}
        <BackToTopButton />
        <Footer siteTitle={title} />
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
