import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import heroSection from '../assets/work/yougosim/hero-section.jpg';
import firstSection from '../assets/work/yougosim/1-section.jpg';
import secondSection from '../assets/work/yougosim/2-section.jpg';
import solutionOne from '../assets/work/yougosim/solution-1.jpg';
import solutionTwo from '../assets/work/yougosim/solution-2.jpg';
import solutionThree from '../assets/work/yougosim/solution-3.jpg';
import goals from '../assets/work/yougosim/goals.png';
import socialOne from '../assets/work/yougosim/social-1.png';
import socialTwo from '../assets/work/yougosim/social-2.png';
import socialThree from '../assets/work/yougosim/social-3.png';
import youGoOnline from '../assets/work/yougosim/yougo-online.jpg';
import youGoLogoOnline from '../assets/work/yougosim/yougo-logo-online.svg';
import mattePlastic from '../assets/work/yougosim/matte-plastic.jpg';
import metalFrame from '../assets/work/yougosim/metal-frame.jpg';
import latex from '../assets/work/yougosim/latex.jpg';
import plastic from '../assets/work/yougosim/plastic.jpg';
import polycarbonate from '../assets/work/yougosim/polycarbonate.jpg';
import softTouch from '../assets/work/yougosim/soft-touch.jpg';
import textileCotton from '../assets/work/yougosim/textile-cotton.jpg';
import nylonCard from '../assets/work/yougosim/nylon-card.jpg';

const solutionGallery = [
  { src: solutionOne, alt: 'YouGo luggage tag on a purple suitcase' },
  { src: solutionTwo, alt: 'Stacked YouGo bucket hats in brand colors' },
  { src: solutionThree, alt: 'YouGo eSIM cards on a bright green textile surface' },
];

const socialGallery = [
  { src: socialOne, alt: 'YouGo campaign mockup in Pisa' },
  { src: socialTwo, alt: 'YouGo campaign mockup in snowy mountains' },
  { src: socialThree, alt: 'YouGo campaign mockup in Paris' },
];

const materialGallery = [
  {
    src: softTouch,
    alt: 'YouGo eSIM card material tile',
    title: 'Soft-touch Plastic',
  },
  {
    src: polycarbonate,
    alt: 'YouGo luggage material tile',
    title: 'Glossy Polycarbonate',
  },
  {
    src: latex,
    alt: 'YouGo heart pillow material tile',
    title: 'Glossy Latex',
  },
  {
    src: plastic,
    alt: 'YouGo wifi icon material tile',
    title: 'Glossy Plastic',
  },
  {
    src: metalFrame,
    alt: 'YouGo deck chair material tile',
    title: 'Powder Metal Frame + Textile',
  },
  {
    src: mattePlastic,
    alt: 'YouGo boarding tag material tile',
    title: 'Matte Plastic',
  },
  {
    src: textileCotton,
    alt: 'YouGo bucket hat material tile',
    title: 'Textile (Cotton Twill Fabric)',
  },
  {
    src: nylonCard,
    alt: 'YouGo parachute material tile',
    title: 'Nylon Cord',
  },
];

const Reveal = ({ children, className = '' }) => <div className={className}>{children}</div>;

const SectionIntro = ({ index, title, children, maxWidthClass = 'max-w-[860px]' }) => (
  <Reveal className={maxWidthClass}>
    <p className="yougo-case-title text-[#EF3747]">
      {index ? `${index} / ${title}` : title}
    </p>
    <p className="mt-4 text-[14px] leading-[1.7] text-[#86868f] md:text-[17px] md:leading-[1.75] lg:text-[18px]">
      {children}
    </p>
  </Reveal>
);

const CaseTextBlock = ({ title, paragraphs, className = '' }) => (
  <div className={className}>
    <p className="yougo-case-title text-[#EF3747]">{title}</p>
    {paragraphs.map((paragraph, index) => (
      <p
        key={`${title}-${index}`}
        className={`text-[13px] leading-[1.32] text-[#8a8a92] md:text-[14px] md:leading-[1.35] ${
          index === 0 ? 'mt-3' : 'mt-4'
        }`}
      >
        {paragraph}
      </p>
    ))}
  </div>
);

