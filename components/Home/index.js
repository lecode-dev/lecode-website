import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { axiosApi } from '../../utils/axiosApi'
import Navbar from '../Navbar'
import { useTranslations } from 'next-intl'

const Home = () => {
  const [disableButton, setDisableButton] = useState(false)
  const t = useTranslations('Home')
  const onSubmit = async (values) => {
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
      <div className="min-h-screen">
        <div className="relative h-screen bg-gray-darkest overflow-hidden">
          <div className="mx-auto xl:h-screen">
            <div className="relative z-10 pb-8 lg:h-screen bg-gray-darkest sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <Navbar />

              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">{t('title_normal')}</span>{' '}
                    <span className="block text-green-500 xl:inline">
                      {t('title_green')}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    {t('description')}
                  </p>
                  <div className="mt-4 sm:mt-6 sm:w-10/12">
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
                              {t('email_form')}
                            </label>
                            <Field
                              name="email"
                              type="email"
                              placeholder={t('form_placeholder')}
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              disabled={disableButton}
                              className="block w-full py-3 px-4 rounded-md shadow bg-green-500 text-white font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 disabled:bg-green-900"
                            >
                              {t('contact_button')}
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-400 sm:mt-4">
                          {t('description_form')}
                        </p>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="flex-grow z-20 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-full w-full object-cover object-top lg:w-full lg:h-full"
              src="/images/team/lecode.WebP"
              alt="lecode-team"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
