import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Horizontal white space around the container */}
      <div className="px-4 md:px-8 pt-8">
        {/* White background with rounded corners container - 1800px max width */}
        <div className="bg-white rounded-tl-3xl overflow-hidden max-w-[1800px] mx-auto">
          {/* Hero Section with Navigation on top */}
          <Hero />

          {/* Second Section */}
          <SecondSection />

          {/* Third Section - Project Carousel */}
          <ThirdSection />

          {/* Fourth Section */}
          <FourthSection />

          {/* Footer */}
          <Footer />
        </div>
      </div>


    </div>
  );
};

export default HomePage; 