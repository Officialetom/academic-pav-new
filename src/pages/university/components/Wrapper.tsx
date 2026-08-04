import "../assets/style.css";
import logo from "../../../assets/apl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronCircleLeft,
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
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
interface props {
  pageTitle: string;
  children: React.ReactNode;
}
function Wrapper({ pageTitle, children }: props) {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleUploads = () => {
    if (isOpen) return;

    setIsActive((prev) => !prev);
    };

    const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (isOpen) {
            setIsActive(false);
        }
    }, [isOpen]);

  return (
    <>
      <div className="h-[100vh] flex">
        {/* sidebar */}
        <div className={`sidebar ${isOpen ? "is-active" : "in-active"}`}>
          <div className="h-[65px] border-b-1 border-[#1D4ED8] text-white flex items-center justify-between gap-2 p-1">
            <div className="bg-white rounded-md">
              <img src={logo} alt="apl logo" className="w-[50px]" />
            </div>
            <p className={`font-bold text-sm  menu-text ${isOpen ? "hidden" : "flex"}`}>University Portal</p>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              className={`cursor-pointer ${isOpen ? "rotate-180" : "rotate-0"}`}
              onClick={toggleSidebar}

            />
          </div>
          <div className="sidebar-links">
            <Link
              to="/university/dashboard"
              className={`${pageTitle === "dashboard" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faDashboard} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Dashboard</span>
            </Link>
            <Link
              to="/university/students"
              className={`${pageTitle === "students" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faUsers} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Students</span>
            </Link>
            <Link to="/university/results" className={`${pageTitle === "results" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faClipboardCheck} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Results</span>
            </Link>
            <Link
              to="/university/admission"
              className={`${pageTitle === "admissions" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faUserPlus} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Admissions</span>
            </Link>
            <Link to="/university/nysc" className={`${pageTitle === "nysc" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faGraduationCap} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>NYSC List</span>
            </Link>
            <div className="w-full">
                <button
                    type="button"
                    onClick={toggleUploads}
                    className={`sidebar-btn ${
                        pageTitle === "uploads" ? "active" : ""
                    }`}
                >
                    <div className="flex items-center gap-3 flex-1">
                        <FontAwesomeIcon icon={faUpload} />

                        <span className={`menu-text ${isOpen ? "hide" : ""}`}>
                            Uploads
                        </span>
                    </div>

                    {!isOpen && (
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`transition-transform duration-300 ${
                                isActive ? "rotate-180" : ""
                            }`}
                        />
                    )}
                </button>

                {!isOpen && (
                    <div
                        className={`submenu ${
                            isActive ? "open" : "closed"
                        }`}
                    >
                        <div className="ml-10 flex flex-col gap-1">
                            <Link to="/university/uploads/result">Upload Results</Link>
                            <Link to="/university/uploads/admission">Upload Admission List</Link>
                        </div>
                    </div>
                )}
            </div>
            <Link
              to="/university/manage-roles"
              className={`${pageTitle === "manage-roles" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faShieldAlt} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Manage Roles</span>
            </Link>
            <Link
              to="/university/notifications"
              className={`${pageTitle === "notification" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faBell} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Notification</span>
            </Link>
            <Link
              to="/university/activity-log"
              className={`${pageTitle === "activity-log" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faClock} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Activity log</span>
            </Link>
            <Link
              to="/university/settings"
              className={`${pageTitle === "settings" ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={faGear} /> <span className={`menu-text ${isOpen ? "hide" : ""}`}>Settings</span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto wrapper">
          <div className="h-16 bg-white shadow sticky top-0 flex p-5 items-center justify-between p-1">
            <input type="search" name="search" id="" style={{padding: "10px"}} className="border-1 border-gray-300 text-sm rounded-md text-gray-600 md:w-[400px]" placeholder="Search..."/>
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
          <div className="p-1 flex-1">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wrapper;
