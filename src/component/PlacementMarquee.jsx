import React from "react";
import "./PlacementMarquee.css";

// Imported company logos
import Comp1 from "../assets/Homeimg/Comp1.png";
import Comp2 from "../assets/Homeimg/Comp2.png";
import Comp3 from "../assets/Homeimg/Comp3.png";
import Comp4 from "../assets/Homeimg/Comp4.png";
import Comp5 from "../assets/Homeimg/Comp5.png";
import Comp6 from "../assets/Homeimg/Comp6.png";
import Amazon from "../assets/Homeimg/Amazon-India-Logo-PNG-HD.webp";
import Deloitte from "../assets/Homeimg/Deloitte-Logo.jpg";
import Infosys from "../assets/Homeimg/Infosys_logo.svg.png";
import KPMG from "../assets/Homeimg/KPMG_blue_logo.svg.png";
import TCS from "../assets/Homeimg/Tata_Consultancy_Services_old_logo.svg.png";
import Wipro from "../assets/Homeimg/Wipro_Primary_Logo_Color_RGB.svg.png";
import Pwc from "../assets/Homeimg/pwc_logo.png";
import ICICI from "../assets/Homeimg/ICICI-Bank-Logo.jpg";

const partnersLogos = [
  Comp1, Comp2, Comp3, Comp4, Comp5, Comp6,
  Amazon, Deloitte, Infosys, KPMG, TCS, Wipro, Pwc, ICICI
];

const PartnersMarquee = () => {
  // Duplicate for seamless infinite loop
  const repeatedLogos = [...partnersLogos, ...partnersLogos];

  return (
    <section className="partners-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-3">
          <h2 className="section-title text-center">Our Recruiting Partners</h2>
          <p className="partners-subtitle">
            Connecting ISMR graduates with 500+ esteemed global corporations, Fortune 500 multinationals, and top industry pioneers.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee with Edge Fade Masks */}
      <div className="partners-container">
        <div className="partners-content">
          {repeatedLogos.map((logo, index) => (
            <div className="partners-card" key={index}>
              <div className="partners-card-inner">
                <img
                  src={logo}
                  alt={`Corporate Partner ${index + 1}`}
                  className="partners-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Trust Highlights */}
      <div className="partners-trust-strip">
        <div className="partners-trust-item">
          <span className="trust-dot"></span>
          <span><strong>500+</strong> Recruiting Companies</span>
        </div>
        <div className="partners-trust-item">
          <span className="trust-dot"></span>
          <span><strong>100%</strong> Placement Assistance</span>
        </div>
        <div className="partners-trust-item">
          <span className="trust-dot"></span>
          <span><strong>Highest CTC:</strong> ₹ 18 LPA</span>
        </div>
        <div className="partners-trust-item">
          <span className="trust-dot"></span>
          <span><strong>Average CTC:</strong> ₹ 7.5 LPA</span>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
