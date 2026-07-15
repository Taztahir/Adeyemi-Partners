import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
    }
  };

  // Framer motion animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
  };

  return (
    <main className="bg-ivory min-h-screen">
      {/* 1. Header Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 border-b border-charcoal/5">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <span className="text-gold text-xs uppercase tracking-widest font-sans font-medium">
            Global Reach. Local Expertise.
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-charcoal leading-tight">
            Connect with Our Legal Experts
          </h1>
          <p className="font-sans text-sm md:text-base text-charcoal/65 leading-relaxed max-w-2xl">
            Providing sophisticated legal solutions across two continents. We invite you to schedule a confidential consultation with our specialized practice leads.
          </p>
        </motion.div>
      </section>

      {/* 2. Main Contact Layout */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* London Office */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-charcoal border-b border-gold/20 pb-2">
                London Office
              </h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                Mayfair Executive Chambers<br />
                22 Berkeley Square, Mayfair<br />
                London W1J 6EB, United Kingdom
              </p>
              <div className="space-y-3 pt-2">
                <a 
                  href="tel:+442079460123" 
                  className="flex items-center space-x-3 font-sans text-sm text-charcoal/80 hover:text-burgundy transition-colors focus:outline-none"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+44 (0) 20 7946 0123</span>
                </a>
                <a 
                  href="mailto:london@adeyemi-law.com" 
                  className="flex items-center space-x-3 font-sans text-sm text-charcoal/80 hover:text-burgundy transition-colors focus:outline-none"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>london@adeyemi-law.com</span>
                </a>
              </div>
            </motion.div>

            {/* Lagos Office */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-serif text-2xl font-medium text-charcoal border-b border-gold/20 pb-2">
                Lagos Office
              </h3>
              <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                Victoria Island Business Center<br />
                15A Adeola Odeku Street<br />
                Victoria Island, Lagos, Nigeria
              </p>
              <div className="space-y-3 pt-2">
                <a 
                  href="tel:+23412718600" 
                  className="flex items-center space-x-3 font-sans text-sm text-charcoal/80 hover:text-burgundy transition-colors focus:outline-none"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+234 (1) 271 8600</span>
                </a>
                <a 
                  href="mailto:lagos@adeyemi-law.com" 
                  className="flex items-center space-x-3 font-sans text-sm text-charcoal/80 hover:text-burgundy transition-colors focus:outline-none"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>lagos@adeyemi-law.com</span>
                </a>
              </div>
            </motion.div>

            {/* Professional Hours */}
            <motion.div variants={itemVariants}>
              <Card borderVariant="charcoal" className="bg-ivory/40 p-6 space-y-4">
                <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-bold flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Professional Hours</span>
                </h4>
                <div className="space-y-3 font-sans text-xs md:text-sm text-charcoal/85">
                  <div className="flex justify-between border-b border-charcoal/5 pb-1">
                    <span>Monday — Friday</span>
                    <span className="font-medium">08:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/5 pb-1">
                    <span>Saturday</span>
                    <span className="font-medium text-burgundy">By Appointment Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-charcoal/50">Closed</span>
                  </div>
                </div>
                <p className="text-[10px] text-charcoal/40 font-sans italic pt-2">
                  *Times are respective to local office time zones (GMT / WAT).
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Right Column: Consultation Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Card borderVariant="charcoal" className="bg-ivory p-8 shadow-sm">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle className="w-12 h-12 text-gold mx-auto" />
                  <h3 className="font-serif text-2xl font-medium text-charcoal">
                    Thank You
                  </h3>
                  <p className="font-sans text-sm text-charcoal/65 max-w-md mx-auto">
                    Your request has been received. One of our associates will review the details and contact you via email or phone within one business day.
                  </p>
                  <div className="pt-4">
                    <Button 
                      variant="secondary" 
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', practiceArea: '', description: '' });
                      }}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal mb-4">
                    Consultation Request
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="fullName" className="font-sans text-[10px] uppercase tracking-wider text-charcoal font-bold">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="fullName" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="font-sans text-sm px-4 py-3 bg-ivory border border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-[4px]"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-wider text-charcoal font-bold">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="font-sans text-sm px-4 py-3 bg-ivory border border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-[4px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-wider text-charcoal font-bold">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 000 000 0000"
                        className="font-sans text-sm px-4 py-3 bg-ivory border border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-[4px]"
                      />
                    </div>

                    {/* Practice Area */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="practiceArea" className="font-sans text-[10px] uppercase tracking-wider text-charcoal font-bold">
                        Practice Area
                      </label>
                      <select 
                        id="practiceArea" 
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        required
                        className="font-sans text-sm px-4 py-3 bg-ivory border border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-[4px]"
                      >
                        <option value="">Select an area</option>
                        <option value="corporate">Corporate Law & Governance</option>
                        <option value="litigation">High-Stakes Litigation</option>
                        <option value="advisory">Strategic Risk & Advisory</option>
                      </select>
                    </div>
                  </div>

                  {/* Brief Description */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="description" className="font-sans text-[10px] uppercase tracking-wider text-charcoal font-bold">
                      Brief Description of Matter
                    </label>
                    <textarea 
                      id="description" 
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Please provide a brief overview of your legal requirements..."
                      className="font-sans text-sm px-4 py-3 bg-ivory border border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-[4px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" className="w-full uppercase tracking-widest text-[11px] py-3.5">
                    Submit Request
                  </Button>

                  <p className="text-[10px] text-charcoal/50 font-sans leading-relaxed text-center">
                    Submission of this form does not create an attorney-client relationship. Please do not send confidential or sensitive information until a formal engagement has been established.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Global Presence Map Graphic Section */}
      <section className="bg-[#EFEBE0] py-16 border-t border-charcoal/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Circular Maps Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center relative py-12">
            
            {/* London Circular Map */}
            <div className="relative w-72 h-72 rounded-full border border-charcoal/10 bg-ivory shadow-inner overflow-hidden flex flex-col items-center justify-center">
              {/* Stylized road grid lines in SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-15 stroke-charcoal stroke-[0.5]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M 0 50 L 100 50 M 50 0 L 50 100 M 10 10 L 90 90 M 10 90 L 90 10" />
                <path d="M 20 50 C 40 40, 60 60, 80 50" fill="none" />
                <path d="M 50 20 C 40 40, 60 60, 50 80" fill="none" />
              </svg>
              <div className="text-center relative z-10 space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold">London</span>
                <p className="font-serif text-lg font-semibold text-charcoal">Mayfair Office</p>
              </div>
            </div>

            {/* Lagos Circular Map */}
            <div className="relative w-72 h-72 rounded-full border border-charcoal/10 bg-ivory shadow-inner overflow-hidden flex flex-col items-center justify-center">
              {/* Stylized road grid lines in SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-15 stroke-charcoal stroke-[0.5]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M 0 35 L 100 35 M 0 65 L 100 65 M 35 0 L 35 100 M 65 0 L 65 100" />
                <path d="M 15 15 Q 50 40 85 15 M 15 85 Q 50 60 85 85" fill="none" />
              </svg>
              <div className="text-center relative z-10 space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gold">Lagos</span>
                <p className="font-serif text-lg font-semibold text-charcoal">Victoria Island Office</p>
              </div>
            </div>

            {/* Floating Global Presence Card */}
            <div className="absolute left-4 bottom-4 bg-ivory border border-gold/30 p-5 rounded-[4px] shadow-md max-w-[240px] z-20">
              <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold block mb-1">
                Global Presence
              </span>
              <p className="font-sans text-xs text-charcoal font-semibold leading-relaxed">
                Strategic hubs in two of the world's most dynamic financial centers.
              </p>
            </div>
          </div>

          {/* Footer Text Info */}
          <div className="text-center mt-8 font-sans text-xs text-charcoal/60 space-y-2 border-t border-charcoal/5 pt-8">
            <p className="font-bold text-charcoal/80 uppercase tracking-widest text-[10px]">Contact Adeyemi & Partners</p>
            <p>London Office: 12 King's Bench Walk, EC4Y | Phone: +44 (0) 20 7936 0800</p>
            <p>Lagos Office: 7 Adeyemi Close, Victoria Island | Phone: +234 (0) 1 271 0800</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
