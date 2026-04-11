import { HiX } from 'react-icons/hi';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import ImageWithSkeleton from './ImageWithSkeleton';

const QuickViewModal = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <HiX className="text-2xl text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative">
              <ImageWithSkeleton
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
                skeletonClassName="w-full h-96 rounded-xl"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.category || product.level || product.type}
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">₹{product.price}</span>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  High-quality educational product perfect for students. Made with premium materials 
                  and designed to last. Ideal for daily use in school or home study.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Premium Quality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Durable & Long-lasting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Perfect for Students</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
