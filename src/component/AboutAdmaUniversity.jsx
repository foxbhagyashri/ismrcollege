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
            <a href="https://www.aicte.gov.in/" target="_blank">  <img src={AICTE} alt="AICTE Logo" className="logo-image aicte" /></a>
            <a href="https://www.aicte.gov.in/" target="_blank"><span>All India Council for Technical Education</span></a>
          </div>

          <div className="logo-card">
            <a href="https://dte.maharashtra.gov.in/home-en/" target="_blank">   <img src={DOTE} alt="DOTE Logo" className="logo-image" /></a>
            <a href="https://dte.maharashtra.gov.in/home-en/" target="_blank">    <span>Directorate of Technical Education, Maharashtra</span></a>
          </div>
          <div className="logo-card">
            <a href="https://cetcell.mahacet.org/" target="_blank"> <img src={CET} alt="LOAN Logo" className="logo-image" /></a>
            <a href="https://cetcell.mahacet.org/" target="_blank">  <span>CET Cell</span></a>
          </div>
          <div className="logo-card">
            <a href="https://www.unipune.ac.in/" target="_blank"> <img src={SPPU} alt="SPPU Logo" className="logo-image" /></a>
            <a href="https://www.unipune.ac.in/" target="_blank"> <span>Savitribai Phule Pune University</span></a>
          </div>

        </div>
      </div>
      <div className="about-bottom">
        <div className="logos-section">
          <div className="logo-card">
            {/* add specific class so we can style AICTE separately */}
            <a href="https://www.aima.in/" target="_blank"> <img src={AIMA} alt="AIMA Logo" className="logo-image aima" /></a>
            <a href="https://www.aima.in/" target="_blank">  <span>All India Management Association</span></a>
          </div>
          <div className="logo-card">
            <a href="https://aims.org.in/" target="_blank"> <img src={AIMS} alt="DOTE Logo" className="logo-image" /></a>
            <a href="https://aims.org.in/" target="_blank"> <span>Association of Indian
              Management Schools</span></a>
          </div>
          <div className="logo-card">
            <a href="https://aishe.gov.in/" target="_blank">  <img src={AISE} alt="AISE Logo" className="logo-image" /></a>
            <a href="https://aishe.gov.in/" target="_blank">  <span>All India Survey on
              Higher Education</span></a>
          </div>
          <div className="logo-card">
            <a href="http://naac.gov.in/index.php/en/" target="_blank"> <img src={NAAC} alt="NAAC Logo" className="logo-image" /></a>
            <a href="http://naac.gov.in/index.php/en/" target="_blank">  <span>National Assessment and Accreditation Council</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdmaUniversity;
