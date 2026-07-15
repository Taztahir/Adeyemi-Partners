import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="bg-ivory py-16 md:py-24 border-b border-charcoal/5 overflow-hidden" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="lg:col-span-6 space-y-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold text-xs uppercase tracking-widest font-sans font-medium block"
          >
            Elite Advocacy. Absolute Discretion.
          </motion.span>
          
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight"
          >
            Uncompromising <br className="hidden md:inline" />
            Legal Advocacy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="font-sans text-sm md:text-base text-charcoal/70 max-w-lg leading-relaxed"
          >
            Adeyemi & Partners represents corporate entities, high-net-worth individuals, and sovereign organizations in high-stakes litigation, complex commercial transactions, and strategic advisory.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link to="/contact">
              <Button variant="primary" className="w-full sm:w-auto">
                Request a Consultation
              </Button>
            </Link>
            <Link to="/practice-areas">
              <Button variant="secondary" className="w-full sm:w-auto">
                Our Practice Areas
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Image Layout */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
          {/* Main Image Container */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] bg-charcoal border border-charcoal/20 rounded-[4px] overflow-hidden shadow-sm">
            <img 
              src="/images/hero-advocacy.png" 
              alt="Adeyemi & Partners Corporate Law Office" 
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                const target = e.target as HTMLElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-charcoal', 'to-burgundy');
                  const div = document.createElement('div');
                  div.className = 'text-center p-8';
                  div.innerHTML = `
                    <p class="font-serif text-2xl text-ivory tracking-wide">Adeyemi & Partners</p>
                    <p class="font-sans text-xs text-gold uppercase tracking-widest mt-2">Counsel & Advocacy</p>
                  `;
                  target.parentElement.appendChild(div);
                }
              }}
            />
          </div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="absolute -bottom-6 left-6 lg:left-12 bg-ivory border border-gold/40 p-4 rounded-[4px] shadow-md flex items-center space-x-3 max-w-[200px]"
          >
            <span className="font-serif text-3xl font-bold text-gold">15+</span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-charcoal font-semibold leading-tight">
              Years of Proven Legal Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
