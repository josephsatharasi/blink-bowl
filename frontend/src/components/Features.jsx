import { FaShippingFast, FaShieldAlt, FaHeadset, FaMoneyBillWave, FaUndo, FaAward } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaShippingFast,
      title: 'Fast Delivery',
      description: 'Get your orders delivered within 2-3 business days',
      color: 'blue',
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Payment',
      description: '100% secure payment with multiple payment options',
      color: 'green',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your queries',
      color: 'purple',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Best Prices',
      description: 'Competitive pricing with regular discounts and offers',
      color: 'orange',
    },
    {
      icon: FaUndo,
      title: 'Easy Returns',
      description: 'Hassle-free 7-day return policy on all products',
      color: 'red',
    },
    {
      icon: FaAward,
      title: 'Quality Assured',
      description: 'All products are verified and quality checked',
      color: 'indigo',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Why Choose SchoolMart?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience for all your educational needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${colorClasses[feature.color]} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-r ${colorClasses[feature.color]} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
