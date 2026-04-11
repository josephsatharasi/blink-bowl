import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaBook, FaCheckCircle, FaTruck, FaRupeeSign } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <HiSparkles className="text-yellow-300" />
              <span className="text-sm font-medium">Trusted by 10,000+ Students</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your One-Stop
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                School & Study Store
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Discover a comprehensive collection of educational resources tailored for every student. 
              From textbooks and notebooks to art supplies and school bags - everything you need for 
              academic excellence, all in one place.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaBook, text: '5000+ Books' },
                { icon: FaCheckCircle, text: 'Quality Assured' },
                { icon: FaTruck, text: 'Fast Delivery' },
                { icon: FaRupeeSign, text: 'Best Prices' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                    <Icon className="text-yellow-300 text-xl" />
                    <span className="font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/books"
                className="group inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <span>Browse Products</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 border-2 border-white/30 transition-all duration-300"
              >
                <span>Learn More</span>
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-300 text-xl" />
                ))}
              </div>
              <div>
                <p className="font-semibold">4.9/5 Rating</p>
                <p className="text-sm text-blue-200">Based on 2,500+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=700&fit=crop"
                alt="Education"
                className="rounded-2xl shadow-2xl border-8 border-white/20"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-6 rounded-xl shadow-2xl">
                <p className="text-3xl font-bold text-blue-600">50%</p>
                <p className="text-sm font-medium">Student Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
