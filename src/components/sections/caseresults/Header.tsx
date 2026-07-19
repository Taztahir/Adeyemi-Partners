import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const Header: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pt-20 pb-10 max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6.5xl font-semibold text-charcoal tracking-wide leading-none">
          Case Results
        </h1>
        <p className="font-sans text-sm md:text-base text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
          A distinguished track record of complex resolutions and landmark victories across all facets of corporate and international law.
        </p>
      </motion.div>
    </section>
  );
};

export default Header;
