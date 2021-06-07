import Head from 'next/head';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import SectionAboutUs from '../components/SectionAboutUs';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Head>lecode - About Us</Head>
      <Navbar />
      <SectionAboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
