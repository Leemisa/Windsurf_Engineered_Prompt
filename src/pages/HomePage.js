import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Headphones,
  ChevronRight,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ui/ProductCard';
import {
  getFeaturedProducts,
  getNewProducts,
  categories,
} from '../data/mockData';

const HomePage = () => {
  const { setLoading } = useApp();

  useEffect(() => {
    // Simulate loading for better UX
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-max section-padding py-20 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-balance"
              variants={itemVariants}
            >
              Discover Amazing
              <span className="block text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto text-balance"
              variants={itemVariants}
            >
              Shop the latest trends with unbeatable prices, fast shipping, and exceptional customer service.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <Link
                to="/products"
                className="btn-primary text-lg px-8 py-4 bg-white text-primary-700 hover:bg-primary-50 shadow-lg"
              >
                Shop Now
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/category/electronics"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-4"
              >
                Explore Categories
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-white rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-max section-padding">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="text-center group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <Truck size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Free Shipping</h3>
              <p className="text-secondary-600">Free shipping on all orders over $50. Fast and reliable delivery.</p>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success-200 transition-colors">
                <Shield size={32} className="text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Secure Payment</h3>
              <p className="text-secondary-600">Your payment information is always safe and secure with us.</p>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warning-200 transition-colors">
                <RotateCcw size={32} className="text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Easy Returns</h3>
              <p className="text-secondary-600">30-day return policy. No questions asked, hassle-free returns.</p>
            </motion.div>

            <motion.div
              className="text-center group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                <Headphones size={32} className="text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">24/7 Support</h3>
              <p className="text-secondary-600">Round-the-clock customer support to help you anytime.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Discover our wide range of products across different categories
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {categories.slice(1, 7).map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="group block p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <span className="text-2xl font-bold text-primary-600">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <ChevronRight size={16} className="mx-auto mt-2 text-secondary-400 group-hover:text-primary-600 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-max section-padding">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-secondary-600">
                Hand-picked products just for you
              </p>
            </div>
            <Link
              to="/products"
              className="btn-outline mt-4 md:mt-0"
            >
              View All Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {featuredProducts.slice(0, 4).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
                New Arrivals
              </h2>
              <p className="text-xl text-secondary-600">
                Latest products added to our collection
              </p>
            </div>
            <Link
              to="/products?sort=newest"
              className="btn-outline mt-4 md:mt-0"
            >
              View All New
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {newProducts.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment: "Amazing quality products and super fast delivery! I'm a customer for life.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
              },
              {
                name: "Mike Chen",
                rating: 5,
                comment: "Great customer service and the return policy is exactly as advertised. Highly recommend!",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
              },
              {
                name: "Emily Davis",
                rating: 5,
                comment: "Love the variety of products and the website is so easy to use. Shopping made simple!",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-soft"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-warning-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-secondary-900">{testimonial.name}</p>
                    <p className="text-sm text-secondary-500">Verified Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max section-padding text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover amazing products at unbeatable prices.
            </p>
            <Link
              to="/products"
              className="btn-primary bg-white text-primary-700 hover:bg-primary-50 text-lg px-8 py-4 shadow-lg"
            >
              Start Shopping Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
