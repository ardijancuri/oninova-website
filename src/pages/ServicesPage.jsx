import React from 'react';
import ServicesHero from '../components/ServicesHero';
import Footer from '../components/Footer';
import conceptImage1 from '../assets/images/3-1.avif';
import conceptImage2 from '../assets/images/3-2.avif';
import conceptImage3 from '../assets/images/3-3.avif';
import conceptImage4 from '../assets/images/3-4.avif';
import conceptImage5 from '../assets/images/concept-image.avif';
import arrowUp from '../assets/images/arrow-up.svg';
import video1 from '../assets/images/w1.webm';
import video1Mobile from '../assets/images/w1mm.webm';
import video2 from '../assets/images/w2.webm';
import video2Mobile from '../assets/images/w2mm.webm';
import video3 from '../assets/images/w3.webm';
import video3Mobile from '../assets/images/w3mm.webm';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Horizontal white space around the container */}
      <div className="px-4 md:px-8 pt-8 pb-8">
        {/* White background with rounded corners container - 1800px max width */}
        <div className="bg-white rounded-tl-3xl overflow-hidden max-w-[1800px] mx-auto">
          {/* Hero Section with Navigation on top */}
          <ServicesHero />

          {/* Concept Section */}
          <section className="bg-white py-20">
            <div className="max-w-[1800px] w-full">
              {/* Concept Title and Description - Left Aligned */}
              <div className="mb-10 md:mb-20">
                <h2 className="text-[36px] md:text-[65px] leading-[1.2] lg:text-[87px] font-bold text-black text-left mb-4">
                  Concept
                </h2>
                <p className="text-[20px] md:text-[26px] lg:text-[38px] text-gray-800 font-thin leading-[1.2] max-w-[600px]">
                  We'll develop a creative concept and sketch a UI for your website
                </p>
              </div>

              {/* Single Large Concept Image */}
              <div className="flex justify-center">
                <img src={conceptImage5} alt="Concept Design" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </section>

          {/* UI UX Section */}
          <section className="bg-white">
            <div className="max-w-[1800px] w-full">
              {/* UI UX Layout */}
              <div className="flex flex-col lg:flex-row gap-4 min-h-screen items-center py-20">
                {/* Left Column - Title, Description and 3 Images */}
                <div className="lg:w-2/3">
                  <h2 className="text-[36px] md:text-[65px] lg:text-[87px] leading-[1.2] font-bold text-black text-left mb-4">
                    UI UX
                  </h2>
                  <p className="text-[20px] md:text-[26px] lg:text-[38px] max-w-[800px] text-gray-800 font-thin leading-[1.2] mb-10 md:mb-20">
                    We'll develop a user friendly interface for a good looking website for your company
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <img src={conceptImage1} alt="Project Flowchart" className="w-full h-auto" />
                    <img src={conceptImage2} alt="Design Process" className="w-full h-auto" />
                    <img src={conceptImage3} alt="Code Implementation" className="w-full h-auto" />
                  </div>
                </div>

                {/* Right Column - Large Image */}
                <div className="lg:w-1/3 flex items-bottom">
                  <img src={conceptImage4} alt="UI UX Overview" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </section>

          {/* What We Can Help You With Section */}
          <section className="bg-white py-20">
            <div className="max-w-[1800px] w-full">
              <h2 className="text-[36px] leading-[1.2] md:text-[65px] lg:text-[87px] font-bold text-black text-left mb-4">
                What We Can <br /> Help You With
              </h2>

              {/* Services Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web Design & Development */}
                <div className="border border-black rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="font-medium mb-4 text-[20px] md:text-[26px] lg:text-[38px] leading-[1.2]">Web Design & Development</h3>
                    <p className="text-gray-600 mb-4 text-[20px]">Modern, responsive, and user-centered websites built for impact.</p>
                  </div>
                  <div className="h-[80px] overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover hidden md:block"
                    >
                      <source src={video1} type="video/webm" />
                    </video>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover md:hidden"
                    >
                      <source src={video1Mobile} type="video/webm" />
                    </video>
                  </div>
                  <div className="p-8 pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Creative Concept & Design
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        UI Design
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        UX Design & Wireframes
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        UX Web Design
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Responsive Web Design
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Design Consultancy
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Custom Web Platforms
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Web Applications
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Digital Growth & Marketing */}
                <div className="border border-black rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="font-medium mb-4 text-[20px] md:text-[26px] lg:text-[38px] leading-[1.2]">Digital Growth & Marketing Strategy</h3>
                    <p className="text-gray-600 mb-4 text-[20px]">Digital marketing built on data, structure and consistency.</p>
                  </div>
                  <div className="h-[80px] overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover hidden md:block"
                    >
                      <source src={video2} type="video/webm" />
                    </video>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover md:hidden"
                    >
                      <source src={video2Mobile} type="video/webm" />
                    </video>
                  </div>
                  <div className="p-8 pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        PPC Analysis & Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Analytics & Tracking
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Audience Research & Targeting
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Content Creation
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Personalized Email Marketing
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Social Media Marketing
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        eCommerce Marketing
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        AI-powered Campaigns
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SEO & Performance */}
                <div className="border border-black rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="font-medium mb-4 text-[20px] md:text-[26px] lg:text-[38px] leading-[1.2]">SEO & Performance Optimization</h3>
                    <p className="text-gray-600 mb-4 text-[20px]">Optimizing your digital presence for long-term visibility and ROI.</p>
                  </div>
                  <div className="h-[80px] overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover hidden md:block"
                    >
                      <source src={video3} type="video/webm" />
                    </video>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover md:hidden"
                    >
                      <source src={video3Mobile} type="video/webm" />
                    </video>
                  </div>
                  <div className="p-8 pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Search Engine Optimization (SEO)
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        PPC Campaign Management
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Social Media Performance Audits
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Conversion Rate Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Email Funnel Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        Marketing Automation Tools
                      </li>
                      <li className="flex items-center">
                        <span className="text-yellow-400 mr-2">+</span>
                        AI-boosted Digital Strategy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When Do We Get Involved Section */}
          <section className="bg-white">
            <div className="max-w-[1800px] w-full pb-10 md:py-20">
              <div className="relative">
                {/* Title and CTA Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Title */}
                  <h2 className="text-[36px] leading-[1.2] md:text-[80px] lg:text-[100px] font-bold text-black text-left">
                    When Do We Get <br /> Involved In Your Project?
                  </h2>

                  {/* CTA with Custom Arrow */}
                  <a 
                    href="mailto:contact@oninova.net" 
                    className="group relative inline-block w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] self-start lg:self-end lg:-mb-4"
                  >
                    {/* Arrow Image with Hover Animation */}
                    <div className="w-full h-full transform group-hover:rotate-45 transition-transform duration-700 ease-in-out">
                      <img src={arrowUp} alt="Contact Us" className="w-full h-full" />
                    </div>
                    
                    {/* Email Text */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <p className="text-base md:text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        contact@oninova.net
                      </p>
                    </div>

                    {/* Hover Circle Indicator */}
                    <div className="absolute inset-0 border-2 border-black rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"></div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;