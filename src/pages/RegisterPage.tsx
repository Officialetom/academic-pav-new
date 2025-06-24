import Button from "../components/Button";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="login-div">
      <Button href="/" name="Home" class_name="button-dark" />
      <div className="login-container">
        <div className="login-item">
          <h5>Sign up E</h5>
          <img src={logo} alt="login-logo" />
        </div>
        <div className="login-item">
          <img src={logo} alt="login-logo" />
          <h4>Sign up</h4>
          <form action="" className="login-form">
            <input
              type="text"
              name="uni_name"
              id="uni_name"
              placeholder="University name"
            />
            <input
              type="text"
              name="acc_num"
              id="acc_num"
              placeholder="Accreditation Number"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Official email"
            />
            <input
              type="text"
              name="web_link"
              id="web_link"
              placeholder="Website Link"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Confirm Password"
            />
            <button type="submit" name="register">
              Register
            </button>
          </form>
          <div className="form-links">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <span>Copyright @ Academic Pavilion</span>
    </div>
  );
}

export default RegisterPage;
