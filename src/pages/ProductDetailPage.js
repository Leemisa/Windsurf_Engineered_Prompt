import React from 'react';
import { motion } from 'framer-motion';

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container-max section-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-display font-bold text-secondary-900 mb-4">
            Product Details
          </h1>
          <p className="text-xl text-secondary-600 mb-8">
            Detailed product view with image gallery, specifications, and reviews coming soon...
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <p className="text-primary-700">
              🚧 This page will include image gallery, detailed info, quantity selection, tabs, and related products.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
