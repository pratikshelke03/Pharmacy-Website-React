import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // make sure to import

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
         <i className="bi bi-capsule fs-3 me-2"></i>
          WellCare Pharmacy
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/medicines"}>Medicines</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <div className="d-flex ms-3">
            {isLoggedIn ? (
              <>
                <Link to="/cart" className="btn btn-outline-light me-2">Cart</Link>
                <Link to="/profile" className="btn btn-warning me-2">Profile</Link>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                <Link to="/create_account" className="btn btn-warning">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
