import React, { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';

// Initial state
const initialState = {
  // Cart management
  cart: [],
  cartCount: 0,
  cartTotal: 0,
  
  // Wishlist management
  wishlist: [],
  wishlistCount: 0,
  
  // User data
  user: null,
  isAuthenticated: false,
  
  // UI state
  isMobileMenuOpen: false,
  isCartOpen: false,
  isSearchOpen: false,
  
  // Search and filters
  searchQuery: '',
  selectedCategory: 'all',
  priceRange: [0, 1000],
  sortBy: 'featured',
  
  // Loading states
  isLoading: false,
  
  // Recently viewed products
  recentlyViewed: [],
};

// Action types
const actionTypes = {
  // Cart actions
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  
  // Wishlist actions
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  CLEAR_WISHLIST: 'CLEAR_WISHLIST',
  
  // User actions
  SET_USER: 'SET_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  
  // UI actions
  TOGGLE_MOBILE_MENU: 'TOGGLE_MOBILE_MENU',
  TOGGLE_CART: 'TOGGLE_CART',
  TOGGLE_SEARCH: 'TOGGLE_SEARCH',
  
  // Search and filter actions
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_PRICE_RANGE: 'SET_PRICE_RANGE',
  SET_SORT_BY: 'SET_SORT_BY',
  
  // Loading actions
  SET_LOADING: 'SET_LOADING',
  
  // Recently viewed
  ADD_TO_RECENTLY_VIEWED: 'ADD_TO_RECENTLY_VIEWED',
  
  // Hydrate from localStorage
  HYDRATE_STATE: 'HYDRATE_STATE',
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      let newCart;
      
      if (existingItem) {
        newCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      } else {
        newCart = [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
      
      const cartCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
      const cartTotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        cart: newCart,
        cartCount,
        cartTotal,
      };
    }
    
    case actionTypes.REMOVE_FROM_CART: {
      const newCart = state.cart.filter(item => item.id !== action.payload);
      const cartCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
      const cartTotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        cart: newCart,
        cartCount,
        cartTotal,
      };
    }
    
    case actionTypes.UPDATE_CART_QUANTITY: {
      const newCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);
      
      const cartCount = newCart.reduce((sum, item) => sum + item.quantity, 0);
      const cartTotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      return {
        ...state,
        cart: newCart,
        cartCount,
        cartTotal,
      };
    }
    
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
        cartCount: 0,
        cartTotal: 0,
      };
    
    case actionTypes.ADD_TO_WISHLIST: {
      const isAlreadyInWishlist = state.wishlist.some(item => item.id === action.payload.id);
      if (isAlreadyInWishlist) return state;
      
      const newWishlist = [...state.wishlist, action.payload];
      return {
        ...state,
        wishlist: newWishlist,
        wishlistCount: newWishlist.length,
      };
    }
    
    case actionTypes.REMOVE_FROM_WISHLIST: {
      const newWishlist = state.wishlist.filter(item => item.id !== action.payload);
      return {
        ...state,
        wishlist: newWishlist,
        wishlistCount: newWishlist.length,
      };
    }
    
    case actionTypes.CLEAR_WISHLIST:
      return {
        ...state,
        wishlist: [],
        wishlistCount: 0,
      };
    
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    
    case actionTypes.TOGGLE_MOBILE_MENU:
      return {
        ...state,
        isMobileMenuOpen: !state.isMobileMenuOpen,
      };
    
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    
    case actionTypes.TOGGLE_SEARCH:
      return {
        ...state,
        isSearchOpen: !state.isSearchOpen,
      };
    
    case actionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    
    case actionTypes.SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
      };
    
    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case actionTypes.ADD_TO_RECENTLY_VIEWED: {
      const filtered = state.recentlyViewed.filter(item => item.id !== action.payload.id);
      const newRecentlyViewed = [action.payload, ...filtered].slice(0, 10);
      
      return {
        ...state,
        recentlyViewed: newRecentlyViewed,
      };
    }
    
    case actionTypes.HYDRATE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('ecommerce-app-state');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        dispatch({ type: actionTypes.HYDRATE_STATE, payload: parsedState });
      }
    } catch (error) {
      console.error('Error loading state from localStorage:', error);
    }
  }, []);
  
  // Save to localStorage whenever relevant state changes
  useEffect(() => {
    localStorage.setItem('ecommerce_cart', JSON.stringify(state.cart));
    localStorage.setItem('ecommerce_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('ecommerce_user', JSON.stringify(state.user));
    localStorage.setItem('ecommerce_recently_viewed', JSON.stringify(state.recentlyViewed));
  }, [state.cart, state.wishlist, state.user, state.recentlyViewed, state.cartCount, state.cartTotal, state.isAuthenticated, state.wishlistCount]);
  
  // Action creators
  const actions = {
    // Cart actions
    addToCart: (product, quantity = 1) => {
      dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...product, quantity } });
      toast.success(`${product.name} added to cart!`);
    },
    
    removeFromCart: (productId) => {
      dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
      toast.success('Item removed from cart');
    },
    
    updateCartQuantity: (productId, quantity) => {
      dispatch({ type: actionTypes.UPDATE_CART_QUANTITY, payload: { id: productId, quantity } });
    },
    
    clearCart: () => {
      dispatch({ type: actionTypes.CLEAR_CART });
      toast.success('Cart cleared');
    },
    
    // Wishlist actions
    addToWishlist: (product) => {
      const isAlreadyInWishlist = state.wishlist.some(item => item.id === product.id);
      if (isAlreadyInWishlist) {
        toast.error('Item already in wishlist');
        return;
      }
      dispatch({ type: actionTypes.ADD_TO_WISHLIST, payload: product });
      toast.success(`${product.name} added to wishlist!`);
    },
    
    removeFromWishlist: (productId) => {
      dispatch({ type: actionTypes.REMOVE_FROM_WISHLIST, payload: productId });
      toast.success('Item removed from wishlist');
    },
    
    clearWishlist: () => {
      dispatch({ type: actionTypes.CLEAR_WISHLIST });
      toast.success('Wishlist cleared');
    },
    
    // User actions
    setUser: (user) => {
      dispatch({ type: actionTypes.SET_USER, payload: user });
    },
    
    logoutUser: () => {
      dispatch({ type: actionTypes.LOGOUT_USER });
      toast.success('Logged out successfully');
    },
    
    // UI actions
    toggleMobileMenu: () => {
      dispatch({ type: actionTypes.TOGGLE_MOBILE_MENU });
    },
    
    toggleCart: () => {
      dispatch({ type: actionTypes.TOGGLE_CART });
    },
    
    toggleSearch: () => {
      dispatch({ type: actionTypes.TOGGLE_SEARCH });
    },
    
    // Search and filter actions
    setSearchQuery: (query) => {
      dispatch({ type: actionTypes.SET_SEARCH_QUERY, payload: query });
    },
    
    setCategory: (category) => {
      dispatch({ type: actionTypes.SET_CATEGORY, payload: category });
    },
    
    setPriceRange: (range) => {
      dispatch({ type: actionTypes.SET_PRICE_RANGE, payload: range });
    },
    
    setSortBy: (sortBy) => {
      dispatch({ type: actionTypes.SET_SORT_BY, payload: sortBy });
    },
    
    // Loading actions
    setLoading: (loading) => {
      dispatch({ type: actionTypes.SET_LOADING, payload: loading });
    },
    
    // Recently viewed
    addToRecentlyViewed: (product) => {
      dispatch({ type: actionTypes.ADD_TO_RECENTLY_VIEWED, payload: product });
    },
  };
  
  const value = {
    ...state,
    ...actions,
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
