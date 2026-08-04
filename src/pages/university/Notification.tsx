import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import ReactPaginate  from 'react-paginate';
import { faCheckCircle, faDownload, faExclamationCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Notification(){
    const notification = [
        {
            id: 1,
            title: "New Results Uploaded",
            message: "Results for CSC 301 have been successfully uploaded.",
            date: "2026-07-10 14:53:48",
            status: "system",
            read: false,
        },
        {
            id: 2,
            title: "Error Processing Admission List",
            message: "There was an error processing the admission list for Engineering Department.",
            date: "2026-07-10 09:53:48",
            status: "error",
            read: false,
        },
        {
            id: 3,
            title: "Admission List Ready",
            message: "The Admission List for Computer Science is ready for review.",
            date: "2026-01-10 09:13:48",
            status: "uploads",
            read: true,
        },
        {
            id: 4,
            title: "New Results Uploaded",
            message: "Results for CSC 301 have been successfully uploaded.",
            date: "2020-10-07 11:53:48",
            status: "system",
            read: true,
        },
        {
            id: 5,
            title: "New Results Uploaded",
            message: "Results for CSC 301 have been successfully uploaded.",
            date: "2025-10-07 11:53:48",
            status: "system",
            read: true,
        },
        {
            id: 6,
            title: "New Results Uploaded",
            message: "Results for CSC 301 have been successfully uploaded.",
            date: "2020-10-07 11:53:48",
            status: "system",
            read: true,
        },
    ]

    const [activeType, setActiveType] = useState('all');

    // Pagination
    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    // students filtration
    const visibleNotification = notification.filter((result) => {
        const matchesType =
            activeType === "all" || result.status === activeType;

        return matchesType;
    });

    // Pagination on filtered students
    const offset = currentPage * itemsPerPage;

    const currentNotice = visibleNotification.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(
        notification.length / itemsPerPage
    );

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected);
    };

    // Resettting to first page whenever filters change
    useEffect(() => {
        setCurrentPage(0);
    }, [activeType]);

    // function to calculate time
    function timeAgo(datetime: string) {
        const currentTime = new Date().getTime() / 1000;
        const pastTIme = new Date(datetime).getTime() / 1000;
        const timeDiff = currentTime - pastTIme;

        const intervals = [
        { unit: "day", seconds: 86400 },
        { unit: "hour", seconds: 3600 },
        { unit: "minute", seconds: 60 },
        { unit: "second", seconds: 1 },
        ];

        for (const interval of intervals) {
        const count = Math.floor(timeDiff / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.unit}${count > 1 ? "'s" : ""} ago`;
        }
        }

        return "just now";
    }


    return (
        <Wrapper pageTitle="notification">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Notifications</p>
                <Link to="" className="text-sm text-blue-600">Mark all as read</Link>
            </div>
            <div className="mt-1 bg-white rounded-md p-1 shadow-md">
                <div className="results-selects">
                    <input type="radio" name="type" id="all" value="all" defaultChecked onChange={(e) => setActiveType(e.target.value)} />
                    <label htmlFor="all">All Notification</label>
                    <input type="radio" name="type" id="system" value="system" onChange={(e) => setActiveType(e.target.value)} />
                    <label htmlFor="system">System</label>
                    <input type="radio" name="type" id="uploads" value="uploads" onChange={(e) => setActiveType(e.target.value)}/>
                    <label htmlFor="uploads">Uploads</label>
                    <input type="radio" name="type" id="error" value="error" onChange={(e) => setActiveType(e.target.value)}/>
                    <label htmlFor="error">Error</label>
                </div>
                <div className="mt-1">
                    <div className="">
                        <div className="grid gap-2 text-gray-600">
                            {currentNotice.length > 0 ? (
                                currentNotice.map((item) => {
                                    let bg = "";
                                    let message = "";
                                    if(item.read){
                                        message = ""
                                    }else{
                                        message = "bg-blue-50"
                                    }
                                    
                                    if(item.status === "system"){
                                        bg = "bg-gray-200 rounded-full text-xs text-gray-600";
                                    }else if(item.status === "uploads"){
                                        bg = "bg-blue-200 rounded-full text-xs text-blue-600"
                                    }else{
                                        bg = "bg-red-200 rounded-full text-xs text-red-600";
                                    }
                                    return (
                                        <div className={`flex items-start justify-between rounded-md border border-gray-200 ${message}`} style={{padding: "25px 15px"}}>
                                            <div className="flex items-start gap-2">
                                                <div className="">
                                                    <FontAwesomeIcon className={bg} icon={faExclamationCircle} />
                                                </div>
                                                <div className="">
                                                    <p className="text-sm font-bold">{item.title}</p>
                                                    <p className="text-xs">{item.message}</p>
                                                    <div className="text-xs mt-1">
                                                        <span className={bg} style={{padding: "3px 6px"}}>{item.status}</span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex h-full flex-col justify-between">
                                                <div className="text-xs flex gap-4 items-center">
                                                    <span>{timeAgo(item.date)}</span>
                                                    <button className="text-gray-400 cursor-pointer">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                                <div className="text-xs flex items-center justify-end text-blue-600 gap-5">
                                                    <div className="flex gap-4">
                                                        {!item.read ? 
                                                            <Link to="">mark as read</Link>
                                                            :
                                                            null
                                                        }
                                                        <Link to="">view</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            )})
                                            ) : (
                                    <div className="text-center py-5 text-sm text-gray-500"
                                        style={{padding: "5px"}}
                                    >
                                        You have no notifications at the moment.
                                    </div>
                            )}
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                            <div className="text-xs text-gray-600">
                                 Showing{" "}
                                {visibleNotification.length === 0 ? 0 : offset + 1}
                                {" "}to{" "}
                                {Math.min(offset + itemsPerPage, visibleNotification.length)}
                                {" "}of{" "}
                                {visibleNotification.length} notifications
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

export default Notification;