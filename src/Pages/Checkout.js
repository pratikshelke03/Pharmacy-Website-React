import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const navigate = useNavigate();

  // Load cart from LocalStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length === 0) {
      alert("Your cart is empty! Redirecting to cart page.");
      navigate("/cart");
    } else {
      setCart(savedCart);
    }
  }, [navigate]);

  // Grand total
  const getGrandTotal = () => {
    return cart.reduce((total, item) => total + item.product_price * item.qty, 0);
  };

  // Handle form submission
  const handleCheckout = (e) => {
    e.preventDefault();

    // Here you can send the order data to backend API
    const orderData = {
      customer: { name, email, address, phone },
      cart,
      paymentMethod,
      total: getGrandTotal(),
    };

    console.log("Order Data:", orderData);
    alert("Order placed successfully!");

    // Clear cart
    localStorage.removeItem("cart");
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="mb-4">Checkout</h2>

        <div className="row">
          {/* Cart Summary */}
          <div className="col-md-6 mb-4">
            <h4>Order Summary</h4>
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.product_name} x {item.qty}
                  <span>₹{item.product_price * item.qty}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between fw-bold">
                Total
                <span>₹{getGrandTotal()}</span>
              </li>
            </ul>
          </div>

          {/* Shipping & Payment Form */}
          <div className="col-md-6">
            <h4>Shipping Information</h4>
            <form onSubmit={handleCheckout}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows="3"
                  required
                ></textarea>
              </div>

             <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI Payment</option>
                <option value="Card">Credit/Debit Card</option>
                <option value="NetBanking">Net Banking</option>
                <option value="Wallet">Wallets (Paytm, PhonePe, Google Pay)</option>
                <option value="PayLater">Buy Now, Pay Later</option>
              </select>
            </div>
              <button type="submit" className="btn btn-success btn-lg w-100">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
