import React from 'react';
import oninovaIcon from '../assets/images/oninova-icon.svg';
import argjiraLogo from '../assets/clients-logo/argjira.svg';
import aquaductLogo from '../assets/clients-logo/Aquaduct.png';
import bestMobileLogo from '../assets/clients-logo/bestmobile logo.png';
import burdemLogo from '../assets/clients-logo/burdem-logo.png';
import captainLogo from '../assets/clients-logo/captain.png';
import cioccolatitalianiLogo from '../assets/clients-logo/cio.svg';
import clixomeLogo from '../assets/clients-logo/Clixome.png';
import flutraLogo from '../assets/clients-logo/flutra.png';
import lesnamaxLogo from '../assets/clients-logo/lesnamax.png';
import liriLogo from '../assets/clients-logo/liri-logo.png';
import marahLogo from '../assets/clients-logo/marah.png';
import marigoLogo from '../assets/clients-logo/marigo.png';
import maxteriorLogo from '../assets/clients-logo/maxteriorlogo.png';
import monfrereLogo from '../assets/clients-logo/monfrere logo.png';
import pevalitLogo from '../assets/clients-logo/pevalit.png';
import premiumParkLogo from '../assets/clients-logo/premium park.png';
import salltanetLogo from '../assets/clients-logo/salltanet.png';
import sarajevaLogo from '../assets/clients-logo/sarajeva.png';
import sarajevaGrillLogo from '../assets/clients-logo/sarajeva-grill.png';
import sphiseLogo from '../assets/clients-logo/sphise-white-logo.png';
import takatLogo from '../assets/clients-logo/takat-logo.png';
import tesorounoLogo from '../assets/clients-logo/tesorouno.png';
import tiamoLogo from '../assets/clients-logo/tiamo-logo.png';
import tonusLogo from '../assets/clients-logo/tonus.svg';
import troftaLogo from '../assets/clients-logo/Trofta-istog.png';


const FourthSection = () => {
  // Logo mapping object for easy lookup
  const logoMap = {
    "ARGJIRA": argjiraLogo,
    "AQUADUCT RESIDENCE": aquaductLogo,
    "best mobile": bestMobileLogo,
    "BURDEM": burdemLogo,
    "Captain Candy": captainLogo,
    "cioccolatitaliani": cioccolatitalianiLogo,
    "CLIXOME": clixomeLogo,
    "FLUTRA": flutraLogo,
    "LESNA MAX": lesnamaxLogo,
    "LIRI": liriLogo,
    "MARAH": marahLogo,
    "MARIGO LOUNGE BAR": marigoLogo,
    "Maxterior": maxteriorLogo,
    "MONFRÈRE": monfrereLogo,
    "Pevalit": pevalitLogo,
    "PREMIUM PARK": premiumParkLogo,
    "salltanet": salltanetLogo,
    "SARAJEVA GRILL": sarajevaGrillLogo,
    "SARAJEVA STEAK HOUSE": sarajevaLogo,
    "Sphise": sphiseLogo,
    "TAKAT STUDIOS": takatLogo,
    "TESOROUNO": tesorounoLogo,
    "Tiamo": tiamoLogo,
    "Tonus": tonusLogo,
    "TROFTA ISTOG": troftaLogo
  };

  // Alphabetically ordered logos
  const alphabeticallyOrderedLogos = [
    "ARGJIRA", "AQUADUCT RESIDENCE", "best mobile", "BURDEM", "Captain Candy",
    "cioccolatitaliani", "CLIXOME", "FLUTRA", "LESNA MAX", "LIRI",
    "MARAH", "MARIGO LOUNGE BAR", "Maxterior", "MONFRÈRE", "Pevalit",
    "PREMIUM PARK", "salltanet", "SARAJEVA GRILL", "SARAJEVA STEAK HOUSE", "Sphise",
    "TAKAT STUDIOS", "TESOROUNO", "Tiamo", "Tonus", "TROFTA ISTOG"
  ];

  return (
    <section className="bg-white py-20 min-h-screen flex items-center">
      <div className="max-w-[1800px] w-full">
        {/* Top Section - Content with two columns */}
        <div className="flex flex-col lg:flex-row items-start justify-end gap-12 mb-16">
          {/* Left Content - Icon */}
          <div className="flex-shrink-0">
          </div>

          <div className="flex-1 lg:flex-none lg:max-w-[80%] 2xl:max-w-[60%]">
            {/* Top Sub-section - Title and Description in two columns */}
            <div className="md:mb-10 flex flex-col md:flex-row gap-8 lg:gap-10 justify-end">
              {/* Title Column */}
              <div className="flex-shrink-0">
                <div className="md:w-[160px] lg:w-[228px] flex items-start md:justify-end">
                  <img src={oninovaIcon} alt="Oninova Icon" className="w-[50px] md:w-auto" />
                </div>
              </div>

              {/* Description Column */}
              <div className="flex-1 lg:max-w-[700px]">
                <p className="text-[20px] md:text-[26px] lg:text-[35px] text-gray-800 leading-[1.2] lg:pr-[80px]">
                  We think and speak full stack development. That’s everything you NEED!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Black Breaking Line */}
        <div className="w-full h-px bg-black my-24"></div>

        {/* Bottom Section - Logo Grid in Alphabetical Order */}
        <div className="max-w-6xl mx-auto md:pt-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6 gap-y-14 lg:gap-14">
            {alphabeticallyOrderedLogos.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center justify-center ${logo === "CLIXOME" ? "lg:hidden" : ""}`}
              >
                <img
                  src={logoMap[logo]}
                  alt={logo}
                  className="h-auto max-h-[25px] md:max-h-none opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection; 