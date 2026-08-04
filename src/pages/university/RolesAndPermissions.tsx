import { useState } from "react";
import Wrapper from "./components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

function RolesAndPermissions(){
    const roles = [
        {
            id: 1,
            name: "Super Admin",
            permissions: ['upload results', 'upload admissions', 'register institution', 'manage institutions'],
            created_by: "System",
            users: 1,
        },
        {
            id: 2,
            name: "Departmental Head",
            permissions: ['upload results', 'view results', 'manage staffs'],
            created_by: "Admin User",
            users: 3,
        },
        {
            id: 3,
            name: "Lecturer",
            permissions: ['upload results', 'view results'],
            created_by: "Admin User",
            users: 15,
        },
        {
            id: 4,
            name: "Admission Officer",
            permissions: ['upload admissions', 'view results'],
            created_by: "Admin User",
            users: 3,
        },
    ]

    // pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);
    const [showAddRole, setShowAddRole] = useState(false);
    

    // Pagination on filtered students
    const offset = currentPage * itemsPerPage;

    const currentList = roles.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(
        roles.length / itemsPerPage
    );

    const handlePageClick = (event: { selected: number }) => {
            setCurrentPage(event.selected);
        };

    return (
        <Wrapper pageTitle="manage-roles">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Manage Roles & Permissions</p>
                <button className="bg-blue-600 flex items-center gap-2 text-sm shadow cursor-pointer rounded-md text-white" style={{padding: "5px 10px"}} onClick={() => setShowAddRole(true)}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Create Role</span>
                </button>
            </div>
            <div className="mt-1 bg-white rounded-md shadow-md p-1">
                <div className=" overflow-x-auto">
                    <table className="w-full text-sm border-collapse text-gray-600">
                        <thead className="bg-gray-100 border-b border-gray-200  text-left">
                            <tr>
                                <th className="py-3" style={{padding: "10px"}}>Role Name</th>
                                <th>Permissions</th>
                                <th>Created By</th>
                                <th>Users</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {currentList.length > 0 ? (
                                currentList.map((item) => {
                                    const visiblePermission = item.permissions.slice(0,2)
                                    const remaining = item.permissions.length - 2
                                    return (
                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-200"
                                        >
                                            <td className="py-3" style={{padding: "10px"}}>{item.name}</td>
                                            <td>
                                                {visiblePermission.map((permi) => (
                                                <span className="text-blue-600 text-xs bg-blue-100 rounded-full" style={{padding: "2px 5px", marginRight: "3px"}}>{permi}</span>
                                            ))} 
                                            {remaining > 0 &&
                                            <span className="text-gray-600 flex items-center justify-center inline-block text-xs bg-gray-100 rounded-full" style={{padding: "3px", width: '22px', height: "22px"}}>
                                                +{remaining}</span>} 
                                            </td>
                                            <td>
                                                <span className="text-xs">
                                                    {item.created_by}
                                                </span>
                                            </td>
                                            <td><FontAwesomeIcon icon={faUser}/> {item.users}</td>

                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        type="button"
                                                        className="text-blue-600 text-sm capitalize hover:text-blue-800 cursor-pointer"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="text-red-600 text-sm capitalize hover:text-red-800 cursor-pointer"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
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
                                        No Roles found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-1 flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                            Showing{" "}
                            {roles.length === 0 ? 0 : offset + 1}
                            {" "}to{" "}
                            {Math.min(offset + itemsPerPage, roles.length)}
                            {" "}of{" "}
                            {roles.length} Roles
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
            {showAddRole && (
                <div className="modal-overlay" onClick={() => setShowAddRole(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between border-b border-gray-200" style={{padding: "0 0 10px 0"}}>
                            <p>Create New Role</p>
                            <button className="close-btn" onClick={() => setShowAddRole(false)}>
                                &times;
                            </button>
                        </div>
                        <form className="mt-1 grid gap-3">
                            <div className="grid gap-1">
                                <p className="text-sm">Role Name</p>
                                <input type="text" name="name" className="text-sm rounded-md border border-gray-200" placeholder="Enter role name" id="name" style={{padding: "10px"}} />
                            </div>
                            <div className="grid gap-1">
                                <p className="text-sm">Permissions</p>
                                <div className="border rounded-md border-gray-200 text-gray-700 text-sm grid gap-3" style={{padding: "10px"}}>
                                    <label htmlFor="upload_results" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="upload_results" required />
                                        Upload Results
                                    </label>
                                    <label htmlFor="upload_admissions" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="upload_admissions" required />
                                        Upload Admissions
                                    </label>
                                    <label htmlFor="manage_students" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="manage_students" required />
                                        Manage Students
                                    </label>
                                    <label htmlFor="view_results" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="view_results" required />
                                        View Results
                                    </label>
                                    <label htmlFor="manage_roles" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="manage_roles" required />
                                        Manage Roles
                                    </label>
                                    <label htmlFor="manage_nysc_list" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="manage_nysc_list" required />
                                        Manage NYSC List
                                    </label>
                                    <label htmlFor="view_activity_log" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="view_activity_log" required />
                                        View Activity Log
                                    </label>
                                    <label htmlFor="system_settings" className="flex gap-2">
                                        <input type="checkbox" name="permissions[]" className="text-4xl" value="upload results" id="system_settings" required />
                                        System Settings
                                    </label>
                                </div>
                            </div>
                            <div className="upload-form flex gap-1 mt-1 justify-end">
                                <div className="cancel">
                                    <button type="button" onClick={() => setShowAddRole(false)}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="submit">
                                    <button type="submit">
                                        Create Role
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </Wrapper>
    )
}

export default RolesAndPermissions;