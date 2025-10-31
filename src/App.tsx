import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Dashboard from "./pages/student/dashboard";
import News from "./pages/student/News";
import Scholars from "./pages/student/Scholars";
import Results from "./pages/student/Results";
import Profile from "./pages/student/Profile";
import Resources from "./pages/student/Resources";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
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
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/dashboard/news" element={<News />} />
        <Route path="/student/dashboard/scholars" element={<Scholars />} />
        <Route path="/student/dashboard/results" element={<Results />} />
        <Route path="/student/dashboard/profile" element={<Profile />} />
        <Route path="/student/dashboard/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
