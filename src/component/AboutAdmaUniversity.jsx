import React from "react";
import "./AboutAdmaUniversity.css";
import { FaUniversity, FaGraduationCap, FaAward, FaCertificate } from "react-icons/fa";

const Bullseye = () => (
  <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const Globe = () => (
  <svg viewBox="0 0 24 24" className="inline-icon" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 12h20M12 2v20" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4.5 6.5c2 3 5 4 7.5 4s5.5-1 7.5-4" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const AboutAdmaUniversity = () => {
  return (
    <section className="about-container">
      {/* Top Row: About Text + Image */}
      <div className="about-top">
        <div className="about-left">
          <h2 className="about-title">
            <span className="about-icon">🎓</span> About Institute
          </h2>
          <p className="about-text">
            International School of Management & Research, Pune ranked 20th in
            Beyond IIM's Top 100 B-School Survey is one of the Top B School in
            Pune. Ranked for Academic Excellence, with 100% Placement Record
            since inception, ISMR B-School MBA college in Pune is Approved by
            AICTE, Ministry of HRD & Government of India, Directorate of
            Technical Education and Affiliated to Savitribai Phule Pune University.
          </p>
        </div>

        <div className="about-right">
          <img src="/about-2.jpg" alt="Adma University" />
        </div>
      </div>

      {/* Bottom Row: Logos */}
      <div className="about-bottom">
        <div className="logos-section">
          <div className="logo-card">
            <FaUniversity className="logo-icon" />
            <span>All India Council for Technical Education</span>
          </div>
          <div className="logo-card">
            <FaGraduationCap className="logo-icon" />
            <span>Directorate of Technical Education, Maharashtra</span>
          </div>
          <div className="logo-card">
            <FaAward className="logo-icon" />
            <span>Savitribai Phule Pune University</span>
          </div>
          <div className="logo-card">
            <FaCertificate className="logo-icon" />
            <span>National Assessment and Accreditation Council</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdmaUniversity;
