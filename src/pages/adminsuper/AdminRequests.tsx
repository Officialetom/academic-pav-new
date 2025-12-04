import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/requests.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { faCircleCheck, faClipboardList, faClockFour, faEye, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function AdminRequests() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const requests = [
    {
        id: 1,
        requester: "Dr. John Smith",
        university: "University of Calabar",
        type: "Student Data Export",
        date: "2024-10-15",
        priority: "High",
        status: "pending"
    },
    {
        id: 2,
        requester: "Prof. Sarah Johnson",
        university: "University of Lagos",
        type: "Research Access",
        date: "2024-10-12",
        priority: "Medium",
        status: "approved"
    },
    {
        id: 3,
        requester: "Admin Office",
        university: "University of Benin",
        type: "System Integration",
        date: "2024-09-29",
        priority: "High",
        status: "pending"
    },
    {
        id: 4,
        requester: "Dr. Emily Davis",
        university: "University of Jos",
        type: "Data Modification",
        date: "2024-08-18",
        priority: "Low",
        status: "rejected"
    },
  ]

  return (
    <div className="super-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="requests" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Request & Approvals</h3>
            <p>Manage external data requests and approval workflow</p>
          </div>
          <div className="requests mt-1">
            <div className="dash-card p-1 r-data">
                <span className="text-warning"><FontAwesomeIcon icon={faClockFour} />Pending</span>
                <h3>2</h3>
            </div>
            <div className="dash-card p-1 r-data">
                <span className="text-success"><FontAwesomeIcon icon={faCircleCheck} />Approved</span>
                <h3>1</h3>
            </div>
            <div className="dash-card p-1 r-data">
                <span className="text-info"><FontAwesomeIcon icon={faClipboardList} />Total Requests</span>
                <h3>2</h3>
            </div>
          </div>
          {/* ----------- request table ------------- */}
          <div className="super-uni-display dash-card reqs mt-1">
            <div className="scroll">
                <table>
                    <thead>
                        <tr>
                            <th>Requester</th>
                            <th>University</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req)=>{
                            let pbg = "";
                            let sbg = "";
                            let display = "";

                            if(req.priority == "High"){
                                pbg = "bg-danger";
                            }else if(req.priority == "Medium"){
                                pbg = "bg-warning";
                            }else{
                                pbg = "bg-info";
                            }

                            if(req.status == "approved"){
                                sbg = "bg-success";
                                display = "none";
                            }else if(req.status == "pending"){
                                sbg = "bg-warning";
                                display = "flex";
                            }else{
                                sbg = "bg-danger";
                                display = "none";
                            }
                            return(
                                <tr key={req.id}>
                                    <td>{req.requester}</td>
                                    <td>{req.university}</td>
                                    <td>{req.type}</td>
                                    <td>{req.date}</td>
                                    <td><span className={pbg}>{req.priority}</span></td>
                                    <td><span className={sbg}>{req.status}</span></td>
                                    <td>
                                        <span className="r-actions">
                                            <FontAwesomeIcon icon={faEye} style={{color: "blue"}} />
                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "green", display: display}} />
                                            <FontAwesomeIcon icon={faTimesCircle} style={{color: "red", display: display}} />
                                        </span>
                                    </td>
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

export default AdminRequests;
