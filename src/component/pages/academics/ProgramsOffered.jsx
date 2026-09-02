import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { BookFill } from "react-bootstrap-icons";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

import axios from "axios";
import brochurePdf from "../../../assets/ISMR Brochure.pdf"; // Add your PDF in assets
import SEO from "../../SEO";

function ProgramOfferedPage() {


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    fromForm: ""
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  const syllabusMap = {
    MBA: {
      "Financial Management": brochurePdf,
      "Marketing Management": brochurePdf,
      "Human Resource Management": brochurePdf,
      "Operations & Supply Chain Management": brochurePdf,
      "Business Analytics": brochurePdf,
      "Agribusiness Management": brochurePdf,
      "Pharma Management": brochurePdf
    },
    BBA: {
      Programme: brochurePdf,
      Features: brochurePdf,
    },
    BCA: {
      Programme: brochurePdf,
      Features: brochurePdf,
    },
  };
  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Phone (India – 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    // City
    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    // From which course PDF
    if (!form.fromForm) {
      newErrors.fromForm = "Course selection missing";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city,
        fromForm: form.fromForm,
      };

      const res = await axios.post(
        "https://api.ismrpune.edu.in/api/send-mail",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        const pdfUrl =
          syllabusMap[activeTab]?.[activeSection] ||
          syllabusMap[activeTab]?.Programme;

        if (pdfUrl) {
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.download = `${form.fromForm}-ISMR Brochure.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        setShowModal(false);
        setErrors({});

        setForm({
          name: "",
          email: "",
          phone: "",
          city: "",
          fromForm: "",
        });

      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const [activeTab, setActiveTab] = useState("MBA");
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
      title: "Bachelor of Computer Applications (BCA)",
      description:
        "In today’s rapidly advancing technological world, the demand for skilled IT professionals continues to grow exponentially. The Bachelor of Computer Applications (BCA) program is designed to meet this demand by building a strong academic and practical foundation for students aspiring to excel in the field of computer applications and information technology.The BCA curriculum emphasizes both theoretical understanding and hands-on experience, enabling students to gain in-depth knowledge of computing concepts and their practical applications. The program equips learners with the technical expertise and problem-solving skills needed to thrive in diverse IT roles and to achieve remarkable milestones in their professional careers.",


    },
    "BCA-Features": {
      title: "Program Highlights",

      details: [
        {
          subtitle: "1. Comprehensive Curriculum",
          points: [
            "Core Subjects: Programming Languages (C, C++, Java, Python), Data Structures, Database Management Systems, Computer Networks, Operating Systems, Software Engineering",
            "Mathematics Foundation: Discrete Mathematics, Probability, Statistics, and other analytical subjects",
            "Web & Mobile Development: HTML, CSS, JavaScript, web technologies, and mobile application development",
            "Networking & Security: Computer Networks, Data Communication, Cybersecurity, and Ethical Hacking",
          ],
        },
        {
          subtitle: "2. Practical Exposure",
          points: [
            "Lab Sessions: Extensive hands-on lab work to strengthen technical skills and reinforce theoretical concepts",
            "Projects: Mini-projects and a final capstone project focused on solving real-world problems using the latest tools and technologies",

          ],
        },

      ],
    },
    "BBA-Programme": {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "The Bachelor of Business Administration (BBA) program is designed to equip students with a strong foundation in business principles and modern management practices. The curriculum blends four core disciplines—business, management, communication, and information systems—to provide a comprehensive understanding of today’s corporate environment.Through a balanced mix of theoretical knowledge and practical learning, the program prepares students to develop strategic thinking, leadership abilities, and effective decision-making skills. Upon completion, graduates are well-positioned to pursue diverse career opportunities and build successful professional pathways in the field of business management.",

    },
    "BBA-Features": {
      title: "Program Highlights – Bachelor of Business Administration (BBA)",

      details: [
        {
          subtitle: "1. Comprehensive Curriculum",
          points: [
            "Foundation courses in Business, Management, Marketing, Finance, and Human Resource Management",
            "Integrated learning in Communication Skills and Information Systems",
            "Curriculum aligned with contemporary industry practices and emerging business trends",
          ],
        },
        {
          subtitle: "2. Practical Learning Approach",
          points: [
            "Case studies, business simulations, group projects, and presentations",
            "Industry-oriented assignments and real-world problem-solving activities",
            "Hands-on exposure to business tools and software",
          ],
        },
        {
          subtitle: "3. Industry Interaction",
          points: [
            "Guest lectures and workshops conducted by industry experts",
            "Industrial visits to companies and business institutions",
            "Internship opportunities to gain practical corporate experience",
          ],
        },
        {
          subtitle: "4. Skill Development",
          points: [
            "Focus on leadership, teamwork, critical thinking, and decision-making",
            "Training in communication, negotiation, and interpersonal skills",
            "Emphasis on developing entrepreneurial mindset and managerial competencies",
          ],
        },
        {
          subtitle: "5. Career-Oriented Education",
          points: [
            "Guidance for career planning and professional development",
            "Exposure to diverse job roles in management, marketing, finance, HR, and entrepreneurship",
            "Strong foundation for higher studies like MBA, M.Com, or professional certifications",
          ],
        },
      ],

    },
    "Financial Management": {
      title: "Financial Management",
      description:
        "Financial Management is the strategic planning, organizing, directing, and controlling of financial activities to ensure optimal utilization of resources and maximize shareholder value. It revolves around key functions such as budgeting, forecasting, investment analysis, capital structure decisions, and working capital management. Sound financial management ensures liquidity, profitability, and solvency while aligning short-term actions with long-term objectives. In modern business environments, it also involves risk assessment, compliance with regulatory frameworks, and ethical financial practices. With digital transformation, tools like AI-driven analytics, blockchain, and fintech solutions have enhanced accuracy and decision-making speed. Financial managers now play a critical role in navigating uncertainties, allocating capital efficiently, and fostering sustainable growth. Moreover, integrating traditional Indian wisdom—such as value-based decision-making—with contemporary financial theory creates a more holistic approach, especially in mission-driven organizations. At its core, Financial Management is not just about numbers—it’s about enabling stability, resilience, and informed strategic choices in a complex economic landscape.",

    },

    "Marketing Management": {
      title: "Marketing Management",
      description:
        "Marketing Management involves the strategic planning and execution of activities that promote products, services, or ideas to target audiences, ensuring alignment with organizational goals. It focuses on understanding consumer needs, creating value propositions, and fostering strong brand identities. Core elements include market research, segmentation, positioning, pricing strategies, and integrated communications across digital and traditional channels. In today’s competitive landscape, marketing is no longer a linear funnel but a dynamic engagement loop, where analytics, storytelling, and emotional intelligence drive customer loyalty. The rise of personalization, influencer ecosystems, and AI-driven tools has transformed how brands connect and evolve with their audiences. Effective marketing managers combine creativity with data-driven insights to anticipate trends, measure ROI, and adapt swiftly. When infused with Eastern philosophies—such as holistic understanding and long-term relationship building—marketing becomes a discipline of empathy and sustained impact. Ultimately, Marketing Management is the bridge between customer aspiration and meaningful business outcomes.",

    },
    "Human Resource Management": {
      title: "Human Resource Management",
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
      <SEO
        title="Academic Programs Offered | MBA, BBA & BCA | ISMR Pune"
        description="Explore all undergraduate and postgraduate academic management and IT programs offered at ISMR Pune with syllabus breakdowns and brochures."
        canonical="https://ismrpune.edu.in/academics/programs-offered/"
      />
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
              color: "#ffffff",
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
              color: "#ffffff",
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
          {/* <p
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

          </p> */}


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
            ISMR, affiliated to Savitribai Phule Pune University, offers a comprehensive range of programs including MBA, BBA, and BCA which are approved by AICTE new Delhi. Our MBA program provides seven industry-oriented specializations.—The BBA and BCA programs are designed to build strong foundations in business management and computer applications, equipping students with essential skills for modern careers. With practical learning, expert faculty, and a career-focused approach, ISMR ensures holistic development and prepares students for success in the dynamic professional world.
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

                    <div className="" style={{ textAlign: "right" }}>

                      <button
                        className="btn"
                        style={{
                          padding: "12px",
                          backgroundColor: "#0a2240",
                          color: "#fff",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "16px",
                          fontWeight: "500",
                          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        }}
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            programme: activeTab,     // MBA / BBA / BCA
                            fromForm: activeSection,      // 👈 course PDF downloaded
                          }));
                          setShowModal(true);
                        }}>
                        <span>📄</span> Download Syllabus
                      </button>


                    </div>



                    {/* -------- FORM MODAL -------- */}
                    {showModal && (
                      <div
                        className="modal-backdrop"
                        style={{
                          position: "fixed",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 9999,
                        }}
                      >
                        <div
                          className="modal-content rounded-3 p-4"
                          style={{
                            backgroundColor: "#fff",
                            maxWidth: "500px",
                            width: "90%",
                          }}
                        >
                          <h4 style={{ color: "#0a2240", marginBottom: "1rem" }}>
                            Fill the form to download syllabus
                          </h4>

                          <form onSubmit={handleSubmit}>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Full Name"
                              required
                              className="form-control mb-3"
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}

                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="Email"
                              required
                              className="form-control mb-3"
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}

                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Phone"
                              required
                              className="form-control mb-3"
                            />
                            {errors.phone && <small className="text-danger">{errors.phone}</small>}

                            <input
                              type="text"
                              name="city"
                              value={form.city}
                              onChange={handleChange}
                              placeholder="City"
                              className="form-control mb-3"
                            />

                            {errors.city && <small className="text-danger">{errors.city}</small>}

                            <button
                              type="submit"
                              className="btn w-100"
                              disabled={loading}
                              style={{
                                backgroundColor: loading ? "#999" : "#0a2240",
                                color: "#fff",
                                padding: "12px",
                                borderRadius: "8px",
                                fontSize: "16px",
                                fontWeight: "500",
                                cursor: loading ? "not-allowed" : "pointer",
                              }}
                            >
                              {loading ? "Submitting..." : "Submit & Download"}
                            </button>

                          </form>

                          <button
                            onClick={() => setShowModal(false)}
                            style={{
                              marginTop: "10px",
                              background: "transparent",
                              border: "none",
                              color: "#d95c5c",
                              cursor: "pointer",
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}


                    {/* Duration & Eligibility */}


                    {/* Key Highlights Visible only for BBA and BCA */}
                    {(activeTab === "BBA" || activeTab === "BCA") && currentContent.details && (
                      <>

                        {currentContent.details.map((section, index) => (
                          <div key={index} className="mb-3">
                            <strong style={{ color: "#0a2240", fontSize: "1.1rem" }}>
                              {section.subtitle}
                            </strong>
                            <ul style={{ ...interFont, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                              {section.points.map((pt, idx) => (
                                <li key={idx} className="mb-1">
                                  {pt}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </>
                    )}

                  </div>
                ) : (
                  <div>
                    {/* <div
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
                    </div> */}

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
                          MBA Program
                        </h3>
                      </div>
                      <p
                        style={{
                          ...interFont,
                          maxWidth: "900px",
                          textAlign: "justify",
                        }}
                      >
                        The MBA program at ISMR offers a two-year, industry-focused curriculum designed to develop professional and leadership skills. Students can choose their specializations from those prescribed by the affiliated university (SPPU).
                      </p>
                      <ul>
                        <li>Financial Management</li>
                        <li>MarketingManagement</li>
                        <li>Human Resource Management</li>
                        <li>Operations & Supply Chain Management</li>
                        <li>Business Analytics</li>
                        <li>Agribusiness Management</li>
                        <li>Pharma and Healthcare Management </li>
                      </ul>
                      <p style={{
                        ...interFont,
                        maxWidth: "900px",
                        textAlign: "justify",
                      }}>The program combines practical exposure, internships, expert faculty, and corporate interactions to prepare students for high-growth careers in the business world.</p>
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
                          BBA Program
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
                        The BBA program provides students with a strong foundation in management, entrepreneurship, and business administration. With a curriculum designed to build analytical, communication, and leadership skills, ISMR’s BBA program prepares students for career in marketing, finance, HR, and business operations, as well as for higher studies like MBA.
                      </p>

                      <Link
                        to="/Addmissions/FaqBbaBca"
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "rgb(255, 195, 51)",
                          color: "rgb(44, 38, 38)",
                          fontWeight: "600", fontSize: "16px",
                        }}
                      >
                        FAQ's For BBA & BCA
                      </Link>


                    </div>

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
                          BCA Program
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
                        The BCA program focuses on computer science, software development, data handling, and IT applications. With hands-on training, coding skills, and practical project exposure, ISMR’s BCA program equips students for careers in IT, software development, data analysis, and emerging tech roles. It is the perfect pathway for students aiming for a future in the technology sector. Andprepare higher studies like MCA.
                      </p>
                      <Link
                        to="/Addmissions/FaqBbaBca"
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "rgb(255, 195, 51)",
                          color: "rgb(44, 38, 38)",
                          fontWeight: "600", fontSize: "16px",
                        }}
                      >
                        FAQ's For BBA & BCA
                      </Link>


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