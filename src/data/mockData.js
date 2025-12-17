// Product categories
export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'electronics', name: 'Electronics', slug: 'electronics' },
  { id: 'clothing', name: 'Clothing', slug: 'clothing' },
  { id: 'home', name: 'Home & Garden', slug: 'home' },
  { id: 'sports', name: 'Sports & Outdoors', slug: 'sports' },
  { id: 'books', name: 'Books', slug: 'books' },
  { id: 'beauty', name: 'Beauty & Personal Care', slug: 'beauty' },
  { id: 'toys', name: 'Toys & Games', slug: 'toys' },
];

// Mock products data
export const products = [
  // Electronics
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    category: 'electronics',
    brand: 'AudioTech',
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockCount: 45,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop',
    ],
    description: 'Experience premium sound quality with our latest wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium comfort padding',
      'Bluetooth 5.0 connectivity',
      'Quick charge technology',
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Weight': '250g',
    },
    tags: ['wireless', 'noise-cancelling', 'premium', 'bluetooth'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    category: 'electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    stockCount: 23,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop',
    ],
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS tracking, and 7-day battery life.',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      '7-day battery life',
      'Water resistant',
      'Sleep tracking',
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '7 days',
      'Water Resistance': '5ATM',
      'Connectivity': 'Bluetooth, WiFi',
      'Weight': '45g',
    },
    tags: ['smartwatch', 'fitness', 'gps', 'health'],
    isFeatured: true,
    isNew: true,
    isBestseller: false,
  },
  // Clothing
  {
    id: 3,
    name: 'Premium Cotton T-Shirt',
    slug: 'premium-cotton-t-shirt',
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    category: 'clothing',
    brand: 'ComfortWear',
    rating: 4.7,
    reviewCount: 456,
    inStock: true,
    stockCount: 120,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
    ],
    description: 'Soft, comfortable, and stylish premium cotton t-shirt perfect for everyday wear. Available in multiple colors and sizes.',
    features: [
      '100% premium cotton',
      'Pre-shrunk fabric',
      'Reinforced seams',
      'Tagless design',
      'Machine washable',
    ],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Origin': 'Made in USA',
      'Weight': '180gsm',
    },
    tags: ['cotton', 'comfortable', 'casual', 'everyday'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Gray', 'Red'],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: 'Designer Denim Jacket',
    slug: 'designer-denim-jacket',
    price: 89.99,
    originalPrice: 129.99,
    discount: 31,
    category: 'clothing',
    brand: 'UrbanStyle',
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    stockCount: 67,
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    ],
    description: 'Classic denim jacket with modern styling. Perfect for layering and adding a casual touch to any outfit.',
    features: [
      'Premium denim fabric',
      'Classic button closure',
      'Multiple pockets',
      'Adjustable cuffs',
      'Vintage wash',
    ],
    specifications: {
      'Material': '98% Cotton, 2% Elastane',
      'Fit': 'Regular',
      'Care': 'Machine wash cold',
      'Style': 'Classic',
      'Weight': '450gsm',
    },
    tags: ['denim', 'jacket', 'casual', 'layering'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    isFeatured: true,
    isNew: false,
    isBestseller: false,
  },
  // Home & Garden
  {
    id: 5,
    name: 'Modern Table Lamp',
    slug: 'modern-table-lamp',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    category: 'home',
    brand: 'LightCraft',
    rating: 4.4,
    reviewCount: 178,
    inStock: true,
    stockCount: 34,
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop',
    ],
    description: 'Elegant modern table lamp with adjustable brightness and sleek design. Perfect for any contemporary home.',
    features: [
      'Adjustable brightness',
      'Touch control',
      'LED bulb included',
      'Stable base',
      'Modern design',
    ],
    specifications: {
      'Height': '24 inches',
      'Base Diameter': '8 inches',
      'Bulb Type': 'LED',
      'Power': '12W',
      'Material': 'Metal and Fabric',
    },
    tags: ['lamp', 'lighting', 'modern', 'home-decor'],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
  },
  // Sports & Outdoors
  {
    id: 6,
    name: 'Professional Yoga Mat',
    slug: 'professional-yoga-mat',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    category: 'sports',
    brand: 'ZenFit',
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    stockCount: 89,
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d405b7a30db9?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    ],
    description: 'Premium non-slip yoga mat with superior grip and cushioning. Perfect for all types of yoga and fitness exercises.',
    features: [
      'Non-slip surface',
      'Extra cushioning',
      'Eco-friendly material',
      'Easy to clean',
      'Carrying strap included',
    ],
    specifications: {
      'Dimensions': '72" x 24"',
      'Thickness': '6mm',
      'Material': 'TPE',
      'Weight': '2.5 lbs',
      'Care': 'Wipe clean',
    },
    tags: ['yoga', 'fitness', 'exercise', 'non-slip'],
    colors: ['Purple', 'Blue', 'Green', 'Pink', 'Black'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
  },
  // Books
  {
    id: 7,
    name: 'The Art of Programming',
    slug: 'the-art-of-programming',
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    category: 'books',
    brand: 'TechBooks',
    rating: 4.8,
    reviewCount: 342,
    inStock: true,
    stockCount: 156,
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&h=500&fit=crop',
    ],
    description: 'Comprehensive guide to modern programming techniques and best practices. Perfect for both beginners and experienced developers.',
    features: [
      'Comprehensive coverage',
      'Real-world examples',
      'Best practices',
      'Updated content',
      'Expert insights',
    ],
    specifications: {
      'Pages': '450',
      'Format': 'Paperback',
      'Language': 'English',
      'Publisher': 'TechBooks',
      'ISBN': '978-1234567890',
    },
    tags: ['programming', 'technology', 'education', 'development'],
    isFeatured: false,
    isNew: true,
    isBestseller: false,
  },
  // Beauty & Personal Care
  {
    id: 8,
    name: 'Organic Face Moisturizer',
    slug: 'organic-face-moisturizer',
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    category: 'beauty',
    brand: 'NaturalGlow',
    rating: 4.6,
    reviewCount: 789,
    inStock: true,
    stockCount: 78,
    images: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop',
    ],
    description: 'Nourishing organic face moisturizer with natural ingredients. Suitable for all skin types and provides long-lasting hydration.',
    features: [
      'Organic ingredients',
      'All skin types',
      'Long-lasting hydration',
      'Non-greasy formula',
      'Cruelty-free',
    ],
    specifications: {
      'Volume': '50ml',
      'Skin Type': 'All types',
      'Key Ingredients': 'Aloe Vera, Jojoba Oil',
      'Shelf Life': '24 months',
      'Origin': 'Made in USA',
    },
    tags: ['organic', 'moisturizer', 'skincare', 'natural'],
    isFeatured: false,
    isNew: false,
    isBestseller: true,
  },
];

