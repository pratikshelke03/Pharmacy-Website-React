import React, { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
  axios
    .get("http://localhost:1000/personal_info") // single object
    .then((res) => {
      if (res.data) {           // check for object
        setInfo(res.data);      // set data directly
      }
    })
    .catch((err) => console.error(err));
}, []);


  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">💊 MyPharmacy</h5>
            <p>
              Your trusted partner for genuine medicines and healthcare
              products. Fast delivery and secure payments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              {["Home", "Medicines", "Cart", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-light text-decoration-none"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            {info ? (
              <>
                <p className="mb-1">
                  <i className="bi bi-telephone-fill me-2"></i> {info.phone}
                </p>
                <p className="mb-1">
                  <i className="bi bi-envelope-fill me-2"></i> {info.email}
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i> {info.address}
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Follow Us</h6>
            {info ? (
              <div className="d-flex gap-2 mt-2">
                {[
                  { icon: "bi-facebook", link: info.facebook, color: "primary" },
                  { icon: "bi-whatsapp", link: info.whatsapp, color: "success" },
                  { icon: "bi-instagram", link: info.instagram, color: "danger" },
                  { icon: "bi-linkedin", link: info.linkedin, color: "light" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn btn-outline-${social.color} btn-sm rounded-circle`}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            ) : (
              <p>Loading social links...</p>
            )}
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          Create By Shelke Pratik Rangnath
        </p>
      </div>
    </footer>
  );
}

export default Footer;
