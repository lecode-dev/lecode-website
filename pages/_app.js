import "tailwindcss/tailwind.css";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="bg-gray-darkest" />;
}

export default MyApp;
