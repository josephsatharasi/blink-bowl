import React from 'react';
import { FaShoppingCart, FaUsers, FaBox, FaRupeeSign, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '₹2,45,890', change: '+12.5%', isPositive: true, icon: FaRupeeSign, color: 'blue' },
    { title: 'Total Orders', value: '1,234', change: '+8.2%', isPositive: true, icon: FaShoppingCart, color: 'green' },
    { title: 'Total Products', value: '456', change: '-2.4%', isPositive: false, icon: FaBox, color: 'purple' },
    { title: 'Total Customers', value: '892', change: '+15.3%', isPositive: true, icon: FaUsers, color: 'orange' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Rahul Sharma', product: 'Mathematics Textbook', amount: '₹899', status: 'Delivered', date: '2024-01-15', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=50&h=50&fit=crop' },
    { id: '#ORD-002', customer: 'Priya Patel', product: 'School Bag', amount: '₹1,299', status: 'Pending', date: '2024-01-15', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=50&h=50&fit=crop' },
    { id: '#ORD-003', customer: 'Amit Kumar', product: 'Art Supplies Set', amount: '₹1,599', status: 'Processing', date: '2024-01-14', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=50&h=50&fit=crop' },
    { id: '#ORD-004', customer: 'Sneha Reddy', product: 'Study Guide', amount: '₹2,199', status: 'Delivered', date: '2024-01-14', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=50&h=50&fit=crop' },
    { id: '#ORD-005', customer: 'Vikram Singh', product: 'Notebook Set', amount: '₹499', status: 'Cancelled', date: '2024-01-13', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=50&h=50&fit=crop' },
  ];

  const topProducts = [
    { name: 'Mathematics Textbook', sales: 234, revenue: '₹52,890', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=50&h=50&fit=crop' },
    { name: 'School Bag Premium', sales: 189, revenue: '₹48,230', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=50&h=50&fit=crop' },
    { name: 'Art Supplies Kit', sales: 156, revenue: '₹38,900', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=50&h=50&fit=crop' },
    { name: 'Study Guide Set', sales: 142, revenue: '₹35,600', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=50&h=50&fit=crop' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`text-2xl text-${stat.color}-600`} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {stat.isPositive ? <FaArrowUp /> : <FaArrowDown />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Order ID</th>
                  <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Customer</th>
                  <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Product</th>
                  <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Amount</th>
                  <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-2 text-sm font-medium text-gray-800">{order.id}</td>
                    <td className="py-3 px-2 text-sm text-gray-600">{order.customer}</td>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <img src={order.image} alt={order.product} className="w-8 h-8 rounded object-cover" />
                        <span className="text-sm text-gray-600">{order.product}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-sm font-semibold text-gray-800">{order.amount}</td>
                    <td className="py-3 px-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex items-center gap-3 flex-1">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{product.sales} sales</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-blue-600">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
