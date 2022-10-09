import React from 'react'
import { Seo, Hero, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  children: any
  location: string
}

const Layout = ({ children, location }: Props) => {
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
      <div className="layout">
        <Hero location={location} title={title} />
        <Navbar location={location} siteTitle={title} />
        <div className="content">{children}</div>
        <Footer siteTitle={title} />
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
