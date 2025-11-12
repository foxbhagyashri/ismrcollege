import React from "react";
import "./ProgramsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartBar,
  faCoins,
  faTractor,
  faUsers,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

const ProgramsSection = () => {
  const specializations = [
    {
      title: "MARKETING",
      description:
        "Master the art of strategic marketing and drive business success in the digital age.",
      icon: faChartLine,
    },
    {
      title: "BUSINESS ANALYTICS",
      description:
        "Leverage data-driven insights to optimize business processes and drive innovation.",
      icon: faChartBar,
    },
    {
      title: "FINANCE",
      description:
        "Gain expertise in financial management to navigate global markets and enhance corporate value.",
      icon: faCoins,
    },
    {
      title: "AGRIBUSINESS MANAGEMENT",
      description:
        "Explore agricultural practices and agribusiness management to revolutionize rural economies.",
      icon: faTractor,
    },
    {
      title: "HUMAN RESOURCE",
      description:
        "Develop cutting-edge skills to manage and empower diverse workforces effectively.",
      icon: faUsers,
    },
    {
      title: "OPERATIONS & SCM",
      description:
        "Optimize operations and supply chains for efficiency and resilience in a dynamic business environment.",
      icon: faShippingFast,
    },
  ];

  return (
    <section className="programs-section">
      <div className="section-header">
        <h1 className="section-title">MBA Program Specialization</h1>
        <p className="section-subtitle">
          Choose your path to excellence with our specialized MBA programs
          designed for future leaders.
        </p>
      </div>

      <div className="specializations-grid">
        {specializations.map((program, index) => (
          <div
            key={index}
            className={`specialization-card ${
              index % 2 === 0 ? "card-yellow" : "card-blue"
            }`}
          >
            <div className="card-icon">
              <FontAwesomeIcon icon={program.icon} />
            </div>
            <h3 className="card-title">{program.title}</h3>
            <p className="card-description">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};  

export default ProgramsSection;
