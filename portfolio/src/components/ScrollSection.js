// SHELVED HORIZONTAL
// 
// 
// 
//  import React, { useEffect, useRef } from "react";
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
