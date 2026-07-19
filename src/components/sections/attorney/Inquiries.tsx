import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Inquiries: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#EFEBE0] py-14 border-t border-charcoal/5"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-8 space-y-2">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-wide leading-tight">
            Seeking specialized legal counsel?
          </h2>
          <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed max-w-2xl">
            Our team is available for private consultations regarding global market transactions, litigation, and sovereign advisory.
          </p>
        </div>

        {/* Right Side Action Button */}
        <div className="lg:col-span-4 lg:text-right">
          <Link to="/contact">
            <button className="bg-charcoal text-ivory font-sans text-[11px] uppercase tracking-widest px-6 py-4 font-bold hover:bg-burgundy transition-all duration-300 rounded-[4px] cursor-pointer shadow-sm focus:outline-none focus:ring-1 focus:ring-gold focus:ring-offset-2 select-none">
              Inquire for representation
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Inquiries;
