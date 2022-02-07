import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import Head from 'next/head'

export default function Blog() {
  return (
    <>
      <Head>
        <title>blog</title>
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
      <Container verticalSpace={true}>
        <h1 className="text-center">It's comming :)</h1>
      </Container>
    </>
  )
}
