import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const OurAttorney: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pt-20 pb-10 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl space-y-4"
      >
        <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium block">
          Our Leadership
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal tracking-wide leading-none">
          Our Attorneys
        </h1>
        <p className="font-sans text-sm md:text-base text-charcoal/65 leading-relaxed max-w-2.5xl">
          A collective of specialist legal practitioners committed to excellence, integrity, and the discreet resolution of complex legal matters.
        </p>
      </motion.div>
    </section>
  );
};

export default OurAttorney;
