import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const tabs = ["BCA", "BBA", "MBA"];

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
      title: "BBA Programme Overview",
      description:
        "Bachelor of Business Administration (BBA) is a 3-year undergraduate program that provides comprehensive knowledge in business management, entrepreneurship, finance, marketing, and human resources. The program develops managerial skills, leadership qualities, and business acumen necessary for successful careers in corporate world or entrepreneurship. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      details: [
        "3-year full-time undergraduate program in business administration covering all fundamental and advanced concepts of modern business management",
        "Comprehensive coverage of all business management disciplines including finance, marketing, human resources, operations, and strategic management",
        "Focus on developing managerial and leadership skills through case studies, group discussions, presentations, and leadership development programs",
        "Industry interactions through guest lectures, industrial visits, and CEO talks providing exposure to real business scenarios and corporate culture",
        "Case study method and experiential learning approach with Harvard Business School cases and real-world business problem-solving exercises",
        "Entrepreneurship development and startup incubation support with mentorship programs, seed funding opportunities, and business plan competitions",
        "Strong industry connections for internships and placements with Fortune 500 companies, multinational corporations, and leading Indian businesses",
        "International exposure through study tours, student exchange programs, and collaborations with foreign universities for global business perspective",
      ],
      duration: "3 Years (6 Semesters)",
      eligibility: "10+2 from any stream",
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
        "Advanced financial strategy and decision-making for senior management roles. Master corporate finance, investment banking, financial risk management, and strategic financial planning. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      details: [
        "Advanced corporate finance and valuation techniques including DCF, comparable company analysis, and precedent transactions for business valuation",
        "Investment banking and merger & acquisition strategies covering deal structuring, due diligence, and post-merger integration processes",
        "Financial risk management and hedging strategies using derivatives, options, futures, and swaps for managing market, credit, and operational risks",
        "International finance and currency management exploring forex markets, exchange rate mechanisms, and international investment decisions",
        "Strategic financial planning and analysis with focus on budgeting, forecasting, scenario planning, and financial modeling for decision making",
        "Case studies from Fortune 500 companies analyzing real-world financial decisions, corporate restructuring, and turnaround management strategies",
        "Training in financial software and tools including Bloomberg Terminal, Reuters Eikon, Excel VBA, Python for finance, and financial modeling",
        "Industry certifications preparation support for CFA, FRM, CPA with dedicated study groups, mock tests, and guidance from certified professionals",
      ],
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
    },
    "Marketing Management": {
      title: "Marketing Management (MBA)",
      description:
        "Develop strategic marketing skills to create, communicate, and deliver value to customers. Learn digital marketing, brand management, consumer behavior, and market research techniques at an advanced level. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      details: [
        "Strategic marketing planning and execution covering market analysis, competitive strategy, positioning, and go-to-market strategies for new products",
        "Digital marketing: SEO, SEM, social media marketing, content marketing, email marketing, influencer marketing, and marketing automation tools",
        "Brand management and positioning strategies including brand architecture, brand equity measurement, rebranding, and brand extension strategies",
        "Consumer behavior analysis and market research using qualitative and quantitative methods, focus groups, surveys, and behavioral analytics",
        "Marketing analytics and ROI measurement with tools like Google Analytics, marketing dashboards, attribution modeling, and predictive analytics",
        "International marketing and global strategies exploring cross-cultural marketing, global brand management, and international market entry modes",
        "Hands-on training in marketing tools: HubSpot, Salesforce, Google Ads, Facebook Ads Manager, Hootsuite, and marketing automation platforms",
        "Live projects with brands and agencies working on real marketing campaigns, product launches, and marketing strategy development assignments",
      ],
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
    },
    "Human Resource Management": {
      title: "Human Resource Management (MBA)",
      description:
        "Learn to manage organizations' most valuable asset - people. Master recruitment, training, performance management, compensation, and organizational development strategies at a strategic level. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      details: [
        "Strategic human resource management aligning HR policies with organizational strategy, workforce planning, and talent management frameworks",
        "Talent acquisition and retention strategies including employer branding, recruitment analytics, employee value proposition, and retention programs",
        "Training and development programs covering training needs analysis, learning and development, leadership development, and succession planning",
        "Performance management systems designing KPIs, balanced scorecard, 360-degree feedback, performance appraisal, and continuous feedback mechanisms",
        "Compensation and benefits administration including job evaluation, salary benchmarking, incentive design, and total rewards management strategies",
        "Labor laws, employment regulations, and HR analytics covering industrial relations, legal compliance, HR metrics, and people analytics for decisions",
        "Training in HRIS systems like SAP SuccessFactors, Workday, Oracle HCM, and people analytics tools for data-driven HR decision making",
        "Organizational behavior and change management exploring leadership theories, team dynamics, organizational culture, and change implementation",
      ],
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
    },
    "Operations & Supply Chain Management": {
      title: "Operations & Supply Chain Management",
      description:
        "Optimize business processes and supply chain networks for maximum efficiency. Learn lean management, logistics, procurement, and advanced operations strategy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: [
        "Supply chain design and optimization covering network design, facility location decisions, inventory optimization, and supply chain strategy development",
        "Logistics and distribution management including transportation management, warehouse operations, route optimization, and last-mile delivery strategies",
        "Lean manufacturing and Six Sigma methodologies with certification preparation, process improvement, waste elimination, and quality management tools",
        "Procurement and vendor management exploring strategic sourcing, supplier relationship management, contract negotiation, and procurement analytics",
        "Operations analytics and forecasting using statistical methods, demand planning, sales forecasting, and predictive analytics for operations decisions",
        "ERP systems and supply chain technology including SAP, Oracle, Microsoft Dynamics, and supply chain management software for digital operations",
        "Project work with manufacturing and logistics companies analyzing real supply chain challenges and implementing improvement solutions",
        "Industry certifications preparation for APICS CSCP, CPIM, and Six Sigma Green Belt and Black Belt with dedicated training and exam support",
      ],
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
    },
    "Business Analytics": {
      title: "Business Analytics",
      description:
        "Transform data into strategic business insights. Master advanced analytics, predictive modeling, and data-driven decision-making to solve complex business problems. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      details: [
        "Advanced statistical analysis and modeling including regression analysis, hypothesis testing, time series analysis, and multivariate statistical techniques",
        "Predictive analytics and machine learning for business applications covering classification, clustering, recommendation systems, and neural networks",
        "Business intelligence tools and dashboards training in Tableau, Power BI, QlikView for data visualization and interactive reporting solutions",
        "Data-driven strategy formulation using analytics to drive business decisions in marketing, finance, operations, and strategic planning domains",
        "Marketing analytics and customer insights covering customer segmentation, lifetime value analysis, churn prediction, and marketing mix modeling",
        "Financial and operational analytics including financial forecasting, risk analytics, fraud detection, and operational efficiency optimization",
        "Programming for analytics with Python, R, SQL, and big data technologies like Hadoop and Spark for large-scale data processing",
        "Capstone projects with real business data solving actual business problems using analytics and presenting insights to stakeholders",
      ],
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
    },
    "Agribusiness Management": {
      title: "Agribusiness Management",
      description:
        "Combine business acumen with agricultural expertise. Learn to manage agricultural enterprises, rural marketing, farm-to-market supply chains, and sustainable agriculture practices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      details: [
        "Agricultural economics and policy covering farm economics, agricultural price theory, government policies, subsidies, and international trade in agriculture",
        "Rural and agricultural marketing exploring marketing channels, commodity markets, farmer producer organizations, and agri-marketing infrastructure",
        "Agri-supply chain management including farm-to-fork supply chain, cold chain logistics, warehousing, and agri-logistics optimization strategies",
        "Sustainable agriculture practices covering organic farming, precision agriculture, climate-smart agriculture, and sustainable farming technologies",
        "Agricultural finance and risk management including crop insurance, agricultural credit, commodity futures, and risk mitigation strategies for farmers",
        "Agri-business entrepreneurship with focus on agri-startups, food processing ventures, agri-tech innovations, and rural business development",
        "Field visits to farms, food processing units, agricultural markets, and agri-businesses for practical understanding of agricultural value chains",
        "Industry partnerships with agribusiness companies, food processing firms, and agricultural cooperatives for internships and live projects",
      ],
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
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
          background: "linear-gradient(135deg, #0a2240 0%, #0a2240 100%)",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
        }}
      >
        <div
          className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop)",
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
            }}
          >
            Program <span className="text-warning">Offered</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "16px",
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
                  className={`btn px-4 py-2 ${
                    activeTab === tab
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
                    className={`p-3 mb-2 rounded ${
                      activeSection === section ? "text-white" : "text-dark"
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

                    <div className="row mt-4 mb-4">
                      <div className="col-md-6">
                        <div
                          className="p-3 rounded"
                          style={{ backgroundColor: "#f8f9fa" }}
                        >
                          <strong style={{ color: "#0a2240" }}>
                            Duration:
                          </strong>{" "}
                          {currentContent.duration}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="p-3 rounded"
                          style={{ backgroundColor: "#f8f9fa" }}
                        >
                          <strong style={{ color: "#0a2240" }}>
                            Eligibility:
                          </strong>{" "}
                          {currentContent.eligibility}
                        </div>
                      </div>
                    </div>

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
                    <ul style={{ ...interFont, paddingLeft: "1.5rem" }}>
                      {currentContent.details.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                      <ul style={{ ...interFont, paddingLeft: "1.5rem" , maxWidth: "900px",
                          textAlign: "justify",}}>
                        
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

                    {/* Call to Action */}
                   
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