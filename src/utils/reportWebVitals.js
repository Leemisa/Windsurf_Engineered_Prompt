import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

// Enhanced performance monitoring for eCommerce optimization
export const trackPerformanceMetrics = () => {
  // Track Core Web Vitals
  getCLS((metric) => {
    console.log('CLS:', metric);
    // Send to analytics service
  });

  getFID((metric) => {
    console.log('FID:', metric);
    // Send to analytics service
  });

  getFCP((metric) => {
    console.log('FCP:', metric);
    // Send to analytics service
  });

  getLCP((metric) => {
    console.log('LCP:', metric);
    // Send to analytics service
  });

  getTTFB((metric) => {
    console.log('TTFB:', metric);
    // Send to analytics service
  });
};

// Performance optimization utilities
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (srcArray) => {
  return Promise.all(srcArray.map(preloadImage));
};

// Lazy loading utility
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Performance timing utilities
export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

export default reportWebVitals;
