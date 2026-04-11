import { FaUsers, FaBox, FaSmile, FaTrophy } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: FaUsers,
      number: '10,000+',
      label: 'Happy Students',
      color: 'blue',
    },
    {
      icon: FaBox,
      number: '5,000+',
      label: 'Products Available',
      color: 'purple',
    },
    {
      icon: FaSmile,
      number: '98%',
      label: 'Customer Satisfaction',
      color: 'green',
    },
    {
      icon: FaTrophy,
      number: '50+',
      label: 'Awards Won',
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Achievements
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center transform hover:scale-110 transition-all duration-500"
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-5 rounded-xl bg-gradient-to-r ${colorClasses[stat.color]} mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="text-4xl text-white" />
                  </div>

                  {/* Number */}
                  <h3 className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>

                  {/* Label */}
                  <p className="text-blue-100 text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
