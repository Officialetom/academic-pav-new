import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function NotFound() {
  return (
    <div className="sign-uni">
      <div className="sign-forgot-container">
        <div className="sign-uni-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="sign-uni-item">
          <h4>page not found</h4>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
