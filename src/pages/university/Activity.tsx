import { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDownload, faFile, faRefresh, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function Activity(){
    const users = [
        {
            id: 1,
            name: "Admin",
        },
        {
            id: 2,
            name: "Department Head",
        },
        {
            id: 3,
            name: "Admission Officer",
        },
        {
            id: 4,
            name: "Lecturer",
        },
    ];

    const actions = [
        {
            id: 1,
            name: "create",
        },
        {
            id: 2,
            name: "update",
        },
        {
            id: 3,
            name: "upload",
        },
        {
            id: 4,
            name: "delete",
        },
        {
            id: 5,
            name: "approve",
        },
    ];

    const activities = [
        {
            id: 1,
            title: "Uploaded Results for CSC 301",
            message: "Uploaded 45 Students results for Database System course",
            date: "2026-07-09 12:34:48",
            action: "upload",
            user: "Admin"
        },
        {
            id: 1,
            title: "Created Role: Result Manager",
            message: "created new role with permissions; view results,",
            date: "2026-04-09 12:34:48",
            action: "create",
            user: "Department Head"
        },
        {
            id: 1,
            title: "Approved Admission List for Engineering",
            message: "Approved 120 new admissions for Engineering department",
            date: "2026-07-09 12:34:48",
            action: "approve",
            user: "Admission Officer"
        },
        {
            id: 1,
            title: "Uploaded Results for CSC 301",
            message: "Uploaded 45 Students results for Database System course",
            date: "2026-07-09 12:34:48",
            action: "upload",
            user: "Lecturer"
        },
    ]

    // States
    const [activeUser, setActiveUser] = useState("all");
    const [activeAction, setActiveAction] = useState("all");
    const [searchKey, setSearchKey] = useState("");

    // pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    // admission filtration
    const visibleActivities = activities.filter((activity) => {
        const matchAction = 
            activeAction === "all" || activity.action === activeAction;

        const matchUser = 
            activeUser === "all" || activity.user === activeUser;
        
        const matchSearch = 
            activity.title.toLowerCase().includes(searchKey.toLowerCase());
        
        return matchAction && matchUser && matchSearch;
    })

    

    // Pagination on filtered students
    const offset = currentPage * itemsPerPage;

    const currentAdmi = visibleActivities.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(
        visibleActivities.length / itemsPerPage
    );

    const handlePageClick = (event: { selected: number }) => {
            setCurrentPage(event.selected);
        };
    
    // Resettting to first page whenever filters change
    useEffect(() => {
        setCurrentPage(0);
    }, [activeUser, activeAction, searchKey]);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchKey(event.target.value);
    }

    function handleSelectUser(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveUser(event.target.value);
    }

    function handleSelectAction(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveAction(event.target.value);
    }
    return (
        <Wrapper pageTitle="activity-log">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Activity Log</p>
                <Link to="" className="text-sm text-blue-600"><FontAwesomeIcon icon={faRefresh} /> Refresh</Link>
            </div>
            <div className="mt-1 bg-white rounded-md shadow-md p-1">
                <div className="text-xs flex flex-wrap items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search activities..."
                        className="flex-1 border border-gray-300 rounded-md p-1 outline-none"
                        value={searchKey}
                        style={{padding: "10px"}}
                        onChange={handleSearch}
                    />

                    <select
                        className="flex-1 border border-gray-300 rounded-md outline-none"
                        value={activeUser}
                        onChange={handleSelectUser}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Users</option>

                        {users.map((sess) => (
                            <option key={sess.id} value={sess.name}>
                                {sess.name}
                            </option>
                        ))}
                    </select>

                    <select
                        className="flex-1 border border-gray-300 rounded-md outline-none"
                        value={activeAction}
                        onChange={handleSelectAction}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Actions</option>

                        {actions.map((dept) => (
                            <option key={dept.id} value={dept.name}>
                                {dept.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-1">
                    <div className="w-full text-sm grid gap-2 text-gray-600">
                        {currentAdmi.length > 0 ? (
                            currentAdmi.map((item) => {
                                return (
                                    <div className="border border-gray-300 rounded-md flex items-start justify-start gap-2" style={{padding: "20px 15px"}}>
                                        <div className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                                            <FontAwesomeIcon icon={faFile} />
                                        </div>
                                        <div className="flex-1 grid gap-1">
                                            <div className="border-b-1 w-full border-gray-200" style={{paddingBottom: "10px"}}>
                                                <div className="flex gap-2">
                                                    <span className="bg-gray-200 rounded-full text-xs" style={{padding: "2px 8px"}}>{item.action}</span>
                                                    <span className="font-bold">{item.title}</span>
                                                </div>
                                                <div className="flex gap-3 text-xs" style={{marginTop: "10px"}}>
                                                    <p className="flex items-center gap-1">
                                                        <FontAwesomeIcon icon={faUser}/>
                                                        <span>{item.user}</span>
                                                    </p>
                                                    <p className="flex items-center gap-1">
                                                        <FontAwesomeIcon icon={faClock} />
                                                        <span>{item.date}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <p className="text-xs">{item.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                )})
                        ) : (
                            <div className="text-center p-1 text-gray-500" style={{padding: "5px"}}>
                                No records found.
                            </div>
                        )}
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                            Showing{" "}
                            {visibleActivities.length === 0 ? 0 : offset + 1}
                            {" "}to{" "}
                            {Math.min(offset + itemsPerPage, visibleActivities.length)}
                            {" "}of{" "}
                            {visibleActivities.length} activities
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

export default Activity;