import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <main className="bg-ivory min-h-[70vh] flex flex-col items-center justify-center relative px-6 overflow-hidden">
      {/* Faint Background 404 Graphic */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-serif text-[12rem] md:text-[22rem] font-bold text-charcoal/[0.03] tracking-widest leading-none">
          404
        </span>
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="relative z-10 text-center max-w-xl space-y-6"
      >
        <div className="w-12 h-[1px] bg-gold/50 mx-auto"></div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal tracking-wide">
          Page Not Found
        </h1>
        <p className="font-sans text-sm md:text-base text-charcoal/60 leading-relaxed px-4">
          The requested URL does not exist or has been permanently relocated. Our firm values precision, yet even the most established paths sometimes lead elsewhere.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button variant="primary" className="uppercase tracking-widest text-[11px] px-8 py-3.5">
              Return to Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;
