import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Seo, BackToTopButton, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

type Props = {
  children: ReactNode
  location?: string
  hero?: boolean
  fullWidth?: boolean
}

export default function Layout({
  children,
  location = 'Unknown',
  hero = false,
  fullWidth = false,
}: Props) {
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
    <div
      id="layout"
      className={classNames(
        'mb-auto flex min-h-screen flex-col overflow-clip font-sans font-medium opacity-[99%]',
        hero
          ? 'bg-primary text-gray-800 dark:bg-navy dark:text-white'
          : 'bg-ice text-gray-800 dark:bg-navy dark:text-white'
      )}
    >
      <Seo title={location} />
      <Navbar location={location} title={title} special={hero} />
      <div
        className={classNames(
          'z-10 mx-auto mb-auto flex-1',
          fullWidth ? 'max-w-full' : 'max-w-6xl'
        )}
      >
        {children}
      </div>
      <BackToTopButton />
      <Footer title={title} special={hero} />
    </div>
  )
}
