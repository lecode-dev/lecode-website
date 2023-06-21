import { useTranslations } from 'next-intl'
import { Fragment } from 'react'
import TeamCard from '../TeamCard'

const empoloyers = [
  {
    name: 'Erick Willian',
    role: 'CEO',
    imageUrl: '/images/team/erick2.jpeg',
    githubUrl: 'https://github.com/Erickinhou',
    linkedinUrl: 'https://www.linkedin.com/in/erick-willian-8553a2133/',
  },
  {
    name: 'Matheus Soares',
    role: 'Co-Founder',
    imageUrl: '/images/team/matheus.jpeg',
    githubUrl: 'https://github.com/MsCardoso77',
    linkedinUrl: 'https://www.linkedin.com/in/matheus-soares-b22306237/',
  },
  {
    name: 'Alex Almeida',
    role: 'Software Developer',
    imageUrl: '/images/team/alex.jpg',
    githubUrl: 'https://github.com/alexaldr',
    linkedinUrl: 'https://www.linkedin.com/in/alexaldr/',
  },
  {
    name: 'Arthur Severo',
    role: 'Software Developer',
    imageUrl: '/images/team/arthur.jpg',
    githubUrl: 'https://github.com/Sevzera',
    linkedinUrl:
      'https://www.linkedin.com/in/arthur-severo-de-souza-71285a212/',
  },
  {
    name: 'Marcos Gabriel',
    role: 'Software Developer',
    imageUrl: '/images/team/gabriel.png',
    githubUrl: 'https://github.com/MarcosGAC',
    linkedinUrl: 'https://www.linkedin.com/in/marcos-gabriel-246b01207/',
  },
  {
    name: 'João Guilherme',
    role: 'Software Developer',
    imageUrl: '/images/team/joao.jpg',
    githubUrl: 'https://github.com/JoaoGSP',
    linkedinUrl: 'https://www.linkedin.com/in/joaogspereira/',
  },
  {
    name: 'Kaique Noronha',
    role: 'Software Developer',
    imageUrl: '/images/team/kaique.png',
    githubUrl: 'https://github.com/KaiqueNoronha',
    linkedinUrl: 'https://www.linkedin.com/in/kaique-noronha-dev/',
  },
  {
    name: 'Káren Myllena',
    role: 'Software Developer',
    imageUrl: '/images/team/karen.jpg',
    githubUrl: 'https://github.com/karenmscg',
    linkedinUrl:
      'https://www.linkedin.com/in/k%C3%A1ren-myllena-gon%C3%A7alves-425b181b2/',
  },
  {
    name: 'Miguel Cunha',
    role: 'Software Developer',
    imageUrl: '/images/team/miguel.jpg',
    githubUrl: 'https://github.com/LaranGod',
    linkedinUrl: 'https://www.linkedin.com/in/miguel-am%C3%A2ncio-951420213/',
  },
  {
    name: 'Natan Dias',
    role: 'Software Developer',
    imageUrl: '/images/team/natan.jpg',
    githubUrl: 'https://github.com/natandias',
    linkedinUrl: 'https://www.linkedin.com/in/natandias',
  },
  {
    name: 'Pablo Felipe',
    role: 'Software Developer',
    imageUrl: '/images/team/pablo.jpg',
    githubUrl: 'https://github.com/PabloFLPs',
    linkedinUrl: 'https://www.linkedin.com/in/pablo-felipe-lnkdn/',
  },
  {
    name: 'Victor Le Roy',
    role: 'Software Developer',
    imageUrl: '/images/team/victor.jpg',
    githubUrl: 'https://github.com/vmleroy',
    linkedinUrl: 'https://www.linkedin.com/in/victorlrmatos/',
  },
  // More people...
]
export default function Team() {
  const t = useTranslations('TeamSession')
  return (
    <div className="bg-gray-darkest">
      <div className="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-300">
              {t.rich('description', {
                title: (children) => {
                  console.log('children', children)
                  return <b className="text-green-500">{children} </b>
                },
                br: () => <br />,
              })}
            </p>
          </div>
          <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {empoloyers.map((person) => (
              <Fragment key={person?.name}>
                <TeamCard person={person} />
              </Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
