import Navbar from "./Navbar";

interface props {
  page: string;
}

function PageBanner({ page }: props) {
  return (
    <>
      <div className="page-banner">
        <Navbar />
        <div className="page-banner-container">
          <h2>{page}</h2>
          <span>
            Home {">"} {[page]}
          </span>
        </div>
      </div>
    </>
  );
}

export default PageBanner;
