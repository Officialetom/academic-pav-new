import React, { useState } from "react";
import "./styles/research.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faBook,
  faCheckCircle,
  faHourglassHalf,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

interface ResearchItem {
  id: number;
  title: string;
  author: string;
  university: string;
  field: string;
  published: string;
  citations: number;
  status: "published" | "under-review";
  icon: "group" | "book";
}

const ResearchPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedResearch, setSelectedResearch] = useState<number[]>([]);

  const researchData: ResearchItem[] = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      author: "Dr. Sarah Chen",
      university: "MIT",
      field: "Computer Science",
      published: "2024-01-15",
      citations: 45,
      status: "published",
      icon: "group",
    },
    {
      id: 2,
      title: "Quantum Computing and Cryptography",
      author: "Prof. Michael Brown",
      university: "Stanford",
      field: "Physics",
      published: "2024-01-20",
      citations: 12,
      status: "under-review",
      icon: "book",
    },
    {
      id: 3,
      title: "Sustainable Energy Solutions for Urban Areas",
      author: "Dr. Emily Davis",
      university: "Berkeley",
      field: "Environmental Science",
      published: "2024-01-10",
      citations: 78,
      status: "published",
      icon: "book",
    },
    {
      id: 4,
      title: "Neural Networks in Natural Language Processing",
      author: "Dr. James Wilson",
      university: "Harvard",
      field: "Computer Science",
      published: "2024-01-05",
      citations: 123,
      status: "published",
      icon: "book",
    },
  ];

  const toggleResearchSelection = (id: number): void => {
    setSelectedResearch((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSidebar = () => setIsOpen((s) => !s);
  const closeSidebar = () => setIsOpen(false);

  const onAddResearch = () => {
    console.log("Add Research clicked");
  };

  return (
    <div className="super-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="research" />
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
          <div className="research-page-wrap">
            <header className="research-top">
              <div className="research-top-left">
                <h1 className="page-title">Research Repository</h1>
                <p className="page-sub">Manage research submissions and publications</p>
              </div>

              <div className="research-top-actions">
                <button className="export-btn">Export Catalog</button>
                <button className="add-btn" onClick={onAddResearch}>
                  Add Research
                </button>
              </div>
            </header>

            <section className="stats-row">
              <div className="stat-card stat-black">
                <div className="stat-label">Total Research</div>
                <div className="stat-value">15,847</div>
              </div>

              <div className="stat-card stat-green">
                <div className="stat-label">Published</div>
                <div className="stat-value">14,203</div>
              </div>

              <div className="stat-card stat-brown">
                <div className="stat-label">Under Review</div>
                <div className="stat-value">1,644</div>
              </div>

              <div className="stat-card stat-purple">
                <div className="stat-label">Total Citations</div>
                <div className="stat-value">234,567</div>
              </div>
            </section>

            <main className="research-main-container">
              <div className="search-filter-row">
                <div className="search-wrap">
                  <input
                    className="search-input"
                    placeholder="Search research by title, author, or field..."
                    aria-label="Search research"
                  />
                </div>

                <div className="filter-card" role="region" aria-label="Filter box">
                  <div className="filter-top">
                    <FontAwesomeIcon icon={faFilter} className="filter-icon" />
                    <span className="filter-label">Filter</span>
                  </div>
                </div>
              </div>

              <section className="research-list">
                {researchData.map((r) => (
                  <article key={r.id} className="research-row">
                    <div className="left-icon">
                      <div className="item-icon item-icon-blue">
                        <FontAwesomeIcon icon={faBook} />
                      </div>
                    </div>

                    <div className="item-body">
                      <div className="item-topline">
                        <div className="item-title-section">
                          <h3 className="item-title">{r.title}</h3>
                          <div className="author-line">
                            <span className="item-author">{r.author}</span>
                            <span className="dot">•</span>
                            <span className="item-university">{r.university}</span>
                            <span className="dot">•</span>
                            <span className="item-field">{r.field}</span>
                          </div>
                          <div className="publish-line">
                            <span className="published-text">Published: {r.published}</span>
                            <span className="dot">•</span>
                            <span className="citations-text">{r.citations} citations</span>
                          </div>
                        </div>

                        <div className="item-actions">
                          <span
                            className={`status-badge ${
                              r.status === "published" ? "published" : "under-review"
                            }`}
                            aria-hidden
                          >
                            {r.status === "published" ? (
                              <>
                                <FontAwesomeIcon icon={faCheckCircle} /> Published
                              </>
                            ) : (
                              <>
                                <FontAwesomeIcon icon={faHourglassHalf} /> Under Review
                              </>
                            )}
                          </span>

                          <button className="view-details" aria-label={`View details for ${r.title}`}>
                            View Details <FontAwesomeIcon icon={faArrowRight} />
                          </button>
                        </div>
                      </div>

                     
                    </div>
                  </article>
                ))}
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
