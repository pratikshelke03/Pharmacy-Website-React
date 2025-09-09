import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          minHeight: "70vh",
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://d1hdtc0tbqeghx.cloudfront.net/wp-content/uploads/2024/04/16131251/Best-Pharmacy-Website-Designs-1536x792.jpg') center/cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height:"100%",
          
        }}
      >
        <div className="container text-white">
          <h1 className="fw-bold display-4 animate__animated animate__fadeInDown">
            Welcome to WellCare Pharmacy
          </h1>
          <p className="lead animate__animated animate__fadeInUp">
            Your trusted online pharmacy for health & wellness
          </p>
          <a href="/medicines" className="btn btn-lg btn-primary mt-3 shadow">
            Shop Now
          </a>
        </div>
      </section>


      {/* Categories / Services */}
      <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Our Services</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded hover-effect">
              <i className="bi bi-capsule fs-1 text-primary"></i>
              <h5 className="mt-3">Medicines</h5>
              <p>Order prescription & OTC medicines online at best prices.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded hover-effect">
              <i className="bi bi-heart-pulse fs-1 text-danger"></i>
              <h5 className="mt-3">Healthcare</h5>
              <p>Wide range of healthcare products & wellness essentials.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded hover-effect">
              <i className="bi bi-truck fs-1 text-success"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>Quick, safe and doorstep delivery of your products.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">What Our Customers Say</h2>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <p className="lead">"Fast delivery and genuine medicines!"</p>
              <h6>- Ajay W.</h6>
            </div>
            <div className="carousel-item text-center">
              <p className="lead">"Great discounts on health products."</p>
              <h6>- Sneha P.</h6>
            </div>
            <div className="carousel-item text-center">
              <p className="lead">"Customer support is very helpful."</p>
              <h6>- Ajay M.</h6>
            </div>
          </div>
          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h3 className="fw-bold">Subscribe to Our Newsletter</h3>
          <p>Get updates about new products & exclusive offers</p>
          <div className="d-flex justify-content-center mt-3">
            <input
              type="email"
              className="form-control w-50 rounded-pill me-2"
              placeholder="Enter your email"
            />
            <button className="btn btn-dark rounded-pill">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
