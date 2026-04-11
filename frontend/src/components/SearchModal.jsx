import { useState } from 'react';
import { HiX, HiSearch } from 'react-icons/hi';
import { FaBook, FaGraduationCap, FaPalette, FaSchool } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    { icon: FaBook, text: 'Textbooks', link: '/books' },
    { icon: FaGraduationCap, text: 'Study Materials', link: '/materials' },
    { icon: FaPalette, text: 'Art Supplies', link: '/supplies' },
    { icon: FaSchool, text: 'School Bags', link: '/bags' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-20">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h3 className="text-xl font-bold text-gray-800">Search Products</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <HiX className="text-2xl text-gray-600" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-6">
            <div className="relative">
              <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books, materials, supplies..."
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
          </div>

          {/* Popular Searches */}
          <div className="px-6 pb-6">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">Popular Searches</h4>
            <div className="grid grid-cols-2 gap-3">
              {popularSearches.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors group"
                  >
                    <Icon className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
