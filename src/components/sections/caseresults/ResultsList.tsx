import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { caseResults } from '../../../data/caseResults';

export const ResultsList: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState('All Results');

  const filterOptions = [
    'All Results',
    'Corporate Law',
    'Litigation',
    'Real Estate',
    'Taxation',
    'IP'
  ];

  const filteredResults = useMemo(() => {
    if (selectedFilter === 'All Results') return caseResults;
    return caseResults.filter(
      r => r.category.toLowerCase() === selectedFilter.toLowerCase()
    );
  }, [selectedFilter]);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } 
    }
  };

  return (
    <section className="pb-24 max-w-7xl mx-auto px-6">
      {/* Filter Tabs Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 border-b border-charcoal/5 pb-6">
        <div className="flex flex-wrap gap-2.5 justify-center" role="tablist">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(filter)}
                className={`font-sans text-xs uppercase tracking-widest px-5 py-2.5 border rounded-[4px] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer ${
                  isActive
                    ? 'bg-charcoal text-ivory border-charcoal font-semibold shadow-sm'
                    : 'bg-transparent text-charcoal/70 border-charcoal/15 hover:border-charcoal/40'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredResults.map((result) => (
            <motion.div
              key={result.id}
              layout={!shouldReduceMotion}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              className="h-full"
            >
              <div
                className="bg-white border border-charcoal/10 rounded-[4px] p-6 flex flex-col justify-between h-full hover:border-gold hover:shadow-sm transition-all duration-300"
              >
                <div className="space-y-3">
                  <span className="text-gold text-[10px] uppercase tracking-widest font-sans font-bold block mb-1">
                    {result.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal leading-tight">
                    {result.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-charcoal/65 leading-relaxed">
                    {result.description}
                  </p>
                </div>

                {/* Footer Metadata & Arrow */}
                <div className="pt-5 mt-6 border-t border-charcoal/5 flex justify-between items-center text-[10px] font-sans text-gold font-bold uppercase tracking-wider">
                  <span>{result.outcome}</span>
                  <span className="text-[14px] font-light">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ResultsList;
