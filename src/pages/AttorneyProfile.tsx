import React from 'react';
import { useParams } from 'react-router-dom';

export const AttorneyProfile: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="font-serif text-3xl text-charcoal">Attorney Profile: {slug}</h1>
      <p className="mt-2 text-charcoal/60">Professional background, education, and credentials.</p>
    </div>
  );
};

export default AttorneyProfile;
