import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './context/AppContext';

// Import components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import SearchPage from './pages/SearchPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';

// Import CSS
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App min-h-screen bg-white flex flex-col">
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />
              
              {/* Products */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/category/:categorySlug" element={<ProductsPage />} />
              
              {/* Shopping */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              
              {/* Search */}
              <Route path="/search" element={<SearchPage />} />
              
              {/* Account */}
              <Route path="/account" element={<AccountPage />} />
              <Route path="/login" element={<AccountPage />} />
              <Route path="/register" element={<AccountPage />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
              },
              success: {
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
