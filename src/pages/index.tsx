import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {
      title: 'AMC Automação - Soluções em TI, Segurança e Telecom',
      description: 'Soluções completas em Informática, Segurança Eletrônica e Telecom para sua empresa.',
    },
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>AMC Automação - Soluções em TI, Segurança e Telecom</title>
        <meta name="description" content="Soluções completas em Informática, Segurança Eletrônica e Telecom para sua empresa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
