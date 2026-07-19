import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { caseResults } from '../data/caseResults';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const CaseResults: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Intellectual Property', 'International Disputes'];

  const filteredResults = useMemo(() => {
    if (selectedFilter === 'All') return caseResults;
    return caseResults.filter(r => r.category === selectedFilter);
  }, [selectedFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08
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
    <main className="bg-ivory min-h-screen">
      {/* 1. Header Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium block">
            Proven Track Record
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6.5xl font-semibold text-charcoal tracking-wide leading-none">
            Case Results
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/65 leading-relaxed max-w-2.5xl">
            Adeyemi & Partners operates with unwavering diligence to achieve positive outcomes for our clients. Here is a select record of settled and dismissed high-stakes disputes across various legal sectors.
          </p>
        </motion.div>
      </section>

      {/* 2. Case Results Listing Section */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-charcoal/5 pb-6">
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-bold select-none mr-2 self-center">
            Filter By:
          </span>
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border rounded-[4px] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer ${
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

        {/* Case Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[250px]"
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
                <Card borderVariant="gold" className="space-y-4 bg-white hover:shadow-sm transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <Badge variant="gold">{result.category}</Badge>
                    <h3 className="font-serif text-3xl font-semibold text-burgundy">
                      {result.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-charcoal/55 font-semibold">
                      {result.outcome}
                    </p>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed pt-2">
                      {result.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. Inquiry Section */}
      <section className="bg-[#EFEBE0] py-20 border-t border-charcoal/5 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Secure Elite Legal Representation
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed">
            Our firm has represented corporate boards and sovereign entities in high-stakes disputes. If you require representation or advisory, schedule a consultation with our dispute leads.
          </p>
          <div className="pt-4">
            <Link to="/contact">
              <Button variant="primary">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseResults;
