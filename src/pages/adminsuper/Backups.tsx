import React from "react";
import "./styles/backups.css";
import deleteIcon from "./assets/delete.png"; // <-- place delete-icon.svg in same folder

type BackupRow = {
  name: string;
  datetime: string;
  size: string;
  status: "Complete" | "Failed" | "In Progress";
};

const SAMPLE_BACKUPS: BackupRow[] = [
  { name: "backup_2023_08_15_02_00", datetime: "2023-08-15 02:00:00", size: "2.4 GB", status: "Complete" },
  { name: "backup_2023_08_14_02_00", datetime: "2023-08-14 02:00:00", size: "2.3 GB", status: "Complete" },
  { name: "backup_2023_08_13_02_00", datetime: "2023-08-13 02:00:00", size: "2.2 GB", status: "Complete" },
  { name: "backup_2023_08_12_02_00", datetime: "2023-08-12 02:00:00", size: "2.1 GB", status: "Complete" },
];

const Backups: React.FC = () => {
  return (
    <div className="backups-wrap">
      <div className="backups-header-row">
        <div>
          <h3 className="backups-title">Backup Management</h3>
          <p className="backups-sub">Configure automated backups and manage existing backup files.</p>
        </div>

        <div>
          <button className="btn-create-backup" type="button" aria-label="Create Manual Backup">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Create Manual Backup
          </button>
        </div>
      </div>

      <div className="backup-card">
        <h4 className="backup-card-title">Backup Configuration</h4>

        <div className="backup-form-grid">
          <label className="form-field">
            <div className="form-label">Backup Frequency</div>
            <select className="form-select" aria-label="Backup Frequency">
              <option>Daily at 2:00 AM</option>
              <option>Hourly</option>
              <option>Weekly - Sun 2:00 AM</option>
            </select>
          </label>

          <label className="form-field">
            <div className="form-label">Retention Period</div>
            <select className="form-select" aria-label="Retention Period">
              <option>30 days</option>
              <option>90 days</option>
              <option>365 days</option>
            </select>
          </label>

          <label className="form-field">
            <div className="form-label">Storage Location</div>
            <select className="form-select" aria-label="Storage Location">
              <option>AWS S3 - Primary</option>
              <option>Local Storage</option>
              <option>Azure Blob</option>
            </select>
          </label>

          <label className="form-field">
            <div className="form-label">Compression Level</div>
            <select className="form-select" aria-label="Compression Level">
              <option>Standard</option>
              <option>High</option>
              <option>None</option>
            </select>
          </label>
        </div>

        <label className="checkbox-row backups-checkbox">
          <input type="checkbox" defaultChecked />
          <span>Enable automatic backup verification</span>
        </label>
      </div>

      <div className="recent-backups">
        <h4 className="recent-title">Recent Backups</h4>

        <div className="backups-table-wrap">
          <table className="backups-table" aria-label="Recent backups">
            <thead>
              <tr>
                <th className="th-name">Backup Name</th>
                <th>Date &amp; Time</th>
                <th>Size</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {SAMPLE_BACKUPS.map((r) => (
                <tr key={r.name}>
                  <td className="cell-name">{r.name}</td>
                  <td>{r.datetime}</td>
                  <td>{r.size}</td>
                  <td>
                    <span
                      className={`status-pill ${
                        r.status === "Complete" ? "status-complete" : r.status === "Failed" ? "status-failed" : "status-progress"
                      }`}
                      role="status"
                      aria-label={`Status: ${r.status}`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="cell-actions">
                    <button className="icon-btn" title="Download backup" aria-label="Download backup">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3v12" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 11l4 4 4-4" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 21H3" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {/* delete button now uses an image from same folder */}
                    <button className="icon-btn danger" title="Delete backup" aria-label="Delete backup">
                      <img src={deleteIcon} alt="Delete" className="action-img delete-img" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="backups-save-area">
        <button className="backups-save-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3v14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default Backups;
