import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMedal } from "@fortawesome/free-solid-svg-icons";
import "./styles/student.module.css";
import "./styles/scholars.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";

function Scholars() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const scholarsData = [
    {
      id: 1,
      name: "Emma Wilson",
      department: "Computer Science",
      code: "3.86",
      year: "Senior",
      achievements: ["Top 1%", "Dean's List"],
    },
    {
      id: 2,
      name: "Michael Chen",
      department: "Electrical Engineering",
      code: "3.95",
      year: "Junior",
      achievements: ["Dean's List"],
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      department: "Physics",
      code: "3.92",
      year: "Senior",
      achievements: ["Top 5%", "Research Excellence"],
    },
    {
      id: 4,
      name: "James Johnson",
      department: "Mathematics",
      code: "3.91",
      year: "Sophomore",
      achievements: ["Top 5%"],
    },
    {
      id: 5,
      name: "Olivia Taylor",
      department: "Computer Science",
      code: "3.89",
      year: "Junior",
      achievements: ["Dean's List"],
    },
    {
      id: 6,
      name: "William Brown",
      department: "Mechanical Engineering",
      code: "3.87",
      year: "Senior",
      achievements: ["Innovation Award"],
    },
    {
      id: 7,
      name: "Ana Martinez",
      department: "Chemistry",
      code: "3.85",
      year: "Senior",
      achievements: ["Research Excellence"],
    },
    {
      id: 8,
      name: "Noah Davis",
      department: "Biology",
      code: "3.84",
      year: "Junior",
      achievements: ["Top 5%"],
    },
    {
      id: 9,
      name: "Isabella Garcia",
      department: "Psychology",
      code: "3.82",
      year: "Sophomore",
      achievements: ["Dean's List"],
    },
    {
      id: 10,
      name: "Liam Miller",
      department: "Computer Science",
      code: "3.81",
      year: "Senior",
      achievements: ["Coding Champion"],
    },
  ];

  const departments = [
    "All",
    "Computer Science",
    "Electrical Engineering",
    "Physics",
    "Mathematics",
    "Mechanical Engineering",
    "Chemistry",
    "Biology",
    "Psychology",
  ];

  const filteredScholars =
    selectedDepartment === "All"
      ? scholarsData
      : scholarsData.filter(
          (scholar) => scholar.department === selectedDepartment
        );

  // Function to get initials from name
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word: string) => word[0])
      .join("");
  };

  // Function to get medal color based on rank
  const getMedalColor = (id: number): string => {
    switch (id) {
      case 1:
        return "#EAB308"; // Gold
      case 2:
        return "#9CA3AF"; // Silver
      case 3:
        return "#B45309"; // Bronze
      default:
        return "transparent";
    }
  };

  return (
    <div className="student-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="scholars" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* scholars main content area */}
        <div className="content">
          {/* First box: Search and Department filter */}
          <div className="mb-1">
            <div className="dash-intro mb-1">
              <h3>Academic Scholars</h3>
              <p>View top-performing students across departments</p>
            </div>

            <div className="scholars-header">
              <div className="scholars-search">
                <div className="search-box">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search scholars..."
                    className="search-input"
                  />
                </div>
              </div>

              <div className="department-filter">
                <span>Department: </span>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="department-select"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Second box: Table */}
          <div className="dash-card p-1">
            <div className="scholars-table-container">
              <table className="scholars-table">
                <thead>
                  <tr>
                    <th>Basic</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>CGPA </th>
                    <th>Year</th>
                    <th>Achievements</th>
                    <th>Profile</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredScholars.map((scholar) => (
                    <tr key={scholar.id}>
                      <td className="basic-cell">
                        <div className="rank-container">
                          <span>#{scholar.id}</span>
                          {scholar.id <= 3 && (
                            <FontAwesomeIcon
                              icon={faMedal}
                              className="medal-icon"
                              style={{ color: getMedalColor(scholar.id) }}
                            />
                          )}
                        </div>
                      </td>
                      <td className="name-cell">
                        <div className="name-container">
                          <div className="avatar">
                            {getInitials(scholar.name)}
                          </div>
                          <span>{scholar.name}</span>
                        </div>
                      </td>
                      <td className="department-cell">{scholar.department}</td>
                      <td className="code-cell">{scholar.code}</td>
                      <td className="year-cell">{scholar.year}</td>
                      <td className="achievements-cell">
                        <div className="achievements-list">
                          {scholar.achievements.map(
                            (achievement: string, idx: number) => (
                              <span key={idx} className="achievement-badge">
                                {achievement}
                              </span>
                            )
                          )}
                        </div>
                      </td>
                      <td className="profile-cell">
                        <button className="view-profile-btn">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scholars;
