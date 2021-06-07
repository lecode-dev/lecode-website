/* This example requires Tailwind CSS v2.0+ */
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from '@heroicons/react/outline';

import { DiJavascript1 } from 'react-icons/di';
import { GrCloudSoftware } from 'react-icons/gr';

const supportLinks = [
  {
    name: 'Agency',
    href: '#',
    description:
      'We can offer the best developers in the market. We have developers specialized in JavaScript, that use technologies like react, react-native, vue.js, node.js, next, gatsby, express, sequelize, and so on. ',
    icon: DiJavascript1,
  },
  {
    name: 'Software development',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Software consulting',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
];

export default function SectionAboutUs() {
  return (
    <section className="bg-gray-darkest sm:pt-12">
      {/* Header */}
      <div className="relative pb-32 ">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/lecodeBlackWhite.png"
            alt="lecode"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            About LeCode
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
            We are a software house and a agency specialized in building (and
            sometimes designing) modern, exceptional, high-quality websites and
            applications.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="bg-gray-dark flex flex-col rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-green-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white  "
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-white">{link.name}</h3>
                <p className="mt-4 text-base text-gray-400">
                  {link.description}
                </p>
              </div>
              <div className="p-6 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-green-500 hover:text-green-600"
                >
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
