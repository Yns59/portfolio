import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Formation from '../components/Formation'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Younes Gallouch — Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Younes Gallouch — Étudiant en Bachelor Informatique à Enigma School, Lille. À la recherche d'un stage de 2 mois." />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
