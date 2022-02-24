import 'tailwindcss/tailwind.css'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '../styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} className="bg-gray-darkest" />;
    </NextIntlProvider>
  )
}

export default MyApp
