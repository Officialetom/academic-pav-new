import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faLayerGroup,
  faBuilding,
  faDatabase,
  faChartArea,
  faUsers,
  faClipboardCheck,
  faBookOpen,
  faWarning,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../../assets/apl.png";

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
        <div className="title-img">
          <img src={Logo} alt="apl logo" />
        </div>
        <div className="title-inner">
          <span>APL</span>
          <span>Super Admin Portal</span>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li className={`${page === "dashboard" ? "link-active" : ""}`}>
            <Link to="/super/dashboard">
              <FontAwesomeIcon icon={faLayerGroup} className="f-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`${page === "universities" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/universities">
              <FontAwesomeIcon icon={faBuilding} className="f-icon" />
              <span>Univsersities</span>
            </Link>
          </li>
          <li className={`${page === "data-streams" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/datastreams">
              <FontAwesomeIcon icon={faDatabase} className="f-icon" />
              <span>Data Streams</span>
            </Link>
          </li>
          <li className={`${page === "analytics" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/analytics">
              <FontAwesomeIcon icon={faChartArea} className="f-icon" />
              <span>Analytics & Insights</span>
            </Link>
          </li>
          <li className={`${page === "roles" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/roles">
              <FontAwesomeIcon icon={faUsers} className="f-icon" />
              <span>Roles & Permissions</span>
            </Link>
          </li>
          <li className={`${page === "requests" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/requests">
              <FontAwesomeIcon icon={faClipboardCheck} className="f-icon" />
              <span>Request</span>
            </Link>
          </li>
          <li className={`${page === "research" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/research">
              <FontAwesomeIcon icon={faBookOpen} className="f-icon" />
              <span>Research</span>
            </Link>
          </li>
          <li className={`${page === "complaints" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/complaints">
              <FontAwesomeIcon icon={faWarning} className="f-icon" />
              <span>Escalations & Complaints</span>
            </Link>
          </li>
          <li className={`${page === "settings" ? "link-active" : ""}`}>
            <Link to="/super/dashboard/settings">
              <FontAwesomeIcon icon={faGear} className="f-icon" />
              <span>System Settings</span>
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
