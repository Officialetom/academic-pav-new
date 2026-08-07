
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import eye from "../../assets/eye.svg";
import { Link, useNavigate } from "react-router-dom";

function AdminSign() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.academicpavilion.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      console.log(data);

      // Save token if returned
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect
      navigate("/super/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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

            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSign;
