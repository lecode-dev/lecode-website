import { useState } from 'react'
import { useRouter } from 'next/router'
import { DiJavascript1 } from 'react-icons/di'
import { MdDeveloperMode, MdChat } from 'react-icons/md'
import ContactModal from '../ContactModal'

const supportLinks = [
  {
    name: 'Agency',
    title: 'Work with us',
    description:
      'We can offer the best developers in the market. We have developers specialized in JavaScript, that use technologies like react, react-native, vue.js, node.js, next, gatsby, express, sequelize, and so on. ',
    icon: DiJavascript1,
  },
  {
    name: 'Software development',
    title: 'See last projects',
    href: '/projects',
    description:
      'We are specialized to develop high-quality software. We always aim at striking long-term working relations with outstanding clients and everything is notwithstanding premised on quality that surpasses your expectations. ',
    icon: MdDeveloperMode,
  },
  {
    name: 'Freelancing',
    title: 'Contact us',
    description:
      'We aim to provide a flawless freelance experience, combining excellent understanding, great communication, and speedy delivery.',
    icon: MdChat,
  },
]

export default function AboutUsSection() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <ContactModal onClose={onClose} open={open} />
      <section className="bg-gray-darkest sm:pt-12">
        {/* Header */}
        <div className="relative pb-32 ">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-scale-down object-center opacity-5"
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
              We are a software house and a agency specialized in building
              modern, exceptional, high-quality websites and applications.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative pb-32 px-4 sm:px-6 lg:px-8"
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
                      color="#fff"
                      className="h-6 w-6 text-white"
                      fill="#fff"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-400">
                    {link.description}
                  </p>
                </div>
                <div className="p-6 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <span
                    onClick={() => {
                      if (link.href) {
                        router.push(link.href)
                        return
                      }
                      setOpen(true)
                    }}
                    className="cursor-pointer text-base font-medium text-green-500 hover:text-green-600"
                  >
                    {link.title}
                    <span aria-hidden="true"> &rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}
