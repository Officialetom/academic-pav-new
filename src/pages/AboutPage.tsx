import "./style.css";
import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";
import Team from "../components/Team";
import Vision from "../components/Vision";
import src from "../assets/apl.png";

function AboutPage() {
  return (
    <>
      <PageBanner page="About Us" />
      <div className="about">
        <div className="about-container">
          <div className="about-item about-f">
            <p>
              Our platform aims to provide a seamless experience for
              Universities and students to manage academic data and access
              information. With our innovative solution we strive to make higher
              education more efficient and accessible.
            </p>
          </div>
          <div className="about-item about-l">
            <img src={src} alt="about-logo" />
          </div>
        </div>
      </div>
      <Vision />
      <Team />
      <Footer />
    </>
  );
}

export default AboutPage;
