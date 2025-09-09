import React from "react";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function About() {
  return (
    <>
      <Navbar />
        {/* Header */}
        <div className="text-center mb-5 my-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="text-muted">
            Who we are & what we do
          </p>
        </div>


      {/* About Content */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-md-6 mb-4">
            <img
              src="https://deshbhagatuniversity.in/wp-content/uploads/2025/05/Diploma-in-Pharmacy.webp"
              alt="About Us"
              className="img-fluid rounded-3 shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">Our Story</h2>
            <p className="text-muted">
              Welcome to our platform! We are committed to providing the best products
              and services to our customers. Our mission is to make shopping easier,
              faster, and more reliable.
            </p>
            <p className="text-muted">
              With a dedicated team and modern technology, we aim to deliver outstanding
              experiences. Your trust and satisfaction are our top priorities.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="row text-center my-5">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4 h-100">
              <i className="bi bi-bullseye display-4 text-primary mb-3"></i>
              <h4 className="fw-bold">Our Mission</h4>
              <p className="text-muted">
                To provide high-quality products with excellent customer service at
                affordable prices.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4 h-100">
              <i className="bi bi-eye display-4 text-success mb-3"></i>
              <h4 className="fw-bold">Our Vision</h4>
              <p className="text-muted">
                To become a trusted brand that makes a difference in people’s daily
                lives worldwide.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg p-4 h-100">
              <i className="bi bi-heart display-4 text-danger mb-3"></i>
              <h4 className="fw-bold">Our Values</h4>
              <p className="text-muted">
                Integrity, innovation, and customer satisfaction are at the core of
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
