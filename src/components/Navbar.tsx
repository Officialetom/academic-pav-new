import logo from "../assets/logo-transparent.png";
import toggleWhite from "../assets/toggle-w.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
  const navLinksRef = useRef<HTMLDivElement | null>(null);

  const handleMove = () => {
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("move");
    }
  };

  const handleMoveParent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === navLinksRef.current) {
      navLinksRef.current?.classList.toggle("move");
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-item">
            <Link to="/" className="logo-link">
              <img src={logo} alt="academic-pav-logo" className="nav-img" />
              <span>ACADEMIC PAVILION</span>
            </Link>
          </div>
          <div className="nav-item">
            <div
              className="nav-links-container"
              ref={navLinksRef}
              onClick={handleMoveParent}
            >
              <div className="nav-links">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/academia">Academia</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="toggle_btn" onClick={handleMove}>
            <img src={toggleWhite} alt="nav_tbtn-light" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
