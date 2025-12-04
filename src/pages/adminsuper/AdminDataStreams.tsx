import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/datastreams.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Levels from "./components/levels";
import { faBarChart, faBookOpen, faCircle, faDollarSign, faDotCircle, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AdminDataStreams(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [isResearchOn, setIsResearchOn] = useState(false);
    const [isExamOn, setIsExamOn] = useState(false);
    const [isFinanceOn, setIsFinanceOn] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    const streamData = {
            health: 99.8,
            active_endpoints: 12,
            total_endpoints: 15,
            response_time: 285,
        }

        let health_bg = "";
        let endpoint_bg = "";
        let endpoint_num = (streamData.active_endpoints/streamData.total_endpoints)*100;
        let response_bg = "";
        let response_num = 0;

        if(streamData.health >= 70){
            health_bg = "#16A34A";
        }else if(streamData.health >=60){
            health_bg = "#D97706";
        }else{
            health_bg = "#DC2626";
        }

        if(endpoint_num >= 80){
            endpoint_bg = "#2563EB";
        }else if (endpoint_num >=65){
            endpoint_bg = "#D97706";
        }else{
            endpoint_bg = "#DC2626";
        }

        if(streamData.response_time >= 250){
            response_bg = "#16A34A";
            response_num = 95;
        }else if (streamData.response_time >=150){
            response_bg = "#D97706";
            response_num = 75;
        }else{
            response_bg = "#DC2626";
            response_num = 45;
        }

    

  return (
    <div className="super-dashboard">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="data-streams" />
      <div className="main-content">
        {/* dashboard navbar area */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* dashboard main content area */}
        <div className="content">
          <div className="dash-intro mb-1">
            <h3>Data Streams</h3>
            <p>Monitor and manage data ingestion and pipeline accross the system.</p>
          </div>
          {/* data streams */}
          <div className="streams">
            <div className="dash-card p-s">
                <div className="first">
                    <span>System Health</span>
                    <span style={{color: health_bg}}>Good</span>
                </div>
                <div className="second">
                    <div className="second-inner">
                        <span>overall uptime</span>
                        <span>{streamData.health}%</span>
                    </div>
                    <Levels width={streamData.health} bg={health_bg} />
                </div>
            </div>
            <div className="dash-card p-s">
                <div className="first">
                    <span>Active Endpoints</span>
                    <span style={{color: endpoint_bg}}>{streamData.active_endpoints}/{streamData.total_endpoints}</span>
                </div>
                <div className="second">
                    <div className="second-inner">
                        <span>Endpoint Health</span>
                        <span>{endpoint_num}%</span>
                    </div>
                    <Levels width={endpoint_num} bg={endpoint_bg} />
                </div>
            </div>
            <div className="dash-card p-s">
                <div className="first">
                    <span>Avg Response Time</span>
                    <span style={{color: response_bg}}>{streamData.response_time}ms</span>
                </div>
                <div className="second">
                    <div className="second-inner">
                        <span>Performance</span>
                        <span>Good</span>
                    </div>
                    <Levels width={response_num} bg={response_bg} />
                </div>
            </div>
          </div>
          {/* data streams statuses */}
          <div className="stream-status dash-card mt-1">
            <div className="stream-title p-s">
                <h2>Data Stream Status</h2>
            </div>
            {/* ---------- Admission data section ----------------- */}
            <div className="stream-data p-s">
                <div className="stream-data-one">
                    <div className="s-d-one">
                        <div className="d-o-one">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className="d-o-two">
                            <p>Admission Data</p>
                            <span>125,431 records processed - last sync 2 minutes ago</span>
                        </div>
                    </div>
                    <div className="s-d-two">
                        <span className="text-success"><FontAwesomeIcon icon={faCircle} style={{fontSize: "11px", marginRight: "5px"}} />Active</span>
                        <div className="toggle-active" onClick={()=> setIsOn(!isOn)} style={{backgroundColor: isOn ? "blue" : "#ccc"}}>
                            <div className="toggle" style={{left: isOn ? "26px" : "0"}}></div>
                        </div>
                    </div>
                </div>
                <div className="stream-data-two">
                    <div className="packets">
                        <p>Packet loss</p>
                        <h3>0.02%</h3>
                    </div>
                    <div className="packets">
                        <p>Active Endpoints</p>
                        <h3>3 Active</h3>
                    </div>
                    <div className="packets">
                        <div className="pack">
                            <p>Connection</p>
                            <h3>secure</h3>
                        </div>
                        <Link to="#">Test</Link>
                    </div>
                </div>
            </div>
            <div className="stream-data p-s">
                <div className="stream-data-one">
                    <div className="s-d-one">
                        <div className="d-o-one">
                            <FontAwesomeIcon icon={faBookOpen} />
                        </div>
                        <div className="d-o-two">
                            <p>Exam Data</p>
                            <span>98,745 records processed - last sync 5 minutes ago</span>
                        </div>
                    </div>
                    <div className="s-d-two">
                        <span className="text-success"><FontAwesomeIcon icon={faCircle} style={{fontSize: "11px", marginRight: "5px"}} />Active</span>
                        <div className="toggle-active" onClick={()=> setIsExamOn(!isExamOn)} style={{backgroundColor: isExamOn ? "blue" : "#ccc"}}>
                            <div className="toggle" style={{left: isExamOn ? "26px" : "0"}}></div>
                        </div>
                    </div>
                </div>
                <div className="stream-data-two">
                    <div className="packets">
                        <p>Packet loss</p>
                        <h3>0.01%</h3>
                    </div>
                    <div className="packets">
                        <p>Active Endpoints</p>
                        <h3>5 Active</h3>
                    </div>
                    <div className="packets">
                        <div className="pack">
                            <p>Connection</p>
                            <h3>secure</h3>
                        </div>
                        <Link to="#">Test</Link>
                    </div>
                </div>
            </div>
            <div className="stream-data p-s">
                <div className="stream-data-one">
                    <div className="s-d-one">
                        <div className="d-o-one">
                            <FontAwesomeIcon icon={faDollarSign} />
                        </div>
                        <div className="d-o-two">
                            <p>Finance Data</p>
                            <span>76,321 records processed - last sync 5 minutes ago</span>
                        </div>
                    </div>
                    <div className="s-d-two">
                        <span className="text-warning"><FontAwesomeIcon icon={faCircle} style={{fontSize: "11px", marginRight: "5px"}} />warning</span>
                        <div className="toggle-active" onClick={()=> setIsFinanceOn(!isFinanceOn)} style={{backgroundColor: isFinanceOn ? "blue" : "#ccc"}}>
                            <div className="toggle" style={{left: isFinanceOn ? "26px" : "0"}}></div>
                        </div>
                    </div>
                </div>
                <div className="stream-data-two">
                    <div className="packets">
                        <p>Packet loss</p>
                        <h3>1.25%</h3>
                    </div>
                    <div className="packets">
                        <p>Active Endpoints</p>
                        <h3>4 Active</h3>
                    </div>
                    <div className="packets">
                        <div className="pack">
                            <p>Connection</p>
                            <h3>secure</h3>
                        </div>
                        <Link to="#">Test</Link>
                    </div>
                </div>
            </div>
            <div className="stream-data p-s">
                <div className="stream-data-one">
                    <div className="s-d-one">
                        <div className="d-o-one">
                            <FontAwesomeIcon icon={faBarChart} />
                        </div>
                        <div className="d-o-two">
                            <p>Research Data</p>
                            <span>54,876 records processed - last sync 3 hours ago</span>
                        </div>
                    </div>
                    <div className="s-d-two">
                        <span className="text-danger"><FontAwesomeIcon icon={faCircle} style={{fontSize: "11px", marginRight: "5px"}} />Inactive</span>
                        <div className="toggle-active" onClick={()=> setIsResearchOn(!isResearchOn)} style={{backgroundColor: isResearchOn ? "blue" : "#ccc"}}>
                            <div className="toggle" style={{left: isResearchOn ? "26px" : "0"}}></div>
                        </div>
                    </div>
                </div>
                <div className="stream-data-two">
                    <div className="packets">
                        <p>Packet loss</p>
                        <h3>5.42%</h3>
                    </div>
                    <div className="packets">
                        <p>Active Endpoints</p>
                        <h3>3 Active</h3>
                    </div>
                    <div className="packets">
                        <div className="pack">
                            <p>Connection</p>
                            <h3>secure</h3>
                        </div>
                        <Link to="#">Test</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default AdminDataStreams;