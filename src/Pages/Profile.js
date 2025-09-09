import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:1000/profile", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container my-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-5 d-flex justify-content-center">
        <div
          className="card shadow-lg p-4"
          style={{ maxWidth: "600px", width: "100%", borderRadius: "20px" }}
        >
          {/* Profile Header */}
          <div className="text-center mb-4">
            <img
              src="55816.jpg"
              alt="Profile Avatar"
              className="rounded-circle mb-3 shadow"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <h3 className="fw-bold">{user.user_name}</h3>
            <p className="text-muted mb-0">{user.user_email}</p>
            <p className="text-muted">{user.user_mobile}</p>
          </div>

          <hr />

          {/* Profile Details */}
          <h5 className="mb-3">Account Information</h5>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <strong>Full Name:</strong> {user.user_name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {user.user_email}
            </li>
            <li className="list-group-item">
              <strong>Mobile:</strong> {user.user_mobile}
            </li>
          </ul>

          {/* Buttons */}
         <div className="d-flex gap-3">
          <Link to="/editprofile" className="btn btn-primary w-50 text-white">
            Edit Profile
          </Link>

          <button
            className="btn btn-danger w-50"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
