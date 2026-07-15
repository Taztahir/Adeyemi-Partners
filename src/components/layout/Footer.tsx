import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Left Column: Brand & Description */}
        <div className="flex flex-col space-y-4">
          <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-ivory focus:outline-none">
            Adeyemi & Partners
          </Link>
          <p className="font-sans text-sm text-ivory/60 max-w-sm leading-relaxed">
            Elite legal representation with absolute discretion. Protecting corporate interests, sovereign assets, and private wealth.
          </p>
        </div>

        {/* Middle Column: Practice Areas Quick Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-sm font-medium tracking-wider uppercase text-gold">
            Practice Areas
          </h4>
          <ul className="space-y-2 font-sans text-sm text-ivory/70">
            <li>
              <Link to="/practice-areas/corporate-law" className="hover:text-gold transition-colors focus:outline-none">
                Corporate Law & Governance
              </Link>
            </li>
            <li>
              <Link to="/practice-areas/high-stakes-litigation" className="hover:text-gold transition-colors focus:outline-none">
                High-Stakes Litigation
              </Link>
            </li>
            <li>
              <Link to="/practice-areas/strategic-advisory" className="hover:text-gold transition-colors focus:outline-none">
                Strategic Risk & Crisis Advisory
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Details */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-sm font-medium tracking-wider uppercase text-gold">
            Contact
          </h4>
          <div className="font-sans text-sm text-ivory/70 space-y-2">
            <p>12 Adeola Odeku St, Victoria Island, Lagos</p>
            <p>Phone: +234 1 234 5678</p>
            <p>Email: contact@adeyemipartners.com</p>
          </div>
        </div>
      </div>

      {/* Gold Divider Line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gold/25 my-6"></div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-sans text-ivory/40 uppercase tracking-widest">
        <div>
          &copy; {currentYear} Adeyemi & Partners. All rights reserved.
        </div>
        <div className="text-center md:text-right max-w-lg leading-normal normal-case text-ivory/30">
          Disclaimer: This website is for informational purposes only and does not constitute formal legal advice. Advertising licensed by the Nigeria Bar Association.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
