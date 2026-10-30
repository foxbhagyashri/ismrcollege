import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";

import axios from "axios";
import brochurePdf from "../../../assets/ISMR Brochure.pdf"; // Add your PDF in assets

/**
 * MBA Program Page
 * -----------------
 * Design language: "admission ticket" — the program facts (duration, intake,
 * eligibility…) are presented like a boarding-pass stub, because that is the
 * literal artifact a prospective student is chasing: their ticket into the
 * program. Navy/gold keep continuity with the rest of the ISMR site; a
 * serif display face is layered in for prospectus-style gravitas.
 *
 * NOTE: this file expects the "Playfair Display" font to be available
 * (e.g. via a <link> in index.html or an @import in your global stylesheet):
 *   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
 */

const NAVY = "#0a2240";
const NAVY_SOFT = "#1a4d7a";
const GOLD = "#ffc333";

const display = { fontFamily: "'Playfair Display', Georgia, serif" };
const body = {
    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
    lineHeight: 1.7,
};

// Truncates text to a max length without cutting a word in half.
const truncate = (text, maxLen) => {
    if (!text || text.length <= maxLen) return text;
    const clipped = text.slice(0, maxLen);
    return clipped.slice(0, clipped.lastIndexOf(" ")) + "…";
};

function MbaProgramPage() {
    /* ---------------- shared enquiry form state ---------------- */
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        qualification: "",
        specialization: "",
    });
    const [modalMode, setModalMode] = useState(null); // null | "syllabus" | "apply"
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const location = useLocation();
    const isAnalyticsPage = location.pathname.includes("business-analytics");

    const [activeSection, setActiveSection] = useState(
        isAnalyticsPage ? "Business Analytics" : "Financial Management"
    );
    const [showFullDescription, setShowFullDescription] = useState(isAnalyticsPage);

    useEffect(() => {
        if (isAnalyticsPage) {
            setActiveSection("Business Analytics");
            setShowFullDescription(true);
        } else if (!activeSection) {
            setActiveSection("Financial Management");
        }
    }, [isAnalyticsPage]);

    const handleChange = (e) =>
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

    const syllabusMap = {
        "Financial Management": brochurePdf,
        "Marketing Management": brochurePdf,
        "Human Resource Management": brochurePdf,
        "Operations & Supply Chain Management": brochurePdf,
        "Business Analytics": brochurePdf,
        "Agribusiness Management": brochurePdf,
        "Pharma Management": brochurePdf,
    };

    const specializations = Object.keys(syllabusMap);


    const navigate = useNavigate();

    const specializationRoutes = {
        "Financial Management": "/programs/mba-in-finance-management-in-pune",
        "Marketing Management": "/programs/mba-in-marketing-management-in-pune",
        "Human Resource Management": "/programs/mba-hr-college-in-pune",
        "Operations & Supply Chain Management": "/programs/mba-in-operations-and-supply-chain-management-in-pune",
        "Business Analytics": "/programs/mba-in-business-analytics-pune",
        "Agribusiness Management": "/programs/mba-in-agribusiness-management-pune",
        "Pharma Management": "/programs/mba-in-pharma-healthcare-management-in-pune",
        "Pharma & Healthcare Management": "/programs/mba-in-pharma-healthcare-management-in-pune",
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        else if (form.name.length < 3)
            newErrors.name = "Name must be at least 3 characters";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(form.email)) newErrors.email = "Enter a valid email";

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!form.phone.trim()) newErrors.phone = "Phone number is required";
        else if (!phoneRegex.test(form.phone))
            newErrors.phone = "Enter valid 10 digit mobile number";

        if (!form.city.trim()) newErrors.city = "City is required";

        if (modalMode === "apply" && !form.qualification.trim())
            newErrors.qualification = "Qualification is required";

        if (modalMode === "syllabus" && !form.specialization)
            newErrors.specialization = "Please choose a specialization";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const closeModal = () => {
        setModalMode(null);
        setErrors({});
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
                qualification: form.qualification,
                specialization: form.specialization,
                programme: "MBA",
                enquiryType: modalMode, // "syllabus" | "apply"
            };

            const res = await axios.post(
                "https://api.ismrpune.edu.in/api/send-mail",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res.data.success) {
                if (modalMode === "syllabus") {
                    const pdfUrl = syllabusMap[form.specialization];
                    if (pdfUrl) {
                        const link = document.createElement("a");
                        link.href = pdfUrl;
                        link.download = `${form.specialization}-ISMR Brochure.pdf`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                }

                closeModal();
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    qualification: "",
                    specialization: "",
                });
            }
        } catch (err) {
            console.error(err);
            alert("❌ Failed to submit form. Try again.");
        } finally {
            setLoading(false);
        }
    };

    const openModal = (mode, presetSpecialization) => {
        setForm((prev) => ({
            ...prev,
            specialization: presetSpecialization || prev.specialization,
        }));
        setModalMode(mode);
    };

    // Selecting a new specialization always starts collapsed again.
    const handleSelectSpecialization = (section) => {
        setActiveSection(section);
        setShowFullDescription(false);
    };

    /* ---------------- content ---------------- */



