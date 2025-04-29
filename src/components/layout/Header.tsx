import React, { useState, useEffect } from 'react';
import { UserCircle, Menu, X, Heart, Activity, Shield, LogOut } from 'lucide-react';

interface HeaderProps {
  userRole?: 'donor' | 'recipient' | 'medical' | 'admin' | null;
}

const Header: React.FC<HeaderProps> = ({ userRole }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart 
            className="text-red-500 mr-2" 
            size={28} 
            fill="#F05252" 
            strokeWidth={1.5} 
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            OrganChain
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-teal-500 transition-colors">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-teal-500 transition-colors">
            About
          </a>
          <a href="/how-it-works" className="text-gray-700 hover:text-teal-500 transition-colors">
            How It Works
          </a>
          {userRole ? (
            <a href="/dashboard" className="text-gray-700 hover:text-teal-500 transition-colors">
              Dashboard
            </a>
          ) : (
            <a href="/register" className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-md hover:opacity-90 transition-opacity">
              Register
            </a>
          )}
          {userRole && (
            <div className="flex items-center">
              <UserCircle className="text-gray-700 mr-2" size={24} />
              <span className="text-sm capitalize">{userRole}</span>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/" className="text-gray-700 hover:text-teal-500 transition-colors py-2 border-b border-gray-100">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-teal-500 transition-colors py-2 border-b border-gray-100">
              About
            </a>
            <a href="/how-it-works" className="text-gray-700 hover:text-teal-500 transition-colors py-2 border-b border-gray-100">
              How It Works
            </a>
            {userRole ? (
              <a href="/dashboard" className="text-gray-700 hover:text-teal-500 transition-colors py-2 border-b border-gray-100">
                Dashboard
              </a>
            ) : (
              <a href="/register" className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-md hover:opacity-90 transition-opacity text-center">
                Register
              </a>
            )}
            {userRole && (
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <UserCircle className="text-gray-700 mr-2" size={24} />
                  <span className="text-sm capitalize">{userRole}</span>
                </div>
                <button className="flex items-center text-red-500">
                  <LogOut size={18} className="mr-1" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;