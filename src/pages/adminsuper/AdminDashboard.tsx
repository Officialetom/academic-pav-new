import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/dashboard.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { faBuilding, faChartLine, faDatabase, faWarning } from "@fortawesome/free-solid-svg-icons";
import DataGrowth from "./charts/DataGrowth";
import UniData from "./charts/UniData";
import DataQuality from "./charts/DataQuality";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const anamolies = [
    // limit 4 when fetching
    {
      id: 1,
      university: "University of Calabar",
      description: "Enrollment Data inconsistency detected",
      severity: "High",
      timestamp: "2023-09-15 09:23AM"
    },
    {
      id: 2,
      university: "University of Jos",
      description: "Missing financial records for Q2",
      severity: "Medium",
      timestamp: "2023-09-13 10:47AM"
    },
    {
      id: 3,
      university: "University of Lagos",
      description: "Duplicate student records found",
      severity: "Low",
      timestamp: "2023-09-12 11:03AM"
    },
    {
      id: 4,
      university: "University of PortHarcourt",
      description: "API connection failure during sync",
      severity: "High",
      timestamp: "2023-09-12 10:32AM"
    }
  ]

  return (
    <div className="super-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="dashboard" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Dashboard Overview</h3>
            <p>Monitor and manage the entire university ecosystem</p>
          </div>
          <div className="super-content">
            <div className="super-item dash-card p-s">
              <div className="side-left bg-blue">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <div className="side-right">
                <p>Total Universities</p>
                <h3>42</h3>
              </div>
            </div>
            <div className="super-item dash-card p-s">
              <div className="side-left bg-green">
                <FontAwesomeIcon icon={faDatabase} />
              </div>
              <div className="side-right">
                <p>Total Data Records</p>
                <h3>1.2M</h3>
              </div>
            </div>
            <div className="super-item dash-card p-s">
              <div className="side-left bg-orange">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <div className="side-right">
                <p>Active Sync Status</p>
                <h3>98%</h3>
              </div>
            </div>
            <div className="super-item dash-card p-s">
              <div className="side-left bg-red">
                <FontAwesomeIcon icon={faWarning} />
              </div>
              <div className="side-right">
                <p>Pending Complaints</p>
                <h3>7</h3>
              </div>
            </div>
          </div>
          <div className="super-chart mt-1">
            <div className="chart-item dash-card p-s">
              <span>Data Growth Overtime</span>
              <DataGrowth />
            </div>
            <div className="chart-item dash-card p-s">
              <span>University Data Contribution</span>
              <UniData />
            </div>
          </div>
          <div className="super-chart mt-1">
            <div className="chart-item dash-card p-s">
              <span>Data Growth Overtime</span>
              <DataQuality />
            </div>
            <div className="chart-item dash-card p-s">
              <span>Recent Data Anomalies</span>
              <table>
                <thead>
                  <tr>
                    <th>University</th>
                    <th>Description</th>
                    <th>Severity</th>
                    <th>Timestamp</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {anamolies.map((ana) => {
                    let color = "";
                    if (ana.severity == "High") {
                      color = "bg-red";
                    } else if (ana.severity == "Medium") {
                      color = "bg-orange";
                    } else {
                      color = "bg-blue";
                    }

                    return (
                      <tr key={ana.id}>
                        <td>{ ana.university }</td>
                        <td>{ ana.description }</td>
                        <td><span className={color}>{ ana.severity}</span></td>
                        <td>{ ana.timestamp }</td>
                        <td><a href={`#${ana.id}`}>investigate</a></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
