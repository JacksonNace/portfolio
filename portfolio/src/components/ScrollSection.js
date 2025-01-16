import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollSection.css";

import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // Debugging widths
    const sectionCount = section.querySelectorAll("section").length;
    const expectedWidth = sectionCount * window.innerWidth;
    console.log("Expected Width:", expectedWidth);
    console.log("Actual Scroll Width:", section.scrollWidth);

    gsap.to(section, {
      x: () => `-${section.scrollWidth - window.innerWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${section.scrollWidth - window.innerWidth}`,
        scrub: 0.6,
        pin: true,
        markers: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      gsap.killTweensOf(section); // Cleanup animation
    };
  }, []);

  return (
    <section>
      <div id="app" ref={triggerRef} className="scroll-section-outer">
        <div ref={sectionRef} className="scroll-section-inner">
          <Hero />
          <About />
          <Experience />
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
