import React, { useState } from "react";
import "./styles/api-keys.css";
    // keep this
import regenIcon from "./assets/restart.png";   // <-- place regen-icon.svg in same folder
import revokeIcon from "./assets/delete.png"; // <-- place revoke-icon.svg in same folder

type ApiKeyRow = {
  id: string;
  name: string;
  created: string;
  lastUsed: string;
  key: string;
  active: boolean;
};

const SAMPLE_KEYS: ApiKeyRow[] = [
  {
    id: "k1",
    name: "University A Integration",
    created: "2023-08-15",
    lastUsed: "2 hours ago",
    key: "sk_live_1a2b3c4d5e6f7g8h9i0j",
    active: true,
  },
  {
    id: "k2",
    name: "University B Integration",
    created: "2023-07-01",
    lastUsed: "5 minutes ago",
    key: "sk_live_a1b2c3d4e5f6g7h8i9j",
    active: true,
  },
  {
    id: "k3",
    name: "Analytics Dashboard",
    created: "2023-06-10",
    lastUsed: "1 day ago",
    key: "sk_live_x1y2z3u4v5w6t7s8r9",
    active: true,
  },
  {
    id: "k4",
    name: "Legacy System (Deprecated)",
    created: "2022-01-09",
    lastUsed: "30 days ago",
    key: "sk_live_legacy0a1b2c3d4e",
    active: false,
  },
];

const APIKeys: React.FC = () => {
  const [keys] = useState<ApiKeyRow[]>(SAMPLE_KEYS);

  const handleGenerate = () => alert("Generate new key (placeholder)");
  const handleRegenerate = (id: string) => alert(`Regenerate key ${id} (placeholder)`);
  const handleRevoke = (id: string) => alert(`Revoke key ${id} (placeholder)`);

  const handleCopy = (value: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).then(
        () => alert("Key copied to clipboard"),
        () => alert("Could not copy to clipboard")
      );
    } else {
      alert("Clipboard API not available");
    }
  };

  return (
    <div className="apiwrap">
      <div className="api-header-row">
        <div>
          <h3 className="api-title">API Key Management</h3>
          <p className="api-sub">Manage API keys for external integrations and university connections.</p>
        </div>

        <div>
          <button className="btn-generate" onClick={handleGenerate} aria-label="Generate new key" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Generate New Key
          </button>
        </div>
      </div>

      <div className="api-list">
        {keys.map((k) => (
          <div className="api-card" key={k.id}>
            <div className="api-card-header">
              <div>
                <div className="api-name">{k.name}</div>
                <div className="dalle-text">Dall·E generate text.</div>
                <div className="api-meta">Created: {k.created} · Last used: {k.lastUsed}</div>
              </div>

              <div className="api-status-wrap">
                <div className={`status-pill ${k.active ? "status-active" : "status-inactive"}`}>
                  {k.active ? "Active" : "Inactive"}
                </div>
              </div>
            </div>

            <div className="api-key-row">
              <input className="api-key-input" type="text" value={k.key} readOnly aria-label={`${k.name} key`} />
              {/* copy uses imported image (clipIcon) */}
              <button
                className="copy-btn img-copy"
                onClick={() => handleCopy(k.key)}
                aria-label="Copy key"
                title="Copy key"
                type="button"
              >
           
              </button>
            </div>

            <div className="api-actions-row">
              {/* Regenerate uses an imported image placed before text */}
              <button
                className="btn-regenerate"
                onClick={() => handleRegenerate(k.id)}
                aria-label="Regenerate key"
                type="button"
              >
                <img src={regenIcon} alt="Regenerate" className="btn-icon left" />
                <span className="btn-text">Regenerate</span>
              </button>

              {/* Revoke: now uses an image before the text as well */}
              <button
                className="btn-revoke"
                onClick={() => handleRevoke(k.id)}
                aria-label="Revoke key"
                type="button"
              >
                <img src={revokeIcon} alt="Revoke" className="btn-icon left" />
                <span className="btn-text">Revoke</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="api-config-card">
        <h4 className="api-config-title">API Configuration</h4>

        <div className="api-config-grid">
          <label className="api-field">
            <div className="api-label">Rate Limiting (requests per minute)</div>
            <input className="api-input" type="number" defaultValue={100} />
          </label>

          <label className="api-field">
            <div className="api-label">Request Timeout (seconds)</div>
            <input className="api-input" type="number" defaultValue={30} />
          </label>
        </div>

        <label className="checkbox-row api-logging">
          <input type="checkbox" defaultChecked />
          <span>Enable API request logging</span>
        </label>
      </div>

      <div className="api-save-area">
        <button className="api-save-btn" onClick={() => alert("Saved (placeholder)")} type="button">
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default APIKeys;
