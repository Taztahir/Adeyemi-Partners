import React from 'react';

// Import your assets
import image1 from '../assets/image 1.png';
import image2 from '../assets/2nd image.png';

// 1. Gavel Icon (Rigorous Execution)
const GavelIcon = () => (
  <svg className="text-amber-800 w-5 h-5 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14 13-5 5" />
    <path d="m15 16-5 5" />
    <path d="m17 14-5 5" />
    <path d="m11.5 8.5 7 7" />
    <path d="M11.5 8.5 15 5l3.5 3.5-3.5 3.5-3.5-3.5Z" />
    <path d="M2 21h10" />
  </svg>
);

// 2. Lock Icon (Absolute Discretion)
const LockIcon = () => (
  <svg className="text-amber-800 w-5 h-5 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="12" x="3" y="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

// 3. Tower/Rook Icon (Strategic Foresight)
const TowerIcon = () => (
  <svg className="text-amber-800 w-5 h-5 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20h14" />
    <path d="M6 20V10l2-2h8l2 2v10" />
    <path d="M9 8V4H7V2h2v2h4V2h2v2h-2v4" />
    <path d="M9 13h6" />
  </svg>
);

export const About: React.FC = () => {
  return (
    <div className="text-neutral-900 font-sans selection:bg-amber-100 bg-white">
      
      {/* 1. HERO SECTION (Cream Background) */}
      <section className="bg-[#F4F0EA] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-semibold block mb-6">
            Our Firm
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] max-w-5xl tracking-tight text-neutral-900">
            Establishing precedent through rigorous counsel and steadfast discretion since 1998.
          </h1>
        </div>
      </section>

      {/* 2. LEGACY / HISTORY SECTION (White Background) */}
      <section className="bg-white py-20 border-t border-neutral-300/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed font-light text-base md:text-lg">
            <h2 className="font-serif text-3xl text-neutral-950 font-normal mb-8 tracking-tight">
              A Legacy of Authority
            </h2>
            <p>
              Adeyemi & Partners was founded on a singular premise: to provide uncompromising legal strategy for entities navigating complex corporate and financial landscapes. What began as a boutique advisory has matured into a distinguished institution recognized for its clinical precision and unyielding commitment to client confidentiality.
            </p>
            <p>
              Our history is not marked by volume, but by significance. We have discreetly engineered structural solutions for multinational acquisitions, defended critical intellectual property across jurisdictions, and mitigated profound regulatory liabilities for tier-one financial institutions.
            </p>
            <p>
              We eschew the conventional law firm model in favor of a tightly integrated, senior-led approach. Every matter is directed by partners who bear the weight of experience, ensuring that our counsel is not merely academic, but battle-tested and strategically acute.
            </p>
          </div>

          {/* Right Column: B&W Image */}
          <div className="lg:col-span-5 aspect-[4/5] w-full bg-neutral-200 overflow-hidden shadow-sm grayscale contrast-115">
            <img 
              src={image1} 
              alt="Minimalist architectural spiral staircase" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES SECTION (Cream Background) */}
      <section className="bg-[#F4F0EA] py-20 border-y border-neutral-300/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-baseline">
            <h2 className="font-serif text-3xl text-neutral-950 tracking-tight">
              Core Principles
            </h2>
            <p className="text-neutral-600 text-sm md:text-base font-light max-w-md md:justify-self-end">
              The tenets that govern our practice, dictate our approach, and secure our clients' positions of strength.
            </p>
          </div>

          {/* 3-Column Cards Grid (White Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 border border-neutral-300/30 shadow-sm flex flex-col justify-between min-h-[320px]">
              <div>
                <GavelIcon />
                <h3 className="font-serif text-xl text-neutral-950 mb-4">Rigorous Execution</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  We leave no variable unexamined. Our legal architectures are constructed with clinical attention to detail, designed to withstand intense scrutiny and adversarial pressure.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 border border-neutral-300/30 shadow-sm flex flex-col justify-between min-h-[320px]">
              <div>
                <LockIcon />
                <h3 className="font-serif text-xl text-neutral-950 mb-4">Absolute Discretion</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  In an era of overexposure, we operate in the quiet spaces. Client identities, strategic maneuvers, and internal vulnerabilities are protected by an ironclad culture of confidentiality.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 border border-neutral-300/30 shadow-sm flex flex-col justify-between min-h-[320px]">
              <div>
                <TowerIcon />
                <h3 className="font-serif text-xl text-neutral-950 mb-4">Strategic Foresight</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  We do not merely react to legal challenges; we anticipate them. Our counsel focuses on long-term structural integrity over short-term expediency.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION / QUOTE SECTION (White Background) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Quote */}
          <div className="lg:col-span-7 space-y-10">
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.25] text-neutral-950 tracking-tight max-w-lg">
              "The caliber of the outcome is dictated by the discipline of the approach."
            </blockquote>
            
            <button className="inline-flex items-center gap-4 border border-neutral-900 px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-900 hover:text-white transition-colors duration-300 group">
              Meet Our Attorneys 
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-5 aspect-[4/3] md:aspect-[16/10] lg:aspect-square w-full bg-neutral-200 overflow-hidden shadow-md">
            <img 
              src={image2} 
              alt="Desk with fountain pen and sealed document" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;