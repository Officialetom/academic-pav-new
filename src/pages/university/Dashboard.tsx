import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import { faBarChart, faCircle, faClipboardCheck, faUpload, faUserPlus, faUsers, faWarning } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Dashboard(){
    // for activity log
    const activities = [
        {
            id:1,
            title: "Uploaded results for CSC 301",
            user: "Admin",
            time: "2026-5-05 11:23:45"
        },
        {
            id:2,
            title: "Created Role: Result Manager",
            user: "Admin",
            time: "2026-4-15 04:23:45"
        },
        {
            id:3,
            title: "Approved Admission list for engineering",
            user: "John Okoi",
            time: "2026-4-15 09:23:45"
        },

    ];

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
        <Wrapper pageTitle="dashboard">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Dashboard</p>
                <span className="text-gray-400 text-sm">last updated: 6/6/2025</span>
            </div>
            <div className="grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-4 mt-1">
                <div className="p-1 shadow-md rounded-md bg-white">
                    <div className="flex items-end justify-between mb-1">
                        <span className="text-sm text-gray-500 font-bold">Total Students</span>
                        <FontAwesomeIcon icon={faUsers} className="text-blue-600" />
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="font-bold text-3xl">5,240</span>
                        <span className="text-sm text-green-600">+12%</span>
                    </div>
                </div>
                <div className="p-1 shadow-md rounded-md bg-white">
                    <div className="flex items-end justify-between mb-1">
                        <span className="text-sm text-gray-500 font-bold">Results Processed</span>
                        <FontAwesomeIcon icon={faClipboardCheck} className="text-green-600" />
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="font-bold text-3xl">12,240</span>
                        <span className="text-sm text-green-600">+5%</span>
                    </div>
                </div>
                <div className="p-1 shadow-md rounded-md bg-white">
                    <div className="flex items-end justify-between mb-1">
                        <span className="text-sm text-gray-500 font-bold">New Admissions</span>
                        <FontAwesomeIcon icon={faUserPlus} className="text-purple-600" />
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="font-bold text-3xl">840</span>
                        <span className="text-sm text-green-600">+5%</span>
                    </div>
                </div>
                <div className="p-1 shadow-md rounded-md bg-white">
                    <div className="flex items-end justify-between mb-1">
                        <span className="text-sm text-gray-500 font-bold">Pending Actions</span>
                        <FontAwesomeIcon icon={faWarning} className="text-red-600" />
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="font-bold text-3xl">18</span>
                        <span className="text-sm text-gray-600">+2</span>
                    </div>
                </div>
            </div>
            <div className="mt-1 grid gap-4 grid-col-1 md:grid-cols-5">
                <div className="shadow-md rounded-md bg-white md:col-span-3">
                    <div className="p-1 border-b-1 border-gray-400">
                        <p className="text-sm text-gray-500 font-bold">Recent Activities</p>
                    </div>
                    <div className="p-1">
                        {activities.map((item) => {
                            return (
                                <div key={item.id} className="border-b-1 border-gray-300 flex gap-2 items-center" style={{padding: "5px 0"}}>
                                    <div className="bg-blue-100 w-10 h-10 flex items-center justify-center text-blue-600 rounded-full">
                                        <FontAwesomeIcon icon={faBarChart} />
                                    </div>
                                    <div className="grid gap-2">
                                        <p className="text-sm">{item.title}</p>
                                        <p className="text-gray-500 text-xs flex items-center gap-2">
                                            <span>{item.user}</span>
                                            <FontAwesomeIcon icon={faCircle} style={{width: '4px'}} />
                                            <span>{timeAgo(item.time)}</span>
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="shadow-md rounded-md bg-white md:col-span-2 h-fit">
                    <div className="p-1 border-b-1 border-gray-400">
                        <p className="text-sm text-gray-500 font-bold">Quick Actions</p>
                    </div>
                    <div className="p-1 flex flex-col gap-2">
                        <Link to="" style={{padding: "15px 10px"}} className="bg-gray-50 rounded-md flex items-center gap-3">
                            <div className="bg-blue-100 text-blue-600 w-9 h-9 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faUpload} />
                            </div>
                            <div className="">
                                <p className="text-sm font-bold">Upload Results</p>
                                <p className="text-xs text-gray-500">upload new exam results</p>
                            </div>
                        </Link>
                        <Link to="" style={{padding: "15px 10px"}} className="bg-gray-50 rounded-md flex items-center gap-3">
                            <div className="bg-green-100 text-green-600 w-9 h-9 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faUserPlus} />
                            </div>
                            <div className="">
                                <p className="text-sm font-bold">Upload Admissions</p>
                                <p className="text-xs text-gray-500">process new admissions</p>
                            </div>
                        </Link>
                        <Link to="/university/students" style={{padding: "15px 10px"}} className="bg-gray-50 rounded-md flex items-center gap-3">
                            <div className="bg-purple-100 text-purple-600 w-9 h-9 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div className="">
                                <p className="text-sm font-bold">Manage Students</p>
                                <p className="text-xs text-gray-500">view and edit student records</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Dashboard;