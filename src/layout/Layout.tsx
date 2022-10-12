import React from 'react'
import { Seo, Hero, Navbar, Footer } from '.'
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
      <div className="layout">
        {home ? <Hero location={location} title={title} /> : null}
        {children ? <div className="content">{children}</div> : null}
        <Footer siteTitle={title} />
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
