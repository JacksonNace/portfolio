import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./CustomCursor.css";


const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(hover: none)").matches || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

const moveCursor = (e) => {
  setPosition({ x: e.clientX, y: e.clientY });
};

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) setHoverText("[click me!]");
    };
    const handleMouseOut = (e) => {
      if (e.target.closest("a, button")) setHoverText("");
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile]);

useEffect(() => {
  const handleClick = (e) => {
    const x = e.clientX ?? (e.touches && e.touches[0].clientX);
    const y = e.clientY ?? (e.touches && e.touches[0].clientY);

    if (x && y) createBurst(x, y);
  };

  window.addEventListener("click", handleClick);
  window.addEventListener("touchstart", handleClick);

  return () => {
    window.removeEventListener("click", handleClick);
    window.removeEventListener("touchstart", handleClick);
  };
}, []);

const createBurst = (x, y) => {
  const lines = 8;
  const length = 12;

  for (let i = 0; i < lines; i++) {
    const line = document.createElement("div");
    line.className = "burst-line";

    const angle = (360 / lines) * i;

    line.style.left = `${x}px`;
    line.style.top = `${y}px`;
    line.style.setProperty("--angle", `${angle}deg`);
    line.style.setProperty("--length", `${length}px`);

    document.body.appendChild(line);
    setTimeout(() => line.remove(), 600);
  }
};




  if (isMobile) return null;

return hoverText
  ? createPortal(
      <span
        className="cursor-text"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        {hoverText}
      </span>,
      document.body
    )
  : null;

};

export default CustomCursor;
