import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { currency } from "../../App";

const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_2j07VA04NybNiL", // Replace with your Razorpay API Key
      amount: totalAmount * 100, // Convert to smallest currency unit (paise)
      currency: "INR",
      name: "Your Shop Name",
      description: "Payment for your order",
      image: "https://yourwebsite.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate("/"); // Redirect after payment
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="checkout-container">
      <div className="checkout">
        <h1>Checkout</h1>
        <div className="checkout-summary">
          <p>Total Amount: <strong>{currency}{totalAmount}</strong></p>
          <button onClick={handlePayment} className="pay-button">
            Pay with Google Pay / UPI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
