import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin-in.svg";

function ContactPage() {
  return (
    <>
      <PageBanner page="Contact" />
      <div className="contact">
        <div className="contact-container">
          <div className="contact-inner">
            <form action="">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <textarea
                name="message"
                id="message"
                placeholder="Message..."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contact-inner">
            <h4>Follow Us @</h4>
            <div className="follow">
              <a href="">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="">
                <img src={linkedin} alt="linked-in" />
              </a>
              <a href="">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
