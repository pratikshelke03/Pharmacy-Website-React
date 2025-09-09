import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function Product_Details() {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null); // null = not loaded / not found
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // optional auth
    axios
      .post("http://localhost:1000/product_list", { product_id, token })
      .then((res) => {
        if (res.data) setProduct(res.data); // product found
        else setProduct(null); // product not found
      })
      .catch((err) => {
        console.error(err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [product_id]);

  // Loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container text-center my-5">
          <h3>Loading product...</h3>
        </div>
        <Footer />
      </>
    );
  }

  // Product not found
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container text-center my-5">
          <h3>Product not found</h3>
          <Link to="/medicines" className="btn btn-outline-secondary mt-3">
            Back to Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Add to Cart handler
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((p) => p.id === product.id); // make sure `id` matches backend
    if (!exists) {
      cart.push({ ...product, qty });
    } else {
      cart = cart.map((p) =>
        p.id === product.id ? { ...p, qty: p.qty + qty } : p
      );
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          {/* Product Image */}
          <div className="col-md-5 text-center">
            {product.product_image ? (
              <img
                src={`http://localhost:1000/uploads/${product.product_image}`}
                alt={product.product_name}
                className="img-fluid rounded"
                style={{ maxHeight: "300px" }}
              />
            ) : (
              <p>No Image Available</p>
            )}
          </div>

          {/* Product Info */}
          <div className="col-md-7">
            <h2 className="mb-3">{product.product_name}</h2>
            <h4 className="text-success mb-3">₹{product.product_price}</h4>
            <p className="text-muted mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p>{product.product_description}</p>

            {/* Quantity */}
            <div className="mb-3">
              <label className="form-label me-2">Quantity:</label>
              <input
                type="number"
                className="form-control d-inline-block w-25"
                min="1"
                value={qty}
                onChange={(e) =>
                  setQty(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
            </div>

            {/* Buttons */}
            <div className="mt-4">
              {!added ? (
                <button
                  className="btn btn-primary btn-lg me-2"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              ) : (
                <Link to="/cart" className="btn btn-success btn-lg me-2">
                  Continue With Cart
                </Link>
              )}
              <Link
                to="/medicines"
                className="btn btn-outline-secondary btn-lg"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product_Details;
