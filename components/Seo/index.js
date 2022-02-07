import Head from 'next/head'

export const SeoTags = ({ title = 'lecode' }) => {
  const urlImage = 'http://lecode.dev/images/lecode-seo-300.WebP'
  return (
    <Head>
      <title>{title}</title>
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
      <meta property="og:image:type" content="image/WebP" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lecode" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="We are a software house and a agency specialized in building websites and applications."
      />
      <meta property="og:updated_time" content="1440432930" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@lecodedev" />
    </Head>
  )
}
