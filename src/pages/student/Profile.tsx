import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/student.module.css";
import "./styles/profile.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import image from "../../assets/5.jpg";
import {
  faCamera,
  faEdit,
  faShieldAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const student = {
    name: "Alex Johnson",
    matric: "STU-123-456",
    department: "Computer Science",
    email: "alex.johnson@gmail.com",
    phone: "+2349081762598",
    dob: "1999-10-17",
    address: "123 Campus Drive, University of ABC",
    level: "300",
    date_joined: "September, 2019",
    status: "active",
    image: false, // i put this to be able to check if to ouput initials or the image
    image_name: "", //backend: specify image path
  };

  function getInitials(name: any) {
    const words = name.split(" ");
    const initials = words
      .slice(0, 2)
      .map((word: any) => word[0])
      .join("");
    return initials;
  }

  return (
    <div className="student-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="profile" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>My profile</h3>
            <p>View and manage your personal information</p>
          </div>
          <div className="profile mb-1">
            <div className="profile-card p-1 dash-card">
              <div className="profile-upper mb-s">
                <div className="profile-image">
                  <div className="img">
                    {student.image ? (
                      <img src={image} alt="student_profile_img" />
                    ) : (
                      <span className="initials">
                        {getInitials(student.name)}
                      </span>
                    )}
                  </div>
                  <div className="edit-btn" onClick={() => setShowModal(true)}>
                    <FontAwesomeIcon
                      icon={faCamera}
                      style={{ fontSize: "19px" }}
                    />
                  </div>
                </div>
                <div className="profile-info">
                  <h3>{student.name}</h3>
                  <p>{student.department}</p>
                  <p>{student.matric}</p>
                </div>
              </div>
              <div className="profile-down">
                <div className="down-display mb-1">
                  <span>Academic Status</span>
                  <span
                    className={`badge ${
                      student.status === "active"
                        ? "badge-primary"
                        : "badge-grey"
                    }`}
                  >
                    {student.status}
                  </span>
                </div>
                <div className="down-display mb-1">
                  <span>Level</span>
                  <h5>{student.level}L</h5>
                </div>
                <div className="down-display">
                  <span>Joined</span>
                  <h5>{student.date_joined}</h5>
                </div>
              </div>
            </div>
            <div className="basic-info dash-card p-1">
              <div className="info-upper mb-s">
                <h4>
                  <FontAwesomeIcon icon={faUser} /> Basic Information
                </h4>
                <span
                  className="badge-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowEdit(true)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </span>
              </div>
              <div className="info-form">
                <div className="profile-row mb-1">
                  <div className="inputfields">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="profile-input"
                      value={student.name}
                      readOnly
                    />
                  </div>
                  <div className="inputfields">
                    <label htmlFor="matric">Matric Number </label>
                    <input
                      type="text"
                      name="matric"
                      id="matric"
                      className="profile-input"
                      value={student.matric}
                      readOnly
                    />
                  </div>
                </div>
                <div className="profile-row mb-1">
                  <div className="inputfields">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="profile-input"
                      value={student.email}
                      readOnly
                    />
                  </div>
                  <div className="inputfields">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="profile-input"
                      value={student.phone}
                      readOnly
                    />
                  </div>
                </div>
                <div className="profile-row mb-1">
                  <div className="inputfields">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="profile-input"
                      value={student.department}
                      readOnly
                    />
                  </div>
                  <div className="inputfields">
                    <label htmlFor="dob">Date or birth</label>
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      className="profile-input"
                      value={student.dob}
                      readOnly
                    />
                  </div>
                </div>
                <div className="inputfields">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="profile-input"
                    value={student.address}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="profile-settings dash-card p-1">
            <div className="setting-title mb-1">
              <FontAwesomeIcon
                icon={faShieldAlt}
                style={{ marginRight: "10px" }}
              />
              <span>Security settings</span>
            </div>
            <div className="setting-content">
              <div className="setting mb-2">
                <div className="setting-type">
                  <h4>Password</h4>
                  <span>last changed 3 months ago</span>
                </div>
                <button className="dash-btn-grey">Change password</button>
              </div>
              <div className="setting mb-2">
                <div className="setting-type">
                  <h4>Two-factor authentication</h4>
                  <span>Add an extra level of security to your account</span>
                </div>
                <button className="dash-btn-grey">Enable</button>
              </div>
              <div className="setting">
                <div className="setting-type">
                  <h4>Password</h4>
                  <span>View your login history and active sessions</span>
                </div>
                <Link to="" className="dash-btn-grey">
                  View activity
                </Link>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </button>
              <h4>Change Profile Image</h4>
              <form action="" className="image-form mt-s">
                <input
                  type="file"
                  className="mb-s"
                  name="image_file"
                  id="image"
                />
                <button type="button" className="dash-btn">
                  Change
                </button>
              </form>
            </div>
          </div>
        )}
        {showEdit && (
          <div className="modal-overlay" onClick={() => setShowEdit(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowEdit(false)}>
                &times;
              </button>
              <h4>Edit Basic Info</h4>
              <form action="" className="image-form mt-s">
                <div className="profile-row">
                  <div className="inputfields">
                    <label htmlFor="editname">Full name</label>
                    <input
                      type="text"
                      name="editname"
                      id="editname"
                      className="input"
                      defaultValue={student.name}
                      required
                    />
                  </div>
                  <div className="inputfields">
                    <label htmlFor="editphone">Phone number</label>
                    <input
                      type="text"
                      name="editphone"
                      id="editphone"
                      defaultValue={student.phone}
                      required
                    />
                  </div>
                  <div className="inputfields">
                    <label htmlFor="editdob">Date of Birth</label>
                    <input
                      type="date"
                      name="editdob"
                      id="editdob"
                      className="profile-input"
                      defaultValue={student.dob}
                      required
                    />
                  </div>
                  <div className="inputfields">
                    <label htmlFor="editaddess">Address</label>
                    <input
                      type="text"
                      name="editaddress"
                      id="editaddress"
                      defaultValue={student.address}
                      required
                    />
                  </div>
                </div>
                <button type="button" className="dash-btn mt-s">
                  Edit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
