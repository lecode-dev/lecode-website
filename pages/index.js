import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Formik, Form, Field } from 'formik'
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'
import { axiosApi } from '../utils/axiosApi.js'
import { SeoTags } from '../components/Seo'

export default function Home() {
  const [disableButton, setDisableButton] = useState(false)
  const onSubmit = async (values, ...rest) => {
    console.log('values -->', values)
    setDisableButton(true)
    try {
      const response = await axiosApi.post(`/contact`, values)
      const { message } = response.data
      toast.success(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (err) {
      toast.error('Invalid Email!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setTimeout(() => setDisableButton(false), 1500)
  }
  const sendMailValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })
  return (
    <>
      <Head>
        <title>lecode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We are a software house and a agency specialized in building websites and applications."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://lecode.dev/" />
        <meta
          property="og:image:secure_url"
          itemprop="image"
          content="http://lecode.dev/images/lecode-seo-300.WebP"
        />
        <link
          itemprop="thumbnailUrl"
          href="http://lecode.dev/images/lecode-seo-300.WebP"
        />
        <meta property="og:image:type" content="image/WebP" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lecode" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta
          property="og:description"
          content="We are a software house and a agency specialized in building websites and applications."
          key="ogdescription"
        />
        <meta property="og:updated_time" content="1440432930" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@lecodedev" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClicks
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme={'dark'}
        pauseOnHover
      />
      <div className="min-h-screen">
        <div className="relative h-full bg-gray-darkest overflow-hidden">
          <div className="mx-auto xl:h-screen">
            <div className="relative z-10 pb-8 bg-gray-darkest sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <Navbar />
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="#1a1b1d"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">A better way to</span>{' '}
                    <span className="block text-green-500 xl:inline">
                      connecting People.
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Do you need to develop an app?
                    <br /> Or maybe you need a programmer to work in your team?
                    <br /> You are on right path.
                  </p>
                  <div className="mt-10 sm:mt-12 sm:w-10/12">
                    <Formik
                      initialValues={{ email: '' }}
                      validationSchema={sendMailValidation}
                      onSubmit={onSubmit}
                      action="#"
                      className="sm:max-w-xl sm:mx-auto lg:mx-0"
                    >
                      <Form>
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <Field
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              disabled={disableButton}
                              className="block w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 disabled:bg-green-900"
                            >
                              Contact Us
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-400 sm:mt-4">
                          We will contact you as soon as possible. By providing
                          your email, you agree to our{' '}
                          <a href="#" className="font-medium text-white">
                            terms or service
                          </a>
                          .
                        </p>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/images/team/lecode.WebP"
              alt="lecode-team"
            />
          </div>
        </div>
      </div>
    </>
  )
}
