import ProductCard from '../components/ProductCard';
import { HiFilter } from 'react-icons/hi';
import { useState } from 'react';

const Materials = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const allMaterials = [
    { id: 1, name: 'JEE Main Physics Guide', price: '2499', image: 'https://picsum.photos/seed/jee-physics/400/500', level: 'Intermediate', rating: 4.9, reviews: 234 },
    { id: 2, name: 'NEET Biology Study Pack', price: '2899', image: 'https://picsum.photos/seed/neet-bio/400/500', level: 'Intermediate', rating: 4.8, reviews: 189 },
    { id: 3, name: 'High School Math Solutions', price: '1699', image: 'https://picsum.photos/seed/hs-math/400/500', level: 'High School', rating: 4.7, reviews: 156 },
    { id: 4, name: 'Chemistry Formula Handbook', price: '1099', image: 'https://picsum.photos/seed/chem-formula/400/500', level: 'High School', rating: 4.8, reviews: 142 },
    { id: 5, name: 'English Grammar Workbook', price: '1299', image: 'https://picsum.photos/seed/eng-grammar/400/500', level: 'All Levels', rating: 4.9, reviews: 278 },
    { id: 6, name: 'SAT Preparation Guide', price: '3299', image: 'https://picsum.photos/seed/sat-prep/400/500', level: 'Intermediate', rating: 4.9, reviews: 312 },
    { id: 7, name: 'CBSE Sample Papers - Class 10', price: '1499', image: 'https://picsum.photos/seed/cbse-10/400/500', level: 'High School', rating: 4.7, reviews: 198 },
    { id: 8, name: 'Competitive Exam Guide', price: '2299', image: 'https://picsum.photos/seed/comp-exam/400/500', level: 'Intermediate', rating: 4.8, reviews: 223 },
  ];

  const filteredMaterials = selectedFilter === 'All' 
    ? allMaterials 
    : allMaterials.filter(material => material.level === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Study Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive guides for High School & Competitive Exams
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-md">
          <div className="flex items-center space-x-2 text-gray-700">
            <HiFilter className="text-xl" />
            <span className="font-semibold">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {['All', 'High School', 'Intermediate', 'All Levels'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-purple-600 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMaterials.map((material) => (
            <ProductCard key={material.id} product={material} colorScheme="purple" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;
