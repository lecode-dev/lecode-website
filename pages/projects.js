import { Title } from '../components/Typografy'
import { Subtitle } from '../components/Typografy'
import ProjectCard from '../components/ProjectCard'
import Divider from '../components/Divider'
import { useTranslations } from 'next-intl'

export default function projects() {
  const t = useTranslations('Projects')
  return (
    <section id="projects">
      <div className="relative pt-12">
        <Title>{t('title')}</Title>
        <Subtitle>{t('subtitle')}</Subtitle>
      </div>
      <Divider>{t('subtitle_divider')}</Divider>
      <ProjectCard />
    </section>
  )
}
