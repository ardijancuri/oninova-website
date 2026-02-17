import React, { useState } from 'react';
import Navigation from './Navigation';
import servicesVideo from '../assets/images/how-we-work.webm';
import logo from '../assets/images/oninova-logo-yellow.png';

const ServicesHero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-[93vh]">
      {/* Skeleton Background */}
      <div className={`absolute inset-0 rounded-bl-[30px] rounded-tl-[30px] skeleton transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`} />

      {/* Video Background with max-width container */}
      <div className={`absolute inset-0 overflow-hidden flex justify-center rounded-bl-[30px] rounded-tl-[30px] transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={servicesVideo} type="video/webm" />
          </video>
        </div>
      </div>

      {/* Navigation on top */}
      <Navigation />

      {/* Logo on top for tablet or smaller screens*/}
      <div className="absolute top-20 left-0 w-full flex justify-center lg:hidden">
        <img src={logo} alt="Oninova" className="" />
      </div>

      {/* Content with horizontal spacing */}
      <div className="relative z-10 flex flex-col justify-between h-[93vh] px-8 py-6">
        {/* Spacer for navigation */}
        <div className="h-20"></div>

        {/* Main Content with horizontal margins */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center w-full mx-auto px-8">
            {/* This is where the 3D animation would be in the video */}
            <div className="mb-8">
              {/* Placeholder for the 3D animation that's in the video */}
            </div>
          </div>
        </div>

        {/* Bottom Content - Responsive layout */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end pb-2 px-2 md:pb-6 md:px-6">
          {/* Main Heading - Left-aligned for all screen sizes */}
          <div className="text-left max-w-4xl mb-4 lg:mb-0">
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[86px] font-bold text-white leading-[0.85em]">
              Our services <br />
              transform your <br />
              digital presence!
            </h1>
          </div>

          {/* Tagline - Left-aligned for all screen sizes */}
          <div className="text-left lg:text-right">
            <p className="text-[#FFFB00] uppercase tracking-widest font-semibold text-sm md:text-xl">
              Code. Create. Connect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
