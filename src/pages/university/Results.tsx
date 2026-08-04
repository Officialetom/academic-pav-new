import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import ReactPaginate  from 'react-paginate';
import { faCheckCircle, faDownload, faExclamation, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { width } from "@fortawesome/free-solid-svg-icons/faBookOpen";

function Results(){
    const results = [
        {
            id: 1,
            "matric number": "19/095244000",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 75,
            grade: "A",
            status: "approved"
        },
        {
            id: 2,
            "matric number": "12/095244000",
            "course code": "CSC 392",
            "course title": "Computer Architecture 2",
            score: 34,
            grade: "F",
            status: "approved"
        },
        {
            id: 3,
            "matric number": "17/095244000",
            "course code": "MTH 211",
            "course title": "General Mathematics",
            score: 55,
            grade: "C",
            status: "pending"
        },
        {
            id: 4,
            "matric number": "19/093244110",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 65,
            grade: "B",
            status: "pending"
        },
        {
            id: 5,
            "matric number": "19/095244080",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 48,
            grade: "D",
            status: "approved"
        },
        {
            id: 6,
            "matric number": "19/095244090",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 75,
            grade: "A",
            status: "approved"
        },
        {
            id: 7,
            "matric number": "19/095244050",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 75,
            grade: "A",
            status: "approved"
        },
        {
            id: 8,
            "matric number": "19/095244021",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 41,
            grade: "E",
            status: "approved"
        },
        {
            id: 9,
            "matric number": "19/095244020",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 75,
            grade: "A",
            status: "approved"
        },
        {
            id: 10,
            "matric number": "19/095244006",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 75,
            grade: "A",
            status: "approved"
        },
        {
            id: 11,
            "matric number": "19/095344000",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 67,
            grade: "B",
            status: "approved"
        },
        {
            id: 12,
            "matric number": "19/095244100",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 78,
            grade: "A",
            status: "approved"
        },
        {
            id: 13,
            "matric number": "19/095244010",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 51,
            grade: "C",
            status: "approved"
        },
        {
            id: 14,
            "matric number": "13/095244000",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 40,
            grade: "E",
            status: "approved"
        },
        {
            id: 15,
            "matric number": "18/095244001",
            "course code": "CSC 302",
            "course title": "Computer Architecture",
            score: 91,
            grade: "A",
            status: "pending"
        },
    ]

    const [activeType, setActiveType] = useState('all');
    const [searchKey, setSearchKey] = useState("");

    // Pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    // students filtration
    const visibleResults = results.filter((result) => {
        const matchesType =
            activeType === "all" || result.status === activeType;

        const matchesSearch =
            result["matric number"].toLowerCase().includes(searchKey.toLowerCase()) ||
            result["course code"]
                .toLowerCase()
                .includes(searchKey.toLowerCase());

        return matchesType && matchesSearch;
    });

    // Pagination on filtered students
        const offset = currentPage * itemsPerPage;
    
        const currentRslts = visibleResults.slice(
            offset,
            offset + itemsPerPage
        );
    
        const pageCount = Math.ceil(
            results.length / itemsPerPage
        );
    
        const handlePageClick = (event: { selected: number }) => {
            setCurrentPage(event.selected);
        };
    
        // Resettting to first page whenever filters change
        useEffect(() => {
            setCurrentPage(0);
        }, [activeType, searchKey]);

        function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
            setSearchKey(event.target.value);
        }

    return (
        <Wrapper pageTitle="results">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Results Management</p>
                <button className="bg-blue-600 flex items-center gap-2 text-sm shadow cursor-pointer rounded-md text-white" style={{padding: "5px 10px"}}>
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Export Results</span>
                </button>
            </div>
            <div className="mt-1 bg-white rounded-md p-1 shadow-md">
                <div className="results-selects">
                    <input type="radio" name="type" id="all" value="all" defaultChecked onChange={(e) => setActiveType(e.target.value)} />
                    <label htmlFor="all">All Results</label>
                    <input type="radio" name="type" id="pending" value="pending" onChange={(e) => setActiveType(e.target.value)} />
                    <label htmlFor="pending">Real-time Results</label>
                    <input type="radio" name="type" id="approved" value="approved" onChange={(e) => setActiveType(e.target.value)}/>
                    <label htmlFor="approved">Senate Approved Results</label>
                </div>
                <div className="mt-1">
                    <input type="search" name="search" id="" style={{padding: "10px"}} className="border-1 border-gray-300 text-sm rounded-md text-gray-600 md:w-[400px]" placeholder="Search by matric number or course code..." onChange={handleSearch}/>
                    <div className="mt-1 overflow-x-auto">
                        <table className="w-full text-sm border-collapse text-gray-600">
                            <thead className="bg-gray-100 border-b border-gray-200  text-left">
                                <tr>
                                    <th className="py-3" style={{padding: "10px"}}>Matric Number</th>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th>Score</th>
                                    <th>Grade</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRslts.length > 0 ? (
                                    currentRslts.map((item) => {
                                        let bg = "";
                                        if(item.grade === "A"){
                                            bg = "bg-green-400 outline-nono flex text-white text-sm justify-center items-center rounded-full ";
                                        }else if(item.grade === "B"){
                                            bg = "bg-blue-400 outline-nono flex text-white text-sm justify-center items-center rounded-full ";
                                        }else if(item.grade === "C"){
                                            bg = "bg-purple-400 outline-nono flex text-white text-sm justify-center items-center rounded-full ";
                                        } else if(item.grade === "D"){
                                            bg = "bg-yellow-400 outline-nono flex text-white text-sm justify-center items-center rounded-full ";
                                        }else if(item.grade === "E"){
                                            bg = "bg-gray-400 outline-nono flex text-white text-sm justify-center items-center rounded-full ";
                                        }else{
                                            bg = "bg-red-400 outline-nono flex text-white text-sm justify-center items-center rounded-full ";
                                        }
                                        return (
                                            <tr
                                                key={item.id}
                                                className="border-b border-gray-200"
                                            >
                                                <td className="py-3" style={{padding: "10px"}}>{item["matric number"]}</td>
                                                <td>{item["course code"]}</td>
                                                <td>{item["course title"]}</td>
                                                <td>{item.score}</td>
                                                <td>
                                                   <span className={bg} style={{padding: "5px", width: "25px", height: "25px"}} >{item.grade}</span> 
                                                </td>
        
                                                <td>
                                                    <span
                                                        className={`px-2 py-1 text-xs flex gap-1 ${
                                                            item.status === "approved"
                                                                ? "text-green-500"
                                                                : "text-yellow-500"
                                                        }`}
                                                        style={{padding: "2px 10px"}}
                                                    >
                                                    <FontAwesomeIcon icon={ item.status === "approved" ? faCheckCircle : faExclamationCircle } />
                                                        <span className="capitalize">{item.status}</span>
                                                    </span>
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
                                {visibleResults.length === 0 ? 0 : offset + 1}
                                {" "}to{" "}
                                {Math.min(offset + itemsPerPage, visibleResults.length)}
                                {" "}of{" "}
                                {visibleResults.length} students
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
            </div>
        </Wrapper>
    )
}

export default Results;