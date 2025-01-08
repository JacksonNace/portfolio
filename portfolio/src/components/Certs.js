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
      description: 'studying rn  for this, unfortunate',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (e) => {
    const newIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
    setActiveIndex(newIndex);
  };

  return (
    <div className="Cert-container">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`carousel-item ${
                index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <img src={cert.src} className="d-block w-100" alt={cert.title} />
            </div>
          ))}
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
          onClick={() => setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
          onClick={() => setActiveIndex((prev) => (prev + 1) % certificates.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <div className="carousel-caption-below">
        <h5>{certificates[activeIndex].title}</h5>
        <p>{certificates[activeIndex].description}</p>
      </div>
    </div>
  );
}

export default Certs;
