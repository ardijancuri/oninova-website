import React, { useState } from 'react';
import WorkHero from '../components/WorkHero';
import Footer from '../components/Footer';
import heroVideo from '../assets/work/yougosim/hero.webm';
import colorPaletteVideo from '../assets/work/yougosim/color-palette.webm';
import thirdSectionBg from '../assets/work/yougosim/third-section-bg.jpg';
import cardImage from '../assets/work/yougosim/card-image.png';

const BackgroundVideoSection = ({ src, className = '', minHeightClass }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className={`relative overflow-hidden ${minHeightClass} ${className}`}>
      <div
        className={`absolute inset-0 skeleton transition-opacity duration-700 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onCanPlay={() => setLoaded(true)}
      >
        <source src={src} type="video/webm" />
      </video>
    </section>
  );
};

const viewportBleedClass = 'relative w-screen ml-[calc(50%-50vw)] overflow-hidden';

const YouGoSimPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1800px] overflow-hidden rounded-tl-3xl bg-white">
          <WorkHero />
        </div>
      </div>

      <BackgroundVideoSection
        src={heroVideo}
        minHeightClass="min-h-[100svh]"
        className={viewportBleedClass}
      />

      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1800px] bg-white">
          <section className="bg-white px-6 py-16 md:px-10 md:py-24 lg:px-16 lg:py-32">
            <div className="mx-auto max-w-[1000px]">
              <div className="space-y-10 text-[#6f6f6f]">
                <div className="space-y-3">
                  <h1 className="text-[30px] font-semibold leading-none text-[#EF3747] md:text-[40px]">
                    YouGo eSIM
                  </h1>
                  <p className="max-w-[920px] text-[17px] leading-[1.45] md:text-[19px]">
                    YouGo is a modern digital connectivity service designed to make staying connected
                    simple and borderless. Using eSIM technology, users can activate mobile data
                    instantly without physical SIM cards, making it easy to access reliable internet
                    anywhere in the world.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-[30px] font-semibold leading-none text-[#EF3747] md:text-[40px]">
                    Creative Challenges
                  </h2>
                  <p className="max-w-[920px] text-[17px] leading-[1.45] md:text-[19px]">
                    The challenge was to create a brand that communicates simplicity, trust, and
                    global accessibility while standing out in a competitive telecom market. It also
                    needed to feel intuitive for first-time eSIM users and appealing to modern
                    travelers and digital nomads.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-[30px] font-semibold leading-none text-[#EF3747] md:text-[40px]">
                    Solution
                  </h2>
                  <p className="max-w-[920px] text-[17px] leading-[1.45] md:text-[19px]">
                    The brand was developed around the idea of effortless global movement. We
                    created a distinctive logo along with a friendly mascot, the YouGo character,
                    designed to make the brand more recognizable and approachable across digital
                    platforms. A clear and memorable slogan, &quot;Anywhere YouGo, YouGo Online,&quot;
                    reinforces the promise of instant connectivity wherever users travel.
                  </p>
                  <p className="max-w-[920px] text-[17px] leading-[1.45] md:text-[19px]">
                    Combined with a clean visual system, modern typography, and vibrant digital
                    elements, the brand communicates speed, simplicity, and freedom. The result is
                    a cohesive identity that highlights YouGo&apos;s mission: making global connectivity
                    easy, accessible, and always within reach.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section
        className={`${viewportBleedClass} bg-cover bg-center px-4 py-8 md:px-8 md:py-14 lg:px-12 lg:py-20`}
        style={{ backgroundImage: `url(${thirdSectionBg})` }}
      >
        <div className="mx-auto max-w-[1000px] rounded-[36px] bg-[#dbe8f0] px-8 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:rounded-[52px] md:px-14 md:py-10 lg:px-20 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="max-w-[360px] text-[54px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#EF3747] md:text-[78px] lg:text-[92px]">
                Hey,
                <br />
                we&apos;re
                <br />
                YouGo
              </h2>
              <p className="mt-8 max-w-[360px] text-[24px] leading-[1.05] text-[#1b1b1b] md:text-[31px]">
                and we&apos;re on a mission to give travelers greater confidence to experience the world.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[420px] lg:mx-0 lg:flex-shrink-0">
              <div className="overflow-hidden rounded-[28px] md:rounded-[40px]">
                <img
                  src={cardImage}
                  alt="YouGo eSIM card floating above airplane wing"
                  className="h-full w-full object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackgroundVideoSection
        src={colorPaletteVideo}
        minHeightClass="h-[58vh] min-h-[420px] md:h-[85vh] md:min-h-[700px]"
        className={viewportBleedClass}
      />

      <div className="px-4 pb-8 md:px-8">
        <div className="mx-auto max-w-[1800px] overflow-hidden bg-white">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default YouGoSimPage;
