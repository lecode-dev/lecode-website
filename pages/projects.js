import { Title } from '../components/Typografy'
import { Subtitle } from '../components/Typografy'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function projects() {
  return (
    <>
      <Head>
        <title>projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We are a software house and a agency specialized in building websites and applications."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://lecode.dev/" />
        <meta
          property="og:image:secure_url"
          itemprop="image"
          content="http://lecode.dev/images/lecode-seo-300.WebP"
        />
        <link
          itemprop="thumbnailUrl"
          href="http://lecode.dev/images/lecode-seo-300.WebP"
        />
        <meta property="og:image:type" content="image/WebP" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lecode" />
        <meta property="og:title" content="projects" key="ogtitle" />
        <meta
          property="og:description"
          content="We are a software house and a agency specialized in building websites and applications."
          key="ogdescription"
        />
        <meta property="og:updated_time" content="1440432930" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@lecodedev" />
      </Head>
      <main>
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
