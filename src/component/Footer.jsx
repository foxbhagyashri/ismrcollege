import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaChevronRight,
    FaPaperPlane,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import ISMRFormModal from "./forms/ISMRFormModal";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="footer-section">
            {/* Main Footer Content */}
            <div className="footer-main">
                <Container>
                    <Row className="g-3 align-items-start">
                        {/* 1. Brand & About Column */}
                        <Col lg={4} md={6} sm={12} className="footer-col brand-col">
                            <div className="footer-brand-wrap mb-2">
                                <Link to="/" onClick={scrollToTop} className="d-inline-block">
                                    <img
                                        src="/ISMR logo_page-0001.png"
                                        alt="ISMR College Pune Logo"
                                        className="footer-logo mb-2"
                                    />
                                </Link>
                                <p className="footer-brand-desc mb-2">
                                    International School of Management & Research (ISMR) — AICTE-approved, SPPU-affiliated, NAAC-accredited business school in Pune.
                                </p>
                            </div>

                            <div className="footer-affiliations mb-3">
                                <span className="badge-pill">AICTE Approved</span>
                                <span className="badge-pill">SPPU Affiliated</span>
                                <span className="badge-pill">NAAC Accredited</span>
                            </div>

                            <div className="social-links-wrap">
                                <span className="social-heading mb-1">Connect With Us</span>
                                <div className="social-icons">
                                    <a
                                        href="https://www.facebook.com/ismrcollegepune/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="ISMR Facebook"
                                        className="social-btn"
                                        title="Facebook"
                                    >
                                        <FaFacebookF className="social-svg-icon" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/ismrofficial/?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="ISMR Instagram"
                                        className="social-btn"
                                        title="Instagram"
                                    >
                                        <FaInstagram className="social-svg-icon" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/school/international-school-of-management-and-research-pune/?originalSubdomain=in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="ISMR LinkedIn"
                                        className="social-btn"
                                        title="LinkedIn"
                                    >
                                        <FaLinkedinIn className="social-svg-icon" />
                                    </a>
                                </div>
                            </div>
                        </Col>

                        {/* 2. Top Programs Column */}
                        <Col lg={2} md={6} sm={6} className="footer-col">
                            <h5 className="footer-heading">Top Programs</h5>
                            <ul className="footer-nav-list">
                                <li>
                                    <Link to="/programs/mba-in-marketing-management-in-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> MBA Marketing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/mba-in-finance-management-in-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> MBA Finance
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/mba-hr-college-in-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> MBA Human Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/mba-in-business-analytics-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> MBA Business Analytics
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/mba-in-operations-and-supply-chain-management-in-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> MBA Operations & SCM
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/mba-in-agribusiness-management-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> MBA Agribusiness
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/bba-college-in-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> BBA Programme
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/programs/bca-college-in-pune" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> BCA Programme
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        {/* 3. Quick Links & Admissions Column */}
                        <Col lg={2} md={6} sm={6} className="footer-col">
                            <h5 className="footer-heading">Quick Links</h5>
                            <ul className="footer-nav-list">
                                <li>
                                    <Link to="/about-us/why-ismr" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Why ISMR?
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/naac" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> NAAC Accreditation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us/awards-and-rankings" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Awards & Rankings
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/placements/process" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Placement Process
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admissions/eligibility-criteria" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Eligibility Criteria
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admissions/how-to-apply" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> How To Apply
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admissions/education-loan" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Education Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admissions/fee-structure" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Fee Structure
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-and-conditions" onClick={scrollToTop}>
                                        <FaChevronRight className="bullet-icon" /> Terms & Conditions
                                    </Link>
                                </li>
                            </ul>

                            <div className="mt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                    className="footer-cta-btn"
                                >
                                    <FaPaperPlane className="me-1" /> Apply Now 2026
                                </button>
                            </div>
                        </Col>

                        {/* 4. Campus Location & Contact Column */}
                        <Col lg={4} md={6} sm={12} className="footer-col contact-col">
                            <h5 className="footer-heading">Campus & Contact</h5>
                            
                            <div className="contact-info-list mb-2">
                                <div className="contact-item">
                                    <div className="contact-icon-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">Admission Helpline:</span>
                                        <a href="tel:+919923786079" className="contact-link">
                                            +91 9923786079
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-box">
                                        <FaEnvelope />
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">Official Email:</span>
                                        <a href="mailto:admissions@ismrpune.edu.in" className="contact-link">
                                            admissions@ismrpune.edu.in
                                        </a>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="contact-text">
                                        <span className="contact-label">Campus Address:</span>
                                        <p className="contact-address mb-0">
                                            ISMR Campus Bypass Pune Saswad Road, Sr.No.907, Opp Hotel Vijay Executive, Gaidhara Kanifnath College Road, Wadki, Pune – 412 308.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Styled Map Container */}
                            <div className="footer-map-card">
                                <iframe
                                    title="ISMR Pune Campus Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4852719774135!2d73.9687828737175!3d18.41626317235503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c058e8d9e15b%3A0x541eee74dbde91ba!2sISMR%20-%20MBA%20College%20Pune!5e0!3m2!1sen!2sin!4v1764314251873!5m2!1sen!2sin"
                                    width="100%"
                                    height="125"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* -------- FORM MODAL -------- */}
            {showModal && (
                <ISMRFormModal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                />
            )}

            {/* Bottom Sub-Footer Bar */}
            <div className="footer-bottom py-2">
                <Container>
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start gap-1">
                        <span className="footer-bottom-text">
                            © {new Date().getFullYear()} International School of Management and Research (ISMR Pune). All Rights Reserved.
                        </span>
                        <span className="footer-bottom-text developer-credit">
                            Website Designed & Developed By{" "}
                            <a
                                href="https://foxaircomm.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-brand"
                            >
                                Fox Aircomm Pvt Ltd
                            </a>
                        </span>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;

