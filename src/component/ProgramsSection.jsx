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
} from "@fortawesome/free-solid-svg-icons";

const ProgramsSection = () => {
  const specializations = [
    {
      title: "Marketing Management",
      description:
        "Marketing Management involves the strategic planning and execution of activities that promote products, services, or ideas to target audiences, ensuring alignment with organizational goals.",
      icon: faChartLine,
      link: "/Programs/MBA-Marketing-Management",
    },
    {
      title: "Financial Management",
      description:
        "Financial Management is the strategic planning, organizing, directing, and controlling of financial activities to ensure optimal utilization of resources and maximize shareholder value.",
      icon: faSackDollar,
      link: "/Programs/MBA-in-Finance-Management-in-Pune",
    },
    {
      title: "Human Resource Management",
      description:
        "Human Resource (HR) Management is the strategic and systematic approach to managing people within an organization to maximize their performance and well-being.",
      icon: faUsersLine,
      link: "/Programs/MBA-Human-Resource-Management",
    },
    {
      title: "Business Analytics",
      description:
        "Business Analytics is the practice of using data-driven techniques to inform strategic and operational decision-making across organizations.",
      icon: faMagnifyingGlassChart,
      link: "/Programs/MBA-Business-Analytics",
    },
    {
      title: "Operations and Supply Chain Management",
      description:
        "Operations and Supply Chain Management (OSCM) is a vital discipline within business strategy that focuses on the efficient transformation of resources into high-quality goods and services.",
      icon: faTruckFast,
      link: "/Programs/MBA-in-Operations-and-Supply-Chain-Management-Programme",
    },
    {
      title: "Pharma and Healthcare Management",
      description:
        "Pharma and Healthcare Management is a multidisciplinary field focused on streamlining medical services and pharmaceutical operations for improved patient outcomes and organizational efficiency.",
      icon: faNotesMedical,
      link: "/Programs/MBA-Pharma-Colleges-in-Pune",
    },
    {
      title: "Agribusiness Management",
      description:
        "Agribusiness Management refers to the professional oversight of agricultural enterprises across the value chain—from farm production to processing, distribution, and marketing.",
      icon: faTractor,
      link: "/Programs/MBA-in-Agribusiness-Management-College-in-Pune",
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