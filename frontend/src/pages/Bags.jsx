import ProductCard from '../components/ProductCard';
import { HiFilter } from 'react-icons/hi';
import { useState } from 'react';

const Bags = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allBags = [
    { id: 1, name: 'Classic School Backpack - Blue', price: '2899', image: 'https://picsum.photos/seed/backpack-blue/400/500', type: 'Backpack', rating: 4.8, reviews: 234 },
    { id: 2, name: 'Laptop Bag with Compartments', price: '3799', image: 'https://picsum.photos/seed/laptop-bag/400/500', type: 'Laptop Bag', rating: 4.9, reviews: 189 },
    { id: 3, name: 'Sports Duffle Bag', price: '2499', image: 'https://picsum.photos/seed/duffle/400/500', type: 'Duffle', rating: 4.7, reviews: 156 },
    { id: 4, name: 'Pencil Case - Multicolor', price: '699', image: 'https://picsum.photos/seed/pencil-case/400/500', type: 'Accessory', rating: 4.6, reviews: 98 },
    { id: 5, name: 'Water Bottle - 1L', price: '1099', image: 'https://picsum.photos/seed/bottle/400/500', type: 'Accessory', rating: 4.8, reviews: 167 },
    { id: 6, name: 'Trolley School Bag', price: '4999', image: 'https://picsum.photos/seed/trolley/400/500', type: 'Trolley Bag', rating: 4.9, reviews: 212 },
    { id: 7, name: 'Lunch Box Set', price: '1299', image: 'https://picsum.photos/seed/lunchbox/400/500', type: 'Accessory', rating: 4.7, reviews: 143 },
    { id: 8, name: 'Premium Leather Backpack', price: '6599', image: 'https://picsum.photos/seed/leather-bag/400/500', type: 'Backpack', rating: 4.9, reviews: 278 },
  ];

  const filteredBags = selectedFilter === 'All' 
    ? allBags 
    : allBags.filter(bag => bag.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Bags & Accessories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Durable and Stylish School Bags & Essentials
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-gray-700">
            <HiFilter className="text-xl" />
            <span className="font-semibold">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {['All', 'Backpack', 'Laptop Bag', 'Accessory', 'Duffle', 'Trolley Bag'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-orange-600 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBags.map((bag) => (
            <ProductCard key={bag.id} product={bag} colorScheme="orange" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bags;
