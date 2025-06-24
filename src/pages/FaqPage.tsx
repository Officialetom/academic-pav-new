import Faq from "../components/Faq";
import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";

function FaqPage() {
  return (
    <>
      <PageBanner page="FAQ" />
      <div className="faq">
        <div className="faq-container">
          <Faq />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FaqPage;
