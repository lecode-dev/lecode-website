import { Title, Subtitle } from '../Typografy'
import { useRouter } from 'next/router'
const projects = [
  {
    image: '/images/projects/spread.png',
    title: 'Spread Software',
    link: 'https://app.spread.software/login',
    subtitle: `It's the best transcription platform ever. The platform allows you to
    take a video and transform to text. You can change the text at real
    time when you see the video. we use typescript, react and firebase`,
  },
  {
    image: '/images/projects/bentcare.png',
    title: 'Bentcare',
    link: 'https://bentcare.com.br/',
    subtitle: `Bentcare has arrived to transform access to healthcare. Through a digital, modern and versatile platform, it connects healthcare professionals to their patients in a faster, safer, more economical and humanized way. Forget the traditional way of meeting and scheduling appointments and exams. Welcome to the reality of those who really want your well...`,
  },
]

export default function ProjectCard(props) {
  const router = useRouter()

  return projects.map((project) => (
    <>
      <section
        className="py-6 cursor-pointer"
        onClick={() => router.push(project.link)}
      >
        <Title small>{project.title}</Title>
        <Subtitle small>{project.subtitle}</Subtitle>
        <div className="w-full p-3">
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt="spread-project"
          />
        </div>
      </section>
    </>
  ))
}