const programFacts = [
    { label: "Programme", value: "Master of Business Administration (MBA)" },
    { label: "Awarding university", value: "Savitribai Phule Pune University (SPPU)" },
    { label: "Institution", value: "International School of Management & Research (ISMR), Pune" },
    { label: "Level", value: "Postgraduate" },
    { label: "Duration", value: "Two years" },
    { label: "Structure", value: "Four semesters" },
    { label: "Mode of study", value: "Full-time" },
    { label: "Curriculum framework", value: "As prescribed by SPPU and applicable regulatory authorities" },
    { label: "Academic pattern", value: "Applicable SPPU curriculum pattern for the admitted batch" },
];


const programObjectives = [
    "Develop a comprehensive understanding of management principles, business functions and organizational practices.",
    "Enhance analytical, critical-thinking and problem-solving abilities.",
    "Build leadership, teamwork, communication and interpersonal skills.",
    "Develop competencies in managerial decision-making, planning and strategic thinking.",
    "Promote entrepreneurship, innovation and responsible business practices.",
    "Provide exposure to contemporary business challenges, industry practices and market developments.",
    "Encourage ethical leadership, social responsibility and lifelong learning.",
];
 
const learningMethods = [
    "Classroom lectures and interactive discussions",
    "Case studies and business simulations",
    "Individual and group assignments",
    "Presentations and communication activities",
    "Research-based assignments and field projects",
    "Industry-oriented learning and practical exposure",
    "On-the-Job Training and research projects, as prescribed",
    "Seminars, workshops and expert interactions, wherever conducted",
];
 
const programOutcomes = [
    { title: "Apply management knowledge", text: "Use management concepts and frameworks to address business challenges." },
    { title: "Analyse business problems", text: "Interpret business information and apply analytical tools to support decisions." },
    { title: "Demonstrate leadership", text: "Work effectively in teams and demonstrate leadership and interpersonal skills." },
    { title: "Communicate effectively", text: "Present ideas, analyses and recommendations through appropriate communication methods." },
    { title: "Develop strategic perspectives", text: "Evaluate business environments and contribute to organizational planning." },
    { title: "Promote innovation and entrepreneurship", text: "Identify opportunities and develop solutions to business problems." },
    { title: "Practise ethical management", text: "Apply ethical principles and responsible decision-making in professional situations." },
    { title: "Undertake research", text: "Use appropriate research methods to investigate business issues and recommend solutions." },
    { title: "Adapt to change", text: "Respond to changing market conditions, technology and organizational requirements." },
    { title: "Pursue lifelong learning", text: "Continue developing professional knowledge and managerial competencies." },
];
 
