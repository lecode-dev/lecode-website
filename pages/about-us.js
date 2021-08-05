import Head from 'next/head';
import Navbar from '../components/Navbar';
import TeamSession from '../components/TeamSession';
import AboutUsSection from '../components/AboutUsSection';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Head>lecode - About Us</Head>
      <Navbar />
      <AboutUsSection />
      <TeamSession />
      <Footer />
    </>
  );
}
