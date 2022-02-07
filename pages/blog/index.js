import Navbar from '../../components/Navbar'
import Container from '../../components/Container'

export default function Blog() {
  return (
    <>
      <Head>
        <SeoTags title="Blog" />
      </Head>
      <Navbar />
      <Container verticalSpace={true}>
        <h1 className="text-center">It's comming :)</h1>
      </Container>
    </>
  )
}
