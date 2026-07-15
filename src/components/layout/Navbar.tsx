import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Attorneys', path: '/attorneys' },
    { name: 'Case Results', path: '/case-results' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link 
          to="/" 
          className="font-serif text-xl md:text-2xl font-semibold text-charcoal hover:opacity-95 transition-opacity select-none focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-2"
        >
          Adeyemi & Partners
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-sans text-xs uppercase tracking-wider transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-2 ${
                  isActive 
                    ? 'text-burgundy font-semibold border-b border-burgundy/40 pb-1' 
                    : 'text-charcoal/70 hover:text-burgundy'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-charcoal focus:outline-none focus:ring-1 focus:ring-gold rounded-[4px] p-2 hover:bg-charcoal/5"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-ivory border-b border-charcoal/10 shadow-lg transition-transform duration-200">
          <nav className="flex flex-col py-6 px-6 space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-sans text-sm uppercase tracking-widest py-2 border-b border-charcoal/5 last:border-b-0 focus:outline-none ${
                    isActive ? 'text-burgundy font-semibold' : 'text-charcoal/75'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
