// src/adminsuper/SettingsPage.tsx
import React, { useState } from "react";
import "./styles/settings.css";
import Permissions from "./Permissions";
import Backups from "./Backups";
import APIKeys from "./APIKeys";
import Scheduler from "./Scheduler";

// add Sidebar and Navbar so navigation works and the sidebar closes on click
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

type TabKey = "data-schema" | "permissions" | "backups" | "api-keys" | "scheduler";

interface SchemaField { name: string; type: string; }
interface SchemaDef { title: string; fields: SchemaField[]; }

const DEFAULT_SCHEMAS: SchemaDef[] = [
  {
    title: "Student Records",
    fields: [
      { name: "student_id", type: "String (Required)" },
      { name: "full_name", type: "String (Required)" },
      { name: "enrollment_date", type: "Date (Required)" },
      { name: "program_id", type: "String (Required)" },
      { name: "academic_status", type: "Enum (Required)" },
    ],
  },
  {
    title: "Course Data",
    fields: [
      { name: "course_id", type: "String (Required)" },
      { name: "course_name", type: "String (Required)" },
      { name: "department_id", type: "String (Required)" },
      { name: "credit_hours", type: "Number (Required)" },
      { name: "instructor_id", type: "String (Required)" },
    ],
  },
  {
    title: "Financial Records",
    fields: [
      { name: "transaction_id", type: "String (Required)" },
      { name: "student_id", type: "String (Required)" },
      { name: "amount", type: "Decimal (Required)" },
      { name: "transaction_date", type: "Date (Required)" },
      { name: "transaction_type", type: "Enum (Required)" },
    ],
  },
];

const SettingsPage: React.FC = () => {
  // sidebar open/close state (keeps behaviour consistent with other admin pages)
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((s) => !s);
  const closeSidebar = () => setIsOpen(false);

  const [activeTab, setActiveTab] = useState<TabKey>("data-schema");
  const [schemas] = useState<SchemaDef[]>(DEFAULT_SCHEMAS);

  // example small settings controls used in Data Schema page
  const [enforcePassword, setEnforcePassword] = useState<boolean>(true);
  const [logAccess, setLogAccess] = useState<boolean>(true);

  const handleSave = () => {
    alert("Settings saved (placeholder)");
  };

  return (
    <div className="super-dashboard">
      {/* Sidebar highlights / navigation handled by NavLink; pass page for backward compatibility */}
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="settings" />

      <div className="main-content">
        {/* Navbar toggles the sidebar */}
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="content">
          <div className="settings-page-wrap">
            <div className="settings-header">
              <div>
                <h1 className="settings-title">System Settings</h1>
                <p className="settings-sub">Configure and manage system-wide settings.</p>
              </div>
            </div>

            <div className="settings-card">
              <nav className="settings-tabs" role="tablist" aria-label="Settings tabs">
                <button
                  className={`tab ${activeTab === "data-schema" ? "active" : ""}`}
                  onClick={() => setActiveTab("data-schema")}
                  role="tab"
                  aria-selected={activeTab === "data-schema"}
                >
                  Data Schema
                </button>

                <button
                  className={`tab ${activeTab === "permissions" ? "active" : ""}`}
                  onClick={() => setActiveTab("permissions")}
                  role="tab"
                  aria-selected={activeTab === "permissions"}
                >
                  Permissions
                </button>

                <button
                  className={`tab ${activeTab === "backups" ? "active" : ""}`}
                  onClick={() => setActiveTab("backups")}
                  role="tab"
                  aria-selected={activeTab === "backups"}
                >
                  Backups
                </button>

                <button
                  className={`tab ${activeTab === "api-keys" ? "active" : ""}`}
                  onClick={() => setActiveTab("api-keys")}
                  role="tab"
                  aria-selected={activeTab === "api-keys"}
                >
                  API Keys
                </button>

                <button
                  className={`tab ${activeTab === "scheduler" ? "active" : ""}`}
                  onClick={() => setActiveTab("scheduler")}
                  role="tab"
                  aria-selected={activeTab === "scheduler"}
                >
                  Scheduler
                </button>
              </nav>

              <div className="tab-content">
                {activeTab === "data-schema" ? (
                  <section className="data-schema-section">
                    <h3 className="section-title">Data Schema Definitions</h3>
                    <p className="section-sub">
                      Define and manage the structure of data collected from universities. Changes to the schema will require approval
                      from the system administrator.
                    </p>

                    <div className="schema-grid">
                      {schemas.map((s) => (
                        <div className="schema-card" key={s.title}>
                          <div className="schema-card-header">
                            <div className="schema-icon" aria-hidden>
                              {/* icon */}
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="12" cy="5.5" rx="7" ry="2.5" stroke="#2563EB" strokeWidth="1.2" />
                                <path d="M5 5.5v5.5c0 1.38 3.134 2.5 7 2.5s7-1.12 7-2.5V5.5" stroke="#2563EB" strokeWidth="1.2" />
                                <ellipse cx="12" cy="13.5" rx="7" ry="2.5" stroke="#2563EB" strokeWidth="1.2" />
                                <path d="M5 13.5v5.5c0 1.38 3.134 2.5 7 2.5s7-1.12 7-2.5v-5.5" stroke="#2563EB" strokeWidth="1.2" />
                              </svg>
                            </div>

                            <div>
                              <div className="schema-title">{s.title}</div>
                            </div>
                          </div>

                          <ul className="schema-fields">
                            {s.fields.map((f, idx) => (
                              <li key={f.name} className={idx === s.fields.length - 1 ? "field-last" : ""}>
                                <span className="field-name">{f.name}</span>
                                <span className="field-type">{f.type}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="schema-actions">
                            <button className="btn-outline small full-width">Edit Schema</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="system-config">
                      <h3 className="section-title">System Configuration</h3>

                      <div className="config-card">
                        <div className="config-row">
                          <div className="config-left">
                            <span className="shield-icon" aria-hidden>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-3z" stroke="#374151" strokeWidth="1.2" fill="none" />
                              </svg>
                            </span>

                            <div>
                              <div className="config-heading">Security Settings</div>
                              <div className="config-sub">Critical security options for the application.</div>
                            </div>
                          </div>
                        </div>

                        <div className="config-options">
                          <label className="checkbox-row">
                            <input type="checkbox" checked readOnly />
                            <span>Enable Two-Factor Authentication</span>
                          </label>

                          <label className="checkbox-row">
                            <input type="checkbox" checked={enforcePassword} onChange={() => setEnforcePassword(!enforcePassword)} />
                            <span>Enforce Password Complexity</span>
                          </label>

                          <label className="checkbox-row">
                            <input type="checkbox" checked={logAccess} onChange={() => setLogAccess(!logAccess)} />
                            <span>Log All Access Attempts</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : activeTab === "permissions" ? (
                  <Permissions />
                ) : activeTab === "backups" ? (
                  <Backups />
                ) : activeTab === "api-keys" ? (
                  <APIKeys />
                ) : activeTab === "scheduler" ? (
                  <Scheduler />
                ) : (
                  <div className="placeholder-area">
                    <h3 className="section-title">Placeholder</h3>
                    <p className="section-sub">This tab is a placeholder. Implement specific UIs for each tab as needed.</p>
                  </div>
                )}
              </div>
            </div>

            {activeTab !== "permissions" && activeTab !== "backups" && activeTab !== "api-keys" && activeTab !== "scheduler" && (
              <div className="save-area">
                <button className="save-btn" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
