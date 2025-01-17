// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./ScrollSection.css";

// import About from "../components/About";
// import Experience from "../components/Experience";
// import Hero from "../components/Hero";

// gsap.registerPlugin(ScrollTrigger);

// function ScrollSection() {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;

//     const sectionCount = section.querySelectorAll("section").length - 1;
//     const expectedWidth = sectionCount * window.innerWidth;
//     console.log("Expected Width:", expectedWidth);
//     console.log("Actual Scroll Width:", section.scrollWidth);
//     console.log("window.innerWidth:", window.innerWidth )
//     console.log("sectionCount:", sectionCount)

//     gsap.to(section, {
//       x: () => `-${section.scrollWidth - window.innerWidth}px`,
//       ease: "none",
//       scrollTrigger: {
//         trigger: "triggerRef.current",
//         start: "top top",
//         // end: () => `+=${expectedWidth}`,
//         end: "top bottom",
//         scrub: 0.6,
//         pin: true,
//         markers: true,
//         invalidateOnRefresh: false,
//       },
//       onUpdate: function () {
//         console.log("Current X Value:", gsap.getProperty(section, "x"));
//       },
//     });
//     return () => {
//       gsap.killTweensOf(section); // Cleanup animation
//     };
//   }, []);

//   return (
//       <div id="app" ref={triggerRef} className="scroll-section-outer">
//         <div ref={sectionRef} className="scroll-section-inner">
//           <section className="section-wrapper">
//             <Hero />
//           </section>
//           <section className="section-wrapper">
//             <About />
//           </section>
//           <section className="section-wrapper">
//             <Experience />
//           </section>
//         </div>
//       </div>
//   );
// }

// export default ScrollSection;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import "./ScrollSection.css"
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ScrollSection = () => {
  const horizontalSection = useRef();

  useGSAP(
    () => {
      const slides = gsap.utils.toArray('.horizontal-panel');
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: 'top top',
          end: () => '+=' + (slides.length - 1) * 100 + '%', // 200% for 3 slides cause you move like only 2 slides over, not 3 like you wouild think
          markers: true,
          scrub: true,
        },
      });
    },
    {
      scope: horizontalSection,
    }
  );
  
  return (
    <>
      <section className="horizontal-section" ref={horizontalSection}>
        <div className="horizontal-panel"><Hero/></div>
        <div className="horizontal-panel"><About/></div>
        <div className="horizontal-panel"><Experience/></div>
      </section>
      <section className='black'></section>
    </>
  );
};

export default ScrollSection;
