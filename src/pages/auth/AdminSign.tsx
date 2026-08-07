
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import eye from "../../assets/eye.svg";
import { Link, useNavigate } from "react-router-dom";

function AdminSign() {

  const [visible, setVisible] = useState(false);

  return (
    <div className="sign-uni">
      <div className="sign-guest-container">
        <div className="sign-uni-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="sign-uni-item">
          <h4>Admin Login</h4>

          <form >
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
              />
            </div>

            <div className="form-control">
              <label>Password</label>

              <img
                src={eye}
                onClick={() => setVisible(!visible)}
                alt="visible_icon"
                className="password_reveal"
              />

              <input
                type={visible ? "text" : "password"}
                name="password"
                required
              />

              <div
                className="flex justify-between"
                style={{ marginTop: "10px" }}
              >
                <Link to="/auth">Back</Link>
                <Link to="/forgot">Forgot password?</Link>
              </div>
            </div>

            <button type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSign;
