import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/roles.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { faCircleCheck, faCircleXmark, faEdit, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function AdminRoles() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const roles = [
    {
        id: 1,
        name: "Super Admin",
        description: "Full System Access with all permissions",
        users: 3,
        "View Dashboard": true,
        "Manage Universities": true,
        "Manage Data Streams": true,
        "View Analytics": true,
        "Manage Roles": true,
        "View Compliance": true,
        "Manage Escalations": true,
        "Configure System": true,
    },
    {
        id: 2,
        name: "University Admin",
        description: "Administrative access for a specific University",
        users: 42,
        "View Dashboard": true,
        "Manage Universities": false,
        "Manage Data Streams": true,
        "View Analytics": true,
        "Manage Roles": false,
        "View Compliance": true,
        "Manage Escalations": true,
        "Configure System": false,
    },
    {
        id: 3,
        name: "Data Analyts",
        description: "View-only access to analytics and reports",
        users: 28,
        "View Dashboard": true,
        "Manage Universities": false,
        "Manage Data Streams": false,
        "View Analytics": true,
        "Manage Roles": false,
        "View Compliance": true,
        "Manage Escalations": false,
        "Configure System": false,
    },
    {
        id: 4,
        name: "Compliance Officer",
        description: "Manage compliance and audit logs",
        users: 12,
        "View Dashboard": true,
        "Manage Universities": false,
        "Manage Data Streams": false,
        "View Analytics": true,
        "Manage Roles": false,
        "View Compliance": true,
        "Manage Escalations": true,
        "Configure System": false,
    },
  ]

  return (
    <div className="super-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="roles" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Roles & Permissions</h3>
            <p>Manage user role and access levels across the system.</p>
          </div>
          <div className="search_filter mt-1">
            <div className="search_uni">
                <form action="">
                    <input type="search" name="search_box" id="search_uni" placeholder="search roles.." />
                </form>
            </div>
            <div className="filter_uni">
                <button type="button"><FontAwesomeIcon icon={faPlus} /> Create New Role</button>
            </div>
          </div>
          {/* ----------- Roles display section ----------------- */}
          {roles.map((role) =>{
            return (
                <div className="permit dash-card mt-s">
                    <div className="permission-title p-1">
                        <div className="permission-box">
                            <h3>{role.name}</h3>
                            <p>{role.description}</p>
                            <span>{role.users} users with this role</span>
                        </div>
                        <div className="permit-edit-box">
                            <FontAwesomeIcon icon={faEdit} />
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                    <div className="permissions p-1">
                        <h2>Permissions</h2>
                        <div className="permits mt-s">
                            <div className="permit-box">
                                <span>View Dashboard</span>
                                <span className={role["View Dashboard"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["View Dashboard"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>Manage University</span>
                                <span className={role["Manage Universities"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["Manage Universities"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>Manage Data Streams</span>
                                <span className={role["Manage Data Streams"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["Manage Data Streams"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>View Analytics</span>
                                <span className={role["View Analytics"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["View Analytics"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>Manage Roles</span>
                                <span className={role["Manage Roles"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["Manage Roles"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>View Compliance</span>
                                <span className={role["View Compliance"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["View Compliance"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>Manage Escalations</span>
                                <span className={role["Manage Escalations"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["Manage Escalations"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                            <div className="permit-box">
                                <span>Configure System</span>
                                <span className={role["Configure System"] ? "text-success": "text-danger"}><FontAwesomeIcon icon={role["Configure System"] ? faCircleCheck : faCircleXmark} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminRoles;
