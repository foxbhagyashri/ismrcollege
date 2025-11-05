import React from "react";
import "./AboutAdmaUniversity.css";
import AICTE from "../assets/Homeimg/AICTE.png";
import DOTE from "../assets/Homeimg/DOTE.png";
import NAAC from "../assets/Homeimg/NAAC.png";
import SPPU from "../assets/Homeimg/SPPU.png";

const AboutAdmaUniversity = () => {
  return (
    <section className="about-container">
      {/* Top Row */}
      <div className="about-top">
        <div className="about-left">
          <h2 className="about-title">
            <span className="about-icon">🎓</span> About Institute
          </h2>
          <p className="about-text">
            International School of Management & Research, Pune ranked 20th in
            Beyond IIM's Top 100 B-School Survey, is one of the top B-Schools in Pune. 
            Approved by AICTE, Directorate of Technical Education, and affiliated to 
            Savitribai Phule Pune University, ISMR ensures academic excellence with a 
            100% placement record since inception.
          </p>
        </div>

        <div className="about-right">
          <img src="/about-2.jpg" alt="Adma University" />
        </div>
      </div>

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
            <img src={SPPU} alt="SPPU Logo" className="logo-image" />
            <span>Savitribai Phule Pune University</span>
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
