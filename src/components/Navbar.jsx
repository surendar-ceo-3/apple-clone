import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 
    'Vision', 'AirPods', 'TV & Home', 'Entertainment', 
    'Accessories', 'Support'
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Apple Logo */}
          <a href="#" className="text-2xl hover:text-gray-300">
            
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-gray-300 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">🔍</a>
            <a href="#" className="hover:text-gray-300">🛒</a>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-sm hover:text-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;