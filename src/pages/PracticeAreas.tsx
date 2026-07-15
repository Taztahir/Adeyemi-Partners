import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { practiceAreas } from '../data/practiceAreas';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

// Custom hand-crafted SVGs matching the mockup icons
const customIcons: Record<string, React.FC<{ className?: string }>> = {
  'corporate-law': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  'litigation': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M6.5 7.5L4 10m0 0l2.5 2.5M4 10h5m8.5-2.5l2.5 2.5m0 0l-2.5 2.5m2.5-2.5h-5" />
    </svg>
  ),
  'real-estate': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  'family-law': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  'intellectual-property': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 10-3-3m3 3a3 3 0 113-3m-9 12h12a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H6a1.5 1.5 0 00-1.5 1.5v6A1.5 1.5 0 006 18z" />
    </svg>
  ),
  'employment-law': ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8v-1.661c0-1.081-.768-2.015-1.837-2.175a48.111 48.111 0 00-3.413-.387M12 9.75v-1.5m0 0A2.25 2.25 0 1114.25 6h-4.5A2.25 2.25 0 0112 8.25zm0 9v-6m-4.5 6a2.25 2.25 0 110-4.5h9a2.25 2.25 0 110 4.5h-9z" />
    </svg>
  )
};

export const PracticeAreas: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation configurations
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } 
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
          className="max-w-3xl space-y-6"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6.5xl font-semibold text-charcoal tracking-wide leading-none">
            Expertise & Counsel
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/65 leading-relaxed max-w-2.5xl">
            Adeyemi & Partners delivers sophisticated legal solutions across a spectrum of complex practice areas. Our approach is defined by rigor, discretion, and an unwavering commitment to achieving exceptional outcomes for our clients.
          </p>
        </motion.div>
      </section>

      {/* 2. Practice Areas Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area) => {
            const Icon = customIcons[area.slug] || customIcons['corporate-law'];
            return (
              <motion.div key={area.id} variants={itemVariants} className="h-full">
                <Card borderVariant="charcoal" hoverable className="flex flex-col justify-between h-full space-y-8 p-8 min-h-[300px]">
                  <div className="space-y-6">
                    <div className="w-10 h-10 flex items-center justify-center text-charcoal bg-transparent">
                      <Icon className="w-6 h-6 stroke-[1.25]" />
                    </div>
                    <div className="space-y-3">
                      <h2 className="font-serif text-2xl font-medium text-charcoal">
                        {area.title}
                      </h2>
                      <p className="font-sans text-xs md:text-sm text-charcoal/65 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Link
                      to={`/practice-areas/${area.slug}`}
                      className="font-sans text-[10px] uppercase tracking-widest text-charcoal hover:text-burgundy transition-colors font-bold inline-flex items-center space-x-1 focus:outline-none"
                    >
                      <span>Explore Area</span>
                      <span className="text-[12px] font-light ml-1">&rarr;</span>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Thin line separating content and CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-[1px] bg-charcoal/10 w-full"></div>
      </div>

      {/* 3. CTA Section */}
      <section className="py-20 text-center bg-ivory">
        <motion.div 
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Require Specialized Counsel?
          </h2>
          <p className="font-sans text-xs md:text-sm text-charcoal/60 leading-relaxed">
            Contact our offices to schedule a confidential consultation with one of our senior partners regarding your legal matter.
          </p>
          <div className="pt-4">
            <Link to="/contact">
              <Button variant="primary" className="uppercase tracking-widest text-[11px] px-8 py-3.5 bg-charcoal text-ivory border-charcoal hover:bg-gold hover:border-gold hover:text-charcoal transition-colors">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default PracticeAreas;
