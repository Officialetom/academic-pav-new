import { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function Admission(){
    const departments = [
        {
            id: 1,
            name: "Computer Science",
        },
        {
            id: 2,
            name: "Mathematics",
        },
        {
            id: 3,
            name: "Medicine & Surgery",
        },
        {
            id: 4,
            name: "Physics",
        },
    ];

    const sessions = [
        {
            id: 1,
            name: "2021/2022",
        },
        {
            id: 2,
            name: "2022/2023",
        },
        {
            id: 3,
            name: "2023/2024",
        },
    ];

    const status = ["accepted", "pending", "rejected"];
    const admissions = [
        {
            id: 1,
            name: "Ubana Etom",
            application_id: "APP100",
            department: "Computer Science",
            session: "2021/2022",
            score: 256,
            status: "accepted",
        },
        {
            id: 2,
            name: "Robinson Emmanuel",
            application_id: "APP101",
            department: "Computer Science",
            session: "2021/2022",
            score: 156,
            status: "pending",
        },
        {
            id: 3,
            name: "Ubana Etom",
            application_id: "APP110",
            department: "Medicine & Surgery",
            session: "2022/2023",
            score: 340,
            status: "pending",
        },
        {
            id: 4,
            name: "Ubana Etom",
            application_id: "APP120",
            department: "Computer Science",
            session: "2021/2022",
            score: 256,
            status: "accepted",
        },
        {
            id: 5,
            name: "Ubana Etom",
            application_id: "APP130",
            department: "Mathematics",
            session: "2021/2022",
            score: 126,
            status: "rejected",
        },
        {
            id: 6,
            name: "Ubana Etom",
            application_id: "APP140",
            department: "Computer Science",
            session: "2021/2022",
            score: 296,
            status: "accepted",
        },
        {
            id: 7,
            name: "Ubana Etom",
            application_id: "APP150",
            department: "Physics",
            session: "2021/2022",
            score: 256,
            status: "rejected",
        },
        {
            id: 8,
            name: "Ubana Etom",
            application_id: "APP160",
            department: "Computer Science",
            session: "2022/2023",
            score: 256,
            status: "pending",
        },
        {
            id: 9,
            name: "Ubana Etom",
            application_id: "APP170",
            department: "Physics",
            session: "2021/2022",
            score: 256,
            status: "accepted",
        },
        {
            id: 10,
            name: "Ubana Etom",
            application_id: "APP180",
            department: "Physics",
            session: "2021/2022",
            score: 256,
            status: "accepted",
        },
        {
            id: 11,
            name: "Ubana Etom",
            application_id: "APP190",
            department: "Medicine & Surgery",
            session: "2021/2022",
            score: 326,
            status: "accepted",
        },
        {
            id: 12,
            name: "Ubana Etom",
            application_id: "APP124",
            department: "Medicine & Surgery",
            session: "2022/2023",
            score: 256,
            status: "accepted",
        },
        {
            id: 13,
            name: "Ubana Etom",
            application_id: "APP200",
            department: "Computer Science",
            session: "2023/2024",
            score: 256,
            status: "rejected",
        },
    ]

    // States
    const [activeSession, setActiveSession] = useState("all");
    const [activeDepartment, setActiveDepartment] = useState("all");
    const [activeStatus, setActiveStatus] = useState("all");
    const [searchKey, setSearchKey] = useState("");

    // pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    // admission filtration
    const visibleAdmissions = admissions.filter((admission) => {
        const matchDepartment = 
            activeDepartment === "all" || admission.department === activeDepartment;

        const matchSession = 
            activeSession === "all" || admission.session === activeSession;
        
        const matchStatus = 
            activeStatus === "all" || admission.status === activeStatus;
        
        const matchSearch = 
            admission.name.toLowerCase().includes(searchKey.toLowerCase());
        
        return matchDepartment && matchSession && matchStatus && matchSearch;
    })

    

    // Pagination on filtered students
    const offset = currentPage * itemsPerPage;

    const currentAdmi = visibleAdmissions.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(
        visibleAdmissions.length / itemsPerPage
    );

    const handlePageClick = (event: { selected: number }) => {
            setCurrentPage(event.selected);
        };
    
    // Resettting to first page whenever filters change
    useEffect(() => {
        setCurrentPage(0);
    }, [activeStatus, activeSession, activeDepartment, searchKey]);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchKey(event.target.value);
    }

    function handleSelectSession(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveSession(event.target.value);
    }

    function handleSelectDepartment(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveDepartment(event.target.value);
    }

    function handleSelectStatus(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveStatus(event.target.value);
    }
    return (
        <Wrapper pageTitle="admissions">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Admission Management</p>
                <div className="flex items-center gap-2">
                    <button className="bg-white flex items-center gap-2 text-sm shadow cursor-pointer rounded-md" style={{padding: "5px 10px"}}>
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Export list</span>
                    </button>
                    <button className="bg-blue-600 flex items-center gap-2 text-sm shadow cursor-pointer rounded-md text-white" style={{padding: "5px 10px"}}>
                        <FontAwesomeIcon icon={faUpload} />
                        <span>Upload new list</span>
                    </button>
                </div>
            </div>
            <div className="mt-1 bg-white rounded-md shadow-md p-1">
                <div className="text-xs flex flex-wrap items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search Applicants..."
                        className="flex-1 border border-gray-300 rounded-md p-1 outline-none"
                        value={searchKey}
                        style={{padding: "10px"}}
                        onChange={handleSearch}
                    />

                    <select
                        className="flex-1 border border-gray-300 rounded-md outline-none"
                        value={activeSession}
                        onChange={handleSelectSession}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Sessions</option>

                        {sessions.map((sess) => (
                            <option key={sess.id} value={sess.name}>
                                {sess.name}
                            </option>
                        ))}
                    </select>

                    <select
                        className="flex-1 border border-gray-300 rounded-md outline-none"
                        value={activeDepartment}
                        onChange={handleSelectDepartment}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Departments</option>

                        {departments.map((dept) => (
                            <option key={dept.id} value={dept.name}>
                                {dept.name}
                            </option>
                        ))}
                    </select>

                    <select
                        className="flex-1 border border-gray-300 rounded-md p-1 outline-none"
                        value={activeStatus}
                        onChange={handleSelectStatus}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Status</option>

                        {status.map((stat) => (
                            <option key={stat} value={stat}>
                                {stat} 
                            </option>
                        ))}
                    </select>

                    <span
                        style={{padding: "10px 20px"}}
                        // className="w-28 border-1 border-gray-300 rounded hover:bg-blue-700"
                        className="w-28 border border-gray-300 text-center rounded-md py-1 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faDownload} style={{marginRight: "3px"}}/>
                        Export
                    </span>
                </div>
                <div className="mt-1 overflow-x-auto">
                    <table className="w-full text-sm border-collapse text-gray-600">
                        <thead className="bg-gray-100 border-b border-gray-200  text-left">
                            <tr>
                                <th className="py-3" style={{padding: "10px"}}>Name</th>
                                <th>Application ID</th>
                                <th>Department</th>
                                <th>Session</th>
                                <th>Score</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentAdmi.length > 0 ? (
                                currentAdmi.map((item) => {
                                    let bg = "";
                                    if(item.status === "accepted"){
                                        bg = "bg-green-100 outline-nono text-green-700";
                                    }else if(item.status === "pending"){
                                        bg = "bg-yellow-100 outline-nono text-yellow-700"
                                    }else{
                                        bg = "bg-red-100 outline-nono text-red-700";
                                    }
                                    return (
                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-200"
                                        >
                                            <td className="py-3" style={{padding: "10px"}}>{item.name}</td>
                                            <td>{item.application_id}</td>
                                            <td>{item.department}</td>
                                            <td>{item.session}</td>
                                            <td>{item.score}</td>

                                            <td>
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs ${bg}`}
                                                    style={{padding: "2px 10px"}}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        type="button"
                                                        className="text-blue-600 text-sm capitalize hover:text-blue-800 cursor-pointer"
                                                    >
                                                        <span>view</span>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="text-green-600 text-sm capitalize hover:text-green-800 cursor-pointer"
                                                    >
                                                        <span>accept</span>
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="text-red-600 text-sm capitalize hover:text-red-800 cursor-pointer"
                                                    >
                                                        <span>reject</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )})
                            ) : (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="text-center py-5 text-gray-500"
                                        style={{padding: "5px"}}
                                    >
                                        No records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-1 flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                            Showing{" "}
                            {visibleAdmissions.length === 0 ? 0 : offset + 1}
                            {" "}to{" "}
                            {Math.min(offset + itemsPerPage, visibleAdmissions.length)}
                            {" "}of{" "}
                            {visibleAdmissions.length} admissions
                        </div>

                        {pageCount > 1 && (
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Next"
                                previousLabel="Prev"
                                pageCount={pageCount}
                                onPageChange={handlePageClick}
                                renderOnZeroPageCount={null}

                                containerClassName="pagination"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"

                                previousClassName="page-item"
                                previousLinkClassName="page-link"

                                nextClassName="page-item"
                                nextLinkClassName="page-link"

                                activeClassName="active"
                                disabledClassName="disabled"

                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                            />
                        )}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Admission;