import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaBook, FaShoppingBag, FaPaintBrush, FaClipboard, FaImage } from 'react-icons/fa';
import ProductModal from '../components/ProductModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showProductModal, setShowProductModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalMode, setModalMode] = useState('add');

  const [products, setProducts] = useState([
    { id: 1, name: 'Mathematics Textbook Class 10', category: 'Books', price: 899, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop', rating: 4.8, reviews: 124 },
    { id: 2, name: 'Premium School Bag', category: 'Bags', price: 1299, stock: 23, status: 'Active', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop', rating: 4.7, reviews: 89 },
    { id: 3, name: 'Art Supplies Complete Kit', category: 'Supplies', price: 1599, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=500&fit=crop', rating: 4.9, reviews: 156 },
    { id: 4, name: 'Science Study Guide', category: 'Materials', price: 2199, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop', rating: 4.6, reviews: 78 },
    { id: 5, name: 'Geometry Box Set', category: 'Supplies', price: 299, stock: 67, status: 'Active', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=500&fit=crop', rating: 4.5, reviews: 92 },
    { id: 6, name: 'English Grammar Book', category: 'Books', price: 599, stock: 34, status: 'Active', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop', rating: 4.8, reviews: 145 },
    { id: 7, name: 'Water Bottle & Lunch Box', category: 'Bags', price: 799, stock: 28, status: 'Active', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=500&fit=crop', rating: 4.6, reviews: 67 },
    { id: 8, name: 'Drawing Notebook A4', category: 'Supplies', price: 199, stock: 89, status: 'Active', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=500&fit=crop', rating: 4.7, reviews: 112 },
  ]);

  const categories = ['All', 'Books', 'Bags', 'Supplies', 'Materials'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Books': return <FaBook className="text-3xl" />;
      case 'Bags': return <FaShoppingBag className="text-3xl" />;
      case 'Supplies': return <FaPaintBrush className="text-3xl" />;
      case 'Materials': return <FaClipboard className="text-3xl" />;
      default: return <FaImage className="text-3xl" />;
    }
  };

  const handleAddProduct = () => {
    setModalMode('add');
    setSelectedProduct(null);
    setShowProductModal(true);
  };

  const handleEditProduct = (product) => {
    setModalMode('edit');
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleSaveProduct = (productData) => {
    if (modalMode === 'add') {
      setProducts([...products, { ...productData, status: productData.stock > 0 ? 'Active' : 'Out of Stock' }]);
    } else {
      setProducts(products.map(p => 
        p.id === productData.id 
          ? { ...productData, status: productData.stock > 0 ? 'Active' : 'Out of Stock' }
          : p
      ));
    }
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product inventory</p>
        </div>
        <button 
          onClick={handleAddProduct}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center relative overflow-hidden">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="absolute inset-0 flex items-center justify-center" style={{ display: product.image ? 'none' : 'flex' }}>
                {getCategoryIcon(product.category)}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">{product.name}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">{product.category}</p>
              
              <div className="flex items-center justify-between mb-3">
                <p className="text-lg font-bold text-gray-800">₹{product.price}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">Stock: <span className="font-semibold">{product.stock}</span></p>

              {/* Actions */}
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEditProduct(product)}
                  className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <FaEdit /> Edit
                </button>
                <button 
                  onClick={() => handleDeleteClick(product)}
                  className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      )}

      {/* Modals */}
      <ProductModal
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
        onSave={handleSaveProduct}
        product={selectedProduct}
        mode={modalMode}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        itemName={selectedProduct?.name}
        itemType="product"
      />
    </div>
  );
};

export default Products;
