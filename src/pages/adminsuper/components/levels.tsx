import "../styles/datastreams.css";

interface props {
    width: number;
    bg: string;
}

function Levels({width, bg}: props){
    return(
        <div className="levels">
            <div className="level-bar" style={{backgroundColor: bg, width: width+"%" }}></div>
        </div>
    )

}

export default Levels;