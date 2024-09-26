import Seo from "../components/Seo";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Seo
        font={
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        }
      />

      <Component {...pageProps} />

      <ToastContainer />

      {/* <!-- Scroll To Top --> */}
      <ScrollToTop />
    </div>
  );
}

export default MyApp;
