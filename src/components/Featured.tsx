import src from "../assets/Union.png";
import Card from "./Card";

function Featured() {
  const university = [
    { name: "Unical", image: "images/high-angle.jpg" },
    { name: "Unijos", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
  ];

  return (
    <div className="featured">
      <div className="featured-container">
        <h2>Featured Universities</h2>
        <p>
          List of featured Universities <img src={src} alt="arrow-right" />
        </p>
        <Card data={university} delayed={3000} />
      </div>
    </div>
  );
}

export default Featured;
