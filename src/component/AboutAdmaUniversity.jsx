import React from "react";
import "./AboutAdmaUniversity.css";
import AICTE from "../assets/Homeimg/AICTE.png";
import DOTE from "../assets/Homeimg/DOTE.png";
import NAAC from "../assets/Homeimg/NAAC.png";
import SPPU from "../assets/Homeimg/SPPU.png";
import AIMA from "../assets/Homeimg/AIMA.png";
import AIMS from "../assets/Homeimg/AIMS.png";
import AISE from "../assets/Homeimg/AISE.png";
import CET from "../assets/Homeimg/cetcell.png";

const affiliations = [
  {
    name: "AICTE",
    subtitle: "Technical Council",
    fullName: "All India Council for Technical Education (Govt. of India)",
    logo: AICTE,
    url: "https://www.aicte.gov.in/"
  },
  {
    name: "DTE",
    subtitle: "Maharashtra Govt.",
    fullName: "Directorate of Technical Education, Maharashtra",
    logo: DOTE,
    url: "https://dte.maharashtra.gov.in/home-en/"
  },
  {
    name: "CET CELL",
    subtitle: "State Entrance",
    fullName: "State Common Entrance Test Cell, Maharashtra",
    logo: CET,
    url: "https://cetcell.mahacet.org/"
  },
  {
    name: "SPPU",
    subtitle: "Pune University",
    fullName: "Savitribai Phule Pune University (Affiliating Body)",
    logo: SPPU,
    url: "https://www.unipune.ac.in/"
  },
  {
    name: "AIMA",
    subtitle: "Management Assoc.",
    fullName: "All India Management Association",
    logo: AIMA,
    url: "https://www.aima.in/"
  },
  {
    name: "AIMS",
    subtitle: "Management Schools",
    fullName: "Association of Indian Management Schools",
    logo: AIMS,
    url: "https://aims.org.in/"
  },
  {
    name: "AISHE",
    subtitle: "Higher Education",
    fullName: "All India Survey on Higher Education",
    logo: AISE,
    url: "https://aishe.gov.in/"
  },
  {
    name: "NAAC",
    subtitle: "Accredited Body",
    fullName: "National Assessment and Accreditation Council",
    logo: NAAC,
    url: "https://naac.gov.in/index.php/en/"
  }
];

const AboutAdmaUniversity = () => {
  return (
    <section className="accreditation-timeline-section">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="section-title text-center">Affiliation and Accreditations</h2>
        </div>

        {/* 1-Line Connected Track Design (Referencing 3rd Image) */}
        <div className="timeline-track-wrapper">
          {/* Continuous golden connecting track line */}
          <div className="timeline-connecting-line"></div>

          <div className="timeline-nodes-container">
            {affiliations.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-node-item"
                title={item.fullName}
              >
                {/* Circular White Badge with ring and shadow */}
                <div className="timeline-badge-outer">
                  <div className="timeline-badge-inner">
                    <img
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      className="timeline-node-logo"
                    />
                  </div>
                </div>

                {/* Typography below badge */}
                <div className="timeline-node-info">
                  <h4 className="timeline-node-title">{item.name}</h4>
                  <p className="timeline-node-sub">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdmaUniversity;
