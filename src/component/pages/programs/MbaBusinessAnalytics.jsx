import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import ContactForm from "../../forms/ContactForm";
import brochurePdf from "/ISMR Brochure.pdf";
import amdocsLogo from "../../../assets/Homeimg/Comp6.png";
import atosLogo from "../../../assets/Homeimg/atos.png";
import bajajLogo from "../../../assets/Homeimg/Bajaj-Finserv-Logo.jpg";
import cognizantLogo from "../../../assets/Homeimg/Cognizant-Logo.png";

export default function MbaBusinessAnalytics() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the MBA in Business Analytics course in Pune at ISMR?",
      a: "The MBA in Business Analytics at ISMR Pune is a two-year, four-semester full-time degree affiliated with Savitribai Phule Pune University (SPPU) and approved by AICTE. It integrates business management fundamentals with data science, predictive modeling, machine learning, and business intelligence."
    },
    {
      q: "What analytical tools and programming languages are covered?",
      a: "Students receive practical, hands-on training in Python, R, SQL, Advanced Excel, Power BI, Tableau, and AI-enabled predictive analytics frameworks using live industry datasets."
    },
    {
      q: "What is the eligibility for MBA Business Analytics at ISMR Pune?",
      a: "Bachelor's degree in any discipline (Engineering, BCA, BBA, B.Sc, B.Com, etc.) from a recognized university with a minimum of 50% aggregate marks (45% for reserved category candidates from Maharashtra) and a valid score in MAH-MBA CET, CAT, CMAT, MAT, or ATMA."
    },
    {
      q: "What are the career opportunities after completing this program?",
      a: "Graduates are placed in top corporate roles such as Business Analytics Consultant, Data Analyst, Financial Risk Modeler, Marketing & CRM Analytics Specialist, Supply Chain Analyst, and Business Intelligence (BI) Developer."
    },
    {
      q: "What are the fees and loan assistance for MBA Business Analytics?",
      a: "Fees are approved annually by the Fee Regulating Authority (FRA) Maharashtra. ISMR Pune assists students with education loans through nationalized and private banking partners, along with state government scholarship guidance for eligible categories."
    },
    {
      q: "Does ISMR provide 100% placement support?",
      a: "Yes. ISMR offers 100% placement assistance, rigorous aptitude training, mock interviews, executive mentorship, and campus drives with leading MNCs and consultancies."
    }
  ];

  return (
    <section className="apply-wrapper">
      <style>{`
        .apply-wrapper {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #111;
          background: #f8f9fa;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .marketing-section {
          padding: 40px 0 60px;
          background: #fff;
        }

        .hero-panel {
          background: #f7f9fb;
          padding: 35px 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(15,51,80,0.08);
          margin-bottom: 40px;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #c9922b;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .hero-panel h1 {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f3350;
          margin-bottom: 24px;
          line-height: 1.25;
        }

        .two-col-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 36px;
          align-items: start;
        }

        .overview-col h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f3350;
          margin-bottom: 12px;
        }

        .intro-text {
          font-size: 14.5px;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 16px;
          text-align: justify;
        }

        /* Facts Card */
        .facts-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(15, 51, 80, 0.06);
        }

        .facts-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #edf2f7;
        }

        .facts-subtitle {
          font-size: 15px;
          font-weight: 700;
          color: #0f3350;
        }

        .stat-strip {
          background: #fbf0d6;
          border: 1px solid #ebd498;
          border-radius: 10px;
          padding: 12px 16px;
          margin-bottom: 16px;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f3350;
          display: block;
        }

        .stat-label {
          font-size: 12.5px;
          color: #744210;
          font-weight: 600;
        }

        .facts-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .facts-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px dashed #e2e8f0;
          font-size: 13.5px;
        }

        .facts-row:last-child {
          border-bottom: none;
        }

        .facts-label {
          color: #718096;
          font-weight: 600;
        }

        .facts-value {
          color: #0f3350;
          font-weight: 700;
          text-align: right;
        }

        /* Main Details & Sidebar */
        .details-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .category-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 10px 18px;
          border-radius: 8px;
          border: 1px solid #dee2e6;
          background: #f8f9fa;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          color: #0f3350;
          transition: all 0.25s ease;
        }

        .category-tab.active {
          background: #ffc333;
          color: #0f3350;
          border-color: #ffc333;
        }

        .panel-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
          margin-bottom: 24px;
        }

        .panel-card h2 {
          color: #0f3350;
          font-size: 1.45rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .panel-card h3 {
          color: #0f3350;
          font-size: 1.15rem;
          font-weight: 700;
          margin-top: 24px;
          margin-bottom: 12px;
        }

        .panel-card p {
          color: #4a5568;
          line-height: 1.7;
          font-size: 14.5px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin: 18px 0;
        }

        .tool-chip {
          background: #f1f5f9;
          border-left: 4px solid #ffc333;
          padding: 10px 12px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13.5px;
          color: #0f3350;
        }

        .roles-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .roles-list li {
          background: #f8fafc;
          padding: 12px 16px;
          border-radius: 8px;
          border-left: 4px solid #0f3350;
          font-weight: 600;
          font-size: 14px;
          color: #2d3748;
        }

        /* Sidebar */
        .sidebar-card {
          position: sticky;
          top: 100px;
          background: #ffffff;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(15, 51, 80, 0.08);
          border: 1px solid #e2e8f0;
        }

        .sidebar-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f3350;
          text-align: center;
          margin-bottom: 4px;
        }

        .sidebar-sub {
          font-size: 0.9rem;
          color: #718096;
          text-align: center;
          margin-bottom: 20px;
        }

        .btn-download-brochure {
          display: block;
          width: 100%;
          background: #ffc333;
          color: #0f3350;
          font-weight: 700;
          padding: 13px;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          margin-top: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-download-brochure:hover {
          background: #e6ac20;
          color: #0a2240;
        }

        /* FAQ Accordion */
        .faq-item {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .faq-header {
          padding: 15px 20px;
          cursor: pointer;
          font-weight: 700;
          color: #0f3350;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          font-size: 15px;
        }

        .faq-body {
          padding: 15px 20px;
          color: #4a5568;
          font-size: 14px;
          line-height: 1.65;
          border-top: 1px solid #edf2f7;
          background: #f8fafc;
        }

        @media (max-width: 992px) {
          .two-col-layout,
          .details-grid {
            grid-template-columns: 1fr;
          }
          .tools-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .roles-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* -------- TOP BANNER & BACK BUTTON ALIGNMENT (Identical to other courses) -------- */}
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
          <span
            className="mb-2 d-block"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
            }}
          >
            MBA in Business <span className="text-warning">Analytics</span>
          </span>

          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap mt-2">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/academics/mba-program");
                }
              }}
              className="btn btn-sm d-inline-flex align-items-center gap-1"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.16)",
                color: "#ffd76d",
                border: "1px solid rgba(255, 215, 109, 0.6)",
                borderRadius: "20px",
                padding: "3px 13px",
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "1.4",
                backdropFilter: "blur(4px)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffd76d";
                e.currentTarget.style.color = "#0a2240";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.16)";
                e.currentTarget.style.color = "#ffd76d";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back
            </button>

            <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px" }}>•</span>

            <p
              className="mb-0"
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "15px",
                color: "#ffffff",
              }}
            >
              <Link to="/academics/programs" style={{ color: "#ffffff", textDecoration: "none" }}>
                Courses
              </Link>{" "}
              • <span className="text-warning">MBA in Business Analytics</span>
            </p>
          </div>
        </div>
      </section>

      {/* -------- MAIN BODY SECTION -------- */}
      <section className="marketing-section">
        <div className="content-container">
          <div className="hero-panel">
            <span className="eyebrow">ISMR PUNE · MBA BUSINESS ANALYTICS</span>
            <h1>Lead with Data: Master Python, AI Strategy & Business Analytics</h1>

            <div className="two-col-layout">
              <div className="overview-col mt-2">
                <h2>What is the MBA in Business Analytics in Pune?</h2>
                <p className="intro-text">
                  The MBA in Business Analytics at ISMR Pune is an industry-focused postgraduate degree affiliated with Savitribai Phule Pune University (SPPU) and approved by AICTE. It is tailored for students aiming to bridge technical analytics with executive business decision-making.
                </p>
                <p className="intro-text">
                  Through hands-on projects, industry certifications, and corporate internships, students master Python, Tableau, SQL, Power BI, and machine learning models to solve mission-critical challenges across finance, supply chain, marketing, and operations.
                </p>
              </div>

              <div className="facts-col">
                <div className="facts-card">
                  <div className="facts-header">
                    <span className="facts-subtitle">MBA in Business Analytics, ISMR Pune</span>
                  </div>

                  <div className="stat-strip">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Placement assistance with dedicated corporate network</span>
                  </div>

                  <ul className="facts-list">
                    <li className="facts-row">
                      <span className="facts-label">Duration</span>
                      <span className="facts-value">2 Years / 4 Semesters</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-label">Affiliation</span>
                      <span className="facts-value">Savitribai Phule Pune University (SPPU)</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-label">Approval</span>
                      <span className="facts-value">AICTE Approved</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-label">Core Tools</span>
                      <span className="facts-value">Python, Tableau, SQL, Power BI</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-label">Accepted Exams</span>
                      <span className="facts-value">MAH-MBA CET, CAT, CMAT, MAT, ATMA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Sidebar Grid */}
          <div className="details-grid">
            {/* Left Content Column */}
            <div>
              <div className="category-tabs">
                <button
                  className={`category-tab ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`category-tab ${activeTab === "curriculum" ? "active" : ""}`}
                  onClick={() => setActiveTab("curriculum")}
                >
                  Curriculum & Tools
                </button>
                <button
                  className={`category-tab ${activeTab === "careers" ? "active" : ""}`}
                  onClick={() => setActiveTab("careers")}
                >
                  Career Pathways
                </button>
                <button
                  className={`category-tab ${activeTab === "faqs" ? "active" : ""}`}
                  onClick={() => setActiveTab("faqs")}
                >
                  FAQs
                </button>
              </div>

              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="panel-card">
                  <h2>Program Highlights & Strategic Edge</h2>
                  <p>
                    Data has become the world's most valuable asset. The MBA in Business Analytics at ISMR equips students to transform complex raw datasets into predictive strategic intelligence for C-suite leaders.
                  </p>
                  <h3>Key Competencies Developed</h3>
                  <p>
                    • Data extraction, data hygiene, and automated ETL pipelines using SQL and Python.<br />
                    • Predictive customer lifetime value, churn risk, and market basket analysis.<br />
                    • Financial scenario forecasting and risk optimization modeling.<br />
                    • Designing executive dashboards with Tableau and Power BI.
                  </p>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === "curriculum" && (
                <div className="panel-card">
                  <h2>Tools & Software Stack Mastered</h2>
                  <p>
                    Students graduate with hands-on command over the leading analytical technologies:
                  </p>
                  <div className="tools-grid">
                    <div className="tool-chip">🐍 Python for Data Science</div>
                    <div className="tool-chip">📊 Tableau Visualizations</div>
                    <div className="tool-chip">📈 Microsoft Power BI</div>
                    <div className="tool-chip">🗄️ SQL & Relational Databases</div>
                    <div className="tool-chip">📉 Advanced Excel & VBA</div>
                    <div className="tool-chip">🤖 Machine Learning Algorithms</div>
                    <div className="tool-chip">🧠 Predictive Analytics</div>
                    <div className="tool-chip">☁️ Cloud Analytics Fundamentals</div>
                  </div>
                </div>
              )}

              {/* Careers Tab */}
              {activeTab === "careers" && (
                <div className="panel-card">
                  <h2>High-Demand Career Pathways</h2>
                  <p>
                    Our graduates enter rapid-growth career trajectories across top tech, consulting, and finance multinationals:
                  </p>
                  <ul className="roles-list">
                    <li>Business Analytics Consultant</li>
                    <li>Data & Insights Analyst</li>
                    <li>Financial Risk Modeler</li>
                    <li>Marketing & CRM Analytics Lead</li>
                    <li>Supply Chain Optimization Analyst</li>
                    <li>Business Intelligence Developer</li>
                  </ul>

                  <h3 style={{ marginTop: "24px" }}>Featured Placement Partners</h3>
                  <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", marginTop: "14px" }}>
                    <img src={amdocsLogo} alt="Amdocs" style={{ height: "36px", objectFit: "contain" }} />
                    <img src={cognizantLogo} alt="Cognizant" style={{ height: "36px", objectFit: "contain" }} />
                    <img src={bajajLogo} alt="Bajaj Finserv" style={{ height: "36px", objectFit: "contain" }} />
                    <img src={atosLogo} alt="Atos" style={{ height: "36px", objectFit: "contain" }} />
                  </div>
                </div>
              )}

              {/* FAQs Tab */}
              {activeTab === "faqs" && (
                <div className="panel-card">
                  <h2>Frequently Asked Questions</h2>
                  <div style={{ marginTop: "18px" }}>
                    {faqs.map((f, idx) => (
                      <div className="faq-item" key={idx}>
                        <div className="faq-header" onClick={() => toggleFaq(idx)}>
                          <span>{f.q}</span>
                          <span>{openFaq === idx ? "▲" : "▼"}</span>
                        </div>
                        {openFaq === idx && (
                          <div className="faq-body">
                            {f.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div>
              <div className="sidebar-card">
                <h4 className="sidebar-title">Admissions 2026</h4>
                <p className="sidebar-sub">MBA in Business Analytics</p>

                <ContactForm />

                <a
                  href={brochurePdf}
                  download="ISMR-MBA-Business-Analytics-Brochure.pdf"
                  className="btn-download-brochure"
                >
                  📄 Download Course Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
