import React, { useState } from 'react';
import logo from '../assets/images/oninova-white-logo.svg';

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
    } catch {
      // Submission still reaches Netlify in most cases
    }
    setSubmitted(true);
  };

  return (
    <footer className="bg-black text-white rounded-t-[30px]">
      {/* Main Footer Container with rounded top corners */}
      <div className="max-w-[1800px] mx-auto pt-[80px] md:pt-[105px] px-[40px] md:px-[84px] pb-[60px] md:pb-[180px]">

        {/* Top Section - Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Logo */}
          <div className="mb-6 md:mb-0 mx-auto md:mx-0">
            <img src={logo} alt="Oninova" className="w-[160px] md:w-[256px] h-auto" />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mx-auto md:mx-0">
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61578768352083" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
              <svg className="w-[28px] h-[28px] md:w-[35px] md:h-[35px]" fill="currentColor" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/oninovalabs/" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
              <svg className="w-[28px] h-[28px] md:w-[35px] md:h-[35px]" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/OninovaLabs" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
              <svg className="w-[28px] h-[28px] md:w-[35px] md:h-[35px]" fill="currentColor" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/oninovalabs" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
              <svg className="w-[28px] h-[28px] md:w-[35px] md:h-[35px]" fill="currentColor" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section - Contact and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 mb-12">
          {/* Contact Information */}
          <div className="lg:w-1/2 text-[18px] md:text-[26px] xl:text-[35px] leading-[1.2] text-center md:text-left mb-[40px] md:mb-0">
            <p className="mb-4">Contact us:</p>
            <p className="mb-2">
              Email: <a href="mailto:contact@oninova.net" className="text-[#FFFB00] transition-colors">contact@oninova.net</a>
            </p>
            <p>Address: East Gate A2-1, <br /> Skopje 1000, North Macedonia</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:w-1/2">
            {submitted ? (
              <div className="space-y-4 text-right">
                <div className="bg-[#FFFB00] w-full text-black px-4 md:px-6 py-2 rounded-lg text-[18px] md:text-[26px] xl:text-[32px]">
                  Thank you for subscribing!
                </div>
              </div>
            ) : (
              <form
                name="newsletter"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4 text-right"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    className="w-full px-4 md:px-6 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-[#FFFB00] text-[18px] md:text-[26px] xl:text-[32px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#FFFB00] w-full md:w-auto text-black px-4 md:px-6 py-2 rounded-lg text-[18px] md:text-[26px] xl:text-[32px]"
                >
                  Subscribe to news
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white mb-10"></div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0 text-[14px] md:text-[18px] lg:text-[26px] xl:text-[35px]">© 2026 Oninova. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
