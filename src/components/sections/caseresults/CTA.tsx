import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-charcoal text-ivory py-20 border-t border-gold/15 text-center"
    >
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <h2 className="font-serif text-3xl md:text-4.5xl font-semibold text-ivory tracking-wide">
          Partner With Excellence
        </h2>
        <p className="font-sans text-xs md:text-sm text-ivory/70 max-w-2xl mx-auto leading-relaxed">
          Our track record is built on precision, discretion, and a profound understanding of the legal landscape. Let us help you navigate your next milestone.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <button className="bg-gold text-charcoal font-sans text-[11px] uppercase tracking-widest px-8 py-4 font-bold rounded-[4px] hover:bg-gold/90 transition-all duration-300 shadow-sm focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-2 select-none cursor-pointer">
              Request Consultation
            </button>
          </Link>
          <Link to="/attorneys">
            <button className="bg-transparent text-ivory border border-ivory/20 font-sans text-[11px] uppercase tracking-widest px-8 py-4 font-bold rounded-[4px] hover:bg-white/5 transition-all duration-300 focus:outline-none select-none cursor-pointer">
              View Team
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CTA;
