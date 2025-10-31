import "./style.css";
import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/footer";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Updates from "../components/Updates";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Updates />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
