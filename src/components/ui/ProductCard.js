import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Star,
  ShoppingCart,
  Eye,
  Badge,
  Zap,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { formatPrice, generateStarRating } from '../../data/mockData';

const ProductCard = ({ product, className = '', showQuickView = true }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const isInWishlist = wishlist.some(item => item.id === product.id);
  const starRating = generateStarRating(product.rating);
  const hasDiscount = product.discount > 0;
  const discountedPrice = hasDiscount 
    ? product.originalPrice - (product.originalPrice * product.discount / 100)
    : product.price;

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop';
    setIsImageLoading(false);
  };

  const handleMouseEnter = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };

  return (
    <motion.div
      className={`card-hover group relative ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/products/${product.slug}`}
        className="block"
        aria-label={`View details for ${product.name}`}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-t-xl bg-secondary-100">
          {/* Product Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
            {product.isNew && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-800">
                <Zap size={12} className="mr-1" />
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
                <Badge size={12} className="mr-1" />
                Bestseller
              </span>
            )}
            {hasDiscount && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-200 ${
              isInWishlist
                ? 'bg-accent-500 text-white shadow-md'
                : 'bg-white/80 text-secondary-600 hover:bg-white hover:text-accent-500'
            } backdrop-blur-sm`}
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              size={16}
              className={isInWishlist ? 'fill-current' : ''}
            />
          </button>

          {/* Product Image */}
          <div className="relative w-full h-full">
            {isImageLoading && (
              <div className="absolute inset-0 bg-secondary-200 animate-pulse rounded-t-xl" />
            )}
            <img
              src={product.images?.[currentImageIndex] || product.images?.[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          </div>

          {/* Quick Actions Overlay */}
          {showQuickView && (
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-2">
                <motion.button
                  onClick={handleAddToCart}
                  className="p-3 bg-white rounded-full text-secondary-700 hover:text-primary-600 shadow-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={18} />
                </motion.button>
                <motion.button
                  className="p-3 bg-white rounded-full text-secondary-700 hover:text-primary-600 shadow-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Quick view"
                >
                  <Eye size={18} />
                </motion.button>
              </div>
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-t-xl">
              <span className="bg-secondary-900 text-white px-4 py-2 rounded-lg font-medium text-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Brand */}
          {product.brand && (
            <p className="text-xs text-secondary-500 font-medium uppercase tracking-wide">
              {product.brand}
            </p>
          )}

          {/* Product Name */}
          <h3 className="font-semibold text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  className={
                    index < starRating.fullStars
                      ? 'text-warning-400 fill-current'
                      : index === starRating.fullStars && starRating.hasHalfStar
                      ? 'text-warning-400 fill-current opacity-50'
                      : 'text-secondary-300'
                  }
                />
              ))}
            </div>
            <span className="text-sm text-secondary-600">
              {starRating.rating}
            </span>
            <span className="text-xs text-secondary-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-secondary-900">
              {formatPrice(discountedPrice)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-secondary-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock Count (if low) */}
          {product.inStock && product.stockCount <= 10 && (
            <p className="text-xs text-warning-600 font-medium">
              Only {product.stockCount} left in stock
            </p>
          )}
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <motion.button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
            product.inStock
              ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
              : 'bg-secondary-200 text-secondary-500 cursor-not-allowed'
          }`}
          whileHover={product.inStock ? { scale: 1.02 } : {}}
          whileTap={product.inStock ? { scale: 0.98 } : {}}
          aria-label={`Add ${product.name} to cart`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
