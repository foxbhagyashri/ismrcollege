import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HowToApply.css";
import {
    FaEdit,
    FaHeadset,
    FaAward,
    FaGraduationCap,
    FaArrowRight,
    FaFileAlt
} from "react-icons/fa";
import ISMRFormModal from "./forms/ISMRFormModal";

const steps = [
    {
        number: "01",
        stepText: "STEP 01",
        tag: "Official Portal",
        highlight: "Registration Fee: ₹ 1,100",
        icon: <FaEdit />,
        title: "Apply Online",
        desc: "Visit the official portal, click “Apply Online,” fill in your academic & personal details, and submit the registration fee of ₹ 1,100/- securely."
    },
    {
        number: "02",
        stepText: "STEP 02",
        tag: "Personal Guidance",
        highlight: "Profile Evaluation",
        icon: <FaHeadset />,
        title: "Counselling & Interview",
        desc: "Upon registration, our expert admission cell reviews your profile and schedules an interactive telephonic or personal counselling interview session."
    },
    {
        number: "03",
        stepText: "STEP 03",
        tag: "Offer Letter",
        highlight: "Token Fee: ₹ 30,000",
        icon: <FaAward />,
        title: "Seat Confirmation",
        desc: "Shortlisted candidates receive the official Admission Offer Letter via email. Confirm your reserved seat by depositing Rs. 30,000/- within four days."
    },
    {
        number: "04",
        stepText: "STEP 04",
        tag: "Enrollment",
        highlight: "Document Verification",
        icon: <FaGraduationCap />,
        title: "Provisional Admission",
        desc: "Upon seat confirmation, provisional admission is officially confirmed subject to submission and physical verification of all required eligibility documents."
    }
];

const HowToApply = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="hta-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header text-center mb-4">
                    <h2 className="section-title text-center">How To Apply</h2>
                    <p className="hta-subtitle">
                        Follow our streamlined 4-step admission roadmap to secure your management seat at ISMR B-School, Pune.
                    </p>
                </div>

                {/* 4-Step Process Roadmap with Step & Icon in 1 Line */}
                <div className="hta-roadmap-container">
                    {steps.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <div className="hta-step-card">
                                {/* Top Accent Bar */}
                                <div className="hta-card-accent"></div>

                                {/* Step & Icon in 1 Single Line */}
                                <div className="hta-card-top-line">
                                    <div className="hta-step-badges">
                                        <span className="hta-step-pill">{item.stepText}</span>
                                        <span className="hta-tag-pill">{item.tag}</span>
                                    </div>
                                    <div className="hta-icon-wrap">
                                        <div className="hta-icon-circle">
                                            {item.icon}
                                        </div>
                                        <span className="hta-watermark">{item.number}</span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="hta-card-body">
                                    <h3 className="hta-card-title">{item.title}</h3>
                                    <p className="hta-card-desc">{item.desc}</p>
                                </div>

                                {/* Card Footer / Micro-highlight */}
                                <div className="hta-card-footer">
                                    <span className="hta-highlight-badge">{item.highlight}</span>
                                </div>
                            </div>

                            {/* Directional Connector Arrow (Between cards on desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hta-step-connector" aria-hidden="true">
                                    <div className="hta-connector-arrow">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Interactive Bottom CTA Bar (Compact) */}
                <div className="hta-cta-banner">
                    <div className="hta-cta-content">
                        <div className="hta-cta-info">
                            <h4 className="hta-cta-title">Ready to Kickstart Your Career at ISMR?</h4>
                            <p className="hta-cta-sub">
                                Applications for batch 2026-27 are currently open. Speak with an admission advisor today.
                            </p>
                        </div>
                        <div className="hta-cta-actions">
                            <button
                                className="hta-btn hta-btn-primary"
                                onClick={() => setModalOpen(true)}
                            >
                                <span>Apply Online Now</span>
                                <FaArrowRight className="hta-btn-icon" />
                            </button>
                            <Link to="/admissions/required-documents" className="hta-btn hta-btn-secondary">
                                <FaFileAlt className="hta-btn-icon" />
                                <span>Required Documents</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Form Modal */}
            <ISMRFormModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
};

export default HowToApply;
