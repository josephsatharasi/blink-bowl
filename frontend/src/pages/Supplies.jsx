import ProductCard from '../components/ProductCard';
import { HiFilter } from 'react-icons/hi';
import { useState } from 'react';

const Supplies = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allSupplies = [
    { id: 1, name: 'Watercolor Paint Set - 24 Colors', price: '2099', image: 'https://picsum.photos/seed/watercolor/400/500', category: 'Art', rating: 4.8, reviews: 167 },
    { id: 2, name: 'Premium Pen Set (10 pcs)', price: '799', image: 'https://picsum.photos/seed/pens/400/500', category: 'Stationery', rating: 4.7, reviews: 134 },
    { id: 3, name: 'Sketch Pencils - Professional Set', price: '1399', image: 'https://picsum.photos/seed/pencils/400/500', category: 'Art', rating: 4.9, reviews: 198 },
    { id: 4, name: 'Geometry Box - Complete Set', price: '599', image: 'https://picsum.photos/seed/geometry/400/500', category: 'Stationery', rating: 4.6, reviews: 112 },
    { id: 5, name: 'Acrylic Markers - 12 Colors', price: '1599', image: 'https://picsum.photos/seed/markers/400/500', category: 'Art', rating: 4.8, reviews: 145 },
    { id: 6, name: 'Sticky Notes Bundle', price: '899', image: 'https://picsum.photos/seed/sticky/400/500', category: 'Stationery', rating: 4.7, reviews: 89 },
    { id: 7, name: 'Oil Pastels - 36 Shades', price: '1899', image: 'https://picsum.photos/seed/pastels/400/500', category: 'Art', rating: 4.9, reviews: 176 },
    { id: 8, name: 'Calculator - Scientific', price: '1499', image: 'https://picsum.photos/seed/calculator/400/500', category: 'Stationery', rating: 4.8, reviews: 203 },
  ];

  const filteredSupplies = selectedFilter === 'All' 
    ? allSupplies 
    : allSupplies.filter(supply => supply.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Art & Supplies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stationery and Art Materials for Creative Learning
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-gray-700">
            <HiFilter className="text-xl" />
            <span className="font-semibold">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {['All', 'Art', 'Stationery'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-green-600 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSupplies.map((supply) => (
            <ProductCard key={supply.id} product={supply} colorScheme="green" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplies;
