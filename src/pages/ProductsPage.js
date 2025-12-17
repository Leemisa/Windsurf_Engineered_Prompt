import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import {
  products as allProducts,
  categories,
  sortProducts,
  getProductsByCategory,
} from '../data/mockData';

const ProductsPage = () => {
  const { categorySlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSort = searchParams.get('sort') || 'featured';
  const [sortBy, setSortBy] = useState(initialSort);

  const categoryId = categorySlug || 'all';

  const products = useMemo(() => {
    const list = categoryId === 'all' ? allProducts : getProductsByCategory(categoryId);
    return sortProducts(list, sortBy);
  }, [categoryId, sortBy]);

  const activeCategory = categories.find((c) => c.id === categoryId) || categories[0];

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
    const next = new URLSearchParams(searchParams.toString());
    if (value === 'featured') {
      next.delete('sort');
    } else {
      next.set('sort', value);
    }
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-secondary-900">
              {activeCategory?.name || 'All Products'}
            </h1>
            <p className="text-secondary-600 mt-1">{products.length} products</p>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm text-secondary-600">
              Sort by
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="rounded-lg border border-secondary-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
              <option value="name">Name</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-10 text-center">
            <p className="text-secondary-700">No products found.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
