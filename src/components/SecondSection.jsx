import React, { useRef, useEffect, useState } from 'react';
import secondSectionVideo from '../assets/images/2nd-section.webm';
import oninovaIcon from '../assets/images/oninova-icon.svg';

const SecondSection = () => {
  const videoRef = useRef(null);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  const areas = [
    "E-Commerce",
    "SEO", 
    "Social Media",
    "PPC",
    "AI",
    "META"
  ];

  // Intersection Observer to detect when video enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedOnce) {
          setIsInViewport(true);
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setHasPlayedOnce(true);
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasPlayedOnce]);

  // Handle mouse hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="bg-white py-20 min-h-screen flex items-center">
      <div className="max-w-[1800px] w-full">
        {/* Top Section - Video Container */}
        <div className="mb-20">
          <div className="flex justify-center items-center">
            <video
              ref={videoRef}
              muted
              playsInline
              className="w-full max-w-4xl rounded-full cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <source src={secondSectionVideo} type="video/webm" />
            </video>
          </div>
        </div>

        {/* Black Breaking Line */}
        <div className="w-full h-px bg-black mb-24"></div>

        {/* Bottom Section - Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Content - Icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center">
              <img src={oninovaIcon} alt="Oninova Icon" className="w-full h-full" />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 lg:flex-none lg:max-w-[80%] 2xl:max-w-[60%]">
            {/* Top Sub-section - Title and Description in two columns */}
            <div className="mb-20 flex flex-col md:flex-row gap-8 lg:gap-10 justify-end">
              {/* Title Column */}
              <div className="flex-shrink-0">
                <h2 className="md:w-[160px] lg:w-[228px] text-[16px] md:text-right uppercase font-semibold text-gray-800">
                  Smart Development
                </h2>
              </div>
              
              {/* Description Column */}
              <div className="flex-1 lg:max-w-[700px]">
                <p className="text-[20px] md:text-[26px] lg:text-[35px] text-gray-800 leading-[1.2]">
                  Combining unique design and rich technology, we build digital products exactly as they were designed, without shortcuts or simplifications.
                </p>
              </div>
            </div>

            {/* Bottom Sub-section - Areas */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-10 justify-end">
              {/* Areas Title Column */}
              <div className="flex-shrink-0">
                <h3 className="md:w-[160px] lg:w-[228px] text-[16px] md:text-right uppercase font-semibold text-gray-800">
                  Areas
                </h3>
              </div>
              
              {/* Areas Buttons Column */}
              <div className="flex-1 lg:max-w-[700px]">
                <div className="flex flex-wrap gap-4">
                  {areas.map((area, index) => (
                    <button
                      key={index}
                      className="bg-white border border-gray-800 text-gray-800 px-8 py-2 rounded-full text-[20px] lg:text-[28px] font-normal whitespace-nowrap"
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection; 