// Mock reviews data
export const reviews = [
  {
    id: 1,
    productId: 1,
    userId: 'user1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    title: 'Amazing sound quality!',
    comment: 'These headphones exceeded my expectations. The noise cancellation is incredible and the battery life is exactly as advertised.',
    date: '2024-01-15',
    helpful: 23,
    verified: true,
  },
  {
    id: 2,
    productId: 1,
    userId: 'user2',
    userName: 'Mike Chen',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
    rating: 4,
    title: 'Great value for money',
    comment: 'Really good headphones for the price. Comfortable to wear for long periods.',
    date: '2024-01-10',
    helpful: 15,
    verified: true,
  },
  {
    id: 3,
    productId: 2,
    userId: 'user3',
    userName: 'Emily Davis',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
    rating: 5,
    title: 'Perfect fitness companion',
    comment: 'Love this smartwatch! The fitness tracking features are very accurate and the battery life is impressive.',
    date: '2024-01-12',
    helpful: 31,
    verified: true,
  },
];

// Helper functions
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const calculateDiscountedPrice = (originalPrice, discount) => {
  return originalPrice - (originalPrice * discount / 100);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getBestsellerProducts = () => {
  return products.filter(product => product.isBestseller);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getRelatedProducts = (productId, categoryId, limit = 4) => {
  return products
    .filter(product => product.id !== productId && product.category === categoryId)
    .slice(0, limit);
};

export const searchProducts = (query, categoryId = 'all') => {
  let filteredProducts = categoryId === 'all' ? products : getProductsByCategory(categoryId);
  
  if (!query) return filteredProducts;
  
  const searchTerm = query.toLowerCase();
  return filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sortedProducts.sort((a, b) => b.isNew - a.isNew);
    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'featured':
    default:
      return sortedProducts.sort((a, b) => b.isFeatured - a.isFeatured);
  }
};

export const filterProductsByPrice = (products, minPrice, maxPrice) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

export const getProductReviews = (productId) => {
  return reviews.filter(review => review.productId === productId);
};

export const calculateAverageRating = (productReviews) => {
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / productReviews.length).toFixed(1);
};

export const generateProductUrl = (product) => {
  return `/products/${product.slug}`;
};

export const generateCategoryUrl = (category) => {
  return `/category/${category.slug}`;
};

// Utility function to generate star rating display
export const generateStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    fullStars,
    hasHalfStar,
    emptyStars,
    rating: rating.toFixed(1),
  };
};

// Mock shipping options
export const shippingOptions = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: '5-7 business days',
    price: 5.99,
    estimatedDays: '5-7',
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: '2-3 business days',
    price: 12.99,
    estimatedDays: '2-3',
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next business day',
    price: 24.99,
    estimatedDays: '1',
  },
];

// Mock payment methods
export const paymentMethods = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    description: 'Visa, Mastercard, American Express',
    icon: 'credit-card',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Pay with your PayPal account',
    icon: 'paypal',
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    description: 'Pay with Touch ID or Face ID',
    icon: 'apple',
  },
  {
    id: 'google-pay',
    name: 'Google Pay',
    description: 'Pay with Google Pay',
    icon: 'google',
  },
];

// Export all data and utilities
const mockDataExports = {
  // Data
  products,
  categories,
  reviews,
  shippingOptions,
  paymentMethods,
  
  // Utilities
  formatPrice,
  calculateDiscountedPrice,
  formatDate,
  getProductsByCategory,
  getFeaturedProducts,
  getNewProducts,
  getBestsellerProducts,
  getProductById,
  getProductBySlug,
  getRelatedProducts,
  searchProducts,
  sortProducts,
  filterProductsByPrice,
  getProductReviews,
  calculateAverageRating,
  generateProductUrl,
  generateCategoryUrl,
  generateStarRating,
};

export default mockDataExports;
