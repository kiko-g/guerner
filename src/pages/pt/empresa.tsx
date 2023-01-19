import React from 'react'
import { Layout } from '../../components/layout'

const CompanyPagePT = () => {
  const title = `Empresa`
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet urna lacinia, facilisis risus ac, commodo neque. Phasellus vel dignissim diam. Nullam convallis nunc in porttitor bibendum. Mauris eu laoreet diam. Aliquam suscipit cursus augue eu efficitur. Praesent eu sodales purus. Donec nec odio semper, faucibus nisi a, varius sem. Nam viverra ultrices pharetra. Curabitur eget tortor ultrices, molestie erat et, varius enim. Aenean sit amet ligula vel erat dictum accumsan. Phasellus ornare dictum sodales.`

  return (
    <Layout location="Empresa">
      <main className="flex flex-col items-center justify-center py-8 gap-y-4 md:gap-y-6 md:py-16">
        <header className="w-full space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-center">{title}</h1>
          <p className="font-normal text-center lg:text-justify">{text}</p>
        </header>
      </main>
    </Layout>
  )
}

export default CompanyPagePT
