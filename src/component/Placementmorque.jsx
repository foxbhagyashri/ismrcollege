import React from "react";
import "./Placementmorque.css";

// Imported company logos
import Comp1 from "../assets/Homeimg/Comp1.png";
import Comp2 from "../assets/Homeimg/Comp2.png";
import Comp3 from "../assets/Homeimg/Comp3.png";
import Comp4 from "../assets/Homeimg/Comp4.png";
import Comp5 from "../assets/Homeimg/Comp5.png";
import Comp6 from "../assets/Homeimg/Comp6.png";

const partnersLogos = [Comp1, Comp2, Comp3, Comp4, Comp5, Comp6];

const PartnersMarquee = () => {
  // Repeat logos for continuous marquee effect
  const repeatedLogos = [...partnersLogos, ...partnersLogos];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>

      <div className="partners-container">
        <div className="partners-content">
          {repeatedLogos.map((logo, index) => (
            <div className="partners-card" key={index}>
              <div className="partners-card-inner">
                <div className="partners-wrapper">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="partners-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
