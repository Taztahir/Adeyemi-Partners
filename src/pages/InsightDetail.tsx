import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Share2 } from 'lucide-react';
import { insights } from '../data/insights';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();

  // Find article by slug, fallback to first one if not matched
  const article = insights.find(item => item.slug === slug) || insights[insights.length - 1];

  // Recommendations (exclude current article)
  const recommendations = insights.filter(item => item.id !== article.id).slice(0, 2);

  // Related articles (exclude current article)
  const relatedArticles = insights.filter(item => item.id !== article.id).slice(0, 3);

  // Animation variants
  const pageTransition = {
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
      variants={pageTransition}
      className="bg-ivory min-h-screen py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* 1. Breadcrumbs */}
        <nav className="font-sans text-[10px] uppercase tracking-widest text-charcoal/50 flex items-center space-x-2" aria-label="Breadcrumb">
          <Link to="/insights" className="hover:text-burgundy transition-colors focus:outline-none">Insights</Link>
          <span>&gt;</span>
          <span className="text-gold font-semibold">{article.category}</span>
        </nav>

        {/* 2. Article Header */}
        <section className="space-y-6">
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-charcoal leading-tight max-w-4xl">
            {article.title}
          </h1>
          
          {/* Author Lockup */}
          {article.author && (
            <div className="flex items-center space-x-4 pt-2 border-t border-charcoal/5 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-charcoal/5 border border-charcoal/10 overflow-hidden relative">
                <img 
                  src={article.author.image} 
                  alt={article.author.name}
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-charcoal', 'text-gold');
                      target.parentElement.innerHTML = '<span class="text-xs font-serif">A</span>';
                    }
                  }}
                />
              </div>
              <div className="font-sans text-[10px] uppercase tracking-wider">
                <p className="text-charcoal/45">Written By</p>
                <p className="font-bold text-charcoal/90">{article.author.name}</p>
              </div>
              <div className="font-sans text-[10px] uppercase tracking-wider pl-4 border-l border-charcoal/10">
                <p className="text-charcoal/45">Published</p>
                <p className="font-bold text-charcoal/90">{article.date}</p>
              </div>
            </div>
          )}
        </section>

        {/* 3. Featured Image Banner */}
        <div className="w-full aspect-[21/9] rounded-[4px] overflow-hidden border border-charcoal/10 bg-charcoal">
          <img
            src={`/images/insights/${article.slug}.jpg`}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* 4. Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          
          {/* Left Column: Article Body */}
          <article className="lg:col-span-8 space-y-8 font-sans text-sm md:text-base text-charcoal/80 leading-relaxed">
            {article.content ? (
              <>
                {/* Lead Paragraph */}
                <p className="font-sans text-base md:text-lg italic text-charcoal/90 border-l-2 border-gold pl-6 py-2 leading-relaxed">
                  {article.content.lead}
                </p>

                {article.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4 pt-4">
                    {section.heading && (
                      <h2 className="font-serif text-2xl font-medium text-charcoal leading-snug pt-4 border-t border-charcoal/5">
                        {section.heading}
                      </h2>
                    )}
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                    {section.list && (
                      <ul className="space-y-3 pt-2 pl-4" role="list">
                        {section.list.map((item, lIdx) => (
                          <li key={lIdx} className="font-sans text-sm text-charcoal/80 flex items-start space-x-2">
                            <span className="font-semibold text-gold pr-2">{item.substring(0, 3)}</span>
                            <span>{item.substring(4)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Pull Quote */}
                {article.content.pullQuote && (
                  <blockquote className="bg-[#EFEBE0]/60 p-8 border-l border-gold rounded-[4px] text-center my-8">
                    <p className="font-serif text-xl md:text-2xl text-burgundy italic leading-relaxed">
                      "{article.content.pullQuote}"
                    </p>
                  </blockquote>
                )}
              </>
            ) : (
              // Default text fallback if no rich content loaded
              <div className="space-y-4">
                <p className="font-sans text-base md:text-lg italic text-charcoal/95 border-l-2 border-gold pl-6 py-2 leading-relaxed">
                  {article.description}
                </p>
                <p>
                  As global markets undergo regulatory adjustments, corporate leaders face changing paradigms. Our corporate governance leads counsel multinational boards on risk mitigation, capital reserves, and transactional transparency.
                </p>
                <h2 className="font-serif text-2xl font-medium text-charcoal leading-snug pt-4 border-t border-charcoal/5">
                  The Path of Compliance
                </h2>
                <p>
                  Compliance pipelines must align with international standards. Regulators are increasing scrutiny on cross-border transactions, intellectual property protection, and digital assets. Ensure your organization conducts thorough due diligence and audits regularly.
                </p>
              </div>
            )}

            {/* Share Widget */}
            <div className="pt-8 border-t border-charcoal/5 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase tracking-wider text-charcoal/40 font-bold flex items-center space-x-2">
                <Share2 className="w-3.5 h-3.5 text-gold" />
                <span>Share Article</span>
              </span>
              <div className="flex space-x-3">
                {/* Custom Inline SVG for Twitter */}
                <button aria-label="Share on Twitter" className="p-2 border border-charcoal/10 rounded-[4px] text-charcoal/60 hover:text-burgundy hover:border-burgundy/40 transition-colors focus:outline-none flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                {/* Custom Inline SVG for LinkedIn */}
                <button aria-label="Share on LinkedIn" className="p-2 border border-charcoal/10 rounded-[4px] text-charcoal/60 hover:text-burgundy hover:border-burgundy/40 transition-colors focus:outline-none flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
                  </svg>
                </button>
                {/* Custom Inline SVG for Facebook */}
                <button aria-label="Share on Facebook" className="p-2 border border-charcoal/10 rounded-[4px] text-charcoal/60 hover:text-burgundy hover:border-burgundy/40 transition-colors focus:outline-none flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Right Column: Sidebar Widgets */}
          <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-24 h-fit">
            
            {/* 1. Author Profile Card */}
            {article.author && (
              <Card borderVariant="charcoal" className="bg-ivory p-6 space-y-4 text-center">
                <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold block">
                  Author Profile
                </span>
                <div className="w-20 h-20 rounded-full bg-charcoal/5 border border-charcoal/10 overflow-hidden mx-auto relative">
                  <img 
                    src={article.author.image} 
                    alt={article.author.name}
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-charcoal', 'text-gold');
                        target.parentElement.innerHTML = '<span class="text-lg font-serif">A</span>';
                      }
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-charcoal">
                    {article.author.name}
                  </h4>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-burgundy font-bold">
                    {article.author.role}
                  </p>
                </div>
                <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
                  {article.author.bio}
                </p>
                <div className="pt-2 border-t border-charcoal/5">
                  <Link 
                    to={`/attorneys/${article.author.name.toLowerCase().replace(/ /g, '-')}`}
                    className="font-sans text-[10px] uppercase tracking-widest text-charcoal hover:text-gold transition-colors font-bold inline-flex items-center space-x-1 focus:outline-none"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            )}

            {/* 2. Recommended Widget */}
            <div className="space-y-4">
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-bold border-b border-gold/20 pb-2">
                Recommended
              </h4>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="space-y-1 group">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-burgundy font-bold block">
                      {rec.category}
                    </span>
                    <h5 className="font-serif text-sm font-medium text-charcoal group-hover:text-burgundy transition-colors leading-snug">
                      <Link to={`/insights/${rec.slug}`} className="focus:outline-none">
                        {rec.title}
                      </Link>
                    </h5>
                    <p className="font-sans text-[10px] text-charcoal/40 uppercase tracking-wider">{rec.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Discuss Your Case CTA Widget */}
            <Card borderVariant="none" className="bg-charcoal text-ivory p-6 space-y-4 text-center">
              <h4 className="font-serif text-xl font-medium text-ivory">
                Discuss Your Case
              </h4>
              <p className="font-sans text-xs text-ivory/65 leading-relaxed">
                Our associates are ready to provide you with a comprehensive case evaluation. Reach out with absolute discretion.
              </p>
              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="primary" className="w-full bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold hover:text-charcoal uppercase tracking-widest text-[10px] py-3">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </Card>

          </aside>
        </div>

        {/* 5. Further Reading Section */}
        <section className="pt-16 border-t border-charcoal/10 space-y-8" aria-labelledby="further-reading-title">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h3 
              id="further-reading-title"
              className="font-serif text-2xl font-semibold text-charcoal"
            >
              Further Reading
            </h3>
            <Link 
              to="/insights"
              className="font-sans text-xs uppercase tracking-widest text-burgundy hover:text-gold transition-colors font-bold inline-flex items-center space-x-1 border-b border-burgundy/20 pb-1 focus:outline-none"
            >
              <span>View Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <Card key={rel.id} borderVariant="charcoal" className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <span className="text-gold text-[9px] uppercase tracking-widest font-sans font-bold block">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-charcoal hover:text-burgundy transition-colors leading-snug">
                    <Link to={`/insights/${rel.slug}`} className="focus:outline-none">
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="font-sans text-xs text-charcoal/60 leading-relaxed line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-2 flex justify-between items-center text-[10px] font-sans text-charcoal/50">
                  <span>{rel.date}</span>
                  <Link 
                    to={`/insights/${rel.slug}`}
                    className="font-semibold text-burgundy hover:text-gold uppercase tracking-wider flex items-center space-x-1 focus:outline-none"
                  >
                    <span>Read Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </motion.main>
  );
};

export default InsightDetail;
