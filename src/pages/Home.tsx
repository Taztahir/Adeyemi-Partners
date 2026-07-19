import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Components
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
// import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

// Data
import { practiceAreas } from '../data/practiceAreas';
import { caseResults } from '../data/caseResults';
import { attorneys } from '../data/attorneys';
import { insights } from '../data/insights';

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

export const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <main className="bg-ivory min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust / Stat Bar */}
      <TrustBar />

      {/* 3. Practice Areas Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-20 md:py-28 max-w-7xl mx-auto px-6"
        aria-labelledby="practice-areas-title"
      >
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium">
            Our Expertise
          </span>
          <h2
            id="practice-areas-title"
            className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
          >
            Practice Areas
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area) => {
            const Icon = customIcons[area.slug] || customIcons['corporate-law'];
            return (
              <motion.div key={area.id} variants={cardVariants} className="h-full">
                <Card borderVariant="charcoal" hoverable className="flex flex-col justify-between h-full space-y-8 p-8 min-h-[300px]">
                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className="w-10 h-10 flex items-center justify-center text-charcoal bg-transparent">
                      <Icon className="w-6 h-6 stroke-[1.25]" />
                    </div>
                    {/* Content */}
                    <div className="space-y-3">
                      <h2 className="font-serif text-2xl font-medium text-charcoal">
                        {area.title}
                      </h2>
                      <p className="font-sans text-xs md:text-sm text-charcoal/65 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  {/* Link action */}
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
      </motion.section>

      {/* 4. Notable Case Results Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="bg-[#EFEBE0] py-20 md:py-28 border-y border-charcoal/5"
        aria-labelledby="case-results-title"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-4">
              <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium">
                Proven Track Record
              </span>
              <h2
                id="case-results-title"
                className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
              >
                Notable Case Results
              </h2>
            </div>
            <Link
              to="/case-results"
              className="font-sans text-xs uppercase tracking-widest text-burgundy hover:text-gold transition-colors font-semibold inline-flex items-center space-x-1 border-b border-burgundy/20 pb-1 focus:outline-none"
            >
              <span>View All Case Results</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {caseResults.map((result) => (
              <motion.div key={result.id} variants={cardVariants} className="h-full">
                <Card borderVariant="gold" className="space-y-4 bg-ivory h-full">
                  <Badge variant="gold">{result.category}</Badge>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-burgundy">
                      {result.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-charcoal/55 font-medium">
                      {result.outcome}
                    </p>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed pt-2">
                      {result.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Distinguished Attorneys Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-20 md:py-28 max-w-7xl mx-auto px-6"
        aria-labelledby="attorneys-title"
      >
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium">
            Our Leadership
          </span>
          <h2
            id="attorneys-title"
            className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
          >
            Distinguished Attorneys
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {attorneys.map((attorney) => (
            <motion.div key={attorney.id} variants={cardVariants}>
              <Card borderVariant="charcoal" className="flex flex-col space-y-4 p-4">
                {/* Photo Area with Fail-safe Fallback */}
                <div className="aspect-[4/5] bg-charcoal/5 border border-charcoal/10 rounded-[4px] overflow-hidden relative">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'bg-charcoal', 'text-ivory');
                        const iconDiv = document.createElement('div');
                        iconDiv.className = 'text-center p-6 space-y-2';
                        iconDiv.innerHTML = `
                          <p class="font-serif text-lg tracking-wide">${attorney.name}</p>
                          <p class="font-sans text-[10px] text-gold uppercase tracking-widest">${attorney.role}</p>
                        `;
                        target.parentElement.appendChild(iconDiv);
                      }
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-charcoal">
                    <Link to={`/attorneys/${attorney.slug}`} className="hover:text-burgundy transition-colors focus:outline-none">
                      {attorney.name}
                    </Link>
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-gold font-semibold">
                    {attorney.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 6. Testimonial Section
      <TestimonialCarousel /> */}

      {/* 7. Latest Insights Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-20 md:py-28 max-w-7xl mx-auto px-6"
        aria-labelledby="insights-title"
      >
        <div className="text-center space-y-4 mb-16">
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium">
            Legal Briefings
          </span>
          <h2
            id="insights-title"
            className="font-serif text-3xl md:text-4xl font-semibold text-charcoal"
          >
            Latest Insights
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {insights.map((insight) => (
            <motion.div key={insight.id} variants={cardVariants} className="h-full">
              <Card borderVariant="charcoal" className="flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <Badge variant="burgundy">{insight.category}</Badge>
                  <h3 className="font-serif text-xl font-medium text-charcoal hover:text-burgundy transition-colors leading-snug">
                    <Link to={`/insights/${insight.slug}`} className="focus:outline-none">
                      {insight.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-charcoal/65 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
                <div className="pt-2 flex justify-between items-center text-[11px] font-sans text-charcoal/50">
                  <span>{insight.date}</span>
                  <Link
                    to={`/insights/${insight.slug}`}
                    className="font-semibold text-burgundy hover:text-gold uppercase tracking-wider flex items-center space-x-1 focus:outline-none"
                  >
                    <span>Read Brief</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 8. Call to Action (CTA) Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#EFEBE0] py-20 border-t border-charcoal/5 text-center"
      >
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
            Secure Your Legal Future
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed">
            Contact our team to schedule a confidential consultation with our partners. We render counsel with precision and absolute discretion.
          </p>
          <div className="pt-4">
            <Link to="/contact">
              <Button variant="primary">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Home;
