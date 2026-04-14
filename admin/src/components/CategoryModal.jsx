import React, { useState, useEffect } from 'react';
import { FaTimes, FaSave, FaBook, FaShoppingBag, FaPaintBrush, FaClipboard } from 'react-icons/fa';

const CategoryModal = ({ isOpen, onClose, onSave, category, mode = 'add' }) => {
  const [formData, setFormData] = useState({
    name: '',
    icon: 'FaBook',
    color: 'blue',
    description: ''
  });

  const iconOptions = [
    { value: 'FaBook', label: 'Book', icon: FaBook },
    { value: 'FaShoppingBag', label: 'Shopping Bag', icon: FaShoppingBag },
    { value: 'FaPaintBrush', label: 'Paint Brush', icon: FaPaintBrush },
    { value: 'FaClipboard', label: 'Clipboard', icon: FaClipboard },
  ];

  const colorOptions = ['blue', 'green', 'purple', 'orange', 'red', 'pink'];

  useEffect(() => {
    if (category && mode === 'edit') {
      setFormData({
        name: category.name || '',
        icon: category.icon || 'FaBook',
        color: category.color || 'blue',
        description: category.description || ''
      });
    } else {
      setFormData({
        name: '',
        icon: 'FaBook',
        color: 'blue',
        description: ''
      });
    }
  }, [category, mode, isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: category?.id || Date.now(), products: category?.products || 0 });
    onClose();
  };

  if (!isOpen) return null;

  const SelectedIcon = iconOptions.find(opt => opt.value === formData.icon)?.icon || FaBook;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {mode === 'add' ? 'Add New Category' : 'Edit Category'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter category name"
            />
          </div>

          {/* Icon Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Icon *
            </label>
            <div className="grid grid-cols-4 gap-3">
              {iconOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, icon: option.value })}
                    className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition ${
                      formData.icon === option.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    <IconComponent className="text-2xl" />
                    <span className="text-xs">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color *
            </label>
            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setFormData({ ...formData, color })}
                  className={`w-10 h-10 rounded-full border-2 transition ${
                    formData.color === color ? 'border-gray-800 scale-110' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color === 'blue' ? '#3B82F6' : color === 'green' ? '#10B981' : color === 'purple' ? '#8B5CF6' : color === 'orange' ? '#F59E0B' : color === 'red' ? '#EF4444' : '#EC4899' }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter category description"
            />
          </div>

          {/* Preview */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <div className={`bg-${formData.color}-100 p-4 rounded-lg flex items-center gap-3`}>
              <div className={`w-12 h-12 bg-${formData.color}-200 rounded-full flex items-center justify-center`}>
                <SelectedIcon className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{formData.name || 'Category Name'}</p>
                <p className="text-sm text-gray-600">{formData.description || 'Description'}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <FaSave /> {mode === 'add' ? 'Add Category' : 'Save Changes'}
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
  );
};

export default CategoryModal;
