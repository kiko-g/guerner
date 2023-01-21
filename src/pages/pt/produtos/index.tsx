import React from 'react'
import { Layout } from '../../../components/layout'
import { FeaturedAgriculture, FeaturedConstruction } from '../../../components/products'

const ProductsPagePT = () => {
  const title = `Produtos`
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna lacinia, facilisis risus ac, commodo neque. Phasellus vel dignissim diam. Nullam convallis nunc in porttitor bibendum. Mauris eu laoreet diam. Aliquam suscipit cursus augue eu efficitur. Praesent eu sodales purus. Donec nec odio semper, faucibus nisi a, varius sem. Nam viverra ultrices pharetra. Curabitur eget tortor ultrices, molestie erat et, varius enim. Aenean sit amet ligula vel erat dictum accumsan. Phasellus ornare dictum sodales.`

  return (
    <Layout location="Produtos">
      <main className="flex flex-col items-center justify-center gap-y-4 py-8 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-center text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-center font-normal lg:text-justify">{text}</p>
        </header>

        <FeaturedAgriculture />
        <FeaturedConstruction />
      </main>
    </Layout>
  )
}

export default ProductsPagePT
