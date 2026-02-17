import React, { useState, useEffect, useRef } from 'react';
import liriImage from '../assets/images/liri.webp';
import pevalitImage from '../assets/images/pevalit.webp';
import bestmobileImage from '../assets/images/bestmobile.webp';

const ProjectCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      id: 1,
      image: pevalitImage,
      title: "Pevalit",
      subtitle: "Website",
      alt: "Pevalit Website"
    },
    {
      id: 2,
      image: bestmobileImage,
      title: "Best Mobile",
      subtitle: "E-commerce",
      alt: "Best Mobile E-commerce"
    },
    {
      id: 3,
      image: liriImage,
      title: "Liri",
      subtitle: "Website",
      alt: "Liri Website"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && sliderRef.current) {
        sliderRef.current.style.transform = 'none';
        setCurrentSlide(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && sliderRef.current) {
      const slideWidth = 33.333;
      const translateX = -(currentSlide * slideWidth);
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentSlide, isMobile]);

  const goToSlide = (slideIndex) => {
    if (isMobile) {
      setCurrentSlide(Math.max(0, Math.min(projects.length - 1, slideIndex)));
    }
  };

  const handleTouchStart = (e) => {
    if (isMobile) {
      touchStartX.current = e.changedTouches[0].screenX;
    }
  };

  const handleTouchEnd = (e) => {
    if (isMobile) {
      touchEndX.current = e.changedTouches[0].screenX;
      handleSwipe();
    }
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        goToSlide(currentSlide + 1);
      } else {
        // Swipe right - previous slide
        goToSlide(currentSlide - 1);
      }
    }
  };

  return (
    <div className="w-full max-w-[1800px] mx-auto overflow-hidden">
      <div 
        ref={sliderRef}
        className={`flex md:gap-5 transition-transform duration-300 ease-in-out ${
          isMobile ? 'w-[300%] gap-0' : 'w-full'
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`${
              isMobile 
                ? 'w-1/3 flex-shrink-0' 
                : 'flex-1 min-w-0'
            }`}
          >
            <img 
              className="w-full object-contain rounded-[30px]" 
              src={project.image} 
              alt={project.alt}
            />
            <div className="mt-5">
              <h3 className="font-normal text-[28px] lg:text-[38px] leading-tight text-black mb-0">{project.title}</h3>
              <div className={`font-light text-black ${
                isMobile ? 'text-xl' : 'text-[27px]'
              }`}>
                {project.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots - Only show on mobile */}
      <div className={`flex justify-center gap-2 mt-2.5 ${isMobile ? 'flex' : 'hidden'}`}>
        {projects.map((_, index) => (
          <span 
            key={index}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel; 