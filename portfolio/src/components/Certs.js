import React, { useState } from 'react';
import './Certs.css';

function Certs() {
  const certificates = [
    {
      id: 1,
      src: "images/certs/azure.png",
      title: 'Microsoft Azure Fundamentals',
      description: 'Studied for and obtained my AZ-900 in January 2024. ',
    },
    {
      id: 2,
      src: "images/certs/security.jpg",
      title: 'CompTIA Security+',
      description: 'studying rn for this, unfortunate',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  return (
    <div className="cert-container">
      <div className="carousel">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={cert.src} alt={cert.title} />
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNextClick}>
        &#10095;
      </button>

      <div className="carousel-caption-below">
        <h5>{certificates[activeIndex].title}</h5>
        <p>{certificates[activeIndex].description}</p>
      </div>
    </div>
  );
}

export default Certs;
