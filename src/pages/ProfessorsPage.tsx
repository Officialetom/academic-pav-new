import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";
import University from "../components/University";

function Professors() {
  const university = [
    { name: "Robert Emmanuel", image: "images/high-angle.jpg" },
    { name: "Samuel Robinson", image: "images/high-angle.jpg" },
    { name: "Dr. Albert Bob", image: "images/high-angle.jpg" },
    { name: "Prof. Ubana", image: "images/high-angle.jpg" },
    { name: "Emeka Felix", image: "images/high-angle.jpg" },
    { name: "Emmanuel Emmanuel", image: "images/high-angle.jpg" },
    { name: "Alex Felix", image: "images/high-angle.jpg" },
    { name: "Faith Felix", image: "images/high-angle.jpg" },
    { name: "Monica Robert", image: "images/high-angle.jpg" },
  ];
  return (
    <>
      <PageBanner page="Professors" />
      <div className="university">
        <University data={university} />
      </div>
      <Footer />
    </>
  );
}

export default Professors;
