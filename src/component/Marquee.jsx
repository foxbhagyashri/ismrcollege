import React from "react";
import "./Marquee.css";

const Marquee = () => {
  const images = [
    "/bajaj-finserv-log.png",
    "/hindustan-times.png",
    "/globe.png",
    "/wns.png",
    "/gabriel.png",
    "/learning-routes.png",
    "/Reliance-Logo.png",
    "/Tech_Mahindra-Logo.wine.png",
    "/EF.webp",
    "/Byjus-Logo.png",
    "/berger.png"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`logo-${index}`} className="marquee-logo" />
        ))}
        {/* Duplicate logos for seamless loop */}
        {images.map((src, index) => (
          <img key={`dup-${index}`} src={src} alt={`logo-dup-${index}`} className="marquee-logo" />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
