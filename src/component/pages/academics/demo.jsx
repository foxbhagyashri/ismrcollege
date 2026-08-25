import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { BookFill } from "react-bootstrap-icons";

function ProgramOfferedPage() {
  const [activeTab, setActiveTab] = useState("BCA");
  const [activeSection, setActiveSection] = useState("");

  const interFont = {
    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
    fontSize: "16px",
    lineHeight: 1.7,
  };

  // Tab options
  const tabs = ["MBA", "BBA", "BCA"];

  // Sections for each tab
  const sectionsByTab = {
    "BCA": ["Programme", "Features"],
    "BBA": ["Programme", "Features"],
    "MBA": [
      "Financial Management",
      "Marketing Management",
      "Human Resource Management",
      "Operations & Supply Chain Management",
      "Business Analytics",
      "Agribusiness Management",
      "Pharma Management",
    ],
  };

  // Content for each section
  const sectionContent = {
    "BCA-Programme": {
      title: "BCA Programme Overview",
      description:
        "Bachelor of Computer Applications (BCA) is a 3-year undergraduate degree program that focuses on computer applications and software development. The program provides a strong foundation in computer science, programming languages, database management, networking, and web technologies. Students gain practical skills through hands-on projects and industry exposure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      details: [
        "3-year full-time undergraduate program with comprehensive curriculum covering all aspects of computer applications and modern software development methodologies",
        "Semester system with theory and practical components, ensuring balanced learning approach with hands-on laboratory sessions and project work",
        "Focus on programming, software development, and IT applications including emerging technologies like AI, Machine Learning, and Cloud Computing",
        "Industry-relevant curriculum aligned with current technology trends and regularly updated based on industry feedback and requirements",
        "Opportunities for internships and industrial training with leading IT companies, startups, and tech organizations to gain real-world experience",
        "Strong placement support with dedicated placement cell, mock interviews, aptitude training, and partnerships with leading IT companies",
        "State-of-the-art computer labs equipped with latest hardware and software tools for practical learning and project development",
        "Regular workshops, seminars, and guest lectures by industry experts and successful alumni to bridge academia-industry gap",
      ],
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 with Mathematics",
    },
    "BCA-Features": {
      title: "Key Features of BCA Programme",
      description:
        "Our BCA program is designed to create industry-ready professionals with comprehensive technical knowledge and practical skills. The program emphasizes hands-on learning, project-based education, and exposure to latest technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      details: [
        "State-of-the-art computer labs with latest software and tools including IDEs, databases, development frameworks, and cloud computing platforms for comprehensive practical learning",
        "Experienced faculty with industry and academic expertise, many with PhDs and certifications from leading tech companies and research institutions",
        "Regular workshops, seminars, and guest lectures by industry experts, tech leaders, and successful alumni to provide insights into current industry trends",
        "Project-based learning with real-world applications where students work on live projects, case studies, and collaborative team assignments",
        "Training in emerging technologies: AI, Machine Learning, Data Science, Cloud Computing, Blockchain, IoT, and Cyber Security through specialized courses",
        "Soft skills development and personality enhancement programs including communication skills, leadership training, time management, and professional etiquette",
        "100% placement assistance with dedicated placement cell organizing campus recruitment drives, job fairs, and networking events with top recruiters",
        "Certifications in industry-recognized technologies from Microsoft, Oracle, AWS, Google Cloud, Cisco, and other leading tech organizations",
        "Coding competitions, hackathons, and tech fests to encourage innovation, creativity, and competitive programming skills among students",
        "Industry partnerships and collaborations for internships, live projects, and research opportunities with leading IT companies and startups",
      ],
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 with Mathematics",
    },
    "BBA-Programme": {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "The Bachelor of Business Administration (BBA) program is designed to equip students with a strong foundation in business principles and modern management practices. The curriculum blends four core disciplines—business, management, communication, and information systems—to provide a comprehensive understanding of today’s corporate environment.Through a balanced mix of theoretical knowledge and practical learning, the program prepares students to develop strategic thinking, leadership abilities, and effective decision-making skills. Upon completion, graduates are well-positioned to pursue diverse career opportunities and build successful professional pathways in the field of business management.",

      subtitle: "1. Comprehensive Curriculum",
      details: [

        "Foundation courses in Business, Management, Marketing, Finance, and Human Resource Management",
        "Integrated learning in Communication Skills and Information Systems",
        "Curriculum aligned with contemporary industry practices and emerging business trends",

      ],
      subtitle: "2. Practical Learning Approach",
      details: [

        "Case studies, business simulations, group projects, and presentations",
        "Industry-oriented assignments and real-world problem-solving activities",
        "Hands-on exposure to business tools and software",

      ],

    },
    "BBA-Features": {
      title: "Key Features of BBA Programme",
      description:
        "Our BBA program provides a perfect blend of theoretical knowledge and practical business skills. Students are prepared to face real-world business challenges through innovative teaching methods and industry exposure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      details: [
        "Modern infrastructure with smart classrooms equipped with audio-visual aids, business simulation labs, and digital learning resources for interactive education",
        "Highly qualified faculty with corporate and academic experience from IIMs, leading B-schools, and industry veterans with practical business insights",
        "Regular industrial visits to leading organizations including manufacturing units, corporate offices, banks, and retail chains for practical exposure",
        "Summer internship programs with reputed companies providing hands-on experience in various business functions and real corporate work environment",
        "Business plan competitions and entrepreneurship workshops encouraging innovation, startup culture, and business idea development among students",
        "Soft skills training, personality development, and communication skills through dedicated modules, workshops, and one-on-one coaching sessions",
        "Industry certifications in management tools and technologies including SAP, Tally, MS Office Suite, Google Analytics, and digital marketing tools",
        "Active placement cell with excellent corporate connections organizing pre-placement talks, campus interviews, and recruitment drives with top companies",
        "International study tour opportunities to business schools and corporate houses abroad for global exposure and cultural learning experiences",
        "Alumni network support with mentorship programs, career guidance, and networking events connecting students with successful business professionals",
      ],
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 from any stream",
    },
    "Financial Management": {
      title: "Financial Management (MBA)",
      description:
        "Financial Management is the strategic planning, organizing, directing, and controlling of financial activities to ensure optimal utilization of resources and maximize shareholder value. It revolves around key functions such as budgeting, forecasting, investment analysis, capital structure decisions, and working capital management. Sound financial management ensures liquidity, profitability, and solvency while aligning short-term actions with long-term objectives. In modern business environments, it also involves risk assessment, compliance with regulatory frameworks, and ethical financial practices. With digital transformation, tools like AI-driven analytics, blockchain, and fintech solutions have enhanced accuracy and decision-making speed. Financial managers now play a critical role in navigating uncertainties, allocating capital efficiently, and fostering sustainable growth. Moreover, integrating traditional Indian wisdom—such as value-based decision-making—with contemporary financial theory creates a more holistic approach, especially in mission-driven organizations. At its core, Financial Management is not just about numbers—it’s about enabling stability, resilience, and informed strategic choices in a complex economic landscape.",


    },
    "Marketing Management": {
      title: "Marketing Management (MBA)",
      description:
        "Marketing Management involves the strategic planning and execution of activities that promote products, services, or ideas to target audiences, ensuring alignment with organizational goals. It focuses on understanding consumer needs, creating value propositions, and fostering strong brand identities. Core elements include market research, segmentation, positioning, pricing strategies, and integrated communications across digital and traditional channels. In today’s competitive landscape, marketing is no longer a linear funnel but a dynamic engagement loop, where analytics, storytelling, and emotional intelligence drive customer loyalty. The rise of personalization, influencer ecosystems, and AI-driven tools has transformed how brands connect and evolve with their audiences. Effective marketing managers combine creativity with data-driven insights to anticipate trends, measure ROI, and adapt swiftly. When infused with Eastern philosophies—such as holistic understanding and long-term relationship building—marketing becomes a discipline of empathy and sustained impact. Ultimately, Marketing Management is the bridge between customer aspiration and meaningful business outcomes.",

    },
    "Human Resource Management": {
      title: "Human Resource Management (MBA)",
      description:
        "Human Resource (HR) Management is the strategic and systematic approach to managing people within an organization to maximize their performance and well-being. It encompasses functions such as talent acquisition, training and development, performance appraisal, compensation, and employee relations. More than just administrative tasks, modern HR is a driver of organizational culture, leadership development, and workforce engagement. As businesses evolve in complexity, HR managers are required to be agile, emotionally intelligent, and tech-savvy—leveraging tools like HR analytics, AI-powered recruitment platforms, and hybrid workplace models. At the heart of HR lies the philosophy of aligning individual aspirations with organizational goals, creating a workplace that fosters trust, inclusion, and purpose. Drawing from Eastern traditions, principles like empathy, karma, and holistic well-being enrich the HR approach, promoting long-term employee satisfaction and organizational harmony. Ultimately, HR Management is not merely about managing headcount—it’s about cultivating human potential as a source of sustainable advantage.",
    },
    "Operations & Supply Chain Management": {
      title: "Operations & Supply Chain Management",
      description:
        "Operations and Supply Chain Management (OSCM) is a vital discipline within business strategy that focuses on the efficient transformation of resources into high-quality goods and services. It encompasses the planning, coordination, and execution of processes from procurement of raw materials to final product delivery, integrating functions such as production, logistics, inventory control, and quality assurance. In today’s dynamic global environment, OSCM plays a pivotal role in aligning operational capabilities with customer demands and market fluctuations. With advancements in technology—such as real-time data analytics, automation, and AI—organizations can enhance visibility across the supply chain, reduce bottlenecks, and drive continuous improvement. Moreover, sustainability and ethical sourcing have emerged as key priorities, prompting businesses to rethink supply networks for long-term resilience. Efficient supply chains are not only cost-effective but also strategic assets that foster competitive advantage by enabling agility, responsiveness, and customer satisfaction. Leaders in OSCM must balance cost efficiency with service excellence while navigating complexities like geopolitical risks and fluctuating consumer expectations. The integration of Eastern strategic discipline with Western analytical methods, as seen in hybrid leadership philosophies, further strengthens decision-making in complex networks. Overall, OSCM is not just about flow—it’s about forging harmony between purpose, performance, and people across global systems.",

    },
    "Business Analytics": {
      title: "Business Analytics",
      description:
        "Business Analytics is the practice of using data-driven techniques to inform strategic and operational decision-making across organizations. It integrates statistical analysis, predictive modelling, data visualization, and machine learning to uncover patterns, forecast trends, and optimize performance. At its core, Business Analytics transforms raw data into actionable insights, helping firms gain competitive advantage by enhancing efficiency, customer satisfaction, and innovation. In a fast-evolving digital economy, it plays a critical role in areas such as market intelligence, financial forecasting, risk management, and supply chain optimization. Tools like dashboards, KPIs, and real-time reporting allow stakeholders to monitor and adapt quickly to changing dynamics. When combined with intuitive human judgment and Eastern philosophical clarity—such as seeing connections rather than isolating events—analytics moves beyond just numbers to support holistic understanding. As businesses embrace complexity, Business Analytics becomes not just a toolkit, but a mindset: one that fuels smarter choices, sharper foresight, and meaningful transformation.",

    },
    "Agribusiness Management": {
      title: "Agribusiness Management",
      description:
        "Agribusiness Management refers to the professional oversight of agricultural enterprises across the value chain—from farm production to processing, distribution, and marketing. It blends core business principles with agricultural science to enhance productivity, sustainability, and profitability. Key functions include supply chain management, rural financing, input optimization, market linkage development, and policy navigation. With global demand rising and climate challenges intensifying, agribusiness managers are crucial for driving innovation and resilience in food systems. Technological tools such as precision farming, GIS mapping, and agri-analytics are reshaping decision-making and operational efficiency. Additionally, inclusive strategies that empower farmer cooperatives and promote value-based leadership are gaining prominence. Drawing from India's deep agricultural heritage and combining it with contemporary models—such as Theory K or Corporate Rishi Mode—agribusiness becomes not just a commercial endeavour but a mission for food security and rural empowerment. Ultimately, Agribusiness Management is where nature, knowledge, and enterprise converge to feed economies and nourish communities.",

    },
    "Pharma Management": {
      title: "Pharma Management",
      description:
        "Pharma and Healthcare Management is a multidisciplinary field focused on streamlining medical services and pharmaceutical operations for improved patient outcomes and organizational efficiency. It encompasses strategic planning, regulatory compliance, supply chain optimization, clinical research, marketing, and financial stewardship within hospitals, biotech firms, and pharmaceutical companies. As global health challenges evolve—from pandemics to aging populations—managers are tasked with integrating innovation, ethical decision-making, and resource allocation. Digital health tools, including AI diagnostics, telemedicine, and electronic health records, are transforming the healthcare landscape, enabling personalized care and data-driven insights. Regulatory frameworks like FDA, CDSCO, and WHO guidelines add complexity, requiring professionals to blend technical expertise with policy awareness. Drawing inspiration from holistic models such as Ayurveda or wellness-based patient care, pharma management in India especially benefits from integrating traditional wisdom with modern science. Ultimately, this domain is about balancing healing and profitability while ensuring accessibility, quality, and compassion across healthcare systems."
    },
  };

  // Handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveSection("");
  };

  // Get current sections based on active tab
  const currentSections = sectionsByTab[activeTab] || [];

  // Get current content
  const getContentKey = () => {
    if (activeTab === "MBA") {
      return activeSection;
    } else {
      return `${activeTab}-${activeSection}`;
    }
  };

  const currentContent = activeSection ? sectionContent[getContentKey()] : null;

  return (
    <>
      {/* ===== Header Section ===== */}
      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-100 h-100 opacity-25"
          style={{
            backgroundImage: `url(${allsectionbg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container position-relative py-5">
          <h1
            className="mb-3"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Program <span className="text-warning">Offered</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Academics • <span className="text-warning">Programs</span>
          </p>
        </div>
      </section>

      {/* ===== Main Section ===== */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#f8f9fa",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div className="container">
          <h1
            className="mb-4"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#0a2240",
              fontFamily: "Inter, Arial, Helvetica, sans-serif",
            }}
          >
            <BookFill className="me-3" style={{ color: "#0a2240" }} />
            Program <span style={{ color: "#1a4d7a" }}>Offered</span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#444",
              lineHeight: "1.7",
              textAlign: "justify",
              textJustify: "inter-word",
              marginBottom: "50px",
              marginTop: "50px",
            }}
          >
            ISMR Pune is a hub of innovation, learning, and excellence. Our
            mission is to combine <strong>science and spirituality</strong> to
            create an environment that fosters holistic development. From
            state-of-the-art infrastructure to experienced faculty, ISMR is
            committed to nurturing future leaders in every field. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus a ad rerum laboriosam. Porro tempora nostrum facere expedita culpa itaque rem ut, provident nemo eaque aspernatur dolor omnis assumenda.

          </p>
          {/* Tabs Section */}
          <div className="mb-5 pb-3">
            <div className="d-flex gap-3 border-bottom pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`btn px-4 py-2 ${activeTab === tab
                    ? "text-white"
                    : "text-dark bg-transparent"
                    }`}
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    backgroundColor: activeTab === tab ? "#0a2240" : "transparent",
                    border: "none",
                    borderBottom: activeTab === tab ? "3px solid #0a2240" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {/* Left Navigation - Sections */}
            <div className="col-md-4 col-lg-3">
              <div
                className="shadow-sm bg-white rounded-3 p-3"
                style={{
                  borderLeft: "4px solid #0a2240",
                  minHeight: "100%",
                }}
              >
                {currentSections.map((section) => (
                  <div
                    key={section}
                    onClick={() => handleSectionChange(section)}
                    className={`p-3 mb-2 rounded ${activeSection === section ? "text-white" : "text-dark"
                      }`}
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      cursor: "pointer",
                      backgroundColor:
                        activeSection === section ? "#0a2240" : "#f8f9fa",
                      border:
                        activeSection === section
                          ? "2px solid #0a2240"
                          : "1px solid #dee2e6",
                      transition: "all 0.25s ease",
                    }}
                  >
                    {section}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-8 col-lg-9">
              <div className="bg-white shadow-sm rounded-3 p-4 p-md-5">
                {currentContent ? (
                  <div>
                    <h3
                      className="mb-3"
                      style={{
                        ...interFont,
                        fontWeight: 800,
                        fontSize: "1.75rem",
                        color: "#0a2240",
                      }}
                    >
                      📚 {currentContent.title}
                    </h3>

                    <p
                      style={{
                        ...interFont,
                        maxWidth: "800px",
                        textAlign: "justify",
                      }}
                    >
                      {currentContent.description}
                    </p>

                    {/* Duration & Eligibility */}


                    {/* Key Highlights Visible only for BBA and BCA */}
                    {(activeTab === "BBA" || activeTab === "BCA") && currentContent.details && (
                      <>
                        <h5
                          className="mt-4 mb-3"
                          style={{
                            fontWeight: 700,
                            color: "#0a2240",
                            fontSize: "1.25rem",
                          }}
                        >
                          Key Highlights
                        </h5>

                        <h6
                          className="mt-4 mb-3"
                          style={{
                            fontWeight: 700,
                            color: "#0a2240",
                            fontSize: "1.25rem",
                          }}
                        >
                          1. Comprehensive Curriculum
                        </h6>


                        <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
                          {currentContent.details.map((feature, index) => (
                            <li key={index} className="mb-2">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ) : (
                  <div>
                    <div
                      className="p-4 rounded-3 text-center"
                      style={{
                        background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                        color: "white",
                      }}
                    >
                      <h5 style={{ fontWeight: 700, marginBottom: "1rem" }}>
                        Ready to Start Your Journey?
                      </h5>
                      <p style={{ marginBottom: "1.5rem", opacity: 0.9 }}>
                        Select a section from the left panel to explore detailed information
                        about our {activeTab} program offerings, curriculum, and features.
                      </p>
                      <BookFill size={40} style={{ opacity: 0.7 }} />
                    </div>

                    {/* Vision Section */}
                    <div className="mb-5 mt-5">
                      <div
                        className="d-flex align-items-center mb-3"
                        style={{
                          borderLeft: "4px solid #0a2240",
                          paddingLeft: "1rem",
                        }}
                      >
                        <h3
                          style={{
                            ...interFont,
                            fontWeight: 800,
                            fontSize: "1.75rem",
                            color: "#0a2240",
                            margin: 0,
                          }}
                        >
                          🎯 Our Vision
                        </h3>
                      </div>
                      <p
                        style={{
                          ...interFont,
                          maxWidth: "900px",
                          textAlign: "justify",
                        }}
                      >
                        To be a center of excellence in {activeTab} education, fostering innovation,
                        entrepreneurship, and leadership. We envision creating future-ready professionals
                        who are equipped with cutting-edge knowledge, ethical values, and the ability to
                        contribute meaningfully to society and industry. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                    </div>

                    {/* Mission Section */}
                    <div className="mb-5">
                      <div
                        className="d-flex align-items-center mb-3"
                        style={{
                          borderLeft: "4px solid #0a2240",
                          paddingLeft: "1rem",
                        }}
                      >
                        <h3
                          style={{
                            ...interFont,
                            fontWeight: 800,
                            fontSize: "1.75rem",
                            color: "#0a2240",
                            margin: 0,
                          }}
                        >
                          🚀 Our Mission
                        </h3>
                      </div>

                      <p
                        style={{
                          ...interFont,
                          maxWidth: "900px",
                          textAlign: "justify",
                          marginBottom: "1rem",
                        }}
                      >
                        Our mission is to provide world-class {activeTab} education that combines academic
                        rigor with practical experience. We are committed to:
                      </p>

                      <ul
                        style={{
                          ...interFont,
                          paddingLeft: "1.5rem",
                          maxWidth: "900px",
                          textAlign: "justify",
                        }}
                      >
                        <li className="mb-2">
                          Delivering industry-relevant curriculum that prepares students for evolving
                          career opportunities and challenges in the global marketplace.
                        </li>
                        <li className="mb-2">
                          Providing state-of-the-art infrastructure, laboratories, and learning resources
                          to facilitate comprehensive education and research activities.
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgramOfferedPage;