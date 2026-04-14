import React from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine } from 'react-icons/fa';

const Analytics = () => {
  const salesData = [
    { month: 'Jan', revenue: 45000, orders: 120 },
    { month: 'Feb', revenue: 52000, orders: 145 },
    { month: 'Mar', revenue: 48000, orders: 132 },
    { month: 'Apr', revenue: 61000, orders: 168 },
    { month: 'May', revenue: 55000, orders: 151 },
    { month: 'Jun', revenue: 67000, orders: 189 },
  ];

  const topCategories = [
    { name: 'Books', sales: 45, revenue: 89000, growth: 12.5 },
    { name: 'Bags', sales: 32, revenue: 67000, growth: 8.3 },
    { name: 'Supplies', sales: 28, revenue: 54000, growth: -2.1 },
    { name: 'Materials', sales: 19, revenue: 42000, growth: 15.7 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your business performance</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-2">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-800">₹3,28,000</p>
          <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-2">
            <FaArrowUp /> 12.5%
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-2">Total Orders</p>
          <p className="text-3xl font-bold text-gray-800">905</p>
          <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-2">
            <FaArrowUp /> 8.3%
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-2">Avg Order Value</p>
          <p className="text-3xl font-bold text-gray-800">₹362</p>
          <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mt-2">
            <FaArrowUp /> 5.2%
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-2">Conversion Rate</p>
          <p className="text-3xl font-bold text-gray-800">3.2%</p>
          <div className="flex items-center gap-1 text-red-600 text-sm font-semibold mt-2">
            <FaArrowDown /> 1.1%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaChartLine className="text-blue-600" />
            Revenue Trend
          </h2>
          <div className="space-y-4">
            {salesData.map((data, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{data.month}</span>
                  <span className="font-semibold text-gray-800">₹{data.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${(data.revenue / 70000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Top Categories</h2>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    category.growth > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {category.growth > 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {Math.abs(category.growth)}%
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{category.sales}% of sales</span>
                  <span className="font-semibold text-blue-600">₹{category.revenue.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
