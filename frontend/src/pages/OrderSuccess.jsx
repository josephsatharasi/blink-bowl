import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaShoppingBag } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, total, formData } = location.state || {};

  useEffect(() => {
    if (!orderId) {
      navigate('/');
      return;
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, [orderId, navigate]);

  if (!orderId) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <FaCheckCircle className="text-6xl text-green-500" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed.
          </p>

          {/* Order Details */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order ID</p>
                <p className="text-lg font-bold text-gray-800">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                <p className="text-lg font-bold text-blue-600">₹{total.toFixed(2)}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600 mb-1">Delivery Address</p>
                <p className="text-gray-800">
                  {formData.fullName}<br />
                  {formData.address}<br />
                  {formData.city}, {formData.state} - {formData.pincode}<br />
                  {formData.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-800 mb-2">📦 Estimated Delivery</h3>
            <p className="text-gray-700">Your order will be delivered within 3-5 business days</p>
            <p className="text-sm text-gray-600 mt-2">
              You will receive a confirmation email at {formData.email}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <FaHome />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/books"
              className="inline-flex items-center justify-center space-x-2 bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              <FaShoppingBag />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-600">
              Need help? Contact us at <a href="mailto:support@schoolmart.com" className="text-blue-600 hover:underline">support@schoolmart.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
