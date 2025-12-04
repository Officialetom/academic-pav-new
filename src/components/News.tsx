import src from "../assets/Union.png";
import Card from "./Card";

function News() {
  const university = [
    { name: "Welcome News", image: "images/high-angle.jpg" },
    { name: "Kick start well", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
    { name: "Uniben", image: "images/high-angle.jpg" },
  ];

  return (
    <div className="news">
      <div className="news-container">
        <h2>News and Update</h2>
        <p>
          Our News and updates <img src={src} alt="arrow-right" />
        </p>
        <Card data={university} delayed={4000} />
      </div>
    </div>
  );
}

export default News;
