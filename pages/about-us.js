import Navbar from '../components/Navbar'
import TeamSession from '../components/TeamSession'
import AboutUsSection from '../components/AboutUsSection'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>about-us</title>
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
          content={urlImage}
        />
        <link itemprop="thumbnailUrl" href={urlImage} />
        <meta property="og:image:type" content="image/WebP" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lecode" />
        <meta property="og:title" content={title} key="ogtitle" />
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
      <Navbar />
      <AboutUsSection />
      <TeamSession />
      <Footer />
    </>
  )
}
