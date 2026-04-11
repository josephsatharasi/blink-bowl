import { HiX, HiShoppingCart } from 'react-icons/hi';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ImageWithSkeleton from './ImageWithSkeleton';

const CartDrawer = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, isCartOpen, setIsCartOpen } = useCart();

  const total = getCartTotal();

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      ></div>

      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <HiShoppingCart className="text-2xl text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">Shopping Cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiX className="text-2xl text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 h-[calc(100vh-200px)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <HiShoppingCart className="text-6xl text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-400 text-sm">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex space-x-4 bg-gray-50 p-4 rounded-lg">
                  <ImageWithSkeleton 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                    skeletonClassName="w-20 h-20 rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{item.name}</h4>
                    <p className="text-blue-600 font-bold">₹{item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="font-medium w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-2xl font-bold text-blue-600">₹{total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            onClick={() => setIsCartOpen(false)}
            className={`block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all ${
              cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={(e) => {
              if (cartItems.length === 0) {
                e.preventDefault();
              } else {
                setIsCartOpen(false);
              }
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
