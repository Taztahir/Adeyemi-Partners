import React from 'react';
import OurAttorney from '../components/sections/attorney/OurAttorney';
import Proffessionals from '../components/sections/attorney/Proffessionals';
import Inquiries from '../components/sections/attorney/Inquiries';

export const Attorneys: React.FC = () => {
  return (
    <main className="bg-ivory min-h-screen">
      <OurAttorney />
      <Proffessionals />
      <Inquiries />
    </main>
  );
};

export default Attorneys;
