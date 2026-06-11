import Wrapper from "./components/wrapper";

function Student(){
    return (
        <Wrapper pageTitle="students">
            <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Student</p>
                <span className="text-gray-400 text-sm">last updated: 6/6/2025</span>
            </div>
        </Wrapper>
    )
}

export default Student;