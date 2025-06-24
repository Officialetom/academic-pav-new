import logo from "../assets/logo.jpg";
import admin_logo from "../assets/6.png";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin-container">
        <div className="signin-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="signin-item">
          <h3>select user type</h3>
          <div className="signin-inner">
            <Link to="/signin-student">
              <img src={admin_logo} alt="signin_icon" />
              <span>Student</span>
            </Link>
            <Link to="/signin-uni">
              <img src={admin_logo} alt="signin_icon" />
              <span>university</span>
            </Link>
            <Link to="/signin-guest">
              <img src={admin_logo} alt="signin_icon" />
              <span>guests</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
