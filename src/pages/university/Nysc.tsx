import { useEffect, useState } from "react";
import Wrapper from "./components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faDownload, faTimesCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function Nysc(){
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

    const years = ["2019", "2020", "2021", "2022", "2023"];

    const nyscList = [
        {
            id: 1,
            name: "Ubana Etom",
            matric: "19/095244000",
            department: "Computer Science",
            graduation_year: "2021",
            status: "eligible",
        },
        {
            id: 2,
            name: "Ubana Etom",
            matric: "19/095244001",
            department: "Computer Science",
            graduation_year: "2021",
            status: "eligible",
        },
        {
            id: 3,
            name: "Ubana Etom",
            matric: "19/095244002",
            department: "Mathematics",
            graduation_year: "2023",
            status: "processing",
        },
        {
            id: 4,
            name: "Ubana Etom",
            matric: "19/095244003",
            department: "Computer Science",
            graduation_year: "2022",
            status: "ineligible",
        },
        {
            id: 5,
            name: "Ubana Etom",
            matric: "19/095244004",
            department: "Medicine & Surgery",
            graduation_year: "2019",
            status: "eligible",
        },
        {
            id: 6,
            name: "Robert Emmanuel",
            matric: "19/095244005",
            department: "Computer Science",
            graduation_year: "2021",
            status: "eligible",
        },
        {
            id: 7,
            name: "Ikpi Timothy",
            matric: "19/095244006",
            department: "Computer Science",
            graduation_year: "2019",
            status: "eligible",
        },
        {
            id: 8,
            name: "Ubana Etom",
            matric: "19/095244007",
            department: "Computer Science",
            graduation_year: "2020",
            status: "eligible",
        },
        {
            id: 9,
            name: "Ubana Etom",
            matric: "19/095244010",
            department: "Physics",
            graduation_year: "2021",
            status: "completed",
        },
        {
            id: 10,
            name: "Ubana Etom",
            matric: "19/095244011",
            department: "Computer Science",
            graduation_year: "2022",
            status: "ineligible",
        },
        {
            id: 11,
            name: "Ubana Etom",
            matric: "19/095244012",
            department: "Computer Science",
            graduation_year: "2020",
            status: "eligible",
        },
        {
            id: 12,
            name: "Ubana Etom",
            matric: "19/095244020",
            department: "Computer Science",
            graduation_year: "2021",
            status: "eligible",
        },
        {
            id: 13,
            name: "Ubana Etom",
            matric: "19/095244030",
            department: "Computer Science",
            graduation_year: "2019",
            status: "processing",
        },
        {
            id: 14,
            name: "Ubana Etom",
            matric: "19/095244040",
            department: "Computer Science",
            graduation_year: "2021",
            status: "eligible",
        },
        {
            id: 15,
            name: "Ubana Etom",
            matric: "19/095244070",
            department: "Computer Science",
            graduation_year: "2023",
            status: "processing",
        },
    ]

    // States
    const [activeYear, setActiveYear] = useState("all");
    const [activeDepartment, setActiveDepartment] = useState("all");
    const [searchKey, setSearchKey] = useState("");

    // pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    // admission filtration
    const visibleList = nyscList.filter((admission) => {
        const matchDepartment = 
            activeDepartment === "all" || admission.department === activeDepartment;

        const matchYear = 
            activeYear === "all" || admission.graduation_year === activeYear;
        
        const matchSearch = 
            admission.name.toLowerCase().includes(searchKey.toLowerCase()) || 
            admission.matric.toLowerCase().includes(searchKey.toLowerCase());
        
        return matchDepartment && matchYear && matchSearch;
    })

    

    // Pagination on filtered students
    const offset = currentPage * itemsPerPage;

    const currentList = visibleList.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(
        visibleList.length / itemsPerPage
    );

    const handlePageClick = (event: { selected: number }) => {
            setCurrentPage(event.selected);
        };
    
    // Resettting to first page whenever filters change
    useEffect(() => {
        setCurrentPage(0);
    }, [ activeYear, activeDepartment, searchKey]);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchKey(event.target.value);
    }

    function handleSelectSession(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveYear(event.target.value);
    }

    function handleSelectDepartment(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveDepartment(event.target.value);
    }
    return (
        <Wrapper pageTitle="nysc">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">NYSC List</p>
                <button className="bg-blue-600 flex items-center gap-2 text-sm shadow cursor-pointer rounded-md text-white" style={{padding: "5px 10px"}}>
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Export to PDF</span>
                </button>
            </div>
            <div className="mt-1 bg-white rounded-md shadow-md p-1">
                <div className="text-xs flex flex-wrap items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search name or matric number..."
                        className="flex-1 border border-gray-300 rounded-md p-1 outline-none"
                        value={searchKey}
                        style={{padding: "10px"}}
                        onChange={handleSearch}
                    />

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
                        className="flex-1 border border-gray-300 rounded-md outline-none"
                        value={activeYear}
                        onChange={handleSelectSession}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Years</option>

                        {years.map((sess) => (
                            <option key={sess} value={sess}>
                                {sess}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-1 overflow-x-auto">
                    <table className="w-full text-sm border-collapse text-gray-600">
                        <thead className="bg-gray-100 border-b border-gray-200  text-left">
                            <tr>
                                <th className="py-3" style={{padding: "10px"}}>Name</th>
                                <th>Matric Number</th>
                                <th>Department</th>
                                <th>Graduation Year</th>
                                <th>NYSC Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentList.length > 0 ? (
                                currentList.map((item) => {
                                    let bg = "";
                                    let icon = "";
                                    if(item.status === "eligible"){
                                        bg = "bg-green-100 outline-nono text-green-700";
                                    }else if(item.status === "processing"){
                                        bg = "bg-yellow-100 outline-nono text-yellow-700";
                                    }else if(item.status === "completed"){
                                        bg = "bg-blue-100 outline-nono text-blue-700";
                                    }else{
                                        bg = "bg-red-100 outline-nono text-red-700";
                                    }
                                    return (
                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-200"
                                        >
                                            <td className="py-3" style={{padding: "10px"}}>{item.name}</td>
                                            <td>{item.matric}</td>
                                            <td>{item.department}</td>
                                            <td>{item.graduation_year}</td>

                                            <td>
                                                <span
                                                    className={`px-2 py-1 text-xs flex gap-1 items-center`}
                                                >
                                                    <span className={`capitalize rounded-full ${bg}`} style={{padding: "2px 10px"}}>
                                                        {item.status}
                                                    </span>
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
                                                    {item.status == "completed" ? 
                                                        ""
                                                        :

                                                        item.status == "eligible" ?

                                                        <button
                                                            type="button"
                                                            className="text-green-600 text-sm capitalize hover:text-green-800 cursor-pointer"
                                                        >
                                                            <span>generate letter</span>
                                                        </button> 
                                                        :
                                                        <button
                                                            type="button"
                                                            className="text-green-600 text-sm capitalize hover:text-green-800 cursor-pointer"
                                                        >
                                                            <span>mark eligible</span>
                                                        </button>   
                                                    }
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
                            {visibleList.length === 0 ? 0 : offset + 1}
                            {" "}to{" "}
                            {Math.min(offset + itemsPerPage, visibleList.length)}
                            {" "}of{" "}
                            {visibleList.length} admissions
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

export default Nysc;