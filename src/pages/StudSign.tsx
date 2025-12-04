import logo from "../assets/logo.jpg";
import { useState } from "react";
import eye from "../assets/eye.svg";
import { Link } from "react-router-dom";

function StudSign() {
  const universityName = [
    "University of Calabar",
    "University of Lagos",
    "University of Ibadan",
    "University of Jos",
    "University of Ilorin",
    "University of Benue",
    "University of Kaduna",
    "University of Jos",
    "University of Abuja",
    "University of Cross River",
  ];

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [visible, setVisible] = useState(false);

  const filteredOptions = universityName.filter((uniName) =>
    uniName.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="sign-uni">
      <div className="sign-student-container">
        <div className="sign-uni-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="sign-uni-item">
          <h4>student sign in</h4>
          <form action="#">
            <div className="form-control">
              <label htmlFor="uni-name">University Name</label>
              <input
                type="text"
                name="uni-name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {isFocused && filteredOptions.length > 0 && (
                <div className="dropdown">
                  {filteredOptions.map((uniName, index) => (
                    <div
                      key={index}
                      onMouseDown={() => setInputValue(uniName)}
                      className="option"
                    >
                      {uniName}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="uni-accr_number">Accredition Number</label>
              <input type="text" name="uni-accr_number" id="uni-accr_number" />
            </div>
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
              <Link to="/forgot">forgot password?</Link>
            </div>
            <button type="submit">sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudSign;
