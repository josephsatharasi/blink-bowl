import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiShoppingCart, HiSearch } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import SearchModal from './SearchModal';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getCartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Books', path: '/books' },
    { name: 'Study Materials', path: '/materials' },
    { name: 'Art & Supplies', path: '/supplies' },
    { name: 'Bags & Accessories', path: '/bags' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SchoolMart
                </span>
                <p className="text-xs text-gray-500 -mt-1">Education Hub</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <HiSearch className="text-xl" />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <HiShoppingCart className="text-xl" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {getCartCount()}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <>
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <FaGraduationCap className="text-blue-600 text-2xl" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">SchoolMart</span>
                <p className="text-xs text-blue-100">Education Hub</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <HiX className="text-white text-2xl" />
            </button>
          </div>

          <div className="py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-6 py-4 font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-l-4 border-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              © 2024 SchoolMart. All rights reserved.
            </p>
          </div>
        </div>
      </>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer />
    </>
  );
};

export default Navbar;
