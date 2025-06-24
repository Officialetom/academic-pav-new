import logo from "../assets/logo.jpg";
import { useState } from "react";
import eye from "../assets/eye.svg";

function GuestSign() {
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
          <h4>guest/parent sign in</h4>
          <form action="#">
            <div className="form-control">
              <label htmlFor="uni-email">Email</label>
              <input type="email" name="uni-email" id="uni-email" />
            </div>
            <div className="form-control">
              <label htmlFor="uni-password ">Password</label>
              <img
                src={eye}
                onClick={() => setVisible(!visible)}
                alt="visible_icon"
                className="password_reveal"
              />
              <input
                type={visible ? "text" : "password"}
                name="uni-password"
                id="uni-password"
              />
              <a href="/forgot">forgot password?</a>
            </div>
            <button type="submit">sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GuestSign;
