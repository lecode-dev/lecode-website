import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function projects() {
  return (
    <>
      <Head>lecode - About Us</Head>
      <Navbar />
      <div className="relative pt-12">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white   sm:text-4xl">
          Our Projects
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          We think different, you can see below some of our projects made with
          love.
        </p>
      </div>
    </>
  );
}
