import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { categories } from '../../data/mockData';

const Header = () => {
  const {
    cartCount,
    wishlistCount,
    isAuthenticated,
    user,
    isMobileMenuOpen,
    toggleMobileMenu,
    searchQuery,
    setSearchQuery,
  } = useApp();

  const navigate = useNavigate();
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);
  const searchInputRef = useRef(null);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      toggleMobileMenu();
    }
  }, [location.pathname, isMobileMenuOpen, toggleMobileMenu]);

  // Close categories dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCategories && !event.target.closest('.categories-dropdown')) {
        setShowCategories(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCategories]);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white py-2 hidden md:block">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>support@ecommerce.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-display font-bold text-primary-600 hover:text-primary-700 transition-colors"
            aria-label="Go to homepage"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              E
            </div>
            <span className="hidden sm:block">ECommerce</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-secondary-500 hover:text-primary-600 transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Mobile */}
            <button
              onClick={() => searchInputRef.current?.focus()}
              className="md:hidden p-2 text-secondary-600 hover:text-primary-600 transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 text-secondary-600 hover:text-primary-600 transition-colors group"
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <Heart size={24} className="group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {wishlistCount > 99 ? '99+' : wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-secondary-600 hover:text-primary-600 transition-colors group"
              aria-label={`Shopping cart (${cartCount} items)`}
            >
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link
              to={isAuthenticated ? "/account" : "/login"}
              className="hidden sm:flex items-center space-x-2 p-2 text-secondary-600 hover:text-primary-600 transition-colors"
              aria-label={isAuthenticated ? "My account" : "Sign in"}
            >
              <User size={24} />
              <span className="hidden lg:block text-sm font-medium">
                {isAuthenticated ? `Hi, ${user?.firstName || 'User'}` : 'Sign In'}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-secondary-600 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-secondary-500 hover:text-primary-600 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary-50 border-t border-secondary-200 hidden md:block">
        <div className="container-max section-padding">
          <div className="flex items-center space-x-8 py-3">
            {/* Categories Dropdown */}
            <div className="relative categories-dropdown">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                aria-expanded={showCategories}
                aria-haspopup="true"
              >
                <Menu size={18} />
                <span>Categories</span>
                <ChevronDown size={16} className={`transition-transform ${showCategories ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-strong border border-secondary-200 py-2 z-50"
                  >
                    {categories.slice(1).map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.slug}`}
                        className="block px-4 py-3 text-secondary-700 hover:bg-secondary-50 hover:text-primary-600 transition-colors"
                        onClick={() => setShowCategories(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === '/' ? 'text-primary-600' : 'text-secondary-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === '/products' ? 'text-primary-600' : 'text-secondary-700'
                }`}
              >
                All Products
              </Link>
              <Link
                to="/category/electronics"
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === '/category/electronics' ? 'text-primary-600' : 'text-secondary-700'
                }`}
              >
                Electronics
              </Link>
              <Link
                to="/category/clothing"
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === '/category/clothing' ? 'text-primary-600' : 'text-secondary-700'
                }`}
              >
                Clothing
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-secondary-200 overflow-hidden"
          >
            <div className="section-padding py-4 space-y-4">
              {/* User Account - Mobile */}
              <Link
                to={isAuthenticated ? "/account" : "/login"}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 transition-colors"
              >
                <User size={20} />
                <span className="font-medium">
                  {isAuthenticated ? `Hi, ${user?.firstName || 'User'}` : 'Sign In'}
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block p-3 rounded-lg hover:bg-secondary-50 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="block p-3 rounded-lg hover:bg-secondary-50 transition-colors font-medium"
                >
                  All Products
                </Link>
              </div>

              {/* Categories */}
              <div className="border-t border-secondary-200 pt-4">
                <h3 className="font-semibold text-secondary-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="block p-2 pl-4 rounded-lg hover:bg-secondary-50 transition-colors text-secondary-700"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
