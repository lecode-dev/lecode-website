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
    name: 'Natan Dias',
    role: 'CTO',
    imageUrl: '/images/team/natan.jpg',
    githubUrl: 'https://github.com/natandias',
    linkedinUrl: 'https://www.linkedin.com/in/natandias',
  },
  {
    name: 'Káren Myllena',
    role: 'Front-End Developer',
    imageUrl: '/images/team/karen.png',
    githubUrl: 'https://github.com/karenmscg',
    linkedinUrl:
      'https://www.linkedin.com/in/k%C3%A1ren-myllena-gon%C3%A7alves-425b181b2/',
  },
  {
    name: 'Miguel Cunha',
    role: 'Back-End Developer',
    imageUrl: '/images/team/larangod.png',
    githubUrl: 'https://github.com/LaranGod',
    linkedinUrl: 'https://www.linkedin.com/in/miguel-am%C3%A2ncio-951420213/',
  },
  {
    name: 'Pablo Felipe',
    role: 'Back-End Developer',
    imageUrl: '/images/team/pablo.jpg',
    githubUrl: 'https://github.com/PabloFLPs',
    linkedinUrl: 'https://www.linkedin.com/in/pablo-felipe-lnkdn/',
  },
  {
    name: 'Lucas Souza',
    role: 'Full-Stack Developer',
    imageUrl: '/images/team/lucas.jpeg',
    githubUrl: 'https://github.com/lucasfilipess',
    linkedinUrl: 'https://www.linkedin.com/in/lucas-souza-95b867174/',
  },
  {
    name: 'Daniel Borges',
    role: 'Back-End Developer',
    imageUrl: '/images/team/daniel.png',
    githubUrl: 'https://github.com/DanteBorges',
    linkedinUrl: 'https://www.linkedin.com/in/daniel-fborges/',
  },
  // More people...
]
export default function Team() {
  return (
    <div className="bg-gray-darkest">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="text-xl text-gray-300">
              Know the better that our team can offer!
              <br /> At <b className="text-green-500">LeCode</b> we have
              advanced software, advanced research for advanced people.
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
