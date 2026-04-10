import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WorkHero from '../components/WorkHero';
import Footer from '../components/Footer';
import tonusImage from '../assets/images/tonus.avif';
import trofta from '../assets/images/trofta.avif';
import tiamo from '../assets/images/tiamo.avif';
import monfrere from '../assets/images/monfrere.avif';
import pevalit from '../assets/images/pevalit.avif';
import flutra from '../assets/images/flutra.avif';
import bestMobile from '../assets/images/best-mobile.avif';
import marah from '../assets/images/marah.avif';
import premiumPark from '../assets/images/premium-park.avif';
import burdemPlastik from '../assets/images/burdemplastik.avif';
import ocean from '../assets/images/ocean.avif';
import cioccolatitaliani from '../assets/images/cioccolatitaliani.avif';
import tesorouno from '../assets/images/tesorouno.avif';
import lesnamax from '../assets/images/lesnamax.avif';
import yougosimWork from '../assets/images/yougosim-work.jpg';

const projects = [
  {
    title: "YouGo eSIM",
    description: "eSIM Marketplace Web app",
    image: yougosimWork,
    fixedFrame: true,
    link: "/work/yougosim"
  },
  {
    title: "Tonus",
    description: "3d interactive website",
    image: tonusImage
  },
  {
    title: "Trofta",
    description: "Website & Booking System",
    image: trofta
  },
  {
    title: "Tiamo",
    description: "Website",
    image: tiamo
  },
  {
    title: "Monfrere",
    description: "Website",
    image: monfrere
  },
  {
    title: "Pevalit",
    description: "Website",
    image: pevalit
  },
  {
    title: "Flutra Shoes",
    description: "UI/UX Design",
    image: flutra
  },
  {
    title: "Best Mobile",
    description: "E-Commerce",
    image: bestMobile
  },
  {
    title: "Marah",
    description: "E-Commerce",
    image: marah
  },
  {
    title: "Premium Park Hotel",
    description: "Website",
    image: premiumPark
  },
  {
    title: "Burdem Plastik",
    description: "Website Catalog",
    image: burdemPlastik
  },
  {
    title: "Ocean",
    description: "Website Redesign",
    image: ocean
  },
  {
    title: "Cioccolatitaliani",
    description: "Digital Menu",
    image: cioccolatitaliani
  },
  {
    title: "Tesorouno",
    description: "Website",
    image: tesorouno
  },
  {
    title: "LesnaMax",
    description: "UI/UX Redesign",
    image: lesnamax
  }
];

const projectImageRadiusClass = 'rounded-lg';

const ProjectImage = ({ src, alt, className, containerClassName = '', loaded, onLoad, reserveAspectRatio }) => {
  return (
    <div
      className={`relative ${containerClassName}`}
      style={!loaded && reserveAspectRatio ? { aspectRatio: reserveAspectRatio } : undefined}
    >
      {!loaded && <div className={`skeleton absolute inset-0 ${projectImageRadiusClass}`} />}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={onLoad}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
    </div>
  );
};

const getProjectImageProps = (project) => {
  if (project.fixedFrame) {
    return {
      className: 'h-full w-full object-cover',
      containerClassName: `aspect-[3/4] overflow-hidden ${projectImageRadiusClass}`,
    };
  }

  return {
    className: 'w-full h-auto',
    containerClassName: `overflow-hidden ${projectImageRadiusClass}`,
  };
};

const ProjectCard = ({ project, titleSpacingClass, titleClassName }) => {
  const [loaded, setLoaded] = useState(false);
  const imageProps = getProjectImageProps(project);
  const reserveAspectRatio = project.fixedFrame ? undefined : '3 / 4';

  const content = (
    <>
      <ProjectImage
        src={project.image}
        alt={project.title}
        {...imageProps}
        loaded={loaded}
        onLoad={() => setLoaded(true)}
        reserveAspectRatio={reserveAspectRatio}
      />
      <div className={titleSpacingClass}>
        {loaded ? (
          <>
            <h3 className={titleClassName}>
              {project.title}
            </h3>
            <p className="text-gray-600 text-[16px]">
              {project.description}
            </p>
          </>
        ) : (
          <div className="space-y-2">
            <div className="skeleton h-7 w-[58%] rounded-md" />
            <div className="skeleton h-5 w-[72%] rounded-md" />
          </div>
        )}
      </div>
    </>
  );

  if (project.link) {
    return (
      <Link to={project.link} className="group block" aria-label={project.title}>
        {content}
      </Link>
    );
  }

  return <div className="group">{content}</div>;
};

// Compute mobile order once
const mobileProjects = (() => {
  const ordered = [...projects].reverse();
  const moveProject = (title, targetIndex) => {
    const projectIndex = ordered.findIndex((project) => project.title === title);
    if (projectIndex === -1) return;

    const [project] = ordered.splice(projectIndex, 1);
    ordered.splice(Math.min(targetIndex, ordered.length), 0, project);
  };

  const moveProjectToEnd = (title) => {
    const projectIndex = ordered.findIndex((project) => project.title === title);
    if (projectIndex === -1) return;

    const [project] = ordered.splice(projectIndex, 1);
    ordered.push(project);
  };

  moveProject("YouGo eSIM", 0);
  moveProject("Tonus", 2);
  moveProjectToEnd("Monfrere");

  return ordered;
})();

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Horizontal white space around the container */}
      <div className="px-4 md:px-8">
        {/* White background with rounded corners container - 1800px max width */}
        <div className="bg-white rounded-tl-3xl overflow-hidden max-w-[1800px] mx-auto">
          {/* Hero Section with Navigation */}
          <WorkHero />

          {/* Projects Grid */}
          <div className="max-w-[1800px] w-full">
            {/* Mobile Grid - Single Column with Custom Order */}
            <div className="md:hidden space-y-12 pb-32">
              {mobileProjects.map((project, index) => (
                <div key={index}>
                  <ProjectCard
                    project={project}
                    titleSpacingClass="mt-6"
                    titleClassName="text-[24px] font-medium mb-1"
                  />
                </div>
              ))}
            </div>

            {/* Tablet and Desktop Grid - Normal Order */}
            <div className="hidden md:block">
              <div className="columns-2 lg:columns-4 gap-4 pb-32">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid mb-8"
                  >
                    <ProjectCard
                      project={project}
                      titleSpacingClass="mt-4"
                      titleClassName="text-[24px] font-medium leading-[1.2]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
