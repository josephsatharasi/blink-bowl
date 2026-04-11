import { FaShoppingCart, FaStar, FaHeart } from 'react-icons/fa';
import { HiFilter } from 'react-icons/hi';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import QuickViewModal from '../components/QuickViewModal';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const Books = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart } = useCart();

  const allBooks = [
    { id: 1, name: 'Mathematics Textbook - Class 10', price: '1299', image: 'https://picsum.photos/seed/math10/400/500', category: 'Textbook', rating: 4.8, reviews: 124 },
    { id: 2, name: 'Science Notebook - 200 Pages', price: '499', image: 'https://picsum.photos/seed/science/400/500', category: 'Notebook', rating: 4.9, reviews: 89 },
    { id: 3, name: 'English Literature - Class 12', price: '1599', image: 'https://picsum.photos/seed/english/400/500', category: 'Textbook', rating: 4.7, reviews: 156 },
    { id: 4, name: 'Physics Reference Book', price: '1899', image: 'https://picsum.photos/seed/physics/400/500', category: 'Reference', rating: 4.9, reviews: 203 },
    { id: 5, name: 'Chemistry Practical Notebook', price: '699', image: 'https://picsum.photos/seed/chemistry/400/500', category: 'Notebook', rating: 4.6, reviews: 78 },
    { id: 6, name: 'History Textbook - Class 11', price: '1399', image: 'https://picsum.photos/seed/history/400/500', category: 'Textbook', rating: 4.8, reviews: 142 },
    { id: 7, name: 'Biology Lab Manual', price: '1099', image: 'https://picsum.photos/seed/biology/400/500', category: 'Reference', rating: 4.7, reviews: 95 },
    { id: 8, name: 'Geography Atlas - Complete', price: '1699', image: 'https://picsum.photos/seed/geography/400/500', category: 'Reference', rating: 4.9, reviews: 167 },
  ];

  const filteredBooks = selectedFilter === 'All' 
    ? allBooks 
    : allBooks.filter(book => book.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Books Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our extensive collection of textbooks, notebooks, and reference materials
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-gray-700">
            <HiFilter className="text-xl" />
            <span className="font-semibold">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {['All', 'Textbook', 'Notebook', 'Reference'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              onMouseEnter={() => setHoveredId(book.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <ImageWithSkeleton
                  src={book.image}
                  alt={book.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  skeletonClassName="w-full h-72"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                  hoveredId === book.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {book.category}
                </div>

                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <FaHeart />
                </button>

                <button 
                  onClick={() => setQuickViewProduct(book)}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    hoveredId === book.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
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
                          i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({book.reviews})</span>
                </div>

                <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {book.name}
                </h3>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-blue-600">₹{book.price}</span>
                  <button 
                    onClick={() => addToCart(book)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                  >
                    <FaShoppingCart className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuickViewModal 
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
    </div>
  );
};

export default Books;
