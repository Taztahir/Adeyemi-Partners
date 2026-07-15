import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  value: string;
}

const CountUp: React.FC<CountUpProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    // Remove commas to parse the number properly
    const rawNumberString = value.replace(/,/g, '');
    const numericMatch = rawNumberString.match(/\d+/);
    
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numericMatch[0], 10);
    const matchedStr = numericMatch[0];
    
    // Find where the number is in the original string to separate prefix and suffix
    const numberIndex = value.indexOf(matchedStr.substring(0, 1));
    const prefix = value.substring(0, numberIndex);
    const suffix = value.substring(numberIndex + matchedStr.length + (value.includes(',') ? 1 : 0)); // simple adjustment for comma length in original

    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, targetNumber, {
      duration: 1.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
      onUpdate: (latest) => {
        const rounded = Math.floor(latest);
        const formatted = value.includes(',') 
          ? rounded.toLocaleString() 
          : rounded.toString();
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      }
    });

    return () => controls.stop();
  }, [isInView, value, shouldReduceMotion]);

  return <span ref={ref}>{displayValue}</span>;
};

export const TrustBar: React.FC = () => {
  const stats = [
    { value: '95%', label: 'Success Rate' },
    { value: '$2B+', label: 'Recovered for Clients' },
    { value: '1,200', label: 'Cases Handled' },
    { value: 'Top 1%', label: 'Ranked Nationally' }
  ];

  return (
    <section 
      className="bg-charcoal text-ivory py-10 border-y border-gold/10" 
      aria-label="Key Performance Indicators"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-gold">
                <CountUp value={stat.value} />
              </p>
              <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-ivory/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
