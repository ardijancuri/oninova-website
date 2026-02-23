import React, { useState } from 'react';
import Navigation from './Navigation';
import heroVideo from '../assets/images/oninova-hero.webm';
import logo from '../assets/images/oninova-logo-yellow.png';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-[calc(100svh-4rem)] md:h-[93vh]">
      {/* Skeleton Background */}
      <div className={`absolute inset-0 md:rounded-bl-[30px] md:rounded-tl-[30px] skeleton transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`} />

      {/* Video Background with max-width container */}
      <div className={`absolute inset-0 overflow-hidden flex justify-center md:rounded-bl-[30px] md:rounded-tl-[30px] transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover object-bottom md:object-center"
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source src={heroVideo} type="video/webm" />
          </video>
        </div>
      </div>

      {/* Navigation on top */}
      <Navigation />

      {/* Logo on top for tablet or smaller screens*/}
      <div className="absolute top-20 left-0 w-full flex justify-center lg:hidden">
        <img src={logo} alt="Oninova" className="scale-75 sm:scale-100" />
      </div>

      {/* Content with horizontal spacing */}
      <div className="relative z-10 flex flex-col justify-between h-[calc(100svh-4rem)] md:h-[93vh] px-8 py-6">
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
              Let's craft <br />
              a website that <br />
              defines your brand!
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

export default Hero;
