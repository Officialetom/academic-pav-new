import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/analytics.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Navbar from "./components/Navbar";
import EnrollmentTrend from "./charts/EnrollmentTrend";
import GenderDist from "./charts/GenderDist";
import UniRanking from "./charts/UniRanking";
import PerformanceResource from "./charts/PerformanceResource";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function AdminAnalytics(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    return (
        <div className="super-dashboard">
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} page="analytics" />
        <div className="main-content">
            {/* dashboard navbar area */}
            <Navbar toggleSidebar={toggleSidebar} />
            {/* dashboard main content area */}
            <div className="content">
                <div className="dash-intro mb-1">
                    <h3>Analytics & Insights</h3>
                    <p>Explore trends and patterns across the university ecosystem</p>
                </div>
                <div className="analytics-filter">
                    <div className="a-filter">
                        <select name="" id="">
                            <option value="" selected>Last 12 months</option>
                            <option value="" >1 months</option>
                            <option value="" >1 week</option>
                        </select>
                        <button><FontAwesomeIcon icon={faDownload} />  Export Report</button>
                    </div>
                </div>
                <div className="mt-1 analytics">
                    <div className="dash-card p-1">
                        <h4>Enrollment Rate Trends</h4>
                        <EnrollmentTrend />
                    </div>
                    <div className="dash-card p-1">
                        <h4>Gender Distribution</h4>
                        <GenderDist />
                    </div>
                    <div className="dash-card p-1">
                        <h4>University Ranking Metrics</h4>
                        <UniRanking />
                    </div>
                    <div className="dash-card p-1">
                        <h4>Performance vs Resource Ratio</h4>
                        <PerformanceResource />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default AdminAnalytics;