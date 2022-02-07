import Head from 'next/head'

export const SeoTags = ({
  title = 'lecode',
  description = 'We are a software house and a agency specialized in building websites and applications.',
}) => {
  const urlImage = 'https://lecode.dev/images/lecode-seo.WebP'
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="@lecodedev" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content="https://lecode.dev/" key="ogurl" />
      <meta
        property="og:image:secure_url"
        itemprop="image"
        content={urlImage}
        key="ogimage"
      />
      <meta property="og:image:type" content="image/WebP" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lecode" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Head>
  )
}
