import { Fragment } from 'react';
import TeamCard from '../TeamCard';

const empoloyers = [
  {
    name: 'Erick Willian',
    role: 'Senior backend developer',
    imageUrl: '/images/team/erick.png',
    githubUrl: 'https://github.com/Erickinhou',
    linkedinUrl: 'https://www.linkedin.com/in/erick-willian-8553a2133/',
  },
  // More people...
];
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
  );
}
