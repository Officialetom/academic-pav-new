import logo from "../assets/logo.jpg";
import admin_logo from "../assets/6.png";

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
            <a href="/signin-student">
              <img src={admin_logo} alt="signin_icon" />
              <span>Student</span>
            </a>
            <a href="/signin-uni">
              <img src={admin_logo} alt="signin_icon" />
              <span>university</span>
            </a>
            <a href="/signin-guest">
              <img src={admin_logo} alt="signin_icon" />
              <span>guests</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
