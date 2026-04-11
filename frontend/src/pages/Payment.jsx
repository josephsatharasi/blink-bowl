import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCreditCard, FaUniversity, FaWallet, FaQrcode, FaLock } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const { formData, total } = location.state || {};

  if (!formData || !total) {
    navigate('/checkout');
    return null;
  }

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: FaCreditCard, color: 'blue' },
    { id: 'upi', name: 'UPI', icon: FaQrcode, color: 'green' },
    { id: 'netbanking', name: 'Net Banking', icon: FaUniversity, color: 'purple' },
    { id: 'wallet', name: 'Wallet', icon: FaWallet, color: 'orange' },
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      clearCart();
      navigate('/order-success', { 
        state: { 
          orderId: 'ORD' + Date.now(),
          total,
          formData 
        } 
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Payment
          </h1>
          <p className="text-gray-600">Choose your preferred payment method</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                        selectedMethod === method.id
                          ? `border-${method.color}-600 bg-${method.color}-50`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className={`text-4xl mx-auto mb-3 ${
                        selectedMethod === method.id ? `text-${method.color}-600` : 'text-gray-400'
                      }`} />
                      <p className="font-semibold text-gray-800">{method.name}</p>
                    </button>
                  );
                })}
              </div>

              {/* Payment Form */}
              <form onSubmit={handlePayment} className="space-y-6">
                {selectedMethod === 'card' && (
                  <>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          required
                          maxLength="3"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </>
                )}

                {selectedMethod === 'upi' && (
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">UPI ID</label>
                    <input
                      type="text"
                      placeholder="yourname@upi"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <p className="text-sm text-gray-500 mt-2">Enter your UPI ID to proceed</p>
                  </div>
                )}

                {selectedMethod === 'netbanking' && (
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Select Bank</label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Choose your bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                      <option value="pnb">Punjab National Bank</option>
                    </select>
                  </div>
                )}

                {selectedMethod === 'wallet' && (
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Select Wallet</label>
                    <select
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Choose your wallet</option>
                      <option value="paytm">Paytm</option>
                      <option value="phonepe">PhonePe</option>
                      <option value="googlepay">Google Pay</option>
                      <option value="amazonpay">Amazon Pay</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <FaLock />
                  <span>{isProcessing ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}</span>
                </button>

                <p className="text-center text-sm text-gray-500">
                  <FaLock className="inline mr-1" />
                  Your payment information is secure and encrypted
                </p>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-semibold">₹{total.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <p className="font-semibold text-gray-800 mb-2">Shipping To:</p>
                  <p className="text-gray-600">{formData.fullName}</p>
                  <p className="text-gray-600">{formData.address}</p>
                  <p className="text-gray-600">{formData.city}, {formData.state} - {formData.pincode}</p>
                  <p className="text-gray-600">{formData.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
