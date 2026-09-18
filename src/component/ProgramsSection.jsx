import React from "react";
import "./ProgramsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChartLine,
  faSackDollar,
  faUsersLine,
  faMagnifyingGlassChart,
  faTractor,
  faTruckFast,
  faNotesMedical,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const ProgramsSection = () => {
  const specializations = [
    {
      title: "MBA in Marketing Management",
      badge: "2 Years · SPPU Affiliated",
      description:
        "The MBA in Marketing Management at ISMR Pune is a 2-year, SPPU-affiliated program under NEP 2020 focusing on real-world brand strategy and digital marketing.",
      icon: faChartLine,
      link: "/programs/mba-in-marketing-management-in-pune",
    },
    {
      title: "MBA in Finance Management",
      badge: "2 Years · SPPU Affiliated",
      description:
        "Master corporate finance, fintech, and investment banking with an AICTE-approved 2-year full-time postgraduate degree at ISMR Pune.",
      icon: faSackDollar,
      link: "/programs/mba-in-finance-management-in-pune",
    },
    {
      title: "MBA in Human Resource Management",
      badge: "2 Years · SPPU Affiliated",
      description:
        "Prepare for executive careers in HR analytics, corporate recruitment, talent management, and strategic HR operations with top faculty.",
      icon: faUsersLine,
      link: "/programs/mba-hr-college-in-pune",
    },
    {
      title: "MBA in Business Analytics",
      badge: "2 Years · SPPU Affiliated",
      description:
        "Learn Python, Tableau, SQL, and AI strategy to translate big data into impactful corporate decisions with live industry projects.",
      icon: faMagnifyingGlassChart,
      link: "/programs/mba-in-business-analytics-pune",
    },
    {
      title: "MBA in Operations & Supply Chain",
      badge: "2 Years · SPPU Affiliated",
      description:
        "Master SAP/ERP systems, Lean Six Sigma, global logistics, and procurement to streamline modern business operations.",
      icon: faTruckFast,
      link: "/programs/mba-in-operations-and-supply-chain-management-in-pune",
    },
    {
      title: "MBA in Pharma & Healthcare",
      badge: "2 Years · SPPU Affiliated",
      description:
        "Prepare science, pharmacy, and healthcare graduates for leadership roles across hospitals, biotech, and pharmaceutical enterprises.",
      icon: faNotesMedical,
      link: "/programs/mba-in-pharma-healthcare-management-in-pune",
    },
    {
      title: "MBA in Agribusiness Management",
      badge: "2 Years · SPPU Affiliated",
      description:
        "Integrate agricultural science with business management, food processing, agri-finance, and commodity supply chains.",
      icon: faTractor,
      link: "/programs/mba-in-agribusiness-management-pune",
    },
    {
      title: "BBA Programme in Pune",
      badge: "3 Years · Under Graduate",
      description:
        "Bachelor of Business Administration at ISMR Pune equips students with practical business skills, corporate internships, and managerial foundations.",
      icon: faGraduationCap,
      link: "/programs/bba-college-in-pune",
    },
    {
      title: "BCA Programme in Pune",
      badge: "3 Years · Under Graduate",
      description:
        "Bachelor of Computer Applications offers hands-on training in software development, AI, cloud computing, and high-growth IT placements.",
      icon: faLaptopCode,
      link: "/programs/bca-college-in-pune",
    },
  ];

  return (
    <section className="programs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ACADEMIC EXCELLENCE</span>
          <h2 className="section-title">Explore Our Specializations</h2>
          <p className="section-subtitle">
            Designed for future corporate leaders, our industry-aligned programs combine
            academic rigor with practical business exposure.
          </p>
        </div>

        <div className="specializations-grid">
          {specializations.map((program, index) => (
            <div key={index} className="specialization-card">
              <div className="card-top-bar">
                <span className="card-badge">{program.badge}</span>
              </div>

              <div className="card-icon">
                <FontAwesomeIcon icon={program.icon} />
              </div>

              <div className="card-content">
                <h3 className="card-title">{program.title}</h3>
                <p className="card-description">{program.description}</p>
              </div>

              <Link className="view-more-btn" to={program.link}>
                <span>Read More</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;