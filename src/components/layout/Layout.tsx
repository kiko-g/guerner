import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { Seo, BackToTopButton, Navbar, Footer } from '.'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

import { inject as injectVercelAnalytics } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

type Props = {
  children: ReactNode
  location?: string
  hero?: boolean
  fullWidth?: boolean
}

export default function Layout(props: Props) {
  const { t, language } = useI18next()
  const { children, location = 'Unknown', hero = false, fullWidth = false } = props

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

  injectVercelAnalytics()
  injectSpeedInsights({ framework: 'gatsby' })

  return (
    <div
      id="layout"
      className={clsx(
        'mb-auto flex min-h-screen flex-col overflow-clip font-sans font-medium opacity-[99%]',
        hero
          ? 'dark:bg-zinc-925 bg-primary text-zinc-800 dark:text-white'
          : 'bg-ice text-zinc-800 dark:bg-zinc-900 dark:text-white',
      )}
    >
      <Seo title={location} />
      <Navbar location={location} title={title} special={hero} />
      <div className={clsx('z-10 mx-auto mb-auto flex-1', fullWidth ? 'max-w-full' : 'max-w-6xl px-4')}>{children}</div>
      <BackToTopButton />
      <Footer title={title} />
    </div>
  )
}
