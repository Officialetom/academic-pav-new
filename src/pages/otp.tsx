import logo from "../assets/logo.jpg";

function Otp() {
  return (
    <div className="sign-uni">
      <div className="sign-forgot-container">
        <div className="sign-uni-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="sign-uni-item">
          <h4>Otp verification</h4>
          <form action="#">
            <div className="form-control">
              <label htmlFor="uni-email">Code</label>
              <input type="text" name="otp-code" id="otp-code" />
            </div>
            <button type="submit">proceed</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;
