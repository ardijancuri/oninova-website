import React from 'react';
import ProjectCarousel from './ProjectCarousel';

const ThirdSection = () => {
  return (
    <section className="bg-white py-10 flex items-center">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-[36px] md:text-[65px] lg:text-[87px] font-bold text-black text-left">
            Recent Projects
          </h2>
        </div>
        
        {/* Project Carousel */}
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default ThirdSection; 