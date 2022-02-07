import Head from 'next/head'
import { Title } from '../components/Typografy'
import { Subtitle } from '../components/Typografy'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

export default function projects() {
  return (
    <>
      <main>
        <Head>
          <SeoTags title="Projects" />
        </Head>
        <Navbar />
        <div className="relative pt-12">
          <Title>Our Projects</Title>
          <Subtitle>
            We think different, you can see below some of our projects made with
            love.
          </Subtitle>
        </div>
        <Divider>Projects</Divider>
        <ProjectCard />
      </main>
      <Footer />
    </>
  )
}
