import "../assets/style.css";
import logo from "../../../assets/apl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronDown,
  faClipboardCheck,
  faClock,
  faDashboard,
  faGear,
  faGraduationCap,
  faShieldAlt,
  faUpload,
  faUser,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
interface props {
  pageTitle: string;
  children: React.ReactNode;
}
function Wrapper({ pageTitle, children }: props) {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleUploads = () => setIsActive(!isActive);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="h-[100vh] flex">
        {/* sidebar */}
        <div className={`sidebar ${isOpen ? "is-active" : "in-active"}`}>
          <div className="h-[65px] border-b-1 border-[#1D4ED8] text-white flex items-center justify-between gap-2 p-1">
            <div className="bg-white rounded-md">
              <img src={logo} alt="apl logo" className="w-[50px]" />
            </div>
            <p className={`font-bold text-sm ${isOpen ? "hidden" : "flex"}`}>University Portal</p>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className={`cursor-pointer ${isOpen ? "rotate-180" : "rotate-0"}`}
              onClick={toggleSidebar}

            />
          </div>
          <div className="flex-1 p-1 sidebar-links flex flex-col gap-3">
            <Link
              to="/university/dashboard"
              className={`${pageTitle === "dashboard" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faDashboard} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Dashboard</span>
            </Link>
            <Link
              to="/university/students"
              className={`${pageTitle === "students" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faUsers} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Students</span>
            </Link>
            <Link to="" className={`${pageTitle === "results" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faClipboardCheck} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Results</span>
            </Link>
            <Link
              to=""
              className={`${pageTitle === "admissions" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faUserPlus} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Admissions</span>
            </Link>
            <Link to="" className={`${pageTitle === "nysc" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faGraduationCap} /> <span className={`${isOpen ? "hidden" : "flex"}`}>NYSC List</span>
            </Link>
            <span
              className={`relative uploads ${isActive ? "act" : "in-active"}`}
              id="upload"
              onClick={toggleUploads}
            >
              <span className={` ${isOpen ? "hover:bg-blue-600" : ""} rounded-md ${pageTitle === "uploads" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faUpload} /> <span className={`${isOpen ? "hidden" : ""}`}>Uploads</span>
              </span>
              <div className="mini-side">
                <Link to="">Upload results</Link>
                <Link to="">Upload admission list</Link>
              </div>
            </span>
            <Link
              to=""
              className={`${pageTitle === "manage-roles" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faShieldAlt} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Manage Roles</span>
            </Link>
            <Link
              to=""
              className={`${pageTitle === "notification" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faBell} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Notification</span>
            </Link>
            <Link
              to=""
              className={`${pageTitle === "activity-log" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faClock} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Activity log</span>
            </Link>
            <Link
              to=""
              className={`${pageTitle === "settings" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faGear} /> <span className={`${isOpen ? "hidden" : "flex"}`}>Settings</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto">
          <div className="h-[65px] bg-white shadow sticky top-0 flex p-1 items-center justify-between">
            <input type="search" name="search" id="" style={{padding: "10px"}} className="border-1 border-gray-100 text-sm rounded-md text-gray-600 md:w-[400px]" placeholder="Search..."/>
            <div className="flex gap-2 items-center">
                <div className="">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="flex gap-1 items-center">
                    <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="">
                            <p className="text-sm">Admin user</p>
                            <p className="text-xs text-gray-400">Super Admin</p>
                        </div>
                        <div className="">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="flex-1 p-1">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
