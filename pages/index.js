import React from 'react'

import { ToastContainer } from 'react-toastify'

import Footer from '../components/Footer'
import Home from '../components/Home'
import CustomHead from '../components/CustomHead'

import Projects from './projects'
import AboutUs from './about-us'

export default function App() {
  return (
    <>
      <CustomHead />
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
      <Home />
      <Projects />
      <AboutUs />
      <Footer />
    </>
  )
}

export function getStaticProps({ locale }) {
  
  return {
    props: {
      messages: require(`../translations/${locale}.json`),
    },
  }
}
