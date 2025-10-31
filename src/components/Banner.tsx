import Button from "./Button";
import Navbar from "./Navbar";
import bannerLogo from "../assets/about-img.jpg";
import Arrow from "../assets/arrow.png";

function Banner() {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner-container">
        <div className="banner-item">
          <h1>Empowering Education through Collaboration</h1>
          <p>
            Transforming Higher Education <br /> Innovative Solution for
            Universities <br />
            and Students.
          </p>
          <div className="banner-btns">
            <Button href="/auth" name="Get Started" class_name="button-light" />
            <Button href="/about" name="Learn More" class_name="button-dark" />
            <img src={Arrow} alt="arrow_down" />
          </div>
        </div>
        <div className="banner-item">
          <img src={bannerLogo} alt="Banner_logo" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
