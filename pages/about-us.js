import Navbar from '../components/Navbar'
import TeamSession from '../components/TeamSession'
import AboutUsSection from '../components/AboutUsSection'
import Footer from '../components/Footer'
import { SeoTags } from '../components/Seo'

export default function AboutUs() {
  return (
    <>
      <SeoTags title="About-Us" />
      <Navbar />
      <AboutUsSection />
      <TeamSession />
      <Footer />
    </>
  )
}
