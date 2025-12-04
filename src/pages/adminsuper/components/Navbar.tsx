import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface props {
  toggleSidebar: any;
}

function Navbar({ toggleSidebar }: props) {
  return (
    <div className="navbar">
      <div className="nav-item">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Universities, databases, users..."
        />
      </div>
      <div className="nav-item">
        <Link to="" className="dash-icon">
          <FontAwesomeIcon icon={faBell} className="f-icon" />
        </Link>
        <Link to="">
          <div className="s-profile">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </div>
          <FontAwesomeIcon icon={faAngleDown} className="f-icon" />
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleSidebar}
          className="s-toggle-btn"
        />
      </div>
    </div>
  );
}

export default Navbar;
