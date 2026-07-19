import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { attorneys } from '../data/attorneys';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const AttorneyProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();

  // Find attorney by slug
  const attorney = attorneys.find(a => a.slug === slug);

  if (!attorney) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-6">
        <h1 className="font-serif text-3xl md:text-4xl text-charcoal">Attorney Profile Not Found</h1>
        <p className="font-sans text-sm text-charcoal/60">
          The legal professional you are looking for is not listed in our database.
        </p>
        <Link to="/attorneys">
          <Button variant="primary">Return to Attorneys</Button>
        </Link>
      </div>
    );
  }

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="bg-ivory min-h-screen"
    >
      {/* Top Profile Header Block */}
      <section className="py-16 md:py-20 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <nav className="font-sans text-[10px] uppercase tracking-widest text-charcoal/50 flex items-center space-x-2 mb-10" aria-label="Breadcrumb">
            <Link to="/attorneys" className="hover:text-burgundy transition-colors focus:outline-none">Attorneys</Link>
            <span>&gt;</span>
            <span className="text-gold font-semibold">{attorney.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Portrait with gold corner accent */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[400px]">
                <div className="relative z-10 aspect-[4/5] bg-charcoal/5 border border-charcoal/10 rounded-[4px] overflow-hidden shadow-sm">
                  <img 
                    src={attorney.image} 
                    alt={attorney.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add(
                          'flex',
                          'items-center',
                          'justify-center',
                          'bg-gradient-to-br',
                          'from-charcoal',
                          'to-burgundy',
                          'text-ivory'
                        );
                        const initials = attorney.name.split(' ').map(n => n[0]).join('');
                        const monogram = document.createElement('div');
                        monogram.className = 'text-center p-8';
                        monogram.innerHTML = `
                          <div class="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto bg-charcoal/40">
                            <span class="font-serif text-3xl text-gold font-medium tracking-wider">${initials}</span>
                          </div>
                        `;
                        target.parentElement.appendChild(monogram);
                      }
                    }}
                  />
                </div>
                {/* Gold Outline L-Accent on bottom-right */}
                <div className="absolute -bottom-3 -right-3 w-[80%] h-[80%] border-b border-r border-gold/40 pointer-events-none z-0" />
              </div>
            </div>

            {/* Right Column: Key Details, Quote & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-widest font-sans font-bold block mb-1">
                  {attorney.role}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal tracking-wide">
                  {attorney.name}
                </h1>
              </div>

              {/* Serif Quote */}
              <p className="font-serif text-lg md:text-xl text-charcoal/85 italic leading-relaxed max-w-2.5xl">
                "{attorney.quote}"
              </p>

              {/* Stat Pillars */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-charcoal/10">
                <div className="space-y-1">
                  <span className="text-gold text-[9px] uppercase tracking-widest font-sans font-bold block">
                    Experience
                  </span>
                  <span className="font-serif text-base md:text-lg text-charcoal block">
                    {attorney.experience}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gold text-[9px] uppercase tracking-widest font-sans font-bold block">
                    Specialization
                  </span>
                  <span className="font-serif text-base md:text-lg text-charcoal block">
                    {attorney.specialization}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-gold text-[9px] uppercase tracking-widest font-sans font-bold block">
                    Location
                  </span>
                  <span className="font-serif text-base md:text-lg text-charcoal block">
                    {attorney.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section: Narrative, Education & Admissions */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-[2px] h-7 bg-gold" />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal">
                Professional Narrative
              </h2>
            </div>
            <div className="space-y-6 font-sans text-sm md:text-base text-charcoal/75 leading-relaxed">
              {attorney.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Credentials Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education Card */}
            <Card borderVariant="charcoal" className="bg-white p-6">
              <h3 className="text-gold text-[10px] uppercase tracking-widest font-sans font-bold border-b border-charcoal/5 pb-3 mb-4">
                Education
              </h3>
              <div className="space-y-4 font-sans text-xs md:text-sm">
                {attorney.educationDetails.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="font-bold text-charcoal/90">{edu.degree}</p>
                    <p className="text-charcoal/60">{edu.school}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Admissions Card */}
            <Card borderVariant="charcoal" className="bg-white p-6">
              <h3 className="text-gold text-[10px] uppercase tracking-widest font-sans font-bold border-b border-charcoal/5 pb-3 mb-4">
                Bar Admissions
              </h3>
              <ul className="space-y-3 font-sans text-xs md:text-sm" role="list">
                {attorney.admissions.map((adm, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full border border-gold bg-transparent flex-shrink-0" />
                    <span className="text-charcoal/80">{adm}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Section: Notable Engagements */}
      {attorney.engagements && attorney.engagements.length > 0 && (
        <section className="bg-[#EFEBE0] py-16 md:py-20 border-t border-charcoal/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="font-serif text-3xl font-semibold text-charcoal">
                Notable Engagements
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto" />
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {attorney.engagements.map((eng, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-charcoal/10 rounded-[4px] p-6 flex flex-col justify-between hover:border-gold hover:shadow-sm transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="text-gold text-[10px] font-sans font-bold tracking-widest block">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-xl font-semibold text-charcoal">
                      {eng.title}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-charcoal/65 leading-relaxed">
                      {eng.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-charcoal/5">
                    <Link 
                      to="/case-results"
                      className="font-sans text-[10px] uppercase tracking-widest text-charcoal hover:text-burgundy transition-colors font-bold inline-flex items-center space-x-1 focus:outline-none"
                    >
                      <span>Case Summary</span>
                      <span className="text-[12px] font-light ml-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Consultation Banner Footer */}
      <section className="bg-charcoal text-ivory py-16 border-t border-gold/15 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ivory">
            Secure Strategic Legal Counsel
          </h2>
          <p className="font-sans text-xs md:text-sm text-ivory/65 leading-relaxed">
            Protect your interests, assets, and operations with absolute discretion. Reach out to schedule a privileged call.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="primary" className="uppercase tracking-widest text-[11px] px-8 py-3.5 bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold hover:text-charcoal transition-colors">
                Request a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default AttorneyProfile;
