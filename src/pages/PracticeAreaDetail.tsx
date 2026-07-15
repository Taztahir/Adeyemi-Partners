import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Building, Scale, Shield, Briefcase, FileText, Globe,
  LayoutGrid, ShieldCheck, TrendingUp, Zap, Search, Tag, Lock,
} from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';
import { attorneys } from '../data/attorneys';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

/* ─── Icon map ─────────────────────────────────────────────── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building, Scale, Shield, Briefcase, FileText, Globe,
  LayoutGrid, ShieldCheck, TrendingUp, Zap, Search, Tag, Lock,
};

/* ─── Reusable animation helpers ───────────────────────────── */
const fadeUp = (delay = 0, reduce = false) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  },
});

const stagger = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: delay } },
});

/* ─── Component ─────────────────────────────────────────────── */
export const PracticeAreaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const reduce = useReducedMotion() ?? false;

  const area = practiceAreas.find(a => a.slug === slug) ?? practiceAreas[0];
  const leadCounsel = attorneys.filter(a => area.counselIds?.includes(a.id));

  return (
    <main className="bg-ivory min-h-screen">

      {/* ── 1. Hero ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
            className="font-sans text-[10px] uppercase tracking-widest text-charcoal/45 flex items-center space-x-2 mb-10"
            aria-label="Breadcrumb"
          >
            <Link to="/practice-areas" className="hover:text-burgundy transition-colors focus:outline-none">
              Practice Areas
            </Link>
            <span>/</span>
            <span className="text-gold font-semibold">{area.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: text */}
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial="hidden" animate="visible" variants={stagger()}
            >
              <motion.span variants={fadeUp(0, reduce)} className="text-gold text-xs uppercase tracking-widest font-sans font-medium block">
                Practice Area
              </motion.span>
              <motion.h1 variants={fadeUp(0.04, reduce)} className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight">
                {area.title}
              </motion.h1>
              <motion.p variants={fadeUp(0.08, reduce)} className="font-sans text-sm md:text-base text-charcoal/65 leading-relaxed max-w-lg">
                {area.longDescription ?? area.description}
              </motion.p>
              <motion.div variants={fadeUp(0.12, reduce)} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact">
                  <Button variant="primary">Request a Consultation</Button>
                </Link>
                <Link to="/attorneys">
                  <Button variant="secondary">Meet the Team</Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: image slot */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: reduce ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
            >
              <div className="aspect-[4/3] bg-charcoal rounded-[4px] overflow-hidden border border-charcoal/10 relative">
                <img
                  src={`/images/practice-areas/${area.slug}.jpg`}
                  alt={area.title}
                  className="w-full h-full object-cover opacity-90"
                  onError={(e) => {
                    const t = e.target as HTMLElement;
                    t.style.display = 'none';
                    const p = t.parentElement;
                    if (p) {
                      p.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-charcoal', 'to-burgundy');
                      const d = document.createElement('div');
                      d.className = 'text-center p-8 space-y-3';
                      d.innerHTML = `
                        <div class="w-14 h-14 border border-gold/40 rounded flex items-center justify-center mx-auto">
                          <svg class="w-7 h-7 text-gold" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                          </svg>
                        </div>
                        <p class="font-serif text-xl text-ivory tracking-wide">${area.title}</p>
                        <p class="font-sans text-xs text-gold uppercase tracking-widest">Adeyemi & Partners</p>
                      `;
                      p.appendChild(d);
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Typical Services ──────────────────────────── */}
      {area.services && area.services.length > 0 && (
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-6" aria-labelledby="services-title">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger()}
            className="space-y-14"
          >
            <motion.div variants={fadeUp(0, reduce)} className="space-y-3">
              <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium block">Scope of Work</span>
              <h2 id="services-title" className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
                Typical Services
              </h2>
              <p className="font-sans text-sm text-charcoal/60 max-w-xl leading-relaxed">
                Our partners provide direct counsel at every stage of the engagement lifecycle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {area.services.map((svc, i) => {
                const SvcIcon = iconMap[svc.icon] ?? Briefcase;
                return (
                  <motion.div key={i} variants={fadeUp(i * 0.08, reduce)} className="h-full">
                    <Card borderVariant="charcoal" hoverable className="space-y-5 h-full">
                      <div className="w-9 h-9 flex items-center justify-center border border-gold/35 text-gold rounded-[4px]">
                        <SvcIcon className="w-4 h-4" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-lg font-medium text-charcoal">{svc.title}</h3>
                        <p className="font-sans text-sm text-charcoal/65 leading-relaxed">{svc.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      )}

      {/* ── 3. Representative Engagements ───────────────── */}
      {area.engagements && area.engagements.length > 0 && (
        <section className="bg-[#EFEBE0] py-20 md:py-28 border-y border-charcoal/5" aria-labelledby="engagements-title">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              variants={stagger()}
              className="space-y-14"
            >
              <motion.div variants={fadeUp(0, reduce)} className="text-center space-y-3">
                <h2 id="engagements-title" className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
                  Representative Engagements
                </h2>
                <div className="w-12 h-[1px] bg-gold mx-auto" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.engagements.map((eng, i) => (
                  <motion.div key={i} variants={fadeUp(i * 0.07, reduce)} className="h-full">
                    <div
                      className={`rounded-[4px] border p-6 space-y-3 h-full transition-all duration-300 ${
                        eng.highlighted
                          ? 'bg-ivory border-gold/35'
                          : 'bg-ivory/50 border-charcoal/10 hover:border-charcoal/25'
                      }`}
                    >
                      <Badge variant={eng.highlighted ? 'gold' : 'ivory'}>{eng.category}</Badge>
                      <h3 className="font-serif text-xl font-medium text-charcoal leading-snug">
                        {eng.title}
                      </h3>
                      <p className="font-sans text-sm text-charcoal/65 leading-relaxed">
                        {eng.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 4. Lead Counsel ─────────────────────────────── */}
      {leadCounsel.length > 0 && (
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-6" aria-labelledby="counsel-title">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger()}
            className="space-y-14"
          >
            <motion.div variants={fadeUp(0, reduce)} className="space-y-3">
              <h2 id="counsel-title" className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
                Lead Counsel
              </h2>
              <div className="w-12 h-[1px] bg-gold" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadCounsel.map((attorney, i) => (
                <motion.div key={attorney.id} variants={fadeUp(i * 0.1, reduce)}>
                  <Card borderVariant="charcoal" className="flex flex-row gap-6 items-start p-6">
                    {/* Photo */}
                    <div className="w-24 h-28 flex-shrink-0 bg-charcoal/5 border border-charcoal/10 rounded-[4px] overflow-hidden relative">
                      <img
                        src={attorney.image}
                        alt={attorney.name}
                        className="w-full h-full object-cover grayscale"
                        onError={(e) => {
                          const t = e.target as HTMLElement;
                          t.style.display = 'none';
                          const p = t.parentElement;
                          if (p) {
                            p.classList.add('flex', 'items-center', 'justify-center', 'bg-charcoal', 'text-gold');
                            p.innerHTML = `<span class="font-serif text-xl">${attorney.name.charAt(0)}</span>`;
                          }
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-serif text-xl font-medium text-charcoal">{attorney.name}</h3>
                        <p className="font-sans text-[10px] uppercase tracking-widest text-gold font-semibold mt-0.5">
                          {attorney.role}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-charcoal/65 leading-relaxed line-clamp-3">
                        {attorney.bio}
                      </p>
                      <Link
                        to={`/attorneys/${attorney.slug}`}
                        className="font-sans text-[11px] uppercase tracking-wider text-burgundy hover:text-gold transition-colors font-semibold inline-flex items-center space-x-1 focus:outline-none"
                      >
                        <span>View Profile</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ── 5. Dark CTA ─────────────────────────────────── */}
      <section className="bg-charcoal py-20 md:py-28 text-center" aria-label="Call to action">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto px-6 space-y-6"
        >
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium block">
            Work With Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ivory leading-tight">
            Protect Your Enterprise
          </h2>
          <p className="font-sans text-sm text-ivory/65 leading-relaxed">
            Schedule a confidential consultation with our {area.title} specialists. Direct partner contact from day one — no junior handoffs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/contact">
              <Button
                variant="primary"
                className="bg-ivory text-charcoal border-ivory hover:bg-gold hover:border-gold hover:text-charcoal uppercase tracking-widest text-[11px] w-full sm:w-auto"
              >
                Request a Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="secondary"
                className="border-ivory/30 text-ivory hover:bg-ivory/10 uppercase tracking-widest text-[11px] w-full sm:w-auto"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default PracticeAreaDetail;
