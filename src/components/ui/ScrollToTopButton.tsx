import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center bg-charcoal text-ivory border border-charcoal hover:bg-burgundy hover:border-burgundy transition-colors rounded-[4px] shadow-lg focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-2 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
