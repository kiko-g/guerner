import React from 'react'
import { Layout } from '../../components/layout'
import { HeroBanner, HeroCompany } from '../../components/home'

const IndexPagePT = () => {
  return (
    <Layout location="Início" home>
      <HeroBanner />
      <HeroCompany />
    </Layout>
  )
}

export default IndexPagePT
