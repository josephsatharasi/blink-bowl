import React, { useState } from 'react';
import { FaEye, FaDownload, FaFilter } from 'react-icons/fa';
import OrderModal from '../components/OrderModal';

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([
    { id: '#ORD-001', customer: 'Rahul Sharma', email: 'rahul@example.com', product: 'Mathematics Textbook', quantity: 2, amount: 1798, status: 'Delivered', date: '2024-01-15', payment: 'Paid', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=50&h=50&fit=crop' },
    { id: '#ORD-002', customer: 'Priya Patel', email: 'priya@example.com', product: 'School Bag', quantity: 1, amount: 1299, status: 'Pending', date: '2024-01-15', payment: 'Pending', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=50&h=50&fit=crop' },
    { id: '#ORD-003', customer: 'Amit Kumar', email: 'amit@example.com', product: 'Art Supplies Set', quantity: 1, amount: 1599, status: 'Processing', date: '2024-01-14', payment: 'Paid', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=50&h=50&fit=crop' },
    { id: '#ORD-004', customer: 'Sneha Reddy', email: 'sneha@example.com', product: 'Study Guide', quantity: 3, amount: 6597, status: 'Delivered', date: '2024-01-14', payment: 'Paid', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=50&h=50&fit=crop' },
    { id: '#ORD-005', customer: 'Vikram Singh', email: 'vikram@example.com', product: 'Notebook Set', quantity: 5, amount: 2495, status: 'Cancelled', date: '2024-01-13', payment: 'Refunded', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=50&h=50&fit=crop' },
    { id: '#ORD-006', customer: 'Anjali Gupta', email: 'anjali@example.com', product: 'Geometry Box', quantity: 2, amount: 598, status: 'Processing', date: '2024-01-13', payment: 'Paid', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=50&h=50&fit=crop' },
    { id: '#ORD-007', customer: 'Rohan Mehta', email: 'rohan@example.com', product: 'English Grammar', quantity: 1, amount: 599, status: 'Shipped', date: '2024-01-12', payment: 'Paid', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=50&h=50&fit=crop' },
    { id: '#ORD-008', customer: 'Kavya Iyer', email: 'kavya@example.com', product: 'Drawing Notebook', quantity: 4, amount: 796, status: 'Delivered', date: '2024-01-12', payment: 'Paid', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=50&h=50&fit=crop' },
  ]);

  const statuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

  const filteredOrders = statusFilter === 'All' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleUpdateOrder = (updatedOrder) => {
    setOrders(orders.map(o => o.id === updatedOrder.id ? updatedOrder : o));
  };

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

  const getPaymentColor = (payment) => {
    switch (payment) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Refunded': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-600 mt-1">Manage and track all orders</p>
        </div>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-lg">
          <FaDownload /> Export Orders
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {statuses.map(status => {
          const count = status === 'All' ? orders.length : orders.filter(o => o.status === status).length;
          return (
            <div key={status} className="bg-white rounded-lg shadow-md p-4 text-center">
              <p className="text-2xl font-bold text-gray-800">{count}</p>
              <p className="text-sm text-gray-600 mt-1">{status}</p>
            </div>
          );
        })}
      </div>

      {/* Filter */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="flex items-center gap-4">
          <FaFilter className="text-gray-400" />
          <div className="flex gap-2 flex-wrap">
            {statuses.map(status => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  statusFilter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Order ID</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Customer</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Product</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Quantity</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Amount</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Payment</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-4 px-4 text-sm font-semibold text-blue-600">{order.id}</td>
                  <td className="py-4 px-4">
                    <p className="text-sm font-medium text-gray-800">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <img src={order.image} alt={order.product} className="w-10 h-10 rounded object-cover" />
                      <span className="text-sm text-gray-600">{order.product}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{order.quantity}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-800">₹{order.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPaymentColor(order.payment)}`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{order.date}</td>
                  <td className="py-4 px-4">
                    <button 
                      onClick={() => handleViewOrder(order)}
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <FaEye className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        onSave={handleUpdateOrder}
        order={selectedOrder}
      />
    </div>
  );
};

export default Orders;
