import React from 'react';
import Navigation from './Navigation';

const WorkHero = () => {
  return (
    <section className="relative">
      {/* Navigation on top */}
      <Navigation textColor="black" />

      {/* Content with horizontal spacing */}
      <div className="relative z-10 flex flex-col justify-between px-8 py-6">
        {/* Spacer for navigation */}
        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default WorkHero;