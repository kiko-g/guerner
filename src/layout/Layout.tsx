import React from 'react'
import { classNames } from '../utils'
import { useStaticQuery, graphql } from 'gatsby'
import { Navbar, Footer, Background } from '.'

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

  return (
    <div className="layout">
      <Navbar location={location} siteTitle={data.site.siteMetadata?.title} />
      <div className="content">{children}</div>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
