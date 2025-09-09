import { useEffect, useState } from "react";
import Footer from "./Common/Footer";
import Navbar from "./Common/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Medicines() {
  var {product_id} = useParams()
  var token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
axios.get("http://localhost:1000/product_list")
     .then(res => setProducts(res.data));
  }, []);

  // Filter products by search term (name, category, description)
  const filteredProducts = products.filter(
    (p) =>
      p.product_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.product_description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <br /><br /><br /><br />
      <div className="container mt-4">
        <h2 className="mb-4">Product List</h2>

        {/* Search bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product name, category or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((value, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  {value.product_image ? (
                    <img
                      src={`http://localhost:1000/uploads/${value.product_image}`}
                      alt={value.product_name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ height: "200px" }}
                    >
                      No Image
                    </div>
                  )}

                  <div className="card-body">
                    <h5 className="card-title">{value.product_name}</h5>
                    <p className="card-text text-muted">{value.category}</p>
                    <p className="card-text">₹{value.product_price}</p>
                    <p className="small text-truncate">
                      {value.product_description}
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <Link
                      to={`/product_details/${value.product_id || value.id}`}
                      className="btn btn-primary"
                    >
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No Products Found</p>
          )}
        </div>
      </div>
      <br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default Medicines;
