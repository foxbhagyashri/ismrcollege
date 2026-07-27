import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../form/ContactForm";
import Howtoaplydownoadform from "../../form/Howtoaplydownoadform";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../form/ISMRFormModal";

export default function MBAPharmaCollegesInPune() {

  const [openFaq, setOpenFaq] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const pharmaFaqs = [
    {
      q: "What is an MBA in Pharma and Healthcare Management?",
      a: "It is a two-year postgraduate management programme designed to train graduates for leadership roles across the pharmaceutical, hospital, and healthcare sectors. The curriculum combines core management subjects with sector-specific disciplines such as regulatory affairs, pharmacovigilance, clinical research, and hospital operations.",
    },
    {
      q: "What is the eligibility for an MBA in Pharma & Healthcare Management?",
      a: "Graduates from any stream — B.Pharm, B.Sc., BAMS, BDS, BHMS, BCom, BBA, and others with a minimum of 50% marks are eligible to apply. A valid MAH-MBA CET, CAT, or CMAT score is also required for admission.",
    },
    {
      q: "What is the duration of the MBA in Pharma & Healthcare Management at ISMR?",
      a: "The programme is two years full-time, structured across four semesters. Each semester progressively builds on management fundamentals, sector specialisation, and live industry exposure.",
    },
    {
      q: "Is an MBA in Pharmaceutical Healthcare Management suitable for working professionals?",
      a: "Yes — ISMR actively admits working professionals from hospital administration, pharma sales, QA, and clinical coordination backgrounds. The programme is structured to build on existing sector experience and fast-track candidates into senior managerial roles.",
    },
    {
      q: "Is ISMR AICTE-approved and SPPU-affiliated for MBA Pharma programmes?",
      a: "Yes. ISMR holds AICTE approval along with DTE and AIMS recognition and is affiliated with Savitribai Phule Pune University. The degree carries full national academic and professional validity.",
    },
    {
      q: "What is the scope of MBA Pharma and Healthcare Management in Pune?",
      a: "Graduates can pursue roles across pharmaceutical companies, corporate hospitals, CROs, diagnostic networks, health-tech startups, medical device firms, and insurance organisations. Pune's pharma and healthcare industry concentration further strengthens local placement and networking opportunities.",
    },
    {
      q: "What salary can I expect after an MBA in Pharma & Healthcare Management?",
      a: "Fresh graduates entering pharma marketing, regulatory affairs, or hospital administration commonly start between ₹3–5 LPA, while those placed with leading pharmaceutical companies or hospital groups may receive offers in the ₹5–7 LPA range. Salaries scale with experience, specialisation, and the type of organisation — pharma MNCs and corporate hospital chains generally offer stronger early-career growth.",
    },
    {
      q: "What are the fees for MBA Pharma Healthcare Management at ISMR Pune?",
      a: "MBA Pharma Healthcare Management Pune Fees at ISMR are structured to be accessible and are communicated transparently at the time of counselling with no hidden charges. Contact the admissions team directly or request a brochure for the complete and current fee breakdown.",
    },
    {
      q: "Is an MBA in Pharma & Healthcare Management worth it?",
      a: "For science, pharmacy, or allied health graduates, this MBA provides the management layer that clinical roles alone cannot offer. Combined with Pune's pharma and healthcare industry presence, it is one of the stronger sector-specific career investments available to science graduates in Maharashtra.",
    },
    {
      q: "Can B.Sc. and B.Pharm students apply?",
      a: "Yes. B.Sc. and B.Pharm graduates are among the most common applicants for this specialisation and benefit directly from the regulatory, pharmacovigilance, and clinical research modules in the curriculum.",
    },
    {
      q: "Is an MBA in Pharma & Healthcare Management better than M.Pharm?",
      a: "They serve different career directions. M.Pharm develops advanced pharmaceutical science expertise suited to research and academic roles. An MBA in Pharma & Healthcare Management develops management capabilities suited to leadership roles in pharma companies, hospital administration, and regulatory affairs. The MBA is the stronger route for students whose goal is a management career rather than a research one.",
    },
    {
      q: "Is mathematics compulsory for this MBA?",
      a: "No. Subjects like Biostatistics and Health Economics are taught with a management and interpretation focus, not advanced quantitative methods.",
    },
    {
      q: "What is the scope of an MBA in Pharma & Healthcare Management?",
      a: "Graduates can build careers across pharmaceutical manufacturing, hospital administration, regulatory affairs, clinical research, medical devices, health insurance, and health-tech — domestically and in international regulated markets. Pune's industry concentration strengthens both local placement and long-term networking opportunities.",
    },
  ];

  return (
    <section className="apply-wrapper">
      <style>{`

  .sector-note {
  margin-top: 20px;
  font-size: 1.05rem;
  color: #444;
  font-style: italic;
}

.salary-range-cell {
  font-weight: 700;
  color: #0f3350;
  white-space: nowrap;
}          

.category-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.category-tab {
  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #f7f7f7;
  cursor: pointer;
}

.category-tab.active {
  background: #FFC333;
  color: #000;
  font-weight: 600;
}
  .doc-list ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.doc-list li {
  margin-bottom: 6px;
  line-height: 1.5;
}




        .apply-wrapper {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: #111;
          background: #f8f9fa;
        }
        
        /* Hero Section */
        .hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 280px;
          background: #0f3350;
          color: #fff;
          padding: 50px 0;
          overflow: hidden;
        }
        
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }
        
        .hero .library-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(6,40,68,0.7), rgba(6,40,68,0.7));
          background-image: url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        
        .hero-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 40px;
        }
        
        .hero-left {
          flex: 1;
          max-width: 60%;
        }
        
        .hero-left h1 {
          font-size: 3.5rem;
          margin: 0 0 12px;
          font-weight: 800;
          line-height: 1.1;
        }
        
        .breadcrumb {
          color: #ffd27b;
          margin-top: 8px;
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 1rem;
          font-weight: 500;
        }
        
        .breadcrumb a {
          color: #ffd27b;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.3s ease;
        }
        
        .breadcrumb a:hover {
          opacity: 0.8;
        }
        
        .hero-left p {
          margin-top: 20px;
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .hero-right {
          flex: 0 0 380px;
          display: flex;
          justify-content: flex-end;
        }
        
        .photo-card {
          width: 100%;
          max-width: 380px;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          background: #fff;
          transition: transform 0.3s ease;
        }
        
        .photo-card:hover {
          transform: translateY(-5px);
        }
        
        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Content Area */
        .content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        .content-area {
          padding: 60px 0;
          background: #fff;
        }
        
        .tabs {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          justify-content: center;
        }
        
        .tab-btn {
          padding: 16px 32px;
          border-radius: 12px;
          border: 2px solid transparent;
          background: #ffc333;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          color: #0f3350;
        }
        
        .tab-btn:hover {
          background: #ffb310;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 179, 16, 0.3);
        }
        
        .tab-btn.active {
          background: #0f3350;
          color: #fff;
          border-color: #0f3350;
          box-shadow: 0 8px 25px rgba(15, 51, 80, 0.2);
          transform: translateY(-2px);
        }
        
        .panel {
          background: #f7f9fb;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(15,51,80,0.1);
        }
        
        /* Overview Tab */
        .panel h2 {
          margin: 0 0 20px;
          font-size: 2.0rem;
          font-weight: 700;
          color: #0f3350;
          line-height: 1.2;
        }
          .panel h1 {
          margin: 0 0 20px;
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f3350;
          line-height: 1.2;
        }
        
        .panel p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #444;
          margin-bottom: 24px;
        }
        
        .cta-row {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }
        
        .btn-primary {
          background: #ff3a4e;
          color: #fff;
          padding: 16px 32px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 58, 78, 0.3);
        }
        
        .btn-primary:hover {
          background: #e03547;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 58, 78, 0.4);
        }
        
        .btn-secondary {
          background: #fff;
          border: 2px solid #0f3350;
          color: #0f3350;
          padding: 16px 32px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #0f3350;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(15, 51, 80, 0.2);
        }
        
        /* Steps Tab */
        .step-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 30px;
        }
        
        .step {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(15,51,80,0.08);
          transition: all 0.3s ease;
          border-left: 4px solid #0f3350;
        }
        
        .step:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(15,51,80,0.15);
        }
        
        .step h3 {
          margin: 0 0 12px;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f3350;
        }
        
        .step p {
          margin: 0;
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }
        
        /* Documents Tab */
        .doc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 30px;
        }
        
        .doc {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          border: 2px dashed rgba(15,51,80,0.2);
          text-align: center;
          font-weight: 600;
          color: #0f3350;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .doc:hover {
          background: #f0f7ff;
          border-color: #0f3350;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(15,51,80,0.1);
        }
        
        /* Fees Tab */
        .panel ul {
          margin: 20px 0;
          padding-left: 24px;
        }
        
        .panel li {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #444;
          margin-bottom: 12px;
        }
        
        .panel strong {
          color: #0f3350;
          font-weight: 700;
        }
        
        /* FAQ Tab */
        .faq-wrap {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          margin-top: 30px;
        }
        
        .faq-main {
          flex: 1;
        }
        
        .faq-search {
          display: flex;
          gap: 16px;
          align-items: center;
          background: #fff;
          padding: 16px 20px;
          border-radius: 12px;
          border: 2px solid rgba(15,51,80,0.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          margin-bottom: 24px;
        }
        
        .faq-search input {
          border: 0;
          outline: none;
          font-size: 1.1rem;
          width: 100%;
          background: transparent;
        }
        
        .faq-search input::placeholder {
          color: #999;
        }
        
        .faq-meta {
          width: 320px;
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 6px 25px rgba(15,51,80,0.08);
          border: 1px solid rgba(15,51,80,0.1);
        }
        
        .faq-meta h4 {
          margin: 0 0 16px;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f3350;
        }
        
        .faq-meta p {
          margin: 0 0 16px;
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }
        
        .faq-meta a {
          color: #0f3350;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .faq-meta a:hover {
          color: #ff3a4e;
        }
        
        .faq-meta ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .faq-meta li {
          margin-bottom: 8px;
          font-size: 1rem;
        }
        
        .accordion {
          margin-top: 0;
        }
        
        .acc-item {
          background: #fff;
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          border: 2px solid rgba(15,51,80,0.1);
          transition: all 0.3s ease;
        }
        
        .acc-item:hover {
          border-color: #0f3350;
          box-shadow: 0 4px 15px rgba(15,51,80,0.1);
        }
        
        .acc-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px 24px;
          cursor: pointer;
          background: linear-gradient(180deg, #fff, #fbfdff);
          border: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f3350;
          transition: all 0.3s ease;
        }
        
        .acc-btn:hover {
          background: linear-gradient(180deg, #f8faff, #f5f9ff);
        }
        
        .acc-q {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        
        .acc-q svg {
          flex-shrink: 0;
        }
        
        .acc-body {
          padding: 0 24px 24px 24px;
          color: #444;
          font-size: 1rem;
          line-height: 1.7;
          transition: all 0.3s ease;
        }
        
        .acc-body.closed {
          display: none;
        }
        
        .chev {
          transition: transform 0.3s ease;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-inner {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          
          .hero-left {
            max-width: 100%;
          }
          
          .hero-right {
            justify-content: center;
            width: 100%;
          }
          
          .step-list {
            grid-template-columns: 1fr;
          }
          
          .doc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .faq-wrap {
            flex-direction: column;
          }
          
          .faq-meta {
            width: 100%;
          }
        }
        
        @media (max-width: 768px) {
          .hero-container,
          .content-container {
            padding: 0 24px;
          }
          
          .hero-left h1 {
            font-size: 2.5rem;
          }
          
          .tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .tab-btn {
            width: 100%;
            max-width: 280px;
          }
          
          .panel {
            padding: 30px 24px;
          }
          
          .cta-row {
            flex-direction: column;
          }
          
          .doc-grid {
            grid-template-columns: 1fr;
          }
          
          .faq-search {
            padding: 14px 18px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-left h1 {
            font-size: 2rem;
          }
          
          .hero-left p {
            font-size: 1rem;
          }
          
          .panel h2 {
            font-size: 1.8rem;
          }
        }

        .marketing-section {
  padding: 30px 0;
  background: #fff;
}

.marketing-section .panel {
  margin-bottom: 0px;
}

.marketing-section .intro-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 20px;
}

.highlight-list {
  list-style: none;
  padding: 0;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.highlight-list li {
  background: #f7f9fb;
  border-left: 4px solid #ffc333;
  padding: 14px 18px;
  border-radius: 8px;
  font-weight: 600;
  color: #0f3350;
  font-size: 1rem;
}

.comparison-table-wrap {
  overflow-x: auto;
  margin-top: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  min-width: 700px;
}

.comparison-table th {
  background: #0f3350;
  color: #fff;
  text-align: left;
  padding: 16px 20px;
  font-size: 1rem;
  font-weight: 700;
}

.comparison-table td {
  padding: 16px 20px;
  border-bottom: 1px solid rgba(15,51,80,0.1);
  font-size: 0.98rem;
  color: #333;
  line-height: 1.5;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table td:first-child {
  font-weight: 700;
  color: #0f3350;
}

.comparison-table td.highlight-cell {
  background: #fff8e6;
  font-weight: 600;
  color: #0f3350;
}

.comparison-note {
  margin-top: 24px;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
}

@media (max-width: 768px) {
  .highlight-list {
    grid-template-columns: 1fr;
  }
}

.stat-highlight {
  background: linear-gradient(135deg, #0f3350, #1a4d7a);
  color: #fff;
  padding: 28px 32px;
  border-radius: 12px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.stat-highlight .stat-number {
  font-size: 2.8rem;
  font-weight: 800;
  color: #ffc333;
  line-height: 1;
  white-space: nowrap;
}

.stat-highlight .stat-text {
  font-size: 1.05rem;
  line-height: 1.6;
  flex: 1;
  min-width: 220px;
}

.growth-arrow {
  color: #0f3350;
  font-weight: 600;
}

.growth-arrow .arrow-icon {
  color: #ff3a4e;
  margin: 0 6px;
}

.salary-cell {
  font-weight: 700;
  color: #0f3350;
  white-space: nowrap;
}

.sub-heading {
  color: #0f3350;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 32px 0 16px;
}

.sub-heading:first-child {
  margin-top: 0;
}
  .opportunity-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.opportunity-list li {
  position: relative;
  padding: 14px 20px 14px 44px;
  background: #f7f9fb;
  border-radius: 8px;
  margin-bottom: 12px;
  font-size: 1.05rem;
  color: #333;
  line-height: 1.5;
}

.opportunity-list li::before {
  content: "📍";
  position: absolute;
  left: 16px;
  top: 13px;
  font-size: 1rem;
}

.factor-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.factor-list li {
  padding: 16px 20px;
  border-left: 4px solid #0f3350;
  background: #fff;
  box-shadow: 0 4px 15px rgba(15,51,80,0.06);
  border-radius: 0 8px 8px 0;
  margin-bottom: 14px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;
}

.factor-list li strong {
  color: #0f3350;
}

.fit-list {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.fit-list li {
  position: relative;
  padding: 12px 16px 12px 40px;
  font-size: 1.05rem;
  line-height: 1.5;
  color: #333;
  margin-bottom: 10px;
}

.fit-list li.yes::before {
  content: "✓";
  position: absolute;
  left: 8px;
  top: 10px;
  color: #1a9c4a;
  font-weight: 800;
  font-size: 1.2rem;
}

.fit-list li.no {
  background: #fff4f4;
  border-radius: 8px;
  color: #7a2020;
}

.fit-list li.no::before {
  content: "✕";
  position: absolute;
  left: 12px;
  top: 12px;
  color: #ff3a4e;
  font-weight: 800;
}

.admission-note {
  margin-top: 30px;
  padding: 24px 28px;
  background: #0f3350;
  color: #fff;
  border-radius: 12px;
  text-align: center;
}

.admission-note p {
  color: #fff;
  font-size: 1.15rem;
  margin: 0 0 16px;
}

.admission-note .btn-primary {
  display: inline-block;
}

.role-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.role-list li {
  padding: 14px 20px;
  background: #f7f9fb;
  border-left: 4px solid #0f3350;
  border-radius: 0 8px 8px 0;
  margin-bottom: 12px;
  font-size: 1.05rem;
  color: #333;
  line-height: 1.5;
}

.role-list li strong {
  color: #0f3350;
}

.analyst-col {
  background: #fff8e6 !important;
  font-weight: 600;
}

.semester-block {
  margin-bottom: 24px;
  padding: 20px 24px;
  background: #f7f9fb;
  border-radius: 10px;
  border-left: 4px solid #ffc333;
}

.semester-block h4 {
  color: #0f3350;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 10px;
}

.semester-block p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
}

.year-heading {
  color: #0f3350;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 32px 0 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(15,51,80,0.1);
}

.year-heading:first-of-type {
  margin-top: 0;
}
.subject-skill-cell {
  color: #0f3350;
  font-weight: 600;
}

.reason-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.reason-list li {
  position: relative;
  padding: 12px 20px 12px 30px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 10px;
}

.reason-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #1a9c4a;
  font-weight: 800;
}

.brochure-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 16px 32px;
  background: #ffc333;
  color: #0f3350;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.brochure-btn:hover {
  background: #ffb310;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 179, 16, 0.3);
}

.final-cta-panel {
  text-align: center;
  background: linear-gradient(135deg, #0f3350, #1a4d7a);
  color: #fff;
}

.final-cta-panel h2 {
  color: #fff;
}

.final-cta-panel p {
  color: #d9e6f2;
}

      `}</style>

      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background:
            "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
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
            className="mb-3"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "30px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            MBA in Pharma & Healthcare   <span className="text-warning">Management</span>
          </span>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Courses •{" "}
            <span className="text-warning">MBA in Pharma & Healthcare Management</span>
          </p>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className="panel">
            <h1>MBA in Pharma & Healthcare Management in Pune – Build Careers in Pharmaceuticals, Hospitals & Healthcare</h1>

            <ul className="gap-list">
              <li>AICTE Approved</li>
              <li>SPPU Affiliated</li>
              <li>DTE & AIMS Recognised</li>
              <li>Sector-Specific Curriculum</li>
              <li>Pune–PCMC Industry Network</li>
              <li>Dedicated Placement Cell</li>
            </ul>

            <p className="intro-text">
              ISMR's programme combines a rigorous, sector-specific curriculum with live industry exposure, preparing graduates for leadership roles across the pharma, hospital, and healthcare sectors.
            </p>

            <p className="intro-text">
              For students evaluating an MBA in Pharma & Healthcare Management, ISMR offers end-to-end admissions support so that paperwork and deadlines never stand between you and your next step.
            </p>

            <a href="/Contactus" className="default-btn">
              Get in touch today for personalized counseling →
            </a>
          </div>

          <div className="panel mt-4">
            <h2>Cost & Programme Breakdown</h2>

            <p className="intro-text">
              We will walk you through the complete cost, payment schedule, and what you get at every stage of the programme.
            </p>

            <a href="/Contactus" className="default-btn">
              Get the Full Cost Breakdown →
            </a>
          </div>
        </div>
      </section>



      <section className="marketing-section">
        <div className="content-container">

          {/* Understanding the Programme Panel */}
          <div className="panel">
            <h2>Understanding the MBA in Pharma & Healthcare Management Programme</h2>

            <p className="intro-text">
              This two-year, full-time programme, structured across four semesters, is built for graduates who want to lead at the intersection of science and business.
            </p>

            <p className="intro-text">
              Learning goes beyond the classroom through industry case studies, GMP and NABH regulatory simulations, pharma plant visits, and hospital immersions.
            </p>

            <p className="intro-text">
              On the business side, students develop capabilities in marketing strategy, operations management, supply chain planning, health economics, and financial decision-making skills that translate directly into management roles across any healthcare organisation.
            </p>

            <p className="intro-text">
              On the pharma and healthcare side, the curriculum builds domain expertise that generalist MBAs do not cover: GMP and WHO-GMP compliance, CDSCO and USFDA regulatory frameworks, NABH accreditation standards, pharmacovigilance protocols, ICH-GCP clinical research guidelines, and market access strategy.
            </p>

            <p className="intro-text">
              Graduates enter the workforce understanding QA/QC systems, pharmacoeconomics, and medical affairs — areas where employers consistently face a shortage of qualified managers.
            </p>
          </div>

          {/* Programme Snapshot Panel */}
          <div className="panel mt-4">
            <h2>Programme Snapshot</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Detail</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration</td>
                    <td>2 Years / 4 Semesters</td>
                  </tr>
                  <tr>
                    <td>Mode</td>
                    <td>Full-Time</td>
                  </tr>
                  <tr>
                    <td>Affiliation</td>
                    <td>Savitribai Phule Pune University (SPPU)</td>
                  </tr>
                  <tr>
                    <td>Approvals</td>
                    <td>AICTE, DTE, AIMS</td>
                  </tr>
                  <tr>
                    <td>Entrance Accepted</td>
                    <td>MAH-MBA CET / CAT / CMAT</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text mt-4">
              Graduates from any discipline are eligible — including final-year students applying provisionally.
            </p>

            <p className="intro-text">
              SC/ST candidates are eligible as per SPPU and DTE reserved category norms. A valid MAH-MBA CET, CAT, or CMAT score is required alongside the graduation certificate, entrance scorecard, identity proof, and category certificate if applicable.
            </p>
          </div>

          {/* Key Subjects Panel */}
          <div className="panel mt-4">
            <h2>Key Subjects</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Subject Area</th>
                    <th>Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pharmaceutical Marketing Management</td>
                    <td>Product strategy, brand management, MR operations</td>
                  </tr>
                  <tr>
                    <td>Hospital Administration</td>
                    <td>Hospital systems, patient flow, resource planning</td>
                  </tr>
                  <tr>
                    <td>Drug Regulatory Affairs</td>
                    <td>CDSCO compliance, dossier preparation, licensing</td>
                  </tr>
                  <tr>
                    <td>Healthcare Operations & Quality Management</td>
                    <td>NABH standards, process efficiency, and audits</td>
                  </tr>
                  <tr>
                    <td>Clinical Research Management</td>
                    <td>Trial design, ICH-GCP guidelines, ethics</td>
                  </tr>
                  <tr>
                    <td>Pharmacovigilance</td>
                    <td>Adverse event reporting, drug safety monitoring</td>
                  </tr>
                  <tr>
                    <td>Health Economics</td>
                    <td>Pricing models, insurance, health policy</td>
                  </tr>
                  <tr>
                    <td>Supply Chain in Pharma</td>
                    <td>Cold chain, distribution, vendor management</td>
                  </tr>
                  <tr>
                    <td>Medical Devices Management</td>
                    <td>Regulatory framework, market access</td>
                  </tr>
                  <tr>
                    <td>ERP in Healthcare</td>
                    <td>SAP/Oracle applications in hospital and pharma settings</td>
                  </tr>
                  <tr>
                    <td>Biostatistics</td>
                    <td>Data interpretation, clinical trial analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Skills Panel */}
          <div className="panel">
            <h2>Skills You Will Develop</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Technical & Domain Skills:
            </p>
            <p className="intro-text">
              Regulatory documentation and dossier preparation, pharmaceutical sales planning, market access strategy, clinical trial coordination, healthcare analytics, hospital operations management, GMP and NABH compliance, pharmacovigilance reporting, and EHR system navigation.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Managerial & Leadership Skills:
            </p>
            <p className="intro-text">
              Strategic planning, cross-functional team leadership, business communication, vendor and stakeholder negotiation, financial analysis, and project management within regulated healthcare environments.
            </p>

            <p className="intro-text">
              Students pursuing an MBA in Pharmaceutical Management at ISMR in Pune benefit from a structured curriculum that builds expertise for careers in pharmaceutical companies, hospital networks, CROs, and regulatory organisations.
            </p>

            <p className="intro-text">
              It's backed by an MBA in Pharma & Healthcare Management degree awarded under Savitribai Phule Pune University (SPPU) affiliation, recognised across the sector.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Focus Area</th>
                    <th>Key Subjects Covered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Semester I</td>
                    <td>Management Foundations</td>
                    <td>Managerial Accounting, Organisational Behaviour, Business Analytics, Marketing Management Fundamentals, Economic Analysis, Decision Science, Management Fundamentals</td>
                  </tr>
                  <tr>
                    <td>Semester II</td>
                    <td>Business Management & Research</td>
                    <td>Marketing Management, Financial Management, Human Resource Management, Operations & Supply Chain Management, Legal Aspects of Business, Business Research Methods</td>
                  </tr>
                  <tr>
                    <td>Semester III</td>
                    <td>Pharma & Healthcare Specialisation</td>
                    <td>Fundamentals of Pharma & Healthcare Management, Pharmaceutical Marketing Management, Healthcare Management, Pharmaceutical Supply Chain Management, Pharmaceutical Production Management, Health Insurance</td>
                  </tr>
                  <tr>
                    <td>Semester IV</td>
                    <td>Advanced Pharma & Regulatory Management</td>
                    <td>Regulatory Laws in the Indian Pharmaceutical & Healthcare Industry, Regulatory Affairs, Clinical Data Management, International Pharma Marketing, Medical Devices & Diagnostics Marketing, Quality Assurance & Quality Control, Healthcare Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* General MBA Comparison Panel */}
          <div className="panel mt-4">
            <h2>Why Choose an MBA in Pharma & Healthcare Management Over a General MBA</h2>

            <p className="intro-text">
              Students often compare this specialisation against MBA Marketing, MBA HR, or MBA Finance before deciding. The difference is not just subject matter — it is career positioning.
            </p>

            <p className="intro-text">
              A general MBA prepares you to manage any business.
            </p>

            <p className="intro-text">
              An MBA in Pharma & Healthcare Management prepares you to manage in one of India's most regulated, fastest-growing, and talent-short industries — with domain knowledge that generalist managers cannot replicate without years of sector experience.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>General MBA</th>
                    <th>MBA in Pharma & Healthcare Management</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Domain Credibility</td>
                    <td>Broad, sector-neutral management education applicable across industries</td>
                    <td className="highlight-cell">Industry-specific expertise focused on pharmaceuticals, hospitals, healthcare organisations, and CROs</td>
                  </tr>
                  <tr>
                    <td>Regulatory Knowledge</td>
                    <td>Limited exposure to industry-specific regulations</td>
                    <td className="highlight-cell">Covers GMP, NABH, CDSCO, ICH-GCP, and pharmaceutical regulatory frameworks</td>
                  </tr>
                  <tr>
                    <td>Hiring Industries</td>
                    <td>Opportunities across multiple sectors</td>
                    <td className="highlight-cell">Career opportunities in pharma MNCs, hospital chains, CROs, biotechnology, medical devices, and health-tech companies</td>
                  </tr>
                  <tr>
                    <td>Industry Focus</td>
                    <td>General business management across various domains</td>
                    <td className="highlight-cell">Specialised curriculum aligned with pharmaceutical and healthcare business operations</td>
                  </tr>
                  <tr>
                    <td>Location Advantage in Pune</td>
                    <td>General corporate opportunities</td>
                    <td className="highlight-cell">Direct exposure to Pune–PCMC's pharmaceutical manufacturing, healthcare, and life sciences ecosystem</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>



      <section className="marketing-section">
        <div className="content-container">

          {/* Who Should Pursue Panel */}
          <div className="panel">
            <h2>Who Should Pursue This Course</h2>

            <p className="intro-text">
              Students exploring this specialisation often come from diverse academic and professional backgrounds, but share one common goal: building a long-term career in the pharmaceutical and healthcare industry through management expertise and industry exposure.
            </p>

            <p className="intro-text">
              This specialization is designed for students and professionals who want to grow within the pharmaceutical and healthcare sector while developing strong leadership, operational, and strategic management capabilities.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Science, Pharmacy & Allied Healthcare Graduates:
            </p>
            <p className="intro-text">
              Students from B.Pharm, B.Sc., BAMS, BDS, BHMS, Biotechnology, and allied healthcare backgrounds often experience limited career progression in purely clinical or laboratory-based roles. This curriculum helps them transition into career opportunities in pharma marketing, regulatory affairs, pharmacovigilance, clinical research, and healthcare operations while continuing to build upon their scientific foundation.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Working Professionals in Pharma or Hospital Settings:
            </p>
            <p className="intro-text">
              Medical representatives, clinical coordinators, QA executives, and hospital professionals with practical sector experience can use this MBA to move into higher managerial responsibilities. ISMR helps working professionals strengthen business decision-making, operational understanding, and strategic management capabilities that field experience alone may not fully develop.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Commerce and Management Graduates Interested in Healthcare:
            </p>
            <p className="intro-text">
              BCom and BBA graduates who understand business fundamentals but want to enter the rapidly growing pharmaceutical and healthcare sector gain valuable domain-specific exposure through this programme. The curriculum introduces students to pharmaceutical operations, healthcare systems, compliance structures, and regulated healthcare environments.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Aspiring Hospital Administrators and Healthcare Managers:
            </p>
            <p className="intro-text">
              For students considering a Hospital and Healthcare Management MBA, this programme provides practical exposure to hospital administration, healthcare operations, patient service management, and healthcare quality systems within medical and pharmaceutical environments. This track develops practical skills in patient care workflows, facility logistics, resource allocation, and healthcare quality compliance standards such as NABH.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Entrepreneurs and Family Business Members in Healthcare:
            </p>
            <p className="intro-text">
              Individuals involved in pharmaceutical distribution, diagnostic centres, healthcare services, medical retail, or family-run healthcare businesses can use this MBA to professionalise operations. The programme delivers practical methods to strengthen compliance systems, optimise inventory logistics, and modernise established healthcare businesses through stronger managerial systems and industry-focused knowledge.
            </p>
          </div>

          {/* Benefits Panel */}
          <div className="panel mt-4">
            <h2>Benefits of Pursuing This MBA Specialisation</h2>

            <p className="intro-text">
              India is one of the largest pharmaceutical producers and home to one of the fastest-growing healthcare markets globally.
            </p>

            <p className="intro-text">
              Students evaluating an MBA in Pharma & Healthcare Management are entering a sector where structured managerial talent is consistently in short supply, making this specialisation one of the more reliable career investments available today.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Sector Scale & Hiring Demand:
            </p>
            <p className="intro-text">
              India's pharma and healthcare sectors collectively employ millions and continue to expand through domestic consumption growth, medical tourism, and export-led manufacturing. Graduates from this specialisation enter a hiring market where domain-qualified managers are actively sought by pharma MNCs, hospital chains, and CROs across India and internationally.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Fees vs. Salary Outcomes:
            </p>
            <p className="intro-text">
              Choosing a Pharma MBA in Pune involves evaluating factors such as programme fees, placement outcomes, and long-term return on investment. MBA in Pharma & Healthcare Management Pune Fees are structured to remain accessible. ISMR has recorded a placement rate of 85% for this specialisation, with fresh graduates entering pharma marketing, regulatory affairs, or hospital administration commonly starting between ₹3–5 LPA, while those placed with leading pharmaceutical companies or hospital groups may receive offers in the ₹5–7 LPA range.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Domain Credibility:
            </p>
            <p className="intro-text">
              Knowledge of pharmacovigilance protocols, NABH accreditation standards, GMP compliance, and regulatory dossier preparation sets pharma MBA graduates apart from generalist managers. Employers across clinical research organisations, hospital chains, and drug manufacturers specifically seek candidates who can operate without a domain learning curve.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Cross-Sector Mobility:
            </p>
            <p className="intro-text">
              This degree opens doors across pharma MNCs, multi-specialty hospital chains, contract research organisations, health-tech startups, and insurance and TPA companies. Few MBA specialisations offer this breadth of industry options within a single sector ecosystem.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Regulatory & Digital Health Exposure:
            </p>
            <p className="intro-text">
              Subjects covering Drug Regulatory Affairs, ERP in Healthcare, and healthcare operations prepare graduates for roles that are increasingly shaped by EHR systems, telemedicine platforms, and AI-assisted diagnostics. These are not future skills; they are current hiring requirements at progressive healthcare organisations.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Strategic Location Advantage:
            </p>
            <p className="intro-text">
              Pune and the PCMC industrial belt host pharmaceutical manufacturing clusters, corporate hospitals, and biotech firms that form part of ISMR's live industry network. Students benefit from proximity to real corporate environments for guest lectures, plant visits, live projects, and placement connections.
            </p>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Why Pursue Panel */}
          <div className="panel">
            <h2>Why Pursue an MBA in Pharma & Healthcare Management in Pune</h2>

            <p className="intro-text">
              Pune and the PCMC industrial belt are home to one of India's most concentrated pharma and healthcare ecosystems — and that concentration directly benefits students in this programme.
            </p>

            <p className="intro-text">
              The Pune–Chakan–PCMC corridor hosts manufacturing facilities and corporate offices of major Indian and multinational pharma companies, creating internship pipelines and live project opportunities that institutions in non-industrial cities cannot replicate.
            </p>

            <p className="intro-text">
              Pune's multi-specialty hospital chains, diagnostic networks, and CROs form part of ISMR's industry connect, giving students direct access to real operational environments during the programme.
            </p>

            <p className="intro-text">
              Graduates build their professional network in a city where the hiring market for pharma and healthcare managers is consistently active across every major vertical.
            </p>
          </div>

          {/* Admission Process Panel */}
          <div className="panel mt-4">
            <h2>ISMR Admission Process</h2>

            <p className="intro-text">
              Students seeking admission to the MBA in Pharma & Healthcare Management at ISMR for the 2026 batch will find the enrollment process straightforward and supported by dedicated admission counsellors.
            </p>

            <h3 className="sub-heading">Step 1 — Apply Online</h3>
            <p className="intro-text">
              Applications are submitted through ISMR's online portal with a non-refundable application fee of ₹1,100/-. The process is designed to be completed quickly, and the portal remains open across admission cycles. Students are advised to apply early, given limited seat availability.
            </p>

            <h3 className="sub-heading">Step 2 — Counselling and Telephonic Interview</h3>
            <p className="intro-text">
              Following application review, shortlisted candidates are contacted for a telephonic counselling session. This is not a stress interview; it is a structured conversation to understand the student's academic background, sector interest, and career goals, and to confirm that the programme is the right fit before a seat is offered.
            </p>

            <h3 className="sub-heading">Step 3 — Seat Confirmation</h3>
            <p className="intro-text">
              Selected candidates receive an official offer letter within 4 working days. A seat retention fee of ₹30,000/- is required to confirm the seat, after which the admission is held securely until the next documentation stage.
            </p>

            <h3 className="sub-heading">Step 4 — Provisional Admission</h3>
            <p className="intro-text">
              Once the seat is confirmed, students are guided through documentation requirements including academic marksheets, entrance score certificates, identity proof, and SPPU eligibility verification. ISMR's admissions team provides a complete checklist and assists with any document-related queries to ensure a smooth transition to provisional enrollment.
            </p>
          </div>

          {/* Career Opportunities Panel */}
          <div className="panel mt-4">
            <h2>Career Opportunities After This MBA</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Industry</th>
                    <th>Core Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pharmaceutical Brand Manager</td>
                    <td>Pharma MNCs, Generic Companies</td>
                    <td>Product marketing strategy, medical affairs coordination, sales force enablement</td>
                  </tr>
                  <tr>
                    <td>Hospital Administrator / Operations Manager</td>
                    <td>Corporate & Multi-Specialty Hospitals</td>
                    <td>Patient flow management, NABH compliance, resource and vendor oversight</td>
                  </tr>
                  <tr>
                    <td>Regulatory Affairs Manager</td>
                    <td>Pharma, Biotech, Medical Devices</td>
                    <td>CDSCO dossier submissions, product licensing, pharmacovigilance reporting</td>
                  </tr>
                  <tr>
                    <td>Clinical Research Coordinator / Manager</td>
                    <td>CROs, Hospitals, Pharma R&D</td>
                    <td>Trial site management, ICH-GCP compliance, patient recruitment, data oversight</td>
                  </tr>
                  <tr>
                    <td>Healthcare Consultant</td>
                    <td>Consulting Firms, Health-Tech</td>
                    <td>Operational efficiency, accreditation advisory, market entry strategy</td>
                  </tr>
                  <tr>
                    <td>Medical Sales & Key Account Manager</td>
                    <td>Pharma, Medical Devices</td>
                    <td>Institutional account planning, tender management, clinical stakeholder selling</td>
                  </tr>
                  <tr>
                    <td>Health Insurance & TPA Manager</td>
                    <td>Insurance Companies, TPAs</td>
                    <td>Claims processing, provider network management, policy compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text mt-4">
              Graduates are hired across pharma MNCs, corporate hospital chains, CROs, diagnostic networks, health-tech startups, medical device firms, insurance companies, and public health agencies.
            </p>

            <p className="sector-note">
              Recruiting Partners: Sun Pharmaceutical Industries, Cipla, Dr. Reddy's Laboratories, Lupin, Glenmark Pharmaceuticals, Alkem Laboratories, Torrent Pharmaceuticals, Zydus Lifesciences, Abbott India, Pfizer India, Sanofi India, Novartis India, GSK Pharmaceuticals, Mankind Pharma, and Biocon.
            </p>
          </div>

        </div>
      </section>
      <section className="marketing-section">
        <div className="content-container">

          {/* Career Progression Panel */}
          <div className="panel">
            <h3 className="sub-heading">Career Progression After an MBA in Pharma & Healthcare Management</h3>

            <p className="intro-text">
              Graduates typically begin their careers in entry-level management or specialist roles and progress into senior leadership positions based on their experience, performance, and industry exposure.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Career Path</th>
                    <th>Typical Progression</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pharma Sales & Marketing</td>
                    <td>Medical Representative → Area Sales Manager → Regional Manager → Business Unit Head → Marketing Director</td>
                  </tr>
                  <tr>
                    <td>Regulatory Affairs</td>
                    <td>Regulatory Affairs Executive → Senior Executive → Regulatory Affairs Manager → Head of Regulatory Affairs → Director – Regulatory & Medical Affairs</td>
                  </tr>
                  <tr>
                    <td>Hospital Administration</td>
                    <td>Administrative Executive → Department Coordinator → Operations Manager → General Manager – Operations → Chief Operating Officer (COO)</td>
                  </tr>
                  <tr>
                    <td>Clinical Research</td>
                    <td>Clinical Research Coordinator → Senior Clinical Research Coordinator (CRC) → Clinical Research Manager → Project Director → Vice President – Clinical Operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text mt-4" style={{ fontStyle: "italic" }}>
              Note: Career progression varies depending on the organisation, individual performance, experience, and the specific pharmaceutical or healthcare sector. Structured career growth opportunities are commonly available in pharmaceutical companies, corporate hospitals, CROs, and healthcare organisations.
            </p>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Why Choose ISMR Panel */}
          <div className="panel">
            <h2>Why Students Choose ISMR</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              AICTE-Approved & SPPU-Affiliated:
            </p>
            <p className="intro-text">
              ISMR's MBA in Pharma & Healthcare Management SPPU-affiliated degree carries full national academic validity. AICTE approval and SPPU affiliation ensure the qualification is recognised by employers, government bodies, and higher education institutions across India.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Healthcare-Specialized Curriculum:
            </p>
            <p className="intro-text">
              The programme is built around sector-specific subjects: pharmacovigilance, NABH quality standards, GMP compliance, clinical research management, and drug regulatory affairs. This is not a general MBA with a pharma elective; the entire curriculum is designed around healthcare industry realities.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Dedicated Placement & Corporate Relations:
            </p>
            <p className="intro-text">
              ISMR maintains targeted placement connects with pharma companies, hospital chains, CROs, and health-tech firms — not a generic placement cell. Students benefit from sector-specific recruitment drives, industry mentors, and role-aligned placement preparation.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Dual-Expertise Faculty:
            </p>
            <p className="intro-text">
              Faculty at ISMR combine academic qualifications with active corporate backgrounds in pharma marketing, hospital administration, regulatory affairs, and clinical research. This means students receive both theoretical frameworks and practical industry perspectives in every classroom session.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Pune & PCMC Geographic Advantage:
            </p>
            <p className="intro-text">
              The institute's location within the Pune-PCMC pharma and healthcare belt gives students direct access to manufacturing plants, corporate hospitals, and biotech companies for live projects, site visits, and internship connections — advantages that institutions in non-industrial cities cannot replicate.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Fee Transparency & Honest Counselling:
            </p>
            <p className="intro-text">
              ISMR provides a complete fee breakdown upfront with no hidden charges or shifting admission criteria. Counselling sessions are designed to give students an honest assessment of fit, not just to convert inquiries into admissions.
            </p>
          </div>

          {/* Final CTA Panel */}
          <div className="panel final-cta-panel mt-4">
            <h2>Take the Next Step — MBA Pharma & Healthcare Management Admission 2026 at ISMR Pune</h2>

            <p className="intro-text" style={{ color: "white" }}>
              Admissions are open for ISMR's 2026 batch of the MBA in Pharma & Healthcare Management, offered in Pune.
            </p>

            <p className="intro-text" style={{ color: "white" }}>
              Book a campus visit or schedule a virtual walkthrough — speak directly with faculty, current students, and our placement team so you can make an informed decision without any pressure.
            </p>

            <a href="/Contactus" className="default-btn">
              Book a Campus Visit →
            </a>
          </div>

          {/* FAQ Panel */}
          <div className="panel">
            <h2>Frequently Asked Questions (FAQs)</h2>

            <div className="accordion">
              {pharmaFaqs.map((item, index) => (
                <div className="acc-item" key={index}>
                  <button
                    className="acc-btn"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="acc-q">{item.q}</span>
                    <svg
                      className="chev"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{
                        transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#0f3350"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className={`acc-body doc-list ${openFaq === index ? "" : "closed"}`}>
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Faq />
    </section>
  );
}
