import { Title, Subtitle } from '../Typografy'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

export default function ProjectCard(props) {
  const router = useRouter()
  const t = useTranslations('ProjectCard')

  const projects = [
    {
      imageSrc: '/images/projects/spread.png',
      title: 'Spread Software',
      link: 'https://app.spread.software/login',
      description: t('spread_software'),
      imageAlt: 'spread-software',
    },
    {
      imageSrc: '/images/projects/bentcare.png',
      title: 'Bentcare',
      link: 'https://bentcare.com.br/',
      description: t('bentcare'),
      imageAlt: 'bentcare',
    },
    {
      imageSrc: '/images/projects/sk-company.png',
      title: 'Storekeeper',
      link: 'https://storekeeper.nl/',
      description: t('sk-company'),
      imageAlt: 'storekeeper',
    },
    {
      imageSrc: '/images/projects/ethics.png',
      title: 'Ethics Net',
      link: 'https://www.ethicsnet.org/',
      description: t('ethics-net'),
      imageAlt: 'ethics-net',
    },
    {
      imageSrc: '/images/projects/MyAspireQuotes.png',
      title: 'MyAspireQuotes',
      link: 'https://myaspirequotes.com/',
      description: t('my-aspire-quotes'),
      imageAlt: 'MyAspireQuotes',
    },
  ]
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group relative cursor-pointer p-2"
              >
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm font-semibold text-white">
                  <a onClick={() => router.push(project.link)}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                <p className="text-base text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
