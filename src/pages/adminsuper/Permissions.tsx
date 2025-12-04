// src/admin/settings/Permissions.tsx
import React from "react";
import "./styles/permissions.css";
import GoodIcon from "./assets/checkmark.png"; // <-- place your image file here (good-check.png)

type Permission = { id: string; label: string };

const SUPER_ADMIN_PERMS: Permission[] = [
  { id: "view-dashboard", label: "View Dashboard" },
  { id: "manage-roles", label: "Manage Roles" },
  { id: "manage-universities", label: "Manage Universities" },
  { id: "manage-data-streams", label: "Manage Data Streams" },
  { id: "view-analytics", label: "View Analytics" },
  { id: "view-compliance", label: "View Compliance" },
  { id: "manage-escalations", label: "Manage Escalations" },
  { id: "configure-system", label: "Configure System" },
];

const UNIVERSITY_ADMIN_PERMS: Permission[] = [
  { id: "view-dashboard", label: "View Dashboard" },
  { id: "manage-data-streams", label: "Manage Data Streams" },
  { id: "view-analytics", label: "View Analytics" },
  { id: "view-compliance", label: "View Compliance" },
];

const DATA_ANALYST_PERMS: Permission[] = [
  { id: "view-dashboard", label: "View Dashboard" },
  { id: "view-analytics", label: "View Analytics" },
  { id: "view-compliance", label: "View Compliance" },
];

function renderPlaceholders(count: number) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(<div key={`ph-${i}`} className="perm-chip perm-chip--empty" aria-hidden />);
  }
  return arr;
}

/**
 * PermissionCard:
 * - colorHex controls the shield stroke color only (no shield background)
 * - Chips use the uniform background color (#F0FDF4)
 * - Chip check icon is now an image imported from the same folder (good-check.png)
 */
const PermissionCard: React.FC<{
  title: string;
  subtitle?: string;
  perms: Permission[];
  colorHex: string; // accent color for shield stroke only
}> = ({ title, subtitle, perms, colorHex }) => {
  const totalSlots = 8; // 4 cols x 2 rows
  const placeholders = Math.max(0, totalSlots - perms.length);
  // set CSS variables on the card: --accent for shield stroke
  const style = {
    ["--accent" as any]: colorHex,
  };

  return (
    <div className="perm-card" style={style as React.CSSProperties}>
      <div className="perm-card-header">
        <div className="perm-left">
          {/* Shield icon (no filled background) - stroke uses --accent */}
          <span className="perm-shield" aria-hidden>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden
            >
              <path
                d="M12 3l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-3z"
                stroke="var(--accent)"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <div className="perm-title-wrap">
            <div className="perm-title">{title}</div>
            {subtitle && <div className="perm-sub">{subtitle}</div>}
          </div>
        </div>

        <div className="perm-edit">
          <button className="edit-link" type="button">
            Edit Template
          </button>
        </div>
      </div>

      <div className="perm-chips" role="list">
        {perms.map((p) => (
          <div key={p.id} className="perm-chip" role="listitem" aria-label={p.label}>
            <span className="chip-badge" aria-hidden>
              {/* Image used for the good/check icon — decorative so alt is empty */}
              <img src={GoodIcon} alt="" className="chip-img" width={20} height={20} />
            </span>

            <span className="chip-text">{p.label}</span>
          </div>
        ))}

        {renderPlaceholders(placeholders)}
      </div>
    </div>
  );
};

const Permissions: React.FC = () => {
  return (
    <div className="permissions-wrap">
      <h3 className="permissions-heading">Default Permission Templates</h3>
      <p className="permissions-sub">
        Configure default permissions for different role types. These templates are applied when creating new roles.
      </p>

      <div className="permissions-list">
        <PermissionCard
          title="Super Admin Template"
          subtitle="Full system access with all permissions"
          perms={SUPER_ADMIN_PERMS}
          colorHex="#2563EB" // shield stroke color
        />

        <PermissionCard
          title="University Admin Template"
          subtitle="Administrative access for specific university"
          perms={UNIVERSITY_ADMIN_PERMS}
          colorHex="#D97706" // shield stroke color
        />

        <PermissionCard
          title="Data Analyst Template"
          subtitle="View-only access to analytics and reports"
          perms={DATA_ANALYST_PERMS}
          colorHex="#10B981" // shield stroke color
        />
      </div>

      <div className="permissions-save">
        <button className="save-templates-btn" type="button">
          <span className="lock-icon" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="10" width="12" height="8" rx="1.5" stroke="white" strokeWidth="1.2" fill="none" />
              <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </span>
          Save Templates
        </button>
      </div>
    </div>
  );
};

export default Permissions;
