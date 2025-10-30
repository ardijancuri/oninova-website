import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/oninova-logo.png';

const Navigation = ({ textColor = 'white' }) => {
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full flex items-center justify-between">
        {/* Logo with white background and inverted border radius on top-right - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center relative">
          <Link to="/">
            <div className="bg-white h-[80px] flex items-start justify-left rounded-br-[30px]">
              <img src={logo} alt="Oninova" className="w-[200px] mr-[40px]" />
            </div>
          </Link>
          {/* Inverted border radius on top-right - outside container */}
          <div className="absolute top-0 -right-8 w-8 h-8 rounded-tl-[30px] shadow-[-10px_-5px_0px_5px_#FFFFFF]"></div>
          <div className="absolute -bottom-8 left-0 w-8 h-8 rounded-tl-[30px] shadow-[-10px_-5px_0px_5px_#ffffff]"></div>
        </div>

        {/* Navigation Links - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center space-x-24">
          <Link 
            to="/services" 
            className={`uppercase tracking-wider font-medium text-2xl text-${textColor}`}
          >
            Services
          </Link>
          <Link 
            to="/work" 
            className={`uppercase tracking-wider font-medium text-2xl text-${textColor}`}
          >
            Work
          </Link>
        </div>

        {/* Contact Button - Hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center relative">
          <div className="bg-white h-[80px] flex items-start justify-center rounded-bl-[30px] ">
            <a 
              href="mailto:contact@oninova.net"
              className="bg-[#231F20] text-white px-[24px] py-[12px] rounded-[14px] leading-[1] border border-white uppercase font-semibold hover:bg-gray-900 transition-colors flex items-center space-x-2 text-[24px] ml-[40px]"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </div>
          {/* Inverted border radius on top-left - outside container */}
          <div className="absolute top-0 -left-8 w-8 h-8 rounded-tr-[30px] shadow-[10px_-5px_0px_5px_#ffffff]"></div>
          <div className="absolute -bottom-8 right-0 w-8 h-8 rounded-tr-[30px] shadow-[10px_-5px_0px_5px_#ffffff]"></div>
        </div>

        {/* Mobile Menu Button - Visible only on mobile/tablet, positioned on the right */}
        <div className="lg:hidden flex items-center relative ml-auto">
          <div className="bg-white h-[60px] lg:h-[80px] flex items-start justify-center rounded-bl-[30px]">
            <a 
              href="mailto:contact@oninova.net"
              className="bg-[#231F20] ml-[10px] lg:ml-[40px] z-50 text-white px-[24px] py-[12px] rounded-full leading-[1] border border-white uppercase font-semibold hover:bg-gray-900 transition-colors flex items-center space-x-2 text-[24px] "
            >
              <span>MENU</span>
            </a>
          </div>
          {/* Inverted border radius on top-left - outside container */}
          <div className="absolute top-0 -left-8 w-8 h-8 rounded-tr-[30px] shadow-[5px_-5px_0px_5px_#ffffff]"></div>
          <div className="absolute -bottom-8 right-0 w-8 h-8 rounded-tr-[30px] shadow-[10px_-5px_0px_5px_#ffffff]"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 