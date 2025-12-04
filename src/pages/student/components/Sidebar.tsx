import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faChartBar,
  faNewspaper,
  faBookAtlas,
  faMedal,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface props {
  isOpen: boolean;
  closeSidebar: () => void;
  page: string;
}

function Sidebar({ isOpen, closeSidebar, page }: props) {
  // const navLinksRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={`sidebar ${isOpen ? "move-sidebar" : ""}`}>
      <div className="title">
        <FontAwesomeIcon
          icon={faClose}
          onClick={closeSidebar}
          className="close-btn"
        />
        <span>AcademyBoard</span>
      </div>
      <div className="navigation">
        <ul>
          <li className={`${page === "dashboard" ? "link-active" : ""}`}>
            <Link to="/student/dashboard">
              <FontAwesomeIcon icon={faHome} className="f-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`${page === "results" ? "link-active" : ""}`}>
            <Link to="/student/dashboard/results">
              <FontAwesomeIcon icon={faChartBar} className="f-icon" />
              <span>Results</span>
            </Link>
          </li>
          <li className={`${page === "profile" ? "link-active" : ""}`}>
            <Link to="/student/dashboard/profile">
              <FontAwesomeIcon icon={faUser} className="f-icon" />
              <span>Profile</span>
            </Link>
          </li>
          <li className={`${page === "resources" ? "link-active" : ""}`}>
            <Link to="/student/dashboard/resources">
              <FontAwesomeIcon icon={faBookAtlas} className="f-icon" />
              <span>Resources</span>
            </Link>
          </li>
          <li className={`${page === "scholars" ? "link-active" : ""}`}>
            <Link to="/student/dashboard/scholars">
              <FontAwesomeIcon icon={faMedal} className="f-icon" />
              <span>Scholars</span>
            </Link>
          </li>
          <li className={`${page === "news" ? "link-active" : ""}`}>
            <Link to="/student/dashboard/news">
              <FontAwesomeIcon icon={faNewspaper} className="f-icon" />
              <span>News & Trends</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="footer-title">Academic Year</div>
        <div className="footer-year">2025/2026</div>
      </div>
    </div>
  );
}

export default Sidebar;
