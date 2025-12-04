import Card from "./Card";

function Services() {
  const service = [
    { name: "Data Harmonization & Integration", image: "images/icon-1.png" },
    { name: "Sustainable Digital System", image: "images/icon-1.png" },
    {
      name: "Academic Excellence & Innovation Showcase",
      image: "images/icon-1.png",
    },
    {
      name: "Academic Excellence & Innovation Showcase",
      image: "images/icon-1.png",
    },
  ];
  return (
    <div className="services">
      <div className="services-container">
        <div className="service-item">
          <h2>Our Services</h2>
          <p>Academic Pavilion Offers...</p>
        </div>
        <div className="service-item">
          {/* <div className="serve">
            <img src={Icon} alt="service_img" />
            <span>Data Harmonization & Integration</span>
          </div> */}
          <Card data={service} delayed={4000} />
        </div>
      </div>
    </div>
  );
}

export default Services;
