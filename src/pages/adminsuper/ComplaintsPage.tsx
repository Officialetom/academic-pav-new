// src/adminsuper/ComplaintsPage.tsx
import React, { useState } from "react";
import "./styles/complaints.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faInbox,
  faCommentDots,
  faCheckCircle,
  faHourglassHalf,
  faExclamationTriangle,
  faPhone,
  faEnvelope,
  faChevronDown,
  faExclamationCircle, // NEW: icon used for priorities
} from "@fortawesome/free-solid-svg-icons";

// added imports for sidebar/navbar so clicking sidebar items navigates and closes
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

type Priority = "High" | "Medium" | "Low";
type Status = "Open" | "In Progress" | "Resolved";

interface ComplaintItem {
  id: number;
  title: string;
  university: string;
  date: string;
  priority: Priority;
  status: Status;
  short: string;
  fullDescription?: string;
  contactAgent?: string;
  contactPhone?: string;
  contactEmail?: string;
}

const ComplaintsPage: React.FC = () => {
  // Sidebar open/close state and handlers (same pattern used in ResearchPage)
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((s) => !s);
  const closeSidebar = () => setIsOpen(false);

  // Selected complaint + search query (kept from your original)
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [query, setQuery] = useState("");

  const complaints: ComplaintItem[] = [
    {
      id: 1,
      title: "Data Synchronization Failure",
      university: "University of Technology",
      date: "2023-08-15",
      priority: "High",
      status: "Open",
      short: "Records between the admissions and finance modules are mismatched.",
      fullDescription:
        "Automatic sync between Admissions and Finance failed for multiple student records. Some payments show on Admissions but not Finance. Expected: nightly cron to reconcile data.",
      contactAgent: "Jane O. - Systems Admin",
      contactPhone: "+234 800 555 0199",
      contactEmail: "jane.osystems@unitech.edu",
    },
    {
      id: 2,
      title: "Access Permission Issue",
      university: "National Science University",
      date: "2023-08-14",
      priority: "Medium",
      status: "In Progress",
      short: "Certain staff cannot approve student appeals.",
      fullDescription:
        "A subset of staff roles (AppealsOfficer) are unable to see the appeals queue. ACL changes appear to have been applied inconsistently.",
      contactAgent: "Tunde K. - Access Team",
      contactPhone: "+234 701 234 5678",
      contactEmail: "tunde.access@nsu.edu",
    },
    {
      id: 3,
      title: "Data Discrepancy in Student Records",
      university: "Metropolitan College",
      date: "2023-08-13",
      priority: "High",
      status: "Open",
      short: "GPA values for 3rd semester are incorrect for several students.",
      fullDescription:
        "After grade import, GPA calculations show unexpected negative values or zeros. Investigation points to parsing error in the import script.",
      contactAgent: "Amina R. - Registry",
      contactPhone: "+234 809 555 4422",
      contactEmail: "amina.registry@metcol.edu",
    },
    {
      id: 4,
      title: "API Rate Limiting Issues",
      university: "Western Academy",
      date: "2023-08-10",
      priority: "Low",
      status: "Resolved",
      short: "Third-party partner is hitting rate limits during peak hours.",
      fullDescription:
        "Partner integration exceeded public API quota during daily batch. Implemented backoff and batching — monitoring shows stable traffic now.",
      contactAgent: "API Team",
      contactPhone: "+234 803 444 8000",
      contactEmail: "api-team@western.ac",
    },
  ];

  const filtered = complaints.filter((c) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.university.toLowerCase().includes(q) ||
      c.short.toLowerCase().includes(q)
    );
  });

  const selected = complaints.find((c) => c.id === selectedId) ?? null;

  const selectComplaint = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const renderPriorityIcon = (priority: Priority) => {
    // single icon used, colored via CSS per priority class
    return faExclamationCircle;
  };

  return (
    <div className="super-dashboard">
      {/* Sidebar receives the proper page prop so it highlights the Complaints link */}
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="complaints" />

      <div className="main-content">
        {/* Navbar toggles sidebar (same pattern as ResearchPage) */}
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="content">
          <div className="complaints-page-wrap">
            <header className="complaints-top">
              <div className="complaints-top-left">
                <h1 className="page-title">Escalations & Complaints</h1>
                <p className="page-sub">Manage and resolve issues raised by universities.</p>

                <div className="search-wrap">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                    placeholder="Search complaints..."
                    aria-label="Search complaints"
                  />
                </div>
              </div>

              <div className="complaints-top-actions">
                <button className="filter-btn">
                  <FontAwesomeIcon icon={faFilter} />
                  Filter
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                </button>
                <button className="filter-btn">
                  All Categories
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                </button>
                <button className="filter-btn">
                  All Statuses
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                </button>
              </div>
            </header>

            <section className="complaints-content">
              <div className="complaints-left-panel">
                <div className="inbox-header">
                  <h3>Complaints Inbox</h3>
                </div>

                <div className="inbox-card">
                  <div className="inbox-list">
                    {filtered.map((c) => (
                      <div
                        key={c.id}
                        className={`inbox-row ${selectedId === c.id ? "selected" : ""}`}
                        onClick={() => selectComplaint(c.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") selectComplaint(c.id);
                        }}
                      >
                        <div className="row-left">
                          <div className="row-title">
                            <div className="title-text">{c.title}</div>
                            <div className="row-meta">
                              <span className="meta-university">{c.university}</span>
                            </div>
                          </div>

                          <div className="row-bottom">
                            <div className="row-date">
                              <FontAwesomeIcon icon={faInbox} /> {c.date}
                            </div>
                          </div>
                        </div>

                        <div className="row-right">
                          <div className="status-priority-group">
                            {/* Status badge — now text only (no icon) */}
                            <span className={`status-badge ${c.status.replace(/\s+/g, "-").toLowerCase()}`}>
                              {c.status}
                            </span>

                            {/* Priority pill with icon */}
                            <div className="priority-pill">
                              <span className={`priority ${c.priority.toLowerCase()}`}>
                                <span className="priority-icon" aria-hidden>
                                  <FontAwesomeIcon icon={renderPriorityIcon(c.priority)} />
                                </span>
                                <span className="priority-text">{c.priority}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="complaints-right-panel">
                {!selected ? (
                  <div className="no-selection">
                    <FontAwesomeIcon icon={faCommentDots} size="2x" />
                    <h4>No Complaint Selected</h4>
                    <p>Select a complaint from the list to view details</p>
                  </div>
                ) : (
                  <div className="complaint-details-card">
                    <div className="details-header">
                      <div className="left">
                        <h2 className="complaint-title">{selected.title}</h2>
                        <div className="complaint-sub">
                          <span className="complaint-university">{selected.university}</span>
                          <span className="dot">•</span>
                          <span className="complaint-date">{selected.date}</span>
                          <span className="dot">•</span>

                          {/* priority in details includes the icon */}
                          <span className={`complaint-priority priority ${selected.priority.toLowerCase()}`}>
                            <span className="priority-icon" aria-hidden>
                              <FontAwesomeIcon icon={renderPriorityIcon(selected.priority)} />
                            </span>
                            <span className="priority-text">{selected.priority}</span>
                          </span>
                        </div>
                      </div>

                      <div className="right">
                        {/* Status badge (text-only) */}
                        <span className={`status-badge large ${selected.status.replace(/\s+/g, "-").toLowerCase()}`}>
                          {selected.status}
                        </span>

                        <div className="detail-actions">
                          <button className="btn-outline">Assign</button>
                          <button className="btn-primary">Resolve</button>
                        </div>
                      </div>
                    </div>

                    <div className="details-body">
                      <h4>Description</h4>
                      <p className="full-desc">{selected.fullDescription ?? selected.short}</p>

                      <div className="contact-grid">
                        <div className="contact-card">
                          <FontAwesomeIcon icon={faPhone} />
                          <div>
                            <div className="contact-label">Contact</div>
                            <div className="contact-value">{selected.contactAgent ?? "Not provided"}</div>
                            <div className="contact-sub">{selected.contactPhone ?? "-"}</div>
                          </div>
                        </div>

                        <div className="contact-card">
                          <FontAwesomeIcon icon={faEnvelope} />
                          <div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">{selected.contactEmail ?? "Not provided"}</div>
                          </div>
                        </div>
                      </div>

                      <div className="notes-section">
                        <h4>Notes</h4>
                        <textarea placeholder="Add a note..." className="notes-input" />
                        <div className="notes-actions">
                          <button className="btn-outline">Cancel</button>
                          <button className="btn-primary">Save Note</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsPage;
