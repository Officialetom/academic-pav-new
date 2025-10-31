import src from "../assets/apl.png";
import Button from "./Button";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-item about-f">
          <h2>About Us</h2>
          <p>
            Our platform aims to provide a seamless experience for Universities
            and students to manage academic data and access information. With
            our innovative solution we strive to make higher education more
            efficient and accessible.
          </p>
          <Button href="/about" name="Learn More" class_name="button-light" />
        </div>
        <div className="about-item about-l">
          <img src={src} alt="about-logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
