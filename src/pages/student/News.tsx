import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faBookmark,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/student.module.css";
import "./styles/news.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import containerImg from "./Container.png";
import EventImg from "./event.png";
import Navbar from "./components/Navbar";

function News() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All News");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const tabs = [
    "All News",
    "Announcements",
    "Opportunities",
    "Updates",
    "Events",
  ];

  // Updated news items with different images and proper types
  const newsItems = [
    {
      id: 1,
      title: "Fall Semester Registration Opens Next Week",
      description:
        "Students are advised to check their eligibility and prepare required documents before registration begins.",
      type: "Announcements",
      time: "7 hours ago",
      image: containerImg,
    },
    {
      id: 2,
      title: "International Exchange Program Applications Now Open",
      description:
        "Students interested in studying abroad next semester should submit their applications by the end of the month.",
      type: "Opportunities",
      time: "3 days ago",
      image: containerImg,
    },
    {
      id: 3,
      title: "Campus Infrastructure Upgrade",
      description:
        "New facilities and upgraded classrooms coming this semester.",
      type: "Updates",
      time: "1 day ago",
      image: containerImg,
    },
    {
      id: 4,
      title: "Annual Science Fair 2024",
      description:
        "Join us for the biggest science fair of the year with exciting projects and competitions.",
      type: "Events",
      time: "5 days ago",
      image: EventImg,
    },
    {
      id: 5,
      title: "Scholarship Application Deadline Extended",
      description:
        "Due to high demand, the scholarship application deadline has been extended by two weeks.",
      type: "Announcements",
      time: "2 days ago",
      image: containerImg,
    },
    {
      id: 6,
      title: "Summer Internship Opportunities Available",
      description:
        "Local companies are offering summer internships for students in various fields.",
      type: "Opportunities",
      time: "4 days ago",
      image: containerImg,
    },
    {
      id: 7,
      title: "Library System Upgrade Complete",
      description:
        "The new library management system is now live with enhanced features.",
      type: "Updates",
      time: "12 hours ago",
      image: containerImg,
    },
    {
      id: 8,
      title: "Cultural Festival 2024",
      description:
        "Annual cultural festival celebrating diversity with performances and food from around the world.",
      type: "Events",
      time: "1 week ago",
      image: EventImg,
    },
  ];

  // filter items for the active tab
  const visibleItems =
    activeTab === "All News"
      ? newsItems
      : newsItems.filter((n) => n.type === activeTab);

  // determine whether to use the grid (first three tabs) or list layout (last two tabs)
  const useGridLayout = ["All News", "Announcements", "Opportunities"].includes(
    activeTab
  );

  return (
    <div className="student-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="news" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* News main content area */}
        <div className="content">
          {/* News Header Section */}
          <div className="dash-intro mb-1">
            <h3>News & Trends</h3>
            <p>Stay updated with university announcements and events</p>
          </div>

          {/* Tabs and Search Section */}
          <div className="tabs-search-container">
            <div className="tabs-and-controls">
              <div className="news-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`tab-button ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="controls-right">
                <div className="news-search-container">
                  <div className="search-box" title="Search news">
                    <input
                      type="text"
                      placeholder="Search news..."
                      className="search-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Updates heading */}
          <h2 className="featured-heading">Featured Updates</h2>

          {/* Conditional layout: grid for first three tabs, list for last two */}
          {useGridLayout ? (
            <div className="news-grid-container">
              {visibleItems.map((item) => (
                <div key={item.id} className="news-grid-item">
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="news-content">
                    <div className="news-meta">
                      <span
                        className={`news-category ${
                          item.type === "Announcements"
                            ? "announcement-category"
                            : item.type === "Opportunities"
                            ? "opportunity-category"
                            : item.type === "Updates"
                            ? "updates-category"
                            : "events-category"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="news-time">
                        <FontAwesomeIcon
                          icon={faClock}
                          style={{ marginRight: "4px" }}
                        />
                        {item.time}
                      </span>
                    </div>

                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>

                    <div className="news-actions">
                      <button
                        className="read-more-btn"
                        aria-label={`Read more about ${item.title}`}
                      >
                        Read More
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ marginLeft: "8px" }}
                        />
                      </button>

                      <div className="news-item-icons">
                        <button className="icon-inline" aria-label="bookmark">
                          <FontAwesomeIcon
                            icon={faBookmark}
                            className="action-icon"
                          />
                        </button>
                        <button className="icon-inline" aria-label="download">
                          <FontAwesomeIcon
                            icon={faDownload}
                            className="action-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* LIST LAYOUT: image ON THE LEFT, text on the right; one item per row */
            <div className="news-list-container">
              {visibleItems.map((item) => (
                <div key={item.id} className="news-list-item">
                  {/* IMAGE on the LEFT */}
                  <div className="news-list-image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  {/* CONTENT on the RIGHT */}
                  <div className="news-list-content">
                    <div className="news-meta">
                      <span
                        className={`news-category ${
                          item.type === "Announcements"
                            ? "announcement-category"
                            : item.type === "Opportunities"
                            ? "opportunity-category"
                            : item.type === "Updates"
                            ? "updates-category"
                            : "events-category"
                        }`}
                      >
                        {item.type}
                      </span>
                      <span className="news-time">
                        <FontAwesomeIcon
                          icon={faClock}
                          style={{ marginRight: "4px" }}
                        />
                        {item.time}
                      </span>
                    </div>

                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-description">{item.description}</p>

                    <div className="news-actions">
                      <button
                        className="read-more-btn"
                        aria-label={`Read more about ${item.title}`}
                      >
                        Read More
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ marginLeft: "8px" }}
                        />
                      </button>

                      <div className="news-item-icons">
                        <button className="icon-inline" aria-label="bookmark">
                          <FontAwesomeIcon
                            icon={faBookmark}
                            className="action-icon"
                          />
                        </button>
                        <button className="icon-inline" aria-label="download">
                          <FontAwesomeIcon
                            icon={faDownload}
                            className="action-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
