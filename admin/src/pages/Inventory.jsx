import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaBoxOpen } from 'react-icons/fa';

const Inventory = () => {
  const inventory = [
    { id: 1, product: 'Mathematics Textbook', sku: 'MTH-001', stock: 45, reorderLevel: 20, status: 'In Stock' },
    { id: 2, product: 'Premium School Bag', sku: 'BAG-001', stock: 23, reorderLevel: 15, status: 'In Stock' },
    { id: 3, product: 'Art Supplies Kit', sku: 'ART-001', stock: 12, reorderLevel: 20, status: 'Low Stock' },
    { id: 4, product: 'Science Study Guide', sku: 'SCI-001', stock: 0, reorderLevel: 10, status: 'Out of Stock' },
    { id: 5, product: 'Geometry Box Set', sku: 'GEO-001', stock: 67, reorderLevel: 25, status: 'In Stock' },
    { id: 6, product: 'English Grammar Book', sku: 'ENG-001', stock: 8, reorderLevel: 15, status: 'Low Stock' },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'In Stock': return <FaCheckCircle className="text-green-600" />;
      case 'Low Stock': return <FaExclamationTriangle className="text-yellow-600" />;
      case 'Out of Stock': return <FaBoxOpen className="text-red-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Inventory Management</h1>
        <p className="text-gray-600 mt-1">Monitor stock levels and reorder points</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-3xl text-green-600" />
            <div>
              <p className="text-gray-600 text-sm">In Stock</p>
              <p className="text-2xl font-bold text-gray-800">{inventory.filter(i => i.status === 'In Stock').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <FaExclamationTriangle className="text-3xl text-yellow-600" />
            <div>
              <p className="text-gray-600 text-sm">Low Stock</p>
              <p className="text-2xl font-bold text-gray-800">{inventory.filter(i => i.status === 'Low Stock').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3">
            <FaBoxOpen className="text-3xl text-red-600" />
            <div>
              <p className="text-gray-600 text-sm">Out of Stock</p>
              <p className="text-2xl font-bold text-gray-800">{inventory.filter(i => i.status === 'Out of Stock').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Product</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">SKU</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Current Stock</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Reorder Level</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-4 px-4 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-4 px-4 text-sm font-medium text-gray-800">{item.product}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.sku}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-800">{item.stock}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{item.reorderLevel}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                      Restock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
