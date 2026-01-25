import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [hoverText, setHoverText] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button")) setHoverText("[ click me! ]");
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
  }, []);

  return createPortal(
    hoverText && (
      <div
        className="cursor-text"
        style={{ left: position.x + 15 + "px", top: position.y + 15 + "px" }}
      >
        {hoverText}
      </div>
    ),
    document.body
  );
};

export default CustomCursor;