const FramedImage = ({ src, alt, className = '', delay = 0, rounded = true }) => (
  <Reveal className={className} delay={delay}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto ${rounded ? 'rounded-[10px] md:rounded-[14px]' : ''}`}
    />
  </Reveal>
);

const pageGutterClass = 'px-3 md:px-6 lg:px-8';
const viewportBleedClass = 'relative left-1/2 w-screen -translate-x-1/2';

const YouGoSimPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-[1800px] rounded-tl-3xl bg-white">
          <section className="pt-2">
            <Navigation textColor="black" inFlow hideBottomCorners />
          </section>

          <main className="pb-16 md:pb-24">
            <section className={`${viewportBleedClass} pt-1 md:pt-2`}>
              <Reveal>
                <img
                  src={heroSection}
                  alt="YouGo eSIM hero composition"
                  className="w-full h-auto"
                />
              </Reveal>
            </section>

            <section className={`${pageGutterClass} mt-12 md:mt-16 lg:mt-20`}>
              <div className="mx-auto max-w-[1100px] px-3 md:px-0">
                <CaseTextBlock
                  title="YouGo eSIM"
                  paragraphs={[
                    'YouGo is a travel-first eSIM marketplace identity built to feel instantly friendly, playful, and easy to trust. The visual language combines bold card forms, light summer objects, and saturated brand color so the product reads as simple global connectivity rather than telecom complexity.',
                  ]}
                />
              </div>

              <div className="mt-8 space-y-10 md:mt-10 md:space-y-14">
                <FramedImage
                  src={firstSection}
                  alt="YouGo card with travel ring and boarding pass"
                  className="mx-auto max-w-[1400px] overflow-hidden"
                  delay={60}
                  rounded={false}
                />
                <FramedImage
                  src={secondSection}
                  alt="YouGo travel object brand system"
                  className="mx-auto max-w-[1400px] overflow-hidden"
                  delay={120}
                  rounded={false}
                />
              </div>
            </section>

            <section className="mt-14 pb-10 md:mt-20 md:pb-14 lg:mt-24 lg:pb-16">
              <div className="mx-auto max-w-[1100px] px-3 md:px-0">
                <CaseTextBlock
                  title="Creative Challenges"
                  paragraphs={[
                    'The challenge was to create a brand that communicates simplicity, trust, and global accessibility while standing out in a competitive telecom market. It also needed to feel intuitive for first-time eSIM users and appealing to modern travelers and digital nomads.',
                  ]}
                />

                <CaseTextBlock
                  title="Solution"
                  className="mt-6 md:mt-7"
                  paragraphs={[
                    'The brand was developed around the idea of effortless global movement. We created a distinctive logo along with a friendly mascot - the YouGo character - designed to make the brand more recognizable and approachable across digital platforms. A clear and memorable slogan, "Anywhere YouGo, YouGo Online," reinforces the promise of instant connectivity wherever users travel.',
                    "Combined with a clean visual system, modern typography, and vibrant digital elements, the brand communicates speed, simplicity, and freedom. The result is a cohesive identity that highlights YouGo's mission: making global connectivity easy, accessible, and always within reach.",
                  ]}
                />
              </div>

              <div className={`${viewportBleedClass} mt-16 md:mt-20`}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {solutionGallery.map((image, index) => (
                    <FramedImage
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      className="overflow-hidden"
                      delay={index * 80}
                      rounded={false}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 md:mt-16 lg:mt-20">
              <div className="mx-auto max-w-[1100px] px-3 md:px-0">
                <CaseTextBlock
                  title="Goals - Not only resonate but endure"
                  paragraphs={[
                    'Throughout our journey, we were committed to building upon the solid foundation that was already in place. We gently guided the existing system into a more unified and mature expression of itself, emphasizing conceptual thinking. We dedicated a significant portion of the project timeline to ideation, concepts, and composition so the brand could stay memorable, durable, and clear across every touchpoint.',
                    'We envisioned a world where every YouGo interaction, from the smallest icon to the boldest campaign, was tied together by the same sense of movement, warmth, and accessibility. The mascot, product cards, and travel props were designed to work as one recognizable system rather than isolated assets. We were careful not to flatten the identity into generic telecom minimalism. YouGo needed personality, character, and a strong travel-first spirit. Success meant creating a system that feels instantly recognizable while remaining flexible enough for marketplace UI, social storytelling, and future campaign work.',
                  ]}
                />
              </div>

              <div className={`${viewportBleedClass} mt-10 md:mt-12 z-10`}>
                <img
                  src={goals}
                  alt="YouGo mascot and mobile product mockup"
                  className="block w-full h-auto"
                />
              </div>

              <div className={`${viewportBleedClass} -mt-10 bg-[#66717D] py-20 md:-mt-20 md:py-28`}>
                <div className={`${pageGutterClass} space-y-14 md:space-y-20`}>
                  <div className="grid gap-4 py-2 md:grid-cols-3 md:gap-6 md:py-4">
                    {socialGallery.map((image) => (
                      <img
                        key={image.alt}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                      />
                    ))}
                  </div>

                  <div className="grid items-center gap-8 py-2 md:grid-cols-[300px_minmax(0,1fr)] md:gap-14 md:py-4 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20">
                    <div className="flex items-center justify-center md:justify-start">
                      <div className="flex items-center gap-4 px-3 py-2 text-white md:px-4 md:py-3 lg:px-5">
                        <img
                          src={youGoLogoOnline}
                          alt="YouGo logo"
                          className="h-auto w-[70px] shrink-0 md:w-[82px] lg:w-[96px]"
                        />
                        <p className="max-w-[260px] text-[19px] leading-[1.1] md:max-w-[300px] md:text-[22px] lg:max-w-[340px]">
                          Anywhere YouGo, YouGo Online
                        </p>
                      </div>
                    </div>

                    <img
                      src={youGoOnline}
                      alt="YouGo cards floating outside an airplane window"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12 py-8 md:mt-16 md:py-10">
              <div className={pageGutterClass}>
                <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 md:gap-x-4 md:gap-y-6">
                  {materialGallery.map((image, index) => (
                    <Reveal
                      key={image.alt}
                      className="overflow-hidden"
                      delay={index * 50}
                    >
                      <div className="overflow-hidden rounded-[10px] md:rounded-[12px]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto"
                        />
                      </div>
                      <p className="mt-2 text-[14px] leading-[1.2] text-[#1b1b1f] md:text-[15px]">
                        {image.title}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <div className="mx-auto mt-16 max-w-[1100px] px-3 md:mt-20 md:px-0">
                  <CaseTextBlock
                    title="The last piece of the puzzle"
                    paragraphs={[
                      'In tandem with developing this visual language, we also initiated a dedicated workstream focused on market research and testing. We tested our creative concepts on social channels such as TikTok, Instagram, Google, and YouTube, gathering real-world insights that allowed us to refine and adapt our approach in real time.',
                      'The marketing assets took on a life of their own, requiring a bespoke visual language crafted specifically for this function. These assets had their own aesthetic and way of being, designed to captivate and engage audiences in the fast-paced environments of social media. Simultaneously, we brought these creations to life, infusing movement and energy into the brand in ways that captured attention and stirred emotions.',
                    ]}
                  />
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default YouGoSimPage;
