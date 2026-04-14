import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaBook, FaShoppingBag, FaPaintBrush, FaClipboard } from 'react-icons/fa';
import CategoryModal from '../components/CategoryModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

const Categories = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalMode, setModalMode] = useState('add');

  const [categories, setCategories] = useState([
    { id: 1, name: 'Books', products: 45, icon: 'FaBook', color: 'blue', description: 'Textbooks, notebooks, and reference materials' },
    { id: 2, name: 'Study Materials', products: 32, icon: 'FaClipboard', color: 'green', description: 'Study guides and exam preparation materials' },
    { id: 3, name: 'Art & Supplies', products: 28, icon: 'FaPaintBrush', color: 'purple', description: 'Art supplies and stationery items' },
    { id: 4, name: 'Bags & Accessories', products: 19, icon: 'FaShoppingBag', color: 'orange', description: 'School bags and accessories' },
  ]);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'FaBook': return FaBook;
      case 'FaShoppingBag': return FaShoppingBag;
      case 'FaPaintBrush': return FaPaintBrush;
      case 'FaClipboard': return FaClipboard;
      default: return FaBook;
    }
  };

  const handleAddCategory = () => {
    setModalMode('add');
    setSelectedCategory(null);
    setShowCategoryModal(true);
  };

  const handleEditCategory = (category) => {
    setModalMode('edit');
    setSelectedCategory(category);
    setShowCategoryModal(true);
  };

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  const handleSaveCategory = (categoryData) => {
    if (modalMode === 'add') {
      setCategories([...categories, categoryData]);
    } else {
      setCategories(categories.map(c => c.id === categoryData.id ? categoryData : c));
    }
  };

  const handleConfirmDelete = () => {
    setCategories(categories.filter(c => c.id !== selectedCategory.id));
    setShowDeleteModal(false);
    setSelectedCategory(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
          <p className="text-gray-600 mt-1">Manage product categories</p>
        </div>
        <button 
          onClick={handleAddCategory}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg"
        >
          <FaPlus /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => {
          const IconComponent = getIconComponent(category.icon);
          return (
            <div key={category.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <div className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mb-4`}>
                <IconComponent className="text-3xl" style={{ color: category.color === 'blue' ? '#3B82F6' : category.color === 'green' ? '#10B981' : category.color === 'purple' ? '#8B5CF6' : '#F59E0B' }} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-2 text-sm">{category.description}</p>
              <p className="text-gray-600 mb-4">{category.products} Products</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditCategory(category)}
                  className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <FaEdit /> Edit
                </button>
                <button 
                  onClick={() => handleDeleteClick(category)}
                  className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modals */}
      <CategoryModal
        isOpen={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onSave={handleSaveCategory}
        category={selectedCategory}
        mode={modalMode}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        itemName={selectedCategory?.name}
        itemType="category"
      />
    </div>
  );
};

export default Categories;
