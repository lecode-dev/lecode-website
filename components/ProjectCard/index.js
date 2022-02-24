import { Title, Subtitle } from '../Typografy'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

export default function ProjectCard(props) {
  const router = useRouter()
  const t = useTranslations('ProjectCard')

  const projects = [
    {
      image: '/images/projects/spread.png',
      title: 'Spread Software',
      link: 'https://app.spread.software/login',
      subtitle: t('spread_software'),
    },
    {
      image: '/images/projects/bentcare.png',
      title: 'Bentcare',
      link: 'https://bentcare.com.br/',
      subtitle: t('bentcare'),
    },
  ]
  return projects.map((project) => (
    <>
      <section
        className="pt-6 cursor-pointer"
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
