import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaEnvelope, FaPhone, FaEdit, FaTrash } from 'react-icons/fa';
import CustomerModal from '../components/CustomerModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [modalMode, setModalMode] = useState('add');

  const [customers, setCustomers] = useState([
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', orders: 12, spent: 15890, joined: '2023-08-15', status: 'Active' },
    { id: 2, name: 'Priya Patel', email: 'priya@example.com', phone: '+91 98765 43211', orders: 8, spent: 9450, joined: '2023-09-20', status: 'Active' },
    { id: 3, name: 'Amit Kumar', email: 'amit@example.com', phone: '+91 98765 43212', orders: 15, spent: 22340, joined: '2023-07-10', status: 'Active' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha@example.com', phone: '+91 98765 43213', orders: 5, spent: 6780, joined: '2023-10-05', status: 'Active' },
    { id: 5, name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 98765 43214', orders: 3, spent: 4200, joined: '2023-11-12', status: 'Inactive' },
    { id: 6, name: 'Anjali Gupta', email: 'anjali@example.com', phone: '+91 98765 43215', orders: 20, spent: 28900, joined: '2023-06-18', status: 'Active' },
  ]);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCustomer = () => {
    setModalMode('add');
    setSelectedCustomer(null);
    setShowCustomerModal(true);
  };

  const handleEditCustomer = (customer) => {
    setModalMode('edit');
    setSelectedCustomer(customer);
    setShowCustomerModal(true);
  };

  const handleDeleteClick = (customer) => {
    setSelectedCustomer(customer);
    setShowDeleteModal(true);
  };

  const handleSaveCustomer = (customerData) => {
    if (modalMode === 'add') {
      setCustomers([...customers, customerData]);
    } else {
      setCustomers(customers.map(c => c.id === customerData.id ? customerData : c));
    }
  };

  const handleConfirmDelete = () => {
    setCustomers(customers.filter(c => c.id !== selectedCustomer.id));
    setShowDeleteModal(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
          <p className="text-gray-600 mt-1">Manage your customer base</p>
        </div>
        <button 
          onClick={handleAddCustomer}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg"
        >
          <FaUserPlus /> Add Customer
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm">Total Customers</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{customers.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm">Active Customers</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{customers.filter(c => c.status === 'Active').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm">Total Orders</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{customers.reduce((sum, c) => sum + c.orders, 0)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">₹{customers.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map(customer => (
          <div key={customer.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            {/* Customer Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{customer.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaEnvelope className="text-gray-400" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaPhone className="text-gray-400" />
                <span>{customer.phone}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-xs text-gray-500">Total Orders</p>
                <p className="text-lg font-bold text-gray-800">{customer.orders}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Spent</p>
                <p className="text-lg font-bold text-blue-600">₹{customer.spent.toLocaleString()}</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">Joined: {customer.joined}</p>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button 
                onClick={() => handleEditCustomer(customer)}
                className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <FaEdit /> Edit
              </button>
              <button 
                onClick={() => handleDeleteClick(customer)}
                className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition flex items-center justify-center gap-2 text-sm font-semibold"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <CustomerModal
        isOpen={showCustomerModal}
        onClose={() => setShowCustomerModal(false)}
        onSave={handleSaveCustomer}
        customer={selectedCustomer}
        mode={modalMode}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        itemName={selectedCustomer?.name}
        itemType="customer"
      />
    </div>
  );
};

export default Customers;
