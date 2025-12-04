import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from 'react-paginate';
import "./styles/universities.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { faBookOpen, faBuilding, faEdit, faEye, faGlobe, faTrashCan, faUsers } from "@fortawesome/free-solid-svg-icons";

function AdminUniversities() {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUni, setSelectedUni] = useState<any>(null);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(0);

    // fetch universities details
    const universities = [
        {
            id: 1,
            name: "University of Calabar",
            uni_admin: "Dr. Robert Bassey",
            sync: "active",
            compliance_score: 97,
            last_update: "2023-09-23 13:35",
            location: "Calabar, Cross River",
            website: "https://myunical.edu.ng",
            total_students: 11200,
            established: 1983,
            research_output: 124,
        },
        {
            id: 2,
            name: "University of Jos",
            uni_admin: "Dr. Robert Bassey",
            sync: "active",
            compliance_score: 92,
            last_update: "2023-09-23 13:35",
            location: "Jos, Nigeria",
            website: "https://unijos.edu.ng",
            total_students: 12413,
            established: 1979,
            research_output: 234,
        },
        {
            id: 3,
            name: "University of Benin",
            uni_admin: "Dr. Robert Bassey",
            sync: "warning",
            compliance_score: 74,
            last_update: "2023-09-23 13:35",
            location: "Benin, Nigeria",
            website: "https://uniben.edu.ng",
            total_students: 10103,
            established: 1981,
            research_output: 144,
        },
        {
            id: 4,
            name: "University of Lagos",
            uni_admin: "Dr. Robert Bassey",
            sync: "inactive",
            compliance_score: 62,
            last_update: "2023-09-23 13:35",
            location: "Lagos, Nigeria",
            website: "https://unilag.edu.ng",
            total_students: 14200,
            established: 1986,
            research_output: 243,
        },
        {
            id: 5,
            name: "University of Kwara",
            uni_admin: "Dr. Robert Bassey",
            sync: "active",
            compliance_score: 97,
            last_update: "2023-09-23 13:35",
            location: "Kwara, Nigeria",
            website: "https://unikwara.edu.ng",
            total_students: 15140,
            established: 1982,
            research_output: 104,
        },
        {
            id: 6,
            name: "University of Ikeja",
            uni_admin: "Dr. Robert Bassey",
            sync: "inactive",
            compliance_score: 59,
            last_update: "2023-09-23 13:35",
            location: "Ikeja, Nigeria",
            website: "https://uniikeja.edu.ng",
            total_students: 9201,
            established: 1989,
            research_output: 45,
        },
        {
            id: 7,
            name: "University of Abuja",
            uni_admin: "Dr. Robert Bassey",
            sync: "active",
            compliance_score: 93,
            last_update: "2023-09-23 13:35",
            location: "Abuja, Nigeria",
            website: "https://uniabuja.edu.ng",
            total_students: 13100,
            established: 1973,
            research_output: 236,
        },
        {
            id: 8,
            name: "University of Enugu",
            uni_admin: "Dr. Robert Bassey",
            sync: "active",
            compliance_score: 96,
            last_update: "2023-09-23 13:35",
            location: "Enugu, Nigeria",
            website: "https://unienugu.edu.ng",
            total_students: 12133,
            established: 1984,
            research_output: 149,
        },
    ]
    
    const offset = currentPage * itemsPerPage;
    const currentUnis = universities.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(universities.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    const getDetails = (id: any) => {
        const uni = universities.find((u) => u.id === id) || null;
        setSelectedUni(uni);
        setShowModal(true);
    };
    
    const getDelete = (id: any) => {
        const uni = universities.find((u) => u.id === id) || null;
        setSelectedUni(uni);
        setShowDeleteModal(true);
    };

    function badgeDisplay(status: string){
        if(status == "active"){
            return "bg-green";
        }else if (status == "warning")
        {
            return "bg-orange";
        }else{
            return "bg-red";
        }
    }

    function getInitials(name: any) {
    const words = name.split(" ");
    const initials = words
      .slice(0, 3)
      .map((word: any) => word[0])
      .join("");
    return initials;
  }

    return (
    <div className="super-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="universities" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Universities</h3>
            <p>Monitor and manage all participating universities</p>
          </div>
          <div className="search_filter mt-1">
            <div className="search_uni">
                <form action="">
                    <input type="search" name="search_box" id="search_uni" placeholder="search universities.." />
                </form>
            </div>
            <div className="filter_uni">
                {/* <select name="" id="">
                    <option value="" selected hidden>Filter</option>
                </select> */}
                <button type="button">Add University</button>
            </div>
          </div>
          {/* universities display */}
          <div className="super-uni-display dash-card mt-1">
            <div className="scroll">
                <table>
                    <thead>
                        <tr>
                            <th>University Name</th>
                            <th>Admin</th>
                            <th>Data Sync</th>
                            <th>Compliance Score</th>
                            <th>Last Update</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUnis.map((unis)=>{
                            let bg ="";
                            let txt = "";
                            if(unis.sync == "active"){
                                bg = "bg-green";
                                txt = "text-green";
                            }else if(unis.sync == "inactive"){
                                bg = "bg-red";
                                txt = "text-red";
                            }else{
                                bg = "bg-orange";
                                txt = "text-orange";
                            }
                            return (
                                <tr key={unis.id}>
                                    <td>{unis.name}</td>
                                    <td>{unis.uni_admin}</td>
                                    <td className={txt}>{unis.sync}</td>
                                    <td><span className={bg}>{unis.compliance_score}%</span></td>
                                    <td>{unis.last_update}</td>
                                    <td>
                                        <span className="actions">
                                            <FontAwesomeIcon icon={faEye} onClick={() => getDetails(unis.id)}/>
                                            <FontAwesomeIcon icon={faEdit} />
                                            <FontAwesomeIcon icon={faTrashCan} className="text-red" onClick={() => getDelete(unis.id)}/>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
          </div>
          <div className="pagination-container">
    
            {/* LEFT SIDE */}
            <div className="pagination-info">
                Showing {offset + 1} to {Math.min(offset + itemsPerPage, universities.length)} of {universities.length} universities
            </div>

            {/* RIGHT SIDE */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Prev"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                containerClassName="pagination"
                pageClassName=""
                previousClassName=""
                nextClassName=""
                activeClassName="active-page"
                disabledClassName="disabled"
                />
          </div>

        </div>
      </div>
      {showModal && selectedUni &&  (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                &times;
              </button>
              <h4>University Details</h4>
              <div className="uni-info">
                <div className="info-first">
                    <span>{getInitials(selectedUni.name)}</span>
                    <div className="">
                        {selectedUni.name}
                    </div>
                </div>
                <div className="info-second">
                    <div className="uni-item">
                        <span><FontAwesomeIcon icon={faBuilding} /> Location</span>
                        <p>{selectedUni.location}</p>
                    </div>
                    <div className="uni-item">
                        <span><FontAwesomeIcon icon={faUsers} /> Total Students</span>
                        <p>{selectedUni.total_students.toLocaleString()}</p>
                    </div>
                    <div className="uni-item">
                        <span><FontAwesomeIcon icon={faBookOpen} /> Research Outputs</span>
                        <p>{selectedUni.research_output}</p>
                    </div>
                    <div className="uni-item">
                        <span><FontAwesomeIcon icon={faGlobe} /> Established</span>
                        <p>{selectedUni.established}</p>
                    </div>
                </div>
                <div className="info-third">
                    <div className="uni-info">
                        <p>Website</p>
                        <a href={selectedUni.website} target="_blank">{selectedUni.website}</a>
                    </div>
                    <div className="uni-info">
                        <p>Status</p>
                        <span className={badgeDisplay(selectedUni.sync)}>{selectedUni.sync}</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      {showDeleteModal && selectedUni &&  (
          <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
            <div className="modal-delete" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setShowDeleteModal(false)}>
                &times;
              </button>
              <h4>Delete University?</h4>
              <div className="uni-info">
                <div className="info-first">
                    <div className="">
                        {selectedUni.name}
                    </div>
                </div>
                <form action="">
                    <input type="number" name="uni_id" id="uni_id" hidden />
                    <button type="button" className="admin-dash-btn">No</button>
                    <button type="button" className="admin-del-btn">Yes</button>
                </form>
                
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default AdminUniversities;