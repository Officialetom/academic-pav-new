import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import { faBell, faKey, faSave, faSignOut, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

function Settings(){
    const [isEmail, setIsEmail] = useState(false);
    const [isSystem, setIsSystem] = useState(false);
    const [isResult, setIsResult] = useState(false);
    const [isAdmission, setIsAdmission] = useState(false);
    const roles = [
        {
            id: 1,
            name: "Super Admin",
            permissions: ['upload results', 'upload admissions', 'register institution', 'manage institutions'],
            created_by: "System",
            users: 1,
        },
    ]

    return (
        <Wrapper pageTitle="settings">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Settings</p>
            </div>
            <div className="mt-1 grid grid-col-1 md:grid-cols-3 gap-4">
                <div className="md:sticky md:top-20 bg-white h-fit rounded-md shadow p-1 text-gray-600">
                    <div className="border-b-1 border-gray-300 flex items-center flex-col justify-center gap-1" style={{padding: "15px 0"}}>
                        {/* image section */}
                        <div className="w-25 h-25 rounded-full bg-gray-100 text-gray-500 text-2xl flex items-center place-content-center">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <p className="text-sm font-bold">Admin User</p>
                        <p className="text-xs text-gray-400">Super Admin</p>
                    </div>
                    <div className="border-b-1 border-gray-300" style={{padding: "20px 0"}}>
                        <p className="uppercase" style={{marginBottom: "10px"}}>Account</p>
                        <div className="text-sm grid gap-2">
                            <Link to="#profile" className="flex items-center bg-blue-50 text-blue-400 gap-2 rounded-md capitalize" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>profile information</span>
                            </Link>
                            <Link to="#password" className="flex items-center gap-2 capitalize rounded-md hover:text-blue-400 hover:bg-blue-50" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faKey} />
                                <span>change password</span>
                            </Link>
                            <Link to="" className="flex items-center gap-2 capitalize rounded-md hover:text-blue-400 hover:bg-blue-50" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faBell} />
                                <span>notification settings</span>
                            </Link>
                            <Link to="" className="flex items-center gap-2 capitalize rounded-md hover:text-blue-400 hover:bg-blue-50" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faSun} />
                                <span>appearance</span>
                            </Link>
                        </div>
                    </div>
                    <div className="border-b-1 border-gray-300" style={{padding: "13px 0"}}>
                        <Link to="" className="flex items-center text-red-600 text-sm gap-2 capitalize">
                            <FontAwesomeIcon icon={faSignOut} />
                            <span>sign out</span>
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-2">
                    {/* personal information */}
                    <div className="bg-white rounded-md shadow p-1">
                        <p className="text-md"  style={{marginBottom: "15px"}}>Profile Information</p>
                        <div className="grid gap-1 text-sm mb-1">
                            <span className="text-xs text-blue-900">Full name</span>
                            <input type="text" name="level" id="level" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} value="Admin User" required />
                        </div>
                        <div className="grid gap-1 text-sm mb-1">
                            <span className="text-xs text-blue-900">Email address</span>
                            <input type="email" name="level" id="level" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} value="example@gmail.com" readOnly required />
                        </div>
                        <div className="grid gap-1 text-sm mb-1">
                            <span className="text-xs text-blue-900">Phone number</span>
                            <input type="text" name="level" id="level" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} value="09072312388" required />
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="bg-blue-600 rounded-md text-white flex items-center gap-2 text-sm cursor-pointer hover:bg-blue-800 transition-all duration-300" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faSave} />
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>
                    {/* account password */}
                    <div className="bg-white rounded-md shadow p-1 mt-1">
                        <p className="text-md"  style={{marginBottom: "15px"}}>Change Password</p>
                        <div className="grid gap-1 text-sm mb-1">
                            <span className="text-xs text-blue-900">Current Password</span>
                            <input type="password" name="current_password" id="current_password" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required />
                        </div>
                        <div className="grid gap-1 text-sm mb-1">
                            <span className="text-xs text-blue-900">New Password</span>
                            <input type="password" name="password" id="password" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required />
                        </div>
                        <div className="grid gap-1 text-sm mb-1">
                            <span className="text-xs text-blue-900">Confirm Password</span>
                            <input type="password" name="confirm_password" id="confirm_password" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required />
                        </div>
                        <div className="flex items-center justify-end">
                            <button className="bg-blue-600 rounded-md text-white flex items-center gap-2 text-sm cursor-pointer hover:bg-blue-800 transition-all duration-300" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faKey} />
                                <span>Change password</span>
                            </button>
                        </div>
                    </div>
                    {/* notification settings */}
                    <div className="bg-white rounded-md shadow p-1 mt-1">
                        <p className="text-md"  style={{marginBottom: "15px"}}>Notification Settings</p>
                        <div className="flex items-center justify-between mb-1">
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs font-bold">Email Notifications</span>
                                <span className="text-sm text-gray-500">Receive email notifications for important updates</span>
                            </div>
                            <div className="">
                                <div
                                    onClick={() => setIsEmail(!isEmail)}
                                    className={`w-[50px] rounded-full cursor-pointer transition-colors duration-300 ${
                                        isEmail ? "bg-blue-600" : "bg-gray-500"
                                    }`} style={{padding: "4px"}}
                                    >
                                    <div
                                        className={`bg-white rounded-full w-5 h-5 transition-transform duration-300 ${
                                        isEmail ? "translate-x-[22px]" : "translate-x-0"
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs font-bold">System Notifications</span>
                                <span className="text-sm text-gray-500">Receive notifications for system updates and maintenance</span>
                            </div>
                            <div className="">
                                <div
                                    onClick={() => setIsSystem(!isSystem)}
                                    className={`w-[50px] rounded-full cursor-pointer transition-colors duration-300 ${
                                        isSystem ? "bg-blue-600" : "bg-gray-500"
                                    }`} style={{padding: "4px"}}
                                    >
                                    <div
                                        className={`bg-white rounded-full w-5 h-5 transition-transform duration-300 ${
                                        isSystem ? "translate-x-[22px]" : "translate-x-0"
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs font-bold">Result Upload Notifications</span>
                                <span className="text-sm text-gray-500">Get notified when new results are uploaded</span>
                            </div>
                            <div className="">
                                <div
                                    onClick={() => setIsResult(!isResult)}
                                    className={`w-[50px] rounded-full cursor-pointer transition-colors duration-300 ${
                                        isResult ? "bg-blue-600" : "bg-gray-500"
                                    }`} style={{padding: "4px"}}
                                    >
                                    <div
                                        className={`bg-white rounded-full w-5 h-5 transition-transform duration-300 ${
                                        isResult ? "translate-x-[22px]" : "translate-x-0"
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-1">
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs font-bold">Admission Notifications</span>
                                <span className="text-sm text-gray-500">Get notified about admission list uploads</span>
                            </div>
                            <div className="">
                                <div
                                    onClick={() => setIsAdmission(!isAdmission)}
                                    className={`w-[50px] rounded-full cursor-pointer transition-colors duration-300 ${
                                        isAdmission ? "bg-blue-600" : "bg-gray-500"
                                    }`} style={{padding: "4px"}}
                                    >
                                    <div
                                        className={`bg-white rounded-full w-5 h-5 transition-transform duration-300 ${
                                        isAdmission ? "translate-x-[22px]" : "translate-x-0"
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Settings;