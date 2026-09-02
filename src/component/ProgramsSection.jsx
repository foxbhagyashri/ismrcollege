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
      description:
        "The MBA in Marketing Management at ISMR Pune is a 2-year, SPPU-affiliated program under NEP 2020.",
      icon: faChartLine,
      link: "/programs/mba-in-marketing-management-in-pune",
    },
    {
      title: "MBA in Finance Management",
      description:
        "MBA in Finance Management in Pune at ISMR is a 2-year full-time postgraduate programme affiliated with Savitribai Phule Pune University (SPPU) and approved by AICTE.",
      icon: faSackDollar,
      link: "/programs/mba-in-finance-management-in-pune",
    },
    {
      title: "MBA in Human Resource Management",
      description:
        "The MBA in Human Resource Management at ISMR is offered by an AICTE-approved MBA HR College in Pune, designed to prepare students for careers in recruitment, HR operations, talent management, and strategic human resources. ",
      icon: faUsersLine,
      link: "/programs/mba-hr-college-in-pune",
    },
    {
      title: "MBA in Business Analytics",
      description:
        "Business Analytics is the practice of using data-driven techniques to inform strategic and operational decision-making across organizations.",
      icon: faMagnifyingGlassChart,
      link: "/programs/mba-in-business-analytics-pune",
    },
    {
      title: "MBA in Operations and Supply Chain Management",
      description:
        "Operations and supply chain management involves planning procurement, manufacturing, inventory, logistics, and product delivery to improve business efficiency.",
      icon: faTruckFast,
      link: "/programs/mba-in-operations-and-supply-chain-management-in-pune",
    },
    {
      title: "MBA in Pharma & Healthcare Management",
      description:
        "An MBA in Pharma & Healthcare Management in Pune prepares science, pharmacy, and allied health graduates, as well as working professionals in hospitals and pharma companies, to move into leadership roles across one of India's fastest-growing industries. ",
      icon: faNotesMedical,
      link: "/programs/mba-in-pharma-healthcare-management-in-pune",
    },
    {
      title: "MBA in Agribusiness Management",
      description:
        "MBA in Agribusiness Management in Pune is a two-year postgraduate program that combines agricultural science with business management, supply chain operations, rural finance, commodity markets, and strategic decision-making.",
      icon: faTractor,
      link: "/programs/mba-in-agribusiness-management-pune",
    },
    {
      title: "BBA Programme in Pune",
      description:
        "Bachelor of Business Administration at ISMR Pune equips students with practical business skills, industry internships, and managerial leadership foundations.",
      icon: faGraduationCap,
      link: "/programs/bba-college-in-pune",
    },
    {
      title: "BCA Programme in Pune",
      description:
        "Bachelor of Computer Applications at ISMR Pune offers hands-on training in software development, cloud computing, and high-growth IT placements.",
      icon: faLaptopCode,
      link: "/programs/bca-college-in-pune",
    },
  ];

  return (
    <section className="programs-section">
      <div className="section-header">
        <h1 className="section-title">Explore Our Specializations</h1>
        <p className="section-subtitle">
          Designed for future leaders, our MBA programs combine academic rigor
          with practical industry application.
        </p>
      </div>

      <div className="specializations-grid">
        {specializations.map((program, index) => (
          <div
            key={index}
            className={`specialization-card ${index % 2 === 0 ? "card-theme-blue" : "card-theme-yellow"
              }`}
          >
            <div className="card-icon">
              <FontAwesomeIcon icon={program.icon} />
            </div>

            <div className="card-content">
              <h3 className="card-title">{program.title}</h3>

              <p className="card-description">
                {program.description}
              </p>
            </div>

            <Link className="view-more-btn" to={program.link}>
              Read More
              <svg
                width="16"
                height="16"
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
    </section>
  );
};

export default ProgramsSection;