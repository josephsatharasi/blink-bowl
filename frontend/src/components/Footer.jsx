import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SchoolMart
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all educational needs. Quality products, competitive prices, and exceptional service.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, link: '#' },
                { icon: FaTwitter, link: '#' },
                { icon: FaInstagram, link: '#' },
                { icon: FaLinkedin, link: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Books', path: '/books' },
                { name: 'Study Materials', path: '/materials' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Categories
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Notebooks', path: '/books' },
                { name: 'Textbooks', path: '/books' },
                { name: 'Stationery', path: '/supplies' },
                { name: 'Art Supplies', path: '/supplies' },
                { name: 'School Bags', path: '/bags' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="hover:text-white transition-colors">info@schoolmart.com</p>
                  <p className="hover:text-white transition-colors">support@schoolmart.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="hover:text-white transition-colors">+1 234 567 8900</p>
                  <p className="hover:text-white transition-colors">+1 234 567 8901</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="hover:text-white transition-colors">
                  123 Education Street<br />
                  Learning City, ST 12345
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 SchoolMart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
