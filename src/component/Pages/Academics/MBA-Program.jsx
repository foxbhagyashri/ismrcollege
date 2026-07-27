import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import { Link } from "react-router-dom";
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
    const [activeSection, setActiveSection] = useState("");
    const [showFullDescription, setShowFullDescription] = useState(false);

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
                "Business Analytics is the practice of using data-driven techniques to inform strategic and operational decision-making. It integrates statistical analysis, predictive modelling, data visualization, and machine learning to uncover patterns, forecast trends, and optimize performance across the organization.",
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
                            <p
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
                            </p>
                            <h1
                                style={{
                                    ...display,
                                    fontSize: "3rem",
                                    fontWeight: 800,
                                    margin: 0,
                                    lineHeight: 1.15,
                                }}
                            >
                                Master of Business
                                <br />
                                Administration
                            </h1>
                            <p
                                style={{
                                    ...body,
                                    fontSize: "17px",
                                    opacity: 0.9,

                                    marginTop: "1.25rem",
                                }}
                            >
                                A two-year, AICTE-approved MBA with seven industry-aligned
                                specializations — built on practical exposure, expert
                                faculty, and corporate interaction from day one.
                            </p>

                            <div className="gap-5 mt-4">
                                <button
                                    className="btn mba-cta-btn"
                                    style={{
                                        backgroundColor: GOLD,
                                        color: NAVY,
                                        fontWeight: 700,
                                        padding: "12px 28px",
                                        borderRadius: "8px",
                                        border: "none",
                                        fontFamily: body.fontFamily,
                                        marginRight: "20px"
                                    }}
                                    onClick={() => openModal("apply")}
                                >
                                    Apply Now
                                </button>
                                <button
                                    className="btn mba-outline-btn"
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#fff",
                                        fontWeight: 600,
                                        padding: "12px 28px",
                                        borderRadius: "8px",
                                        border: "1.5px solid rgba(255,255,255,0.6)",
                                        fontFamily: body.fontFamily,
                                    }}
                                    onClick={() => openModal("syllabus")}
                                >
                                    Download Syllabus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ADMISSION TICKET — QUICK FACTS ===== */}
            <div className="container" style={{ marginTop: "-42px", position: "relative", zIndex: 2 }}>
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
            </div>

            {/* ===== PROGRAM DETAILS ===== */}
            <div className="container-fluid py-5" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                    <div className="mb-5">
                        <p
                            style={{
                                ...body,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontSize: "12.5px",
                                fontWeight: 700,
                                color: NAVY_SOFT,
                                marginBottom: "0.4rem",
                            }}
                        >
                            What to know
                        </p>
                        <h2 style={{ ...display, fontSize: "2rem", fontWeight: 800, color: NAVY }}>
                            Program Details
                        </h2>
                    </div>

                    <div className="row g-4 mb-5">
                        {programDetails.map((d) => (
                            <div className="col-md-6" key={d.heading}>
                                <div
                                    className="mba-detail-card bg-white rounded-3 p-4 h-100"
                                    style={{ borderTop: `3px solid ${GOLD}` }}
                                >
                                    <h5 style={{ ...display, color: NAVY, fontWeight: 700, marginBottom: "0.6rem" }}>
                                        {d.heading}
                                    </h5>
                                    <p style={{ ...body, fontSize: "15px", color: "#444", textAlign: "justify", margin: 0 }}>
                                        {d.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ===== SPECIALIZATION EXPLORER ===== */}
                    <div className="mb-4">
                        <p
                            style={{
                                ...body,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontSize: "12.5px",
                                fontWeight: 700,
                                color: NAVY_SOFT,
                                marginBottom: "0.4rem",
                            }}
                        >
                            Choose your path
                        </p>
                        <h2 style={{ ...display, fontSize: "2rem", fontWeight: 800, color: NAVY }}>
                            Specializations
                        </h2>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4 col-lg-3">
                            <div
                                className="shadow-sm bg-white rounded-3 p-3"
                                style={{ borderLeft: `4px solid ${NAVY}`, minHeight: "100%" }}
                            >
                                {specializations.map((section) => (
                                    <div
                                        key={section}
                                        onClick={() => handleSelectSpecialization(section)}
                                        className={`mba-spec-item p-3 mb-2 rounded ${activeSection === section ? "text-white" : "text-dark"
                                            }`}
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "15px",
                                            cursor: "pointer",
                                            fontFamily: body.fontFamily,
                                            backgroundColor: activeSection === section ? NAVY : "#f8f9fa",
                                            border:
                                                activeSection === section
                                                    ? `2px solid ${NAVY}`
                                                    : "1px solid #dee2e6",
                                        }}
                                    >
                                        {section}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-md-8 col-lg-9">
                            <div className="bg-white shadow-sm rounded-3 p-4 p-md-5">
                                {currentContent ? (
                                    <div>
                                        <h3 style={{ ...display, fontWeight: 800, fontSize: "1.6rem", color: NAVY, marginBottom: "0.9rem" }}>
                                            {currentContent.title}
                                        </h3>
                                        <p style={{ ...body, maxWidth: "800px", textAlign: "justify", marginBottom: "0.5rem" }}>
                                            {visibleDescription}
                                        </p>

                                        {descriptionIsLong && (
                                            <button
                                                type="button"
                                                className="mba-readmore-btn mb-3"
                                                onClick={() => setShowFullDescription((v) => !v)}
                                            >
                                                {showFullDescription ? "Show Less" : "Read More"}
                                            </button>
                                        )}

                                        <div style={{ textAlign: "right" }}>
                                            <button
                                                className="btn"
                                                style={{
                                                    padding: "12px",
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
                                                <span>📄</span> Download Syllabus
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h3 style={{ ...display, fontWeight: 800, fontSize: "1.6rem", color: NAVY, marginBottom: "0.9rem" }}>
                                            Seven specializations, one strong core
                                        </h3>
                                        <p style={{ ...body, maxWidth: "900px", textAlign: "justify" }}>
                                            The first year builds a common management foundation;
                                            the second year lets you specialize. Select a
                                            specialization from the left to read more and download
                                            its syllabus.
                                        </p>
                                        <Link
                                            to="/Addmissions/FaqBbaBca"
                                            className="btn btn-sm"
                                            style={{
                                                backgroundColor: GOLD,
                                                color: "#2c2626",
                                                fontWeight: 600,
                                                fontSize: "16px",
                                            }}
                                        >
                                            FAQ's
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== APPLY CTA STRIP ===== */}
            <section
                className="py-5 text-center text-white"
                style={{ background: `linear-gradient(135deg, ${NAVY_SOFT} 0%, ${NAVY} 100%)` }}
            >
                <div className="container">
                    <h3 style={{ ...display, fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.6rem" }}>
                        Ready to begin your MBA journey?
                    </h3>
                    <p style={{ ...body, opacity: 0.9, maxWidth: "560px", margin: "0 auto 1.5rem" }}>
                        Seats are limited for the July intake. Submit your details and
                        our admissions team will get in touch.
                    </p>
                    <button
                        className="btn mba-cta-btn"
                        style={{
                            backgroundColor: GOLD,
                            color: NAVY,
                            fontWeight: 700,
                            padding: "12px 32px",
                            borderRadius: "8px",
                            border: "none",
                            fontFamily: body.fontFamily,
                        }}
                        onClick={() => openModal("apply")}
                    >
                        Apply Now
                    </button>
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