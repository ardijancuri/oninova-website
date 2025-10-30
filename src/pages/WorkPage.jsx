import React from 'react';
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

const projects = [
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

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Horizontal white space around the container */}
      <div className="px-4 md:px-8 pt-8">
        {/* White background with rounded corners container - 1800px max width */}
        <div className="bg-white rounded-tl-3xl overflow-hidden max-w-[1800px] mx-auto">
          {/* Hero Section with Navigation */}
          <WorkHero />
          
                     {/* Projects Grid */}
           <div className="max-w-[1800px] w-full">
             {/* Mobile Grid - Single Column with Custom Order */}
             <div className="md:hidden space-y-12 pb-32">
               {(() => {
                 // Custom order: Move Tonus higher, keep Monfrere last
                 const reorderedProjects = [...projects];
                 const tonusIndex = reorderedProjects.findIndex(p => p.title === "Tonus");
                 const monfrereIndex = reorderedProjects.findIndex(p => p.title === "Monfrere");
                 
                 // Remove Tonus and Monfrere from their current positions
                 const tonus = reorderedProjects.splice(tonusIndex, 1)[0];
                 const monfrere = reorderedProjects.splice(monfrereIndex > tonusIndex ? monfrereIndex - 1 : monfrereIndex, 1)[0];
                 
                 // Reverse the remaining projects, put Tonus in 3rd position, Monfrere last
                 const reversed = reorderedProjects.reverse();
                 reversed.splice(2, 0, tonus); // Insert Tonus at index 2 (3rd position)
                 reversed.push(monfrere); // Put Monfrere last
                 
                 return reversed;
               })().map((project, index) => (
                 <div key={index}>
                   {/* Project Image */}
                   <div className="relative">
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-auto"
                     />
                   </div>

                   {/* Project Info */}
                   <div className="mt-6">
                     <h3 className="text-[24px] font-medium mb-1">
                       {project.title}
                     </h3>
                     <p className="text-gray-600 text-[16px]">
                       {project.description}
                     </p>
                   </div>
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
                     {/* Project Image */}
                     <div className="relative">
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-auto"
                       />
                     </div>

                     {/* Project Info */}
                     <div className="mt-4">
                       <h3 className="text-[24px] font-medium leading-[1.2]">
                         {project.title}
                       </h3>
                       <p className="text-gray-600 text-[16px]">
                         {project.description}
                       </p>
                     </div>
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