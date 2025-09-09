import { useState } from "react";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user_mobile, setUserMobile] = useState("");
  const [user_password, setUserPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
        axios.post("http://localhost:1000/login", { user_mobile, user_password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate("/medicines");
      });

    }


  return (
    <>
      <Navbar />
      <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
        <div className="card shadow-lg p-5" style={{ maxWidth: "450px", width: "100%", borderRadius: "20px", backgroundColor: "#ffffff" }}>
          <h2 className="mb-4 text-center fw-bold">Login</h2>

          {errorMsg && <div className="alert alert-danger text-center">{errorMsg}</div>}

          <form onSubmit={handleLogin} autoComplete="on">
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label fw-semibold">Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                value={user_mobile}
                onChange={(e) => setUserMobile(e.target.value)}
                required
                autoComplete="tel"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={user_password}
                onChange={(e) => setUserPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3">
            Don't have an account? <a href="/create_account">Register here</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
