import React from 'react';
import './Certs.css';

function Certs() {
  const certs = [
    {
      imgUrl: "images/certs/azure.png",
      title: "Microsoft Azure Fundamentals (AZ-900)",
      date: "January 23rd, 2024",
      expire: "NEVER",
    },
    {
      imgUrl: "images/certs/security.jpg",
      title: "CompTIA Security+",
      date: "February 32nd, 2026",
      expire: "TODAY",
    },

  ];

  return (
    <div className='cert-container'>
      {certs.map((cert, index) => (
        <div className='cert-box' key={index}>
          <img src={cert.imgUrl} alt="Reload these images!!!"/>
          <h3>{cert.title}</h3>
          <p>Date Obtained: {cert.date}</p>
          <p>Expires: {cert.expire} </p>
        </div>
      ))}
    </div>
  );
}

export default Certs;
