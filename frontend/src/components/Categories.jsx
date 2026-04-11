import { Link } from 'react-router-dom';
import { FaBook, FaGraduationCap, FaPalette, FaSchool } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const Categories = () => {
  const categories = [
    {
      title: 'Books',
      description: 'Notebooks, Textbooks, Reference Books',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=300&fit=crop',
      link: '/books',
      icon: FaBook,
      color: 'blue',
      items: '2000+ Items',
    },
    {
      title: 'Study Materials',
      description: 'High School & Intermediate Resources',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
      link: '/materials',
      icon: FaGraduationCap,
      color: 'purple',
      items: '1500+ Items',
    },
    {
      title: 'Art & Supplies',
      description: 'Stationery & Daily Use Items',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
      link: '/supplies',
      icon: FaPalette,
      color: 'green',
      items: '1000+ Items',
    },
    {
      title: 'Bags & Accessories',
      description: 'School Bags, Backpacks & More',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      link: '/bags',
      icon: FaSchool,
      color: 'orange',
      items: '800+ Items',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of educational products, carefully curated for students of all levels
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                to={category.link}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${colorClasses[category.color]} p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="text-white text-2xl" />
                  </div>

                  {/* Items Count */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {category.items}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    <span>Explore Now</span>
                    <HiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 border-4 border-transparent group-hover:border-gradient-to-r ${colorClasses[category.color]} rounded-2xl transition-all duration-300 pointer-events-none`}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
