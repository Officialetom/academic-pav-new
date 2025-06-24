import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";
import University from "../components/University";

function Programes() {
  const university = [
    { name: "Computer Science", image: "images/high-angle.jpg" },
    { name: "Medicine & Surgery", image: "images/high-angle.jpg" },
    { name: "Mathematics", image: "images/high-angle.jpg" },
    { name: "Fine Arts", image: "images/high-angle.jpg" },
    { name: "Dentistry", image: "images/high-angle.jpg" },
    { name: "Radiography", image: "images/high-angle.jpg" },
    { name: "Radiography", image: "images/high-angle.jpg" },
    { name: "Mass Communication", image: "images/high-angle.jpg" },
    { name: "Mass Communication", image: "images/high-angle.jpg" },
  ];
  return (
    <>
      <PageBanner page="Programes" />
      <div className="university">
        <University data={university} />
      </div>
      <Footer />
    </>
  );
}

export default Programes;
