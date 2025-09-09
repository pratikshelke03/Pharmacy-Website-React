import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1000/personal_info") // single object
      .then((res) => {
        if (res.data) {           // check for object
          setData(res.data);      // set data directly
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Have questions? We’d love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow p-4 rounded-4">
              <h4 className="mb-4">Send us a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-5">
            {data ? (
              <div className="card shadow p-4 rounded-4">
                <h4 className="mb-4">Get in Touch</h4>
                <p>
                  <i className="bi bi-telephone-fill me-2"></i> {data.phone}
                </p>
                <p>
                  <i className="bi bi-envelope-fill me-2"></i> {data.email}
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i> {data.address},{" "}
                  {data.city}, {data.state} - {data.zip}
                </p>

                <hr />

                <h5>Follow Us</h5>
                <div className="d-flex gap-3 mt-2">
                  <a
                    href={data.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-circle"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href={data.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info btn-sm rounded-circle"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href={data.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger btn-sm rounded-circle"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark btn-sm rounded-circle"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            ) : (
              <p>Loading contact info...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
