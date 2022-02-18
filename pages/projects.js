import { Title } from '../components/Typografy'
import { Subtitle } from '../components/Typografy'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import Divider from '../components/Divider'

export default function projects() {
  return (
    <section id="projects">
      <div className="relative pt-12">
        <Title>Our Projects</Title>
        <Subtitle>
          We think different, you can see below some of our projects made with
          love.
        </Subtitle>
      </div>
      <Divider>Projects</Divider>
      <ProjectCard />
    </section>
  )
}
