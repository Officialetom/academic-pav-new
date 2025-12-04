import logo from "../assets/logo.jpg";

function ForgotPage() {
  return (
    <div className="sign-uni">
      <div className="sign-forgot-container">
        <div className="sign-uni-item">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="sign-uni-item">
          <h4>forgot password</h4>
          <form action="#">
            <div className="form-control">
              <label htmlFor="uni-email">Email</label>
              <input type="email" name="uni-email" id="uni-email" />
            </div>
            <button type="submit">send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
