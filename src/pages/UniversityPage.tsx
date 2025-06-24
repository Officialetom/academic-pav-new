import Footer from "../components/footer";
import PageBanner from "../components/PageBanner";
import University from "../components/University";

function UniversityPage() {
  const university = [
    { name: "Unical", image: "images/high-angle.jpg" },
    { name: "Unijos", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
  ];
  return (
    <>
      <PageBanner page="Universities" />
      <div className="university">
        <University data={university} />
      </div>
      <Footer />
    </>
  );
}

export default UniversityPage;
