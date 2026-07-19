import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { attorneys } from '../../../data/attorneys';

export const Proffessionals: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState('All Professionals');

  const filterOptions = [
    'All Professionals',
    'Corporate Law',
    'Litigation',
    'Banking & Finance',
    'Real Estate',
    'Taxation'
  ];

  // Map filters to attorney IDs based on our mockup screenshot
  const filterMappings: Record<string, string[]> = {
    'All Professionals': [
      'samuel-adeyemi',
      'victoria-sinclair',
      'marcus-thorne',
      'aisha-bello',
      'julius-vance',
      'elizabeth-hart'
    ],
    'Corporate Law': ['samuel-adeyemi', 'marcus-thorne', 'aisha-bello'],
    'Litigation': ['victoria-sinclair', 'samuel-adeyemi'],
    'Banking & Finance': ['marcus-thorne', 'samuel-adeyemi'],
    'Real Estate': ['julius-vance'],
    'Taxation': ['elizabeth-hart']
  };

  const filteredAttorneys = useMemo(() => {
    const allowedIds = filterMappings[selectedFilter] || [];
    return attorneys.filter(attorney => allowedIds.includes(attorney.id));
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
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 border-b border-charcoal/5 pb-6">
        <span className="text-gold text-xs uppercase tracking-widest font-sans font-bold select-none mr-2">
          Filter By:
        </span>
        <div className="flex flex-wrap gap-2.5" role="tablist">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                role="tab"
                aria-selected={isActive}
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
      </div>

      {/* Attorney Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredAttorneys.map((attorney) => (
            <motion.div
              key={attorney.id}
              layout={!shouldReduceMotion}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              className="h-full"
            >
              <div
                className="bg-white border border-charcoal/10 rounded-[4px] p-5 flex flex-col justify-between h-full hover:border-gold hover:shadow-sm transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Photo area with fail-safe fallback */}
                  <div className="aspect-[4/5] bg-charcoal/5 border border-charcoal/10 rounded-[4px] overflow-hidden relative">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.classList.add(
                            'flex',
                            'flex-col',
                            'items-center',
                            'justify-center',
                            'bg-gradient-to-br',
                            'from-charcoal',
                            'to-burgundy',
                            'text-ivory'
                          );
                          const initials = attorney.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('');
                          const iconDiv = document.createElement('div');
                          iconDiv.className = 'text-center p-6 space-y-2 select-none';
                          iconDiv.innerHTML = `
                            <div class="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto bg-charcoal/40">
                              <span class="font-serif text-2xl text-gold font-medium tracking-widest">${initials}</span>
                            </div>
                            <p class="font-serif text-lg tracking-wide mt-2">${attorney.name}</p>
                            <p class="font-sans text-[10px] text-gold/80 uppercase tracking-widest">${attorney.role}</p>
                          `;
                          target.parentElement.appendChild(iconDiv);
                        }
                      }}
                    />
                  </div>

                  {/* Text details */}
                  <div className="space-y-1">
                    <span className="text-gold text-[10px] uppercase tracking-widest font-sans font-bold block">
                      {attorney.role}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-charcoal">
                      {attorney.name}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/65 leading-relaxed pt-1">
                      {attorney.specialization}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 mt-6 border-t border-charcoal/5">
                  <Link
                    to={`/attorneys/${attorney.slug}`}
                    className="font-sans text-[10px] uppercase tracking-widest text-charcoal hover:text-burgundy transition-colors font-bold inline-flex items-center space-x-1 focus:outline-none"
                  >
                    <span>view profile</span>
                    <span className="text-[12px] font-light ml-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Proffessionals;
