import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "./components/Wrapper";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function UploadResult(){
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

    const course = [
        {
            id: 1,
            name: "Introduction to Computer",
        },
        {
            id: 2,
            name: "Computer Laboratory 1 A",
        },
        {
            id: 3,
            name: "Project Management",
        },
        {
            id: 4,
            name: "Intro to Algorithm 1",
        },
    ];

    const level = ['100', '200', '300', '400', '500', '600'];
    return (
        <Wrapper pageTitle="uploads">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Upload Result</p>
            </div>
            <div className="mt-1 bg-white rounded-md shadow p-1">
                <form action="">
                    <p className="text-sm">Upload Settings</p>
                    <div className="mt-1 border-b-1 border-gray-200" style={{padding: "0 0 30px 0"}}>
                        <div className=" grid grid-col-1 md:grid-cols-2 gap-5">
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs text-blue-900">Upload Type</span>
                                <div className="flex text-sm gap-2 items-center">
                                    <label>
                                        <input type="radio" name="type" id="realtime" value="pending" defaultChecked required />
                                        Real-time Results
                                    </label>
                                    <label>
                                        <input type="radio" name="type" id="realtime" value="approved" required />
                                        Senate Approved Results
                                    </label>
                                </div>
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
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs text-blue-900">Course</span>
                                <select name="course" id="course" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required>
                                    <option value="" hidden>Select Course</option>
                                    {course.map((item) => (
                                        <option value={item.name} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid gap-1 text-sm">
                                <span className="text-xs text-blue-900">Level</span>
                                <select name="level" id="level" className="rounded-md border-1 border-gray-300" style={{padding: "8px"}} required>
                                    <option value="" hidden>Select Level</option>
                                    {level.map((item) => (
                                        <option value={item} key={item}>{item} Level</option>
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

export default UploadResult;