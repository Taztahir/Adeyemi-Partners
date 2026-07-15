import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, category }) => {
  return (
    <section className="bg-ivory border-b border-charcoal/5 py-16 md:py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        {category && (
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium block mb-4">
            {category}
          </span>
        )}
        <h1 className="font-serif text-3xl md:text-5xl font-semibold text-charcoal leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-base md:text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
