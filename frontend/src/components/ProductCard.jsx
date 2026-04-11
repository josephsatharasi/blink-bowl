import { FaShoppingCart, FaStar, FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import QuickViewModal from './QuickViewModal';
import ImageWithSkeleton from './ImageWithSkeleton';

const ProductCard = ({ product, colorScheme = 'blue' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();

  const colorClasses = {
    blue: {
      badge: 'bg-blue-600',
      text: 'text-blue-600',
      gradient: 'from-blue-600 to-purple-600',
      hover: 'group-hover:text-blue-600',
    },
    purple: {
      badge: 'bg-purple-600',
      text: 'text-purple-600',
      gradient: 'from-purple-600 to-pink-600',
      hover: 'group-hover:text-purple-600',
    },
    green: {
      badge: 'bg-green-600',
      text: 'text-green-600',
      gradient: 'from-green-600 to-teal-600',
      hover: 'group-hover:text-green-600',
    },
    orange: {
      badge: 'bg-orange-600',
      text: 'text-orange-600',
      gradient: 'from-orange-600 to-red-600',
      hover: 'group-hover:text-orange-600',
    },
  };

  const colors = colorClasses[colorScheme];

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      >
        <div className="relative h-72 overflow-hidden bg-gray-100">
          <ImageWithSkeleton
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            skeletonClassName="w-full h-72"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          <div className={`absolute top-4 left-4 ${colors.badge} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
            {product.category || product.level || product.type}
          </div>

          <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110">
            <FaHeart />
          </button>

          <button 
            onClick={() => setIsQuickViewOpen(true)}
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white ${colors.text} px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Quick View
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          <h3 className={`text-lg font-bold mb-2 text-gray-800 ${colors.hover} transition-colors line-clamp-2`}>
            {product.name}
          </h3>

          <div className="flex justify-between items-center mt-4">
            <span className={`text-2xl font-bold ${colors.text}`}>₹{product.price}</span>
            <button 
              onClick={handleAddToCart}
              className={`bg-gradient-to-r ${colors.gradient} text-white p-3 rounded-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
            >
              <FaShoppingCart className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      <QuickViewModal 
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
