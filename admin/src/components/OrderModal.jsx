import React, { useState, useEffect } from 'react';
import { FaTimes, FaSave, FaUser, FaBox, FaRupeeSign, FaCalendar } from 'react-icons/fa';

const OrderModal = ({ isOpen, onClose, onSave, order }) => {
  const [formData, setFormData] = useState({
    status: '',
    payment: '',
    notes: ''
  });

  useEffect(() => {
    if (order) {
      setFormData({
        status: order.status || 'Pending',
        payment: order.payment || 'Pending',
        notes: order.notes || ''
      });
    }
  }, [order, isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...order, ...formData });
    onClose();
  };

  if (!isOpen || !order) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
            <p className="text-sm text-gray-600 mt-1">{order.id}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Order Info */}
        <div className="p-6 space-y-6">
          {/* Customer Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaUser /> Customer Information
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-semibold text-gray-800">{order.customer}</p>
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-semibold text-gray-800">{order.email}</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaBox /> Product Information
            </h3>
            {order.image && (
              <div className="mb-3">
                <img src={order.image} alt={order.product} className="w-20 h-20 rounded-lg object-cover" />
              </div>
            )}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Product</span>
                <span className="font-semibold text-gray-800">{order.product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity</span>
                <span className="font-semibold text-gray-800">{order.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1"><FaRupeeSign /> Amount</span>
                <span className="font-semibold text-gray-800">₹{order.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center gap-1"><FaCalendar /> Date</span>
                <span className="font-semibold text-gray-800">{order.date}</span>
              </div>
            </div>
          </div>

          {/* Update Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Order Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order Status *
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <div className="mt-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(formData.status)}`}>
                  {formData.status}
                </span>
              </div>
            </div>

            {/* Payment Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Status *
              </label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
                <option value="Refunded">Refunded</option>
                <option value="Failed">Failed</option>
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="Add notes about this order..."
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <FaSave /> Update Order
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
