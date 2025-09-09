import { useState } from "react";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [user_name, setUsername] = useState("");
  const [user_mobile, setUserMobile] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const navigate = useNavigate(); // ✅ fixed

    const handleSignUp = (e) => {
      e.preventDefault();
      axios.post("http://localhost:1000/create_account", {
        user_name,
        user_email,
        user_mobile,
        user_password
      })
      .then(res => {
        alert(res.data.message);
        // Optional: redirect to login page
        navigate("/login");
      })
      .catch(err => {
        console.error(err);
        alert("Sign Up failed");
      });
    };
  

  return (
    <>
      <Navbar />
      <div className="container my-5 d-flex justify-content-center">
        <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%", borderRadius: "15px" }}>
          <h2 className="mb-4 text-center">Create Account</h2>
          <form onSubmit={handleSignUp} autoComplete="on">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Enter Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={user_name}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Enter Mobile</label>
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

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Enter Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={user_email}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Enter Password</label>
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

            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateAccount;
