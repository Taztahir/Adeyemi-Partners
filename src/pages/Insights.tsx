import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import { insights } from '../data/insights';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Insights: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Corporate Law', 'Litigation', 'Taxation', 'Real Estate'];

  // Find featured insight
  const featuredInsight = useMemo(() => {
    return insights.find(item => item.featured) || insights[0];
  }, []);

  // Filter grid insights (exclude the featured one if it's not matching filters)
  const filteredInsights = useMemo(() => {
    return insights.filter(item => {
      // Exclude featured insight from the main grid to match standard editorial layout
      if (item.featured) return false;

      const matchesCategory = selectedCategory === 'All' || 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="bg-ivory min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* 1. Featured Insight */}
        {featuredInsight && (
          <motion.section 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-charcoal/5 pb-16"
            aria-labelledby="featured-insight-title"
          >
            {/* Featured Photo */}
            <div className="lg:col-span-7 aspect-[16/10] rounded-[4px] overflow-hidden border border-charcoal/10 bg-charcoal">
              <img
                src={`/images/insights/${featuredInsight.slug}.jpg`}
                alt={featuredInsight.title}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Featured Text Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium block">
                Featured Insight
              </span>
              <h2 
                id="featured-insight-title"
                className="font-serif text-3xl md:text-4xl font-semibold text-charcoal leading-tight"
              >
                {featuredInsight.title}
              </h2>
              <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                {featuredInsight.description}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-charcoal/5">
                <span className="font-sans text-xs text-charcoal/50">{featuredInsight.date}</span>
                <Link to={`/insights/${featuredInsight.slug}`}>
                  <Button variant="primary" className="text-xs uppercase tracking-widest px-6 py-3 font-semibold">
                    Read Article <ArrowRight className="w-3.5 h-3.5 ml-2 inline" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        )}

        {/* 2. Search and Category Filter Controls */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-charcoal/5 pb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5" role="tablist">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-sans text-xs uppercase tracking-widest px-4 py-2 border rounded-[4px] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer ${
                    isActive 
                      ? 'bg-charcoal text-ivory border-charcoal font-semibold' 
                      : 'bg-transparent text-charcoal/70 border-charcoal/15 hover:border-charcoal/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <input 
              type="text" 
              placeholder="Search insights..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full font-sans text-xs uppercase tracking-wider pl-4 pr-10 py-2.5 bg-transparent border border-charcoal/15 focus:border-gold focus:outline-none transition-colors rounded-[4px]"
            />
            <Search className="absolute right-3.5 top-2.5 w-4 h-4 text-charcoal/40" />
          </div>
        </section>

        {/* 3. Grid of Articles */}
        <section aria-label="Latest Insights Grid">
          <motion.div 
            layout={!shouldReduceMotion}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredInsights.length > 0 ? (
                filteredInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    layout={!shouldReduceMotion}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <Card borderVariant="charcoal" className="flex flex-col h-full bg-ivory/20 justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Unique photo per insight */}
                        <div className="aspect-[16/10] rounded-[4px] overflow-hidden border border-charcoal/8 bg-charcoal/5">
                          <img
                            src={`/images/insights/${insight.slug}.jpg`}
                            alt={insight.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                        </div>
                        <div className="space-y-2">
                          <span className="text-gold text-[10px] uppercase tracking-widest font-sans font-bold block">
                            {insight.category}
                          </span>
                          <h3 className="font-serif text-xl font-medium text-charcoal hover:text-burgundy transition-colors leading-snug line-clamp-2">
                            <Link to={`/insights/${insight.slug}`} className="focus:outline-none">
                              {insight.title}
                            </Link>
                          </h3>
                          <p className="font-sans text-xs md:text-sm text-charcoal/65 leading-relaxed line-clamp-3">
                            {insight.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-charcoal/5 flex justify-between items-center text-[10px] font-sans text-charcoal/50 uppercase tracking-wider">
                        <span>{insight.date}</span>
                        <Link 
                          to={`/insights/${insight.slug}`}
                          className="font-semibold text-burgundy hover:text-gold transition-colors inline-flex items-center space-x-1 focus:outline-none"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center text-charcoal/40 font-sans text-sm">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-gold/60" />
                  No legal briefings found matching your search options.
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 4. Pagination */}
        <section className="flex justify-center items-center space-x-2 pt-8" aria-label="Pagination">
          <button className="px-3.5 py-2 border border-charcoal/10 rounded-[4px] text-xs font-sans hover:border-gold transition-colors disabled:opacity-40" disabled>&lt;</button>
          <button className="px-3.5 py-2 bg-charcoal text-ivory rounded-[4px] text-xs font-sans font-semibold">1</button>
          <button className="px-3.5 py-2 border border-charcoal/10 rounded-[4px] text-xs font-sans hover:border-gold transition-colors">2</button>
          <button className="px-3.5 py-2 border border-charcoal/10 rounded-[4px] text-xs font-sans hover:border-gold transition-colors">3</button>
          <span className="text-charcoal/40 px-1">...</span>
          <button className="px-3.5 py-2 border border-charcoal/10 rounded-[4px] text-xs font-sans hover:border-gold transition-colors">12</button>
          <button className="px-3.5 py-2 border border-charcoal/10 rounded-[4px] text-xs font-sans hover:border-gold transition-colors">&gt;</button>
        </section>

      </div>
    </main>
  );
};

export default Insights;
