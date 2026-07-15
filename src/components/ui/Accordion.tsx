import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-charcoal/10 pb-4"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left py-2 font-serif text-lg font-medium text-charcoal hover:text-burgundy transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 text-gold transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-charcoal/70 font-sans text-sm leading-relaxed pr-8">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
