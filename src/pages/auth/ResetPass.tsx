import logo from "../../assets/logo.jpg";

function ResetPass() {
  return (
    <div className="sign-uni">
      <div className="sign-forgot-container">
        <div className="sign-uni-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="sign-uni-item">
          <h4>reset password</h4>
          <form action="#">
            <div className="form-control">
              <label htmlFor="reset-pass">Password</label>
              <input type="text" name="reset-pass" id="reset-pass" />
            </div>
            <div className="form-control">
              <label htmlFor="reset-confirm">Confirm Password</label>
              <input type="text" name="reset-confirm" id="reset-confirm" />
            </div>
            <button type="submit">proceed</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
