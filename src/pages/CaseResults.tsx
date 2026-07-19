import React from 'react';
import Header from '../components/sections/caseresults/Header';
import ResultsList from '../components/sections/caseresults/ResultsList';
import CTA from '../components/sections/caseresults/CTA';

export const CaseResults: React.FC = () => {
  return (
    <main className="bg-ivory min-h-screen">
      <Header />
      <ResultsList />
      <CTA />
    </main>
  );
};

export default CaseResults;
