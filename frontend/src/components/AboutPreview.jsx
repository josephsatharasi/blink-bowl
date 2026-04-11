import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

const AboutPreview = () => {
  const highlights = [
    'Wide range of educational products for all levels',
    'Organized by class, stream, and category',
    'Quality materials from trusted brands',
    'Competitive pricing with student discounts',
    'Fast delivery and easy returns',
    'Dedicated customer support team',
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=500&fit=crop"
                alt="Students"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl transform hover:rotate-3 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <HiLightBulb className="text-4xl" />
                  <div>
                    <p className="text-3xl font-bold">5000+</p>
                    <p className="text-sm">Products</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold text-sm">
              About SchoolMart
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Your Trusted Partner in
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Educational Excellence
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              SchoolMart is your comprehensive educational platform designed to simplify the way 
              students, parents, and institutions discover and purchase quality educational materials. 
              We understand the challenges of finding the right resources, which is why we've created 
              a seamless shopping experience tailored to your academic needs.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              From elementary school essentials to competitive exam preparation materials, we organize 
              everything by class, stream, and category, making it effortless to find exactly what you need.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Learn More About Us</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
