import Img from "../assets/logo-transparent.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <h1 className="footer-text">Get In Touch With Us</h1>
          <div className="footer-box">
            <img src={Img} alt="footer_img" />
            <div className="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">News</Link>
                </li>
                <li>
                  <Link to="/">Academics</Link>
                </li>
                <li>
                  <Link to="/">Partners</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="footer-address">
              <ul>
                <li>Physical Address:</li>
                <li>Phone No:</li>
              </ul>
            </div>
            <div className="footer-subscribe">
              <span>Sign up for Our Newsletter</span>
              <form action="#">
                <input type="email" name="" id="" required />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright @ Academic Pavilion</span>
      </div>
    </>
  );
}

export default Footer;
