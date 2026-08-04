import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function UploadAdmission(){
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
            name: "Physics",
        },
        {
            id: 4,
            name: "Cyber Security",
        },
    ];


    const sessions = ['2019/2020', '2020/2021', '2021/2022', '2022/2023', '2023/2024', '2024/2025'];
    return (
        <Wrapper pageTitle="uploads">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Upload Admission List</p>
            </div>
            <div className="mt-1 bg-white rounded-md shadow p-1">
                <form action="">
                    <p className="text-sm">Upload Settings</p>
                    <div className="mt-1 border-b-1 border-gray-200" style={{padding: "0 0 30px 0"}}>
                        <div className=" grid grid-col-1 md:grid-cols-2 gap-5">
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs text-blue-900">Academic Session</span>
                                <select name="level" id="level" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required>
                                    <option value="" hidden>Select Session</option>
                                    {sessions.map((item) => (
                                        <option value={item} key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs text-blue-900">Department</span>
                                <select name="department" id="department" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required>
                                    <option value="" hidden>Select Department</option>
                                    {departments.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1 rounded-md border border-dashed border-gray-300 p-1 text-xs flex gap-2 items-center justify-center">
                        <FontAwesomeIcon icon={faUpload} className="text-gray-600" style={{fontSize: "30px"}} />
                        <span className="text-blue-600">upload file</span>
                        <span>or drag and drop, CSV or Excel file only.</span>
                    </div>
                    <div className="upload-form flex gap-1 mt-1 justify-end">
                        <div className="cancel">
                            <button type="button">
                                Cancel
                            </button>
                        </div>
                        <div className="submit">
                            <button type="submit">
                                <FontAwesomeIcon icon={faUpload} />
                                Upload Results
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default UploadAdmission;