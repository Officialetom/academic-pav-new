import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate  from 'react-paginate';
import Wrapper from "./components/Wrapper";
import { faDownload, faEdit, faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Student() {
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
    ];

    const students = [
        {
            id: 1,
            name: "Ubana Etom Ofem",
            matric_number: "19/095244102",
            department: "Computer Science",
            level: "400",
            email: "ubanaetom@gmail.com",
            status: "active",
        },
        {
            id: 2,
            name: "Ntongha Ofem Ubana",
            matric_number: "19/034244122",
            department: "Mathematics",
            level: "300",
            email: "ntonghaofem@gmail.com",
            status: "inactive",
        },
        {
            id: 3,
            name: "Robinson Ikpi Ikona",
            matric_number: "20/095244102",
            department: "Computer Science",
            level: "200",
            email: "ikpiikona@gmail.com",
            status: "active",
        },
        {
            id: 4,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 5,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 6,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 7,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 8,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 9,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 10,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 11,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 12,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
        {
            id: 13,
            name: "Emmanuel Robinson Oka",
            matric_number: "18/095244102",
            department: "Medicine & Surgery",
            level: "500",
            email: "robinson@gmail.com",
            status: "inactive",
        },
    ];

    const levels = ["100", "200", "300", "400", "500", "600"];

    // States
    const [activeLevel, setActiveLevel] = useState("all");
    const [activeDepartment, setActiveDepartment] = useState("all");
    const [searchKey, setSearchKey] = useState("");

    // Pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    // students filtration
    const visibleStudents = students.filter((student) => {
        const matchesLevel =
            activeLevel === "all" || student.level === activeLevel;

        const matchesDepartment =
            activeDepartment === "all" ||
            student.department === activeDepartment;

        const matchesSearch =
            student.name.toLowerCase().includes(searchKey.toLowerCase()) ||
            student.matric_number
                .toLowerCase()
                .includes(searchKey.toLowerCase());

        return matchesLevel && matchesDepartment && matchesSearch;
    });

    // Pagination on filtered students
    const offset = currentPage * itemsPerPage;

    const currentStds = visibleStudents.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(
        visibleStudents.length / itemsPerPage
    );

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    // Resettting to first page whenever filters change
    useEffect(() => {
        setCurrentPage(0);
    }, [activeLevel, activeDepartment, searchKey]);

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchKey(event.target.value);
    }

    function handleSelectLevel(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveLevel(event.target.value);
    }

    function handleSelectDepartment(event: React.ChangeEvent<HTMLSelectElement>) {
        setActiveDepartment(event.target.value);
    }

    return (
        <Wrapper pageTitle="students">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Students</p>
            </div>

            <div className="mt-1 bg-white rounded-lg shadow-md p-1">
                <div className="text-xs flex  flex-wrap items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search by name or matric number..."
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
                        className="flex-1 border border-gray-300 rounded-md p-1 outline-none"
                        value={activeLevel}
                        onChange={handleSelectLevel}
                        style={{padding: "10px"}}
                    >
                        <option value="all">All Levels</option>

                        {levels.map((level) => (
                            <option key={level} value={level}>
                                {level} Level
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
                                <th>Matric Number</th>
                                <th>Department</th>
                                <th>Level</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentStds.length > 0 ? (
                                currentStds.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b border-gray-200"
                                    >
                                        <td className="py-3" style={{padding: "10px"}}>{item.name}</td>
                                        <td>{item.matric_number}</td>
                                        <td>{item.department}</td>
                                        <td>{item.level}</td>
                                        <td>{item.email}</td>

                                        <td>
                                            <span
                                                className={`px-2 py-1 rounded-full text-white text-xs ${
                                                    item.status === "active"
                                                        ? "bg-green-500"
                                                        : "bg-red-500"
                                                }`}
                                                style={{padding: "2px 10px"}}
                                            >
                                                {item.status}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="flex items-center gap-3">
                                                <button
                                                    type="button"
                                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faEye} />
                                                </button>

                                                <button
                                                    type="button"
                                                    className="text-green-600 hover:text-green-800 cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faEdit} />
                                                </button>

                                                <button
                                                    type="button"
                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
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
                            {visibleStudents.length === 0 ? 0 : offset + 1}
                            {" "}to{" "}
                            {Math.min(offset + itemsPerPage, visibleStudents.length)}
                            {" "}of{" "}
                            {visibleStudents.length} students
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
    );
}

export default Student;