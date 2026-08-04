import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PRELIMINARY
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import ForgotPage from "./pages/auth/ForgotPage";
import SignIn from "./pages/auth/SignIn";
import UniSign from "./pages/auth/UniSign";
import StudSign from "./pages/auth/StudSign";
import GuestSign from "./pages/auth/GuestSign";
import Otp from "./pages/auth/otp";
import ResetPass from "./pages/auth/ResetPass";
import ScrollTop from "./components/ScrollTop";
import NotFound from "./pages/auth/NotFound";
// STUDENT
import Dashboard from "./pages/student/dashboard";
import News from "./pages/student/News";
import Scholars from "./pages/student/Scholars";
import Results from "./pages/student/Results";
import Profile from "./pages/student/Profile";
import Resources from "./pages/student/Resources";
// SUPERADMIN
import AdminDashboard from "./pages/adminsuper/AdminDashboard";
import AdminUniversities from "./pages/adminsuper/AdminUniversities";
import AdminDataStreams from "./pages/adminsuper/AdminDataStreams";
import AdminAnalytics from "./pages/adminsuper/AdminAnalytics";
import AdminRoles from "./pages/adminsuper/AdminRoles";
import AdminRequests from "./pages/adminsuper/AdminRequests";
import ResearchPage from "./pages/adminsuper/ResearchPage";
import ComplaintsPage from "./pages/adminsuper/ComplaintsPage";
import SettingsPage from "./pages/adminsuper/SettingsPage";
// UNIVERSITY
import UniDashboard from "./pages/university/Dashboard";
import UniStudents from "./pages/university/Students";
import UniResults from "./pages/university/Results";
import UniAdmission from "./pages/university/Admission";
import UniNysc from "./pages/university/Nysc";
import UniUploadResult from "./pages/university/UploadResult";
import UniUploadAdmission from "./pages/university/UploadAdmission";
import UniManageRoles from "./pages/university/RolesAndPermissions";
import UniNotification from "./pages/university/Notification";
import UniActivity from "./pages/university/Activity";
import UniSettings from "./pages/university/Settings";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        {/* PRELIMINARY */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/auth/university" element={<UniSign />} />
        <Route path="/auth/student" element={<StudSign />} />
        <Route path="/auth/guest" element={<GuestSign />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/forgot" element={<ForgotPage />} />

        {/* STUDENT */}
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/dashboard/news" element={<News />} />
        <Route path="/student/dashboard/scholars" element={<Scholars />} />
        <Route path="/student/dashboard/results" element={<Results />} />
        <Route path="/student/dashboard/profile" element={<Profile />} />
        <Route path="/student/dashboard/resources" element={<Resources />} />
        {/* SUPERADMIN */}
        <Route path="/super/dashboard" element={<AdminDashboard />} />
        <Route path="/super/dashboard/universities" element={<AdminUniversities />} />
        <Route path="/super/dashboard/datastreams" element={<AdminDataStreams />} />
        <Route path="/super/dashboard/analytics" element={<AdminAnalytics />} />
        <Route path="/super/dashboard/roles" element={<AdminRoles />} />
        <Route path="/super/dashboard/requests" element={<AdminRequests />} />
        <Route path="/super/dashboard/research" element={<ResearchPage />} />
        <Route path="/super/dashboard/complaints" element={<ComplaintsPage />} />
        <Route path="/super/dashboard/settings" element={<SettingsPage />} />
        {/* UNIVERSITY */}
        <Route path="/university/dashboard" element={<UniDashboard />} />
        <Route path="/university/students" element={<UniStudents />} />
        <Route path="/university/results" element={<UniResults />} />
        <Route path="/university/admission" element={<UniAdmission />} />
        <Route path="/university/nysc" element={<UniNysc />} />
        <Route path="/university/uploads/result" element={<UniUploadResult />} />
        <Route path="/university/uploads/admission" element={<UniUploadAdmission />} />
        <Route path="/university/manage-roles" element={<UniManageRoles />} />
        <Route path="/university/notifications" element={<UniNotification />} />
        <Route path="/university/activity-log" element={<UniActivity />} />
        <Route path="/university/settings" element={<UniSettings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
