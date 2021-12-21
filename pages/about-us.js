import Head from 'next/head'
import Navbar from '../components/Navbar'
import TeamSession from '../components/TeamSession'
import AboutUsSection from '../components/AboutUsSection'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>lecode - About Us</title>
      </Head>
      <Navbar />
      <AboutUsSection />
      <TeamSession />
      <Footer />
    </>
  )
}
