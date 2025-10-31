import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/student.css";
import "./styles/resources.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faBook,
  faCircle,
  faClock,
  faFilter,
  faMedal,
  faUserAlt,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/news-2.jpg";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

function Resources() {
  // array to hold tab
  const resourceTabs = [
    "All Resources",
    "Past Questions",
    "Video Tutorials",
    "Courses",
    "Nano Degrees",
  ];

  // array to hold resouces (gotten from api)
  const resources = [
    {
      id: 1,
      title: "Introduction to Machin Learning",
      date_posted: "2025-10-11 09:13:45",
      author: "Dr. Sarah Chen",
      level: "Beginner",
      category: "Courses",
      image_url: "", //after retrival can we then update the post image with this key
    },
    {
      id: 2,
      title: "Calculus II Past papers",
      date_posted: "2025-09-11 09:13:45",
      author: "Prof. James Wilson",
      level: "Intermediate",
      category: "Past Questions",
      image_url: "", //after retrival can we then update the post image with this key
    },
    {
      id: 3,
      title: "Advanced Database System",
      date_posted: "2025-10-31 09:13:45",
      author: "Dr. Robert Emmanuel",
      level: "Advanced",
      category: "Video Tutorials",
      image_url: "", //after retrival can we then update the post image with this key
    },
    {
      id: 4,
      title: "Artificial Intelligence Ethics",
      date_posted: "2025-10-01 08:13:45",
      author: "Dr. Sarah Chen",
      level: "Intermediate",
      category: "Nano Degrees",
      image_url: "", //after retrival can we then update the post image with this key
    },
    {
      id: 5,
      title: "Organic Chemistry Lab manual",
      date_posted: "2025-10-01 08:13:45",
      author: "Dr. Emily Johnson",
      level: "Advanced",
      category: "Past Questions",
      image_url: "", //after retrival can we then update the post image with this key
    },
  ];

  type Category =
    | "Past Questions"
    | "Video Tutorials"
    | "Courses"
    | "Nano Degrees";
  // fontAwesome icon category
  const iconCategories: Record<Category, IconDefinition> = {
    "Past Questions": faBook,
    "Video Tutorials": faVideoCamera,
    Courses: faBookOpen,
    "Nano Degrees": faMedal,
  };

  // function to get time
  function timeAgo(dateString: string) {
    const inputDate = new Date(dateString);
    const now = new Date();
    const difference = now.getTime() - inputDate.getTime();
    const seconds = Math.floor(difference / 1000);

    if (seconds < 5) return "just now";
    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

    const years = Math.floor(days / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }

  const [activeTab, setActiveTab] = useState("All Resources");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // array to view resources default and apply filter
  const viewResources =
    activeTab === "All Resources"
      ? resources
      : resources.filter((res) => res.category === activeTab);
  return (
    <div className="student-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="resources" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area std-20 */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Educational Resources</h3>
            <p>Access learning materials, courses and past questions</p>
          </div>
          <div className="resource-nav mb-1">
            <div className="resource-tabs">
              <div className="r-tab">
                {resourceTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`dash-btn-grey ${
                      activeTab === tab ? "activeTab" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="r-filter">
                <input
                  type="search"
                  name="search_resource"
                  id="search_resource"
                  placeholder="search resources..."
                />
                <FontAwesomeIcon icon={faFilter} className="filter-icon" />
              </div>
            </div>
          </div>
          <div className="resource-content">
            {viewResources.map((post) => {
              let badge = "";
              let btntext = "Start Learning";
              if (post.level === "Beginner") {
                badge = "badge-primary";
              } else if (post.level === "Intermediate") {
                badge = "badge-secondary";
              } else {
                badge = "badge-info";
              }

              if (post.category === "Video Tutorials") {
                btntext = "Watch Tutorial";
              } else if (post.category === "Past Questions") {
                btntext = "Download PDF";
              }
              return (
                <div key={post.id} className="resource-item dash-card">
                  <div className="resource-image">
                    <img src={Logo} alt="resource_img" />
                  </div>
                  <div className="resource-inner p-1">
                    <div className="resource-label mb-s">
                      <span
                        className="badge-grey"
                        style={{ marginRight: "5px" }}
                      >
                        <FontAwesomeIcon
                          icon={iconCategories[post.category as Category]}
                        />
                        {post.category}
                      </span>
                      <span className={badge}>{post.level}</span>
                    </div>
                    <h3 className="truncate">{post.title}</h3>
                    <div className="resource-info mb-s">
                      <span>
                        <FontAwesomeIcon
                          icon={faClock}
                          style={{ marginRight: "5px" }}
                        />
                        {timeAgo(post.date_posted)}
                      </span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ margin: "0 10px", fontSize: "5px" }}
                      />
                      <span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          style={{ marginRight: "5px" }}
                        />
                        {post.author}
                      </span>
                    </div>
                    <Link to="#" className="dash-btn" style={{ width: "100%" }}>
                      {btntext}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
