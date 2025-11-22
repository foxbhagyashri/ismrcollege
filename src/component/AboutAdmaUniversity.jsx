import React from "react";
import "./AboutAdmaUniversity.css";
import AICTE from "../assets/Homeimg/AICTE.png";
import DOTE from "../assets/Homeimg/DOTE.png";
import NAAC from "../assets/Homeimg/NAAC.png";
import SPPU from "../assets/Homeimg/SPPU.png";
import LOAN from "../assets/Homeimg/LOAN.png";
import AIMA from "../assets/Homeimg/AIMA.png";
import AIMS from "../assets/Homeimg/AIMS.png";
import AISE from "../assets/Homeimg/AISE.png";
import CET from "../assets/Homeimg/cetcell.png";

const AboutAdmaUniversity = () => {
  return (
    <section className="about-container">
      {/* Top Row */}

      <h1 className="section-title text-center">Affiliation and Accreditations</h1>

      {/* Bottom Row */}
      <div className="about-bottom">
        <div className="logos-section">
          <div className="logo-card">
            {/* add specific class so we can style AICTE separately */}
            <img src={AICTE} alt="AICTE Logo" className="logo-image aicte" />
            <span>All India Council for Technical Education</span>
          </div>
          <div className="logo-card">
            <img src={DOTE} alt="DOTE Logo" className="logo-image" />
            <span>Directorate of Technical Education, Maharashtra</span>
          </div>
          <div className="logo-card">
            <img src={CET} alt="LOAN Logo" className="logo-image" />
            <span>CET Cell</span>
          </div>
          <div className="logo-card">
            <img src={SPPU} alt="SPPU Logo" className="logo-image" />
            <span>Savitribai Phule Pune University</span>
          </div>
          
        </div>
      </div>
      <div className="about-bottom">
        <div className="logos-section">
          <div className="logo-card">
            {/* add specific class so we can style AICTE separately */}
            <img src={AIMA} alt="AIMA Logo" className="logo-image aima" />
            <span>All India Management Association</span>
          </div>
          <div className="logo-card">
            <img src={AIMS} alt="DOTE Logo" className="logo-image" />
            <span>Association of Indian
              Management Schools</span>
          </div>
          <div className="logo-card">
            <img src={AISE} alt="AISE Logo" className="logo-image" />
            <span>All India Survey on
              Higher Education</span>
          </div>
          <div className="logo-card">
            <img src={NAAC} alt="NAAC Logo" className="logo-image" />
            <span>National Assessment and Accreditation Council</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdmaUniversity;
