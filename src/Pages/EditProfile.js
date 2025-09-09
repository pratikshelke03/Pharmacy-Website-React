import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_mobile: "",
    user_password: "",
  });
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:1000/update_profile", user, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
        alert("Update failed!");
      });
  };

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
          <h2 className="mb-4 text-center">Edit Profile</h2>

          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={user.user_name}
                onChange={(e) => setUser({ ...user, user_name: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                value={user.user_mobile}
                pattern="[0-9]{10}"
                onChange={(e) =>
                  setUser({ ...user, user_mobile: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={user.user_email}
                onChange={(e) => setUser({ ...user, user_email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Leave blank to keep old password"
                onChange={(e) =>
                  setUser({ ...user, user_password: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditProfile;
