import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface props {
  toggleSidebar: any;
}

function Navbar({ toggleSidebar }: props) {
  return (
    <div className="navbar">
      <div className="nav-item">
        <div className="greetings">
          <span>Welcome back! Academic Pavilion</span>
        </div>
        <div className="info">
          <span>STUDENT ID: STU-123-456</span>
        </div>
      </div>
      <div className="nav-item">
        <Link to="" className="dash-icon">
          <FontAwesomeIcon icon={faBell} className="f-icon" />
        </Link>
        <Link to="" className="dash-icon">
          <FontAwesomeIcon icon={faGear} className="f-icon" />
        </Link>
        <Link to="../student/dashboard/profile">
          <div className="profile">
            <span>AJ</span>
          </div>
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleSidebar}
          className="toggle-btn"
        />
      </div>
    </div>
  );
}

export default Navbar;
