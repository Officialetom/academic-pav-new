import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";
import SignIn from "./pages/SignIn";
import UniSign from "./pages/UniSign";
import StudSign from "./pages/StudSign";
import GuestSign from "./pages/GuestSign";
import Otp from "./pages/otp";
import ResetPass from "./pages/ResetPass";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin-uni" element={<UniSign />} />
        <Route path="/signin-student" element={<StudSign />} />
        <Route path="/signin-guest" element={<GuestSign />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
