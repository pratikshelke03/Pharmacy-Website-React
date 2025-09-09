import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // React Router hook

  // LocalStorage मधून cart load करतो
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Qty update
  const handleQtyChange = (index, qty) => {
    let updatedCart = [...cart];
    updatedCart[index].qty = qty > 0 ? qty : 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product
  const handleRemove = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Grand Total
  const getGrandTotal = () => {
    return cart.reduce((total, item) => total + item.product_price * item.qty, 0);
  };

  // Proceed to Buy
  const handleProceedToBuy = () => {
    // Navigate to checkout page
    navigate("/checkout"); 
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center">🛒 Your cart is empty</p>
        ) : (
          <>
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((value, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`http://localhost:1000/uploads/${value.product_image}`}
                        alt={value.product_name}
                        width="80"
                        className="rounded"
                      />
                    </td>
                    <td>{value.product_name}</td>
                    <td>₹{value.product_price}</td>
                    <td>{value.category}</td>
                    <td>
                      <input
                        type="number"
                        value={value.qty}
                        min="1"
                        onChange={(e) => handleQtyChange(index, parseInt(e.target.value))}
                        className="form-control"
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td>₹{value.product_price * value.qty}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                {/* grand total row */}
                <tr>
                  <td colSpan="5" className="text-end fw-bold">
                    Grand Total
                  </td>
                  <td colSpan="2" className="fw-bold">₹{getGrandTotal()}</td>
                </tr>
              </tbody>
            </table>

            {/* Proceed to Buy button */}
            <div className="text-end mt-3">
              <button
                className="btn btn-success btn-lg"
                onClick={handleProceedToBuy}
              >
                Proceed to Buy
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
