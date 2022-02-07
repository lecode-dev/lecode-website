import Navbar from '../../components/Navbar'
import Container from '../../components/Container'
import { SeoTags } from '../../components/Seo'

export default function Blog() {
  return (
    <>
      <SeoTags title="Blog" />
      <Navbar />
      <Container verticalSpace={true}>
        <h1 className="text-center">It's comming :)</h1>
      </Container>
    </>
  )
}
