import { FaGraduationCap, FaUsers, FaSchool, FaCheckCircle, FaRocket, FaHeart, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  const features = [
    { icon: FaCheckCircle, text: 'Organized by Class & Stream' },
    { icon: FaCheckCircle, text: 'Wide Product Range' },
    { icon: FaCheckCircle, text: 'Quality Assured' },
    { icon: FaCheckCircle, text: 'User-Friendly Interface' },
    { icon: FaCheckCircle, text: 'Fast Delivery' },
    { icon: FaCheckCircle, text: 'Competitive Pricing' },
    { icon: FaCheckCircle, text: '24/7 Customer Support' },
    { icon: FaCheckCircle, text: 'Easy Returns' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <FaGraduationCap className="text-5xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SchoolMart</h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering Education, One Product at a Time
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
              <FaRocket className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To provide students, parents, and educational institutions with seamless access to quality educational materials. We strive to simplify the shopping experience by organizing products intelligently and offering competitive prices, ensuring that every student has the resources they need to succeed academically.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl mb-6">
              <FaLightbulb className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-purple-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become the most trusted and comprehensive educational resource platform globally. We envision a future where every student, regardless of their location or background, can easily access quality educational materials that support their learning journey and help them achieve their full potential.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-20 relative">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=500&fit=crop"
            alt="Education"
            className="w-full h-96 object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-4xl font-bold mb-2">Education for Everyone</h3>
            <p className="text-xl">Making quality resources accessible to all</p>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Who We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaGraduationCap,
                title: 'Students',
                description: 'From elementary to high school and competitive exam preparation. We provide comprehensive resources for every academic level and subject.',
                color: 'blue',
              },
              {
                icon: FaUsers,
                title: 'Parents',
                description: 'Find everything your child needs in one convenient place. Save time and money with our organized catalog and competitive pricing.',
                color: 'purple',
              },
              {
                icon: FaSchool,
                title: 'Institutions',
                description: 'Bulk orders and customized solutions for schools and colleges. Special pricing and dedicated support for educational institutions.',
                color: 'green',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                >
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                    <Icon className="text-5xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaHeart, title: 'Customer First', description: 'Your satisfaction is our priority' },
              { icon: FaCheckCircle, title: 'Quality', description: 'Only the best products' },
              { icon: FaHandshake, title: 'Trust', description: 'Building lasting relationships' },
              { icon: FaLightbulb, title: 'Innovation', description: 'Constantly improving' },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <Icon className="text-4xl text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Icon className="text-green-500 text-2xl flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
