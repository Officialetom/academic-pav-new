import Button from "../components/Button";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login-div">
      <Button href="/" name="Home" class_name="button-light" />
      <div className="login-container">
        <div className="login-item">
          <h5>Login</h5>
          <img src={logo} alt="login-logo" />
        </div>
        <div className="login-item">
          <img src={logo} alt="login-logo" />
          <h4>Login</h4>
          <form action="" className="login-form">
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="login-radios">
              <div className="login-radios-inner">
                <input
                  type="radio"
                  name="desig"
                  id="university"
                  value="university"
                />
                <label htmlFor="university">University</label>
              </div>
              <div className="login-radios-inner">
                <input type="radio" name="desig" id="student" value="student" />
                <label htmlFor="student">Student</label>
              </div>
              <div className="login-radios-inner">
                <input type="radio" name="desig" id="parent" value="parent" />
                <label htmlFor="parent">Parent</label>
              </div>
            </div>
            <button type="submit" name="login">
              Login
            </button>
          </form>
          <div className="form-links">
            <Link to="/register">Sign up</Link>
            <Link to="/forgot">Forgot password?</Link>
          </div>
        </div>
      </div>
      <span>Copyright @ Academic Pavilion</span>
    </div>
  );
}

export default LoginPage;