const careerAreas = [
    "Marketing and Sales Management",
    "Financial Management and Banking",
    "Human Resource Management",
    "Operations and Supply Chain Management",
    "Business Analytics",
    "Consulting and Business Development",
    "Project Management",
    "Entrepreneurship and Start-up Management",
    "Corporate Administration",
    "Research and Management Analysis",
];
 


    const quickFacts = [
        { label: "Duration", value: "2 Years", sub: "4 semesters" },
        { label: "Eligibility", value: "Graduate", sub: "Any discipline, 45%+" },
        { label: "Intake", value: "July", sub: "Limited seats" },
        { label: "Approval", value: "AICTE", sub: "SPPU affiliated" },
        { label: "Format", value: "Full-Time", sub: "On-campus" },
    ];

    const programDetails = [
        {
            heading: "Eligibility Criteria",
            body:
                "Graduate in any discipline from a recognized university with a minimum of 45% aggregate marks (40% for reserved category, as per state norms). Candidates appearing in their final year of graduation may also apply provisionally.",
        },
        {
            heading: "Admission Process",
            body:
                "Admissions are based on performance in a recognized entrance test (CAP / CET / CMAT or equivalent), followed by a personal interview and document verification, as per Directorate of Technical Education (DTE) Maharashtra guidelines.",
        },
        {
            heading: "Fee Structure",
            body:
                "Fees are notified annually by the Fee Regulating Authority (FRA), Maharashtra. Scholarship and education-loan assistance is available for eligible candidates — reach out to admissions for the current fee circular.",
        },
        {
            heading: "Career Outcomes",
            body:
                "Graduates move into roles across finance, marketing, HR, operations, analytics, agribusiness and healthcare management — through campus placement drives, live projects, and industry mentorship built into the curriculum.",
        },
    ];

    const sectionContent = {
        "Financial Management": {
            title: "Financial Management",
            description:
                "Financial Management is the strategic planning, organizing, directing, and controlling of financial activities to ensure optimal utilization of resources and maximize shareholder value. It revolves around key functions such as budgeting, forecasting, investment analysis, capital structure decisions, and working capital management. Sound financial management ensures liquidity, profitability, and solvency while aligning short-term actions with long-term objectives. In modern business environments, it also involves risk assessment, compliance with regulatory frameworks, and ethical financial practices. With digital transformation, tools like AI-driven analytics, blockchain, and fintech solutions have enhanced accuracy and decision-making speed.",
        },
        "Marketing Management": {
            title: "Marketing Management",
            description:
                "Marketing Management involves the strategic planning and execution of activities that promote products, services, or ideas to target audiences, ensuring alignment with organizational goals. It focuses on understanding consumer needs, creating value propositions, and fostering strong brand identities. Core elements include market research, segmentation, positioning, pricing strategies, and integrated communications across digital and traditional channels.",
        },
        "Human Resource Management": {
            title: "Human Resource Management",
            description:
                "Human Resource (HR) Management is the strategic and systematic approach to managing people within an organization to maximize their performance and well-being. It encompasses functions such as talent acquisition, training and development, performance appraisal, compensation, and employee relations, alongside building organizational culture and workforce engagement.",
        },
        "Operations & Supply Chain Management": {
            title: "Operations & Supply Chain Management",
            description:
                "Operations and Supply Chain Management (OSCM) focuses on the efficient transformation of resources into high-quality goods and services — from procurement to final delivery — integrating production, logistics, inventory control, and quality assurance, enhanced by real-time analytics and automation.",
        },
        "Business Analytics": {
            title: "Business Analytics",
            description:
                "Business Analytics is the practice of using data-driven techniques to inform strategic and operational decision-making. It integrates statistical analysis, predictive modelling, data visualization, and machine learning to uncover patterns, forecast trends, and optimize performance across the organization. Students gain expertise in tools such as Advanced Excel, SQL, Python, Tableau, and Power BI, preparing graduates to translate complex analytical datasets into impactful executive strategies. With a strong blend of data science and business administration, students are trained for high-impact careers in data analytics, consulting, financial modeling, and AI-enabled decision management.",
        },
        "Agribusiness Management": {
            title: "Agribusiness Management",
            description:
                "Agribusiness Management refers to the professional oversight of agricultural enterprises across the value chain — from farm production to processing, distribution, and marketing — blending business principles with agricultural science to drive productivity and rural resilience.",
        },
        "Pharma Management": {
            title: "Pharma Management",
            description:
                "Pharma and Healthcare Management is a multidisciplinary field focused on streamlining medical services and pharmaceutical operations for improved patient outcomes — spanning regulatory compliance, supply chain, clinical research, marketing, and financial stewardship.",
        },
    };

    const currentContent = activeSection ? sectionContent[activeSection] : null;
    const descriptionIsLong =
        currentContent && currentContent.description.length > 220;
    const visibleDescription =
        currentContent &&
        (showFullDescription
            ? currentContent.description
            : truncate(currentContent.description, 220));

    return (
        <>
            <style>{`
        .mba-ticket {
          position: relative;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(10,34,64,0.18);
          overflow: hidden;
        }
        .mba-ticket-stub::before,
        .mba-ticket-stub::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 26px;
          height: 26px;
          background: #f8f9fa;
          border-radius: 50%;
        }
        .mba-ticket-stub::before { left: -13px; }
        .mba-ticket-stub::after { right: -13px; }
        .mba-fact + .mba-fact {
          border-left: 1px dashed #cfd8e3;
        }
        .mba-spec-item {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .mba-spec-item:hover {
          transform: translateX(4px);
        }
        .mba-cta-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .mba-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(255,195,51,0.35);
        }
        .mba-outline-btn {
          transition: background 0.15s ease, color 0.15s ease;
        }
        .mba-outline-btn:hover {
          background: #fff;
          color: ${NAVY};
        }
        .mba-detail-card {
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .mba-detail-card:hover {
          box-shadow: 0 14px 30px rgba(10,34,64,0.12);
          transform: translateY(-3px);
        }
        .mba-readmore-btn {
          background: transparent;
          border: none;
          padding: 0;
          color: ${NAVY_SOFT};
          font-weight: 700;
          font-size: 14.5px;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }
        .mba-readmore-btn:hover {
          color: ${NAVY};
        }
        @media (max-width: 767px) {
          .mba-fact + .mba-fact { border-left: none; border-top: 1px dashed #cfd8e3; }
        }
          h1{
      font-size: 20px;
    font-weight: 700;
  }
      `}</style>

            {/* ===== HERO ===== */}
            <section
                className="position-relative text-white"
                style={{
                    background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)`,
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
                    <div className="row align-items-center py-4 text-center">
                        <div className="col-lg-10 m-auto">
                            {/* <p
                                style={{
                                    ...body,
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    fontSize: "13px",
                                    color: GOLD,
                                    fontWeight: 700,
                                    marginBottom: "0.75rem",
                                }}
                            >
                                ISMR Pune · Academics · Postgraduate
                            </p> */}
                            <h1
                                style={{
                                    ...display,
                                    color: "#ffffff",
                                    fontSize: "3rem",
                                    fontWeight: 800,
                                    margin: 0,
                                    lineHeight: 1.15,
                                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.45)",
                                    marginTop: "40px"
                                }}
                            >
                                {isAnalyticsPage ? (
                                    <>MBA in Business Analytics</>
                                ) : (
                                    <>
                                        Master of Business Administration (MBA)
                                    </>
                                )}
                            </h1>
                            <p
                                style={{
                                    ...body,
                                    color: "#ffffff",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    lineHeight: 1.65,
                                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
                                    marginTop: "1.25rem",
                                }}
                            >
                                {isAnalyticsPage ? (
                                    "Master Python, Tableau, predictive modeling, and AI strategy with ISMR's industry-aligned MBA in Business Analytics in Pune."
                                ) : (
                                    "It’s a Two-Year Full-Time Regular MBA Program with Six Specilaisation"
                                )}
                            </p>

                           
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ADMISSION TICKET — QUICK FACTS ===== */}
            {/* <div className="container" style={{ marginTop: "-42px", position: "relative", zIndex: 2 }}>
                <div className="mba-ticket mba-ticket-stub row gx-0 py-4 px-2">
                    {quickFacts.map((fact) => (
                        <div key={fact.label} className="col-6 col-md mba-fact text-center py-2 px-2">
                            <div style={{ ...display, fontSize: "1.4rem", fontWeight: 700, color: NAVY }}>
                                {fact.value}
                            </div>
                            <div
                                style={{
                                    ...body,
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                    color: NAVY_SOFT,
                                    marginTop: "2px",
                                }}
                            >
                                {fact.label}
                            </div>
                            <div style={{ ...body, fontSize: "12.5px", color: "#6b7280" }}>{fact.sub}</div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* ===== PROGRAM DETAILS ===== */}
            <style>{`
        .mbx-heading { font-size: 1.9rem; font-weight: 800; margin: 0 0 1.25rem; }
        .mbx-rule { width: 56px; height: 4px; background: ${GOLD}; border-radius: 2px; margin: -0.6rem 0 1.5rem; }
        .mbx-fact { display: grid; grid-template-columns: 170px 1fr; gap: 1rem; padding: 0.8rem 0; border-bottom: 1px solid #e3e6ec; }
        .mbx-fact:last-child { border-bottom: 0; }
        .mbx-fact dt { font-weight: 700; color: ${NAVY_SOFT}; font-size: 14px; margin: 0; }
        .mbx-fact dd { margin: 0; color: #222; font-size: 15px; }
        .mbx-tick { flex: 0 0 22px; height: 22px; border-radius: 50%; background: ${NAVY}; color: ${GOLD}; font-size: 12px; display: inline-flex; align-items: center; justify-content: center; margin-top: 2px; }
        .mbx-spec { padding: 0.85rem 1rem; margin-bottom: 0.5rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 15px; border: 1px solid #dee2e6; background: #f8f9fa; color: #212529; transition: background-color .15s, color .15s; text-align: left; width: 100%; }
        .mbx-spec:hover { background: #eef1f7; }
        .mbx-spec.is-active { background: ${NAVY}; color: #fff; border-color: ${NAVY}; }
        .mbx-spec:focus-visible, .mbx-link:focus-visible { outline: 3px solid ${GOLD}; outline-offset: 2px; }
        .mbx-link { background: none; border: 0; padding: 0; font-weight: 700; color: ${NAVY}; text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }
        .mbx-pill { display: inline-block; padding: 0.55rem 1rem; margin: 0 0.5rem 0.6rem 0; border: 1.5px solid ${NAVY}; color: ${NAVY}; border-radius: 999px; font-weight: 600; font-size: 14.5px; background: #fff; }
        @media (max-width: 575px) { .mbx-fact { grid-template-columns: 1fr; gap: 0.15rem; } }
    `}</style>
 
    {/* ===== 1. OVERVIEW + AT A GLANCE ===== */}
    <section className="container-fluid py-5 bg-white">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <h2 className="mbx-heading" style={{ ...display, color: NAVY }}>Programme overview</h2>
                    <div className="mbx-rule" />
                    <p style={{ ...body, fontSize: "16px", lineHeight: 1.75, color: "#333", textAlign: "justify" }}>
                        The Master of Business Administration (MBA) is a two-year, full-time postgraduate
                        management programme designed to develop managerial competence, leadership
                        capabilities, analytical thinking and entrepreneurial skills among students.
                    </p>
                    <p style={{ ...body, fontSize: "16px", lineHeight: 1.75, color: "#333", textAlign: "justify" }}>
                        The programme follows the applicable curriculum prescribed by Savitribai Phule Pune
                        University (SPPU) and is designed to provide a strong foundation in business
                        administration, strategic management, finance, marketing, human resource management,
                        operations and other functional areas of management.
                    </p>
                    <p style={{ ...body, fontSize: "16px", lineHeight: 1.75, color: "#333", textAlign: "justify", marginBottom: 0 }}>
                        The curriculum emphasizes conceptual understanding, practical application, industry
                        exposure, research, professional communication and ethical decision-making to prepare
                        students for managerial responsibilities in a dynamic business environment.
                    </p>
                </div>
 
                <div className="col-lg-6">
                    <div
                        className="rounded-3 p-4"
                        style={{ background: "#f8f9fa", borderTop: `4px solid ${GOLD}` }}
                    >
                        <h3 style={{ ...display, color: NAVY, fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                            Programme details
                        </h3>
                        <dl style={{ margin: 0, ...body }}>
                            {programFacts.map((f) => (
                                <div className="mbx-fact" key={f.label}>
                                    <dt>{f.label}</dt>
                                    <dd>{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    {/* ===== 2. OBJECTIVES ===== */}
    <section className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <h2 className="mbx-heading" style={{ ...display, color: NAVY }}>Programme objectives</h2>
            <div className="mbx-rule" />
            <p style={{ ...body, fontSize: "16px", color: "#444", maxWidth: "720px" }}>
                The MBA programme aims to:
            </p>
            <div className="row g-3">
                {programObjectives.map((text) => (
                    <div className="col-md-6" key={text}>
                        <div className="d-flex gap-3 bg-white rounded-3 p-3 h-100 border">
                            <span className="mbx-tick" aria-hidden="true">✓</span>
                            <span style={{ ...body, fontSize: "15px", color: "#333", lineHeight: 1.6 }}>{text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
 
    {/* ===== 3. CURRICULUM + SPECIALIZATION TABS (syllabus download) ===== */}
    <section className="container-fluid py-5 bg-white">
        <div className="container">
            <h2 className="mbx-heading" style={{ ...display, color: NAVY }}>Curriculum and course structure</h2>
            <div className="mbx-rule" />
            <p style={{ ...body, fontSize: "16px", lineHeight: 1.75, color: "#333", maxWidth: "820px", marginBottom: "2rem" }}>
                The MBA curriculum is organized into four semesters. It integrates core management
                subjects, electives, research-oriented learning, practical assignments and project-based
                learning, as applicable under the prescribed SPPU curriculum.
            </p>
 
            <div className="row g-4">
                <div className="col-md-4 col-lg-3">
                    <div className="rounded-3 p-3 h-100" style={{ background: "#f8f9fa", borderLeft: `4px solid ${NAVY}` }}>
                        <p style={{ ...body, fontWeight: 700, color: NAVY_SOFT, fontSize: "14px", marginBottom: "0.75rem" }}>
                            Select a specialization
                        </p>
                        {specializations.map((section) => (
                            <button
                                type="button"
                                key={section}
                                onClick={() => handleSelectSpecialization(section)}
                                className={`mbx-spec ${activeSection === section ? "is-active" : ""}`}
                                aria-pressed={activeSection === section}
                                style={{ fontFamily: body.fontFamily }}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
 
                <div className="col-md-8 col-lg-9">
                    <div className="rounded-3 p-4 p-md-5 h-100 border" style={{ background: "#fff" }}>
                        {currentContent ? (
                            <div>
                                <h3 style={{ ...display, fontWeight: 800, fontSize: "1.6rem", color: NAVY, marginBottom: "0.9rem" }}>
                                    {currentContent.title}
                                </h3>
                                <p style={{ ...body, maxWidth: "800px", lineHeight: 1.75, textAlign: "justify", marginBottom: "0.75rem" }}>
                                    {visibleDescription}
                                </p>
 
                                {descriptionIsLong && (
                                    <button
                                        type="button"
                                        className="mbx-link mb-4"
                                        style={{ fontFamily: body.fontFamily }}
                                        onClick={() => {
                                            if (specializationRoutes[activeSection]) {
                                                navigate(specializationRoutes[activeSection]);
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }
                                        }}
                                    >
                                        Read more about {activeSection}
                                    </button>
                                )}
 
                                <div style={{ textAlign: "right" }}>
                                    <button
                                        className="btn"
                                        style={{
                                            padding: "12px 20px",
                                            backgroundColor: NAVY,
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            fontFamily: body.fontFamily,
                                        }}
                                        onClick={() => openModal("syllabus", activeSection)}
                                    >
                                        <span aria-hidden="true">📄</span> Download syllabus
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h3 style={{ ...display, fontWeight: 800, fontSize: "1.6rem", color: NAVY, marginBottom: "0.9rem" }}>
                                    Seven specializations, one strong core
                                </h3>
                                <p style={{ ...body, maxWidth: "720px", lineHeight: 1.75, textAlign: "justify" }}>
                                    The first year builds a common management foundation; the second year lets
                                    you specialize. Select a specialization on the left to read more and
                                    download its syllabus.
                                </p>
                                <Link
                                    to="/admissions/faq-bba-bca"
                                    className="btn btn-sm"
                                    style={{ backgroundColor: GOLD, color: "#2c2626", fontWeight: 600, fontSize: "16px" }}
                                >
                                    FAQs
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    {/* ===== 4. LEARNING METHODOLOGY ===== */}
    <section className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <h2 className="mbx-heading" style={{ ...display, color: NAVY }}>Learning methodology</h2>
            <div className="mbx-rule" />
            <p style={{ ...body, fontSize: "16px", color: "#444", maxWidth: "720px", marginBottom: "1.5rem" }}>
                The programme promotes an application-oriented approach to management education through
                suitable teaching and learning methods, including:
            </p>
            <div className="row g-3">
                {learningMethods.map((m) => (
                    <div className="col-sm-6 col-lg-3" key={m}>
                        <div
                            className="bg-white rounded-3 p-3 h-100"
                            style={{ borderTop: `3px solid ${GOLD}`, ...body, fontSize: "15px", color: "#333", lineHeight: 1.6 }}
                        >
                            {m}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
 
    {/* ===== 5. PROGRAMME OUTCOMES ===== */}
    <section className="container-fluid py-5 bg-white">
        <div className="container">
            <h2 className="mbx-heading" style={{ ...display, color: NAVY }}>Programme outcomes</h2>
            <div className="mbx-rule" />
            <p style={{ ...body, fontSize: "16px", color: "#444", maxWidth: "720px", marginBottom: "1.5rem" }}>
                Upon successful completion of the MBA programme, graduates are expected to be able to:
            </p>
            <div className="row g-4">
                {programOutcomes.map((o) => (
                    <div className="col-md-6" key={o.title}>
                        <div className="h-100 ps-3" style={{ borderLeft: `4px solid ${GOLD}` }}>
                            <h3 style={{ ...display, color: NAVY, fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                                {o.title}
                            </h3>
                            <p style={{ ...body, fontSize: "15px", color: "#444", lineHeight: 1.65, margin: 0 }}>{o.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
 
    {/* ===== 6. CAREER OPPORTUNITIES ===== */}
    <section className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <h2 className="mbx-heading" style={{ ...display, color: NAVY }}>Career opportunities</h2>
            <div className="mbx-rule" />
            <p style={{ ...body, fontSize: "16px", color: "#444", maxWidth: "720px", marginBottom: "1.25rem" }}>
                MBA graduates may pursue career opportunities in areas such as:
            </p>
            <div style={{ ...body }}>
                {careerAreas.map((c) => (
                    <span className="mbx-pill" key={c}>{c}</span>
                ))}
            </div>
            <p style={{ ...body, fontSize: "14px", color: "#666", marginTop: "0.75rem", marginBottom: 0 }}>
                Career opportunities depend on individual competencies, specialization, experience,
                recruitment requirements and market conditions.
            </p>
        </div>
    </section>
 
    {/* ===== 7. ASSESSMENT ===== */}
    <section className="container-fluid py-5" style={{ backgroundColor: NAVY }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <h2 className="mbx-heading" style={{ ...display, color: "#fff" }}>Assessment and evaluation</h2>
                    <p style={{ ...body, fontSize: "16px", lineHeight: 1.75, color: "#e6eaf2", textAlign: "justify" }}>
                        Student assessment and evaluation shall be conducted according to the examination
                        rules, assessment scheme, credit requirements and other academic regulations
                        prescribed by Savitribai Phule Pune University and applicable authorities.
                    </p>
                    <p style={{ ...body, fontSize: "16px", lineHeight: 1.75, color: "#e6eaf2", textAlign: "justify", marginBottom: 0 }}>
                        Evaluation may include internal assessment, university examinations, assignments,
                        presentations, practical work, training evaluation and project assessment, wherever
                        prescribed under the applicable curriculum.
                    </p>
                </div>
            </div>
        </div>
    </section>

            {/* ===== MODAL (Apply / Syllabus) ===== */}
            {modalMode && (
                <div
                    className="modal-backdrop"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(10,34,64,0.65)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999,
                        padding: "1rem",
                    }}
                >
                    <div
                        className="modal-content rounded-3 p-4"
                        style={{ backgroundColor: "#fff", maxWidth: "500px", width: "100%" }}
                    >
                        <h4 style={{ ...display, color: NAVY, fontWeight: 700, marginBottom: "0.25rem" }}>
                            {modalMode === "apply" ? "Apply for the MBA Program" : "Download Syllabus"}
                        </h4>
                        <p style={{ ...body, fontSize: "14px", color: "#6b7280", marginBottom: "1rem" }}>
                            {modalMode === "apply"
                                ? "Share your details and our admissions team will reach out with next steps."
                                : "Fill the form to receive the syllabus for your chosen specialization."}
                        </p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="form-control mb-2"
                            />
                            {errors.name && <small className="text-danger d-block mb-2">{errors.name}</small>}

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="form-control mb-2"
                            />
                            {errors.email && <small className="text-danger d-block mb-2">{errors.email}</small>}

                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                required
                                className="form-control mb-2"
                            />
                            {errors.phone && <small className="text-danger d-block mb-2">{errors.phone}</small>}

                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="form-control mb-2"
                            />
                            {errors.city && <small className="text-danger d-block mb-2">{errors.city}</small>}



                            {modalMode === "apply" && (
                                <>
                                    <input
                                        type="text"
                                        name="qualification"
                                        value={form.qualification}
                                        onChange={handleChange}
                                        placeholder="Highest Qualification"
                                        className="form-control mb-2"
                                    />
                                    {errors.qualification && (
                                        <small className="text-danger d-block mb-2">{errors.qualification}</small>
                                    )}
                                </>
                            )}

                            <select
                                name="specialization"
                                value={form.specialization}
                                onChange={handleChange}
                                className="form-select mb-2"
                            >
                                <option value="">
                                    {modalMode === "apply" ? "Preferred Specialization (optional)" : "Select Specialization"}
                                </option>
                                {specializations.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                            {errors.specialization && (
                                <small className="text-danger d-block mb-2">{errors.specialization}</small>
                            )}

                            <button
                                type="submit"
                                className="btn w-100 mt-2"
                                disabled={loading}
                                style={{
                                    backgroundColor: loading ? "#999" : NAVY,
                                    color: "#fff",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    fontFamily: body.fontFamily,
                                    border: "none",
                                    cursor: loading ? "not-allowed" : "pointer",
                                }}
                            >
                                {loading
                                    ? "Submitting..."
                                    : modalMode === "apply"
                                        ? "Submit Application"
                                        : "Submit & Download"}
                            </button>
                        </form>

                        <button
                            onClick={closeModal}
                            style={{
                                marginTop: "10px",
                                background: "transparent",
                                border: "none",
                                color: "#d95c5c",
                                cursor: "pointer",
                                fontFamily: body.fontFamily,
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default MbaProgramPage;