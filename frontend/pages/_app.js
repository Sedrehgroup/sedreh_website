import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./../styles/globals.css";
import "./../components/System/app.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./../styles/mapbox-gl-compare.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "reactjs-popup/dist/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import system from "./system";

function MyApp({ Component, pageProps }) {
  if (Component == system) return <Component {...pageProps} />;
  else
    return (
      <div className=" bg-black1">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    );
}

export default MyApp;
