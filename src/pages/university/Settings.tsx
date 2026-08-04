import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import { faBell, faKey, faSignOut, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Settings(){
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
            <div className="mt-1 grid grid-col-1 md:grid-cols-3 gap-2">
                <div className="bg-white rounded-md shadow p-1 text-gray-600">
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
                            <Link to="" className="flex items-center bg-blue-50 text-blue-400 gap-2 rounded-md capitalize" style={{padding: "8px"}}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>profile information</span>
                            </Link>
                            <Link to="" className="flex items-center gap-2 capitalize rounded-md hover:text-blue-400 hover:bg-blue-50" style={{padding: "8px"}}>
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
                    <div className="bg-white rounded-md shadow p-1"></div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Settings;