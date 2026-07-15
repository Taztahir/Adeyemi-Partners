import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[activeIndex];

  return (
    <section 
      className="bg-charcoal text-ivory py-16 md:py-24 px-6 border-b border-gold/15" 
      aria-label="Client Testimonials"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Large Gold Quote Mark */}
        <span className="font-serif text-5xl md:text-7xl text-gold/80 block mb-6 leading-none select-none">
          “
        </span>
        
        {/* Active Testimonial Block */}
        <blockquote className="space-y-6">
          <p className="font-serif text-lg md:text-2xl italic leading-relaxed text-ivory/90 max-w-3xl mx-auto">
            {current.quote}
          </p>
          <cite className="font-sans text-xs md:text-sm uppercase tracking-widest text-gold block font-medium not-italic">
            — {current.author}, {current.company}
          </cite>
        </blockquote>

        {/* Carousel Navigation (only if there are multiple testimonials) */}
        {testimonials.length > 1 && (
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 border border-ivory/10 hover:border-gold/50 rounded-[4px] transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-ivory" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-gold' : 'bg-ivory/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 border border-ivory/10 hover:border-gold/50 rounded-[4px] transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-ivory" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
