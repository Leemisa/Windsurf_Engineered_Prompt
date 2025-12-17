import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Truck,
  CreditCard,
  RotateCcw,
  Send,
} from 'lucide-react';
import toast from 'react-hot-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Trust Badges Section */}
      <div className="bg-secondary-800 py-8">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <Truck size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Free Shipping</h4>
                <p className="text-xs text-secondary-300">On orders over $50</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success-600 rounded-full flex items-center justify-center">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Secure Payment</h4>
                <p className="text-xs text-secondary-300">100% protected</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-warning-600 rounded-full flex items-center justify-center">
                <RotateCcw size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Easy Returns</h4>
                <p className="text-xs text-secondary-300">30-day policy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center">
                <CreditCard size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Payment Options</h4>
                <p className="text-xs text-secondary-300">Multiple methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-2xl font-display font-bold text-white hover:text-primary-400 transition-colors"
              >
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  E
                </div>
                <span>ECommerce</span>
              </Link>
              
              <p className="text-secondary-300 text-sm leading-relaxed">
                Your trusted online shopping destination for quality products at great prices. 
                We're committed to providing exceptional customer service and fast delivery.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin size={16} className="text-primary-400" />
                  <span className="text-secondary-300">123 Commerce St, City, State 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-primary-400" />
                  <span className="text-secondary-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail size={16} className="text-primary-400" />
                  <span className="text-secondary-300">support@ecommerce.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <nav className="space-y-2">
                <Link
                  to="/"
                  className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  All Products
                </Link>
                <Link
                  to="/category/electronics"
                  className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Electronics
                </Link>
                <Link
                  to="/category/clothing"
                  className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Clothing
                </Link>
                <Link
                  to="/category/home"
                  className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Home & Garden
                </Link>
                <Link
                  to="/wishlist"
                  className="block text-secondary-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Wishlist
                </Link>
              </nav>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/size-guide"
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
              <p className="text-secondary-300 text-sm">
                Subscribe to our newsletter for exclusive deals and updates.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    disabled={isSubscribing}
                    aria-label="Email address for newsletter"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubscribing ? (
                    <div className="loading-spinner w-4 h-4"></div>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                    aria-label="Follow us on Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:text-white hover:bg-primary-600 transition-all duration-200"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary-950 py-4">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-400">
              &copy; {currentYear} ECommerce. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-secondary-400 hover:text-primary-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
