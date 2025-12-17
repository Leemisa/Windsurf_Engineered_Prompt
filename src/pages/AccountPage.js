import React from 'react';
import { motion } from 'framer-motion';

const AccountPage = () => {
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
            My Account
          </h1>
          <p className="text-xl text-secondary-600 mb-8">
            Profile management, order history, and account settings coming soon...
          </p>
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
            <p className="text-primary-700">
              🚧 This page will include profile management, order history, addresses, payment methods, and security settings.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccountPage;
