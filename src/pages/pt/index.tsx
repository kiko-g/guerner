import React from 'react'
import { Layout } from '../../components/layout'
import { HeroBanner, HeroCompany, HeroProducts } from '../../components/home'

const IndexPagePT = () => {
  return (
    <Layout location="Início" home>
      <HeroBanner />
      <HeroCompany />
      <HeroProducts />
    </Layout>
  )
}

export default IndexPagePT
