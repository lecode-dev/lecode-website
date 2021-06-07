import 'tailwindcss/tailwind.css';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="bg-gray-darkest" />;
}

export default MyApp;
