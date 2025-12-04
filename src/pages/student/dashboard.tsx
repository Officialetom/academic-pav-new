import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faArrowTrendUp,
  faBookAtlas,
  faChartBar,
  faMedal,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles/student.module.css";
import "./styles/dashboard.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import containerImg from "./Container.png";
import Navbar from "./components/Navbar";

function Dashboard() {
  // array to store grades from api (limit: 4)
  const grades = [
    {
      id: 1,
      title: "Data Structures",
      code: "CSC 301",
      grade: "A",
    },{
      id: 2,
      title: "Linear Algebra",
      code: "MTH 305",
      grade: "B",
    },
    {
      id: 3,
      title: "Technical Writing",
      code: "ENG 201",
      grade: "C",
    },
    {
      id: 4,
      title: "Arithmetics & Geometry",
      code: "MTH 211",
      grade: "F",
    },
  ];

  // array to store latest featured news from api (limit: 1)
  const featured = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      description:
        "A nano course introducing the basics of ML Algorithms, A nano course introducing the basics of ML algorithms, A nano course introducing the basics of ML Algorithms, A nano course introducing the basics of ML algorithms",
      category: "Beginner",
      image: containerImg,
      date_posted: "2025-10-17 09:30:45",
    },
  ];

  // array to store trending news (limit: 3)
  const trending = [
    {
      id: 1,
      title: "Fall semester registration opens next week",
      category: "Announcement",
      time: "2025-10-28 10:00:00",
    },
    {
      id: 2,
      title: "New research Grant Opportunities for Undergraduates",
      category: "Opportunities",
      time: "2025-10-28 10:30:00",
    },
    {
      id: 3,
      title: "Campus Library extend weekend hours",
      category: "updates",
      time: "2025-10-28 9:00:00",
    },
  ];

  // function to calculate time
  function timeAgo(datetime: string) {
    const currentTime = new Date().getTime() / 1000;
    const pastTIme = new Date(datetime).getTime() / 1000;
    const timeDiff = currentTime - pastTIme;

    const intervals = [
      { unit: "day", seconds: 86400 },
      { unit: "hour", seconds: 3600 },
      { unit: "minute", seconds: 60 },
      { unit: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(timeDiff / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.unit}${count > 1 ? "'s" : ""} ago`;
      }
    }

    return "just now";
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="student-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="dashboard" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Dashboard</h3>
            <p>View your academic progress and updates</p>
          </div>
          <div className="dash-overview mb-1">
            <div className="dash-card p-1">
              <span className="icon-display">
                <FontAwesomeIcon icon={faChartBar} className="f-icon-w" />
              </span>
              <h4>Results</h4>
              <p>View your real-time academic results</p>
              <div className="card-link">
                <Link to="./results">
                  View details <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
            <div className="dash-card p-1">
              <span className="icon-display">
                <FontAwesomeIcon icon={faBookAtlas} className="f-icon-w" />
              </span>
              <h4>Resources</h4>
              <p>Access educational materials</p>
              <div className="card-link">
                <Link to="./resources">
                  View details <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
            <div className="dash-card p-1">
              <span className="icon-display">
                <FontAwesomeIcon icon={faMedal} className="f-icon-w" />
              </span>
              <h4>Scholars</h4>
              <p>View top academic performers</p>
              <div className="card-link">
                <Link to="./scholars">
                  View details <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
            <div className="dash-card p-1">
              <span className="icon-display">
                <FontAwesomeIcon icon={faNewspaper} className="f-icon-w" />
              </span>
              <h4>News</h4>
              <p>Stay updated with university trends</p>
              <div className="card-link">
                <Link to="./news">
                  View details <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              </div>
            </div>
          </div>
          <div className="dash-featured">
            {/* results display */}
            <div className="feature-card bg-white p-1">
              <div className="feature-header mb-1">
                <h4>Latest Grades</h4>
                <span>Last updated: Today</span>
              </div>
              <div className="feature-content">
                {grades.map((item) => {
                  let gradeBg = "";
                  if (item.grade === "A") {
                    gradeBg = "grade-a";
                  } else if (item.grade === "B") {
                    gradeBg = "grade-b";
                  } else if (item.grade === "C") {
                    gradeBg = "grade-o";
                  } else if (item.grade === "D") {
                    gradeBg = "grade-g";
                  } else if (item.grade === "E") {
                    gradeBg = "grade-g";
                  } else {
                    gradeBg = "grade-f";
                  }
                  return (
                    <div key={item.id} className="grades mb-1">
                      <div className="subject">
                        <h4>{item.code}</h4>
                        <p>{item.title}</p>
                      </div>
                      <div className={`grade ${gradeBg}`}>{item.grade}</div>
                    </div>
                  );
                })}
              </div>
              <div className="feature-footer">
                <Link to="./results">
                  View grades
                  <FontAwesomeIcon icon={faArrowRight} className="d-icon" />
                </Link>
              </div>
            </div>
            {/* featured resource display */}
            <div className="feature-card bg-white p-1">
              <div className="feature-header mb-1">
                <h4>Featured Resource</h4>
                <span className="badge-primary">News</span>
              </div>
              {featured.map((news) => (
                <div key={news.id}>
                  <div className="feature-content">
                    <div className="image">
                      <img src={news.image} alt="featured_news_image" />
                    </div>
                    <h3>{news.title}</h3>
                    <div className="text-truncate">
                      <p>{news.description}</p>
                    </div>
                  </div>
                  <div className="feature-footer mt-s f-flex">
                    <div className="time">
                      <span>
                        {timeAgo(news.date_posted)} . {news.category}
                      </span>
                    </div>
                    <Link to="">
                      View resource
                      <FontAwesomeIcon icon={faArrowRight} className="d-icon" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* trending news display */}
            <div className="feature-card bg-white p-1">
              <div className="feature-header mb-1">
                <h4>Tranding News</h4>
                <span>
                  <FontAwesomeIcon icon={faArrowTrendUp} />{" "}
                </span>
              </div>
              <div className="feature-content">
                {trending.map((trend) => (
                  <div key={trend.id} className="dash-news mb-s">
                    <span className="badge-grey">{trend.category}</span>
                    <h3 className="truncate">{trend.title}</h3>
                    <div className="time">
                      <span>{timeAgo(trend.time)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="feature-footer">
                <Link to="./news">
                  View all news
                  <FontAwesomeIcon icon={faArrowRight} className="d-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
