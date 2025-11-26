import React, { useState } from "react";
import "./ProgramsSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartBar,
  faCoins,
  faTractor,
  faUsers,
  faShippingFast,
  faKitMedical,
} from "@fortawesome/free-solid-svg-icons";

const ProgramsSection = () => {
  // State for handling which card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Toggle function
  const handleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const specializations = [
    {
      title: "Marketing Management",
      description:
        "Marketing Management involves the strategic planning and execution of activities that promote products, services, or ideas to target audiences, ensuring alignment with organizational goals. It focuses on understanding consumer needs, creating value propositions, and fostering strong brand identities. Core elements include market research, segmentation, positioning, pricing strategies, and integrated communications across digital and traditional channels. In today’s competitive landscape, marketing is no longer a linear funnel but a dynamic engagement loop, where analytics, storytelling, and emotional intelligence drive customer loyalty. The rise of personalization, influencer ecosystems, and AI-driven tools has transformed how brands connect and evolve with their audiences. Effective marketing managers combine creativity with data-driven insights to anticipate trends, measure ROI, and adapt swiftly. When infused with Eastern philosophies—such as holistic understanding and long-term relationship building—marketing becomes a discipline of empathy and sustained impact. Ultimately, Marketing Management is the bridge between customer aspiration and meaningful business outcomes.",
      icon: faChartLine,
    },
    {
      title: "Finance Management",
      description:
        "Financial Management is the strategic planning, organizing, directing, and controlling of financial activities to ensure optimal utilization of resources and maximize shareholder value. It revolves around key functions such as budgeting, forecasting, investment analysis, capital structure decisions, and working capital management. Sound financial management ensures liquidity, profitability, and solvency while aligning short-term actions with long-term objectives. In modern business environments, it also involves risk assessment, compliance with regulatory frameworks, and ethical financial practices. With digital transformation, tools like AI-driven analytics, blockchain, and fintech solutions have enhanced accuracy and decision-making speed. Financial managers now play a critical role in navigating uncertainties, allocating capital efficiently, and fostering sustainable growth. Moreover, integrating traditional Indian wisdom—such as value-based decision-making—with contemporary financial theory creates a more holistic approach, especially in mission-driven organizations. At its core, Financial Management is not just about numbers—it’s about enabling stability, resilience, and informed strategic choices in a complex economic landscape.",
      icon: faChartBar,
    },
    {
      title: "Human Resource",
      description:
        "Human Resource (HR) Management is the strategic and systematic approach to managing people within an organization to maximize their performance and well-being. It encompasses functions such as talent acquisition, training and development, performance appraisal, compensation, and employee relations. More than just administrative tasks, modern HR is a driver of organizational culture, leadership development, and workforce engagement. As businesses evolve in complexity, HR managers are required to be agile, emotionally intelligent, and tech-savvy—leveraging tools like HR analytics, AI-powered recruitment platforms, and hybrid workplace models. At the heart of HR lies the philosophy of aligning individual aspirations with organizational goals, creating a workplace that fosters trust, inclusion, and purpose. Drawing from Eastern traditions, principles like empathy, karma, and holistic well-being enrich the HR approach, promoting long-term employee satisfaction and organizational harmony. Ultimately, HR Management is not merely about managing headcount—it’s about cultivating human potential as a source of sustainable advantage.",
      icon: faCoins,
    },
    {
      title: "Business Analytics",
      description:
        "Business Analytics is the practice of using data-driven techniques to inform strategic and operational decision-making across organizations. It integrates statistical analysis, predictive modelling, data visualization, and machine learning to uncover patterns, forecast trends, and optimize performance. At its core, Business Analytics transforms raw data into actionable insights, helping firms gain competitive advantage by enhancing efficiency, customer satisfaction, and innovation. In a fast-evolving digital economy, it plays a critical role in areas such as market intelligence, financial forecasting, risk management, and supply chain optimization. Tools like dashboards, KPIs, and real-time reporting allow stakeholders to monitor and adapt quickly to changing dynamics. When combined with intuitive human judgment and Eastern philosophical clarity—such as seeing connections rather than isolating events—analytics moves beyond just numbers to support holistic understanding. As businesses embrace complexity, Business Analytics becomes not just a toolkit, but a mindset: one that fuels smarter choices, sharper foresight, and meaningful transformation.",
      icon: faTractor,
    },
    {
      title: "Operations & Supply Chain Management",
      description:
        "Operations and Supply Chain Management (OSCM) is a vital discipline within business strategy that focuses on the efficient transformation of resources into high-quality goods and services. It encompasses the planning, coordination, and execution of processes from procurement of raw materials to final product delivery, integrating functions such as production, logistics, inventory control, and quality assurance. In today’s dynamic global environment, OSCM plays a pivotal role in aligning operational capabilities with customer demands and market fluctuations. With advancements in technology—such as real-time data analytics, automation, and AI—organizations can enhance visibility across the supply chain, reduce bottlenecks, and drive continuous improvement. Moreover, sustainability and ethical sourcing have emerged as key priorities, prompting businesses to rethink supply networks for long-term resilience. Efficient supply chains are not only cost-effective but also strategic assets that foster competitive advantage by enabling agility, responsiveness, and customer satisfaction. Leaders in OSCM must balance cost efficiency with service excellence while navigating complexities like geopolitical risks and fluctuating consumer expectations. The integration of Eastern strategic discipline with Western analytical methods, as seen in hybrid leadership philosophies, further strengthens decision-making in complex networks. Overall, OSCM is not just about flow—it’s about forging harmony between purpose, performance, and people across global systems.",
      icon: faUsers,
    },
    {
      title: "Pharma Management",
      description:
        "Pharma and Healthcare Management is a multidisciplinary field focused on streamlining medical services and pharmaceutical operations for improved patient outcomes and organizational efficiency. It encompasses strategic planning, regulatory compliance, supply chain optimization, clinical research, marketing, and financial stewardship within hospitals, biotech firms, and pharmaceutical companies. As global health challenges evolve—from pandemics to aging populations—managers are tasked with integrating innovation, ethical decision-making, and resource allocation. Digital health tools, including AI diagnostics, telemedicine, and electronic health records, are transforming the healthcare landscape, enabling personalized care and data-driven insights. Regulatory frameworks like FDA, CDSCO, and WHO guidelines add complexity, requiring professionals to blend technical expertise with policy awareness. Drawing inspiration from holistic models such as Ayurveda or wellness-based patient care, pharma management in India especially benefits from integrating traditional wisdom with modern science. Ultimately, this domain is about balancing healing and profitability while ensuring accessibility, quality, and compassion across healthcare systems.",
      icon: faKitMedical,
    },
    {
      title: "Agribusiness Management",
      description:
        "Agribusiness Management refers to the professional oversight of agricultural enterprises across the value chain—from farm production to processing, distribution, and marketing. It blends core business principles with agricultural science to enhance productivity, sustainability, and profitability. Key functions include supply chain management, rural financing, input optimization, market linkage development, and policy navigation. With global demand rising and climate challenges intensifying, agribusiness managers are crucial for driving innovation and resilience in food systems. Technological tools such as precision farming, GIS mapping, and agri-analytics are reshaping decision-making and operational efficiency. Additionally, inclusive strategies that empower farmer cooperatives and promote value-based leadership are gaining prominence. Drawing from India's deep agricultural heritage and combining it with contemporary models—such as Theory K or Corporate Rishi Mode—agribusiness becomes not just a commercial endeavour but a mission for food security and rural empowerment. Ultimately, Agribusiness Management is where nature, knowledge, and enterprise converge to feed economies and nourish communities.",
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

            <p className="card-description">
              {expandedCard === index
                ? program.description
                : program.description.substring(0, 100) + "..."}
            </p>

            <button
             className="view-more-btn"
              onClick={() => handleReadMore(index)}
            >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
              {expandedCard === index ? "Read Less" : "Read More"}
            </button>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
