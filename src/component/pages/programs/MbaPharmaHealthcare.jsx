import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../forms/ContactForm";
import Howtoaplydownoadform from "../../forms/HowToApplyDownloadForm";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../forms/ISMRFormModal";
import britaniaLogo from "../../../assets/Homeimg/britania.png";
import aisheLogo from "../../../assets/Homeimg/AISE.png";
import allstateLogo from "../../../assets/Homeimg/allstate.png";
import amdocsLogo from "../../../assets/Homeimg/Comp6.png";
import atosLogo from "../../../assets/Homeimg/atos.png";
import bajajLogo from "../../../assets/Homeimg/Bajaj-Finserv-Logo.jpg";
import cognizantLogo from "../../../assets/Homeimg/Cognizant-Logo.png";
import learningRoutesLogo from "../../../assets/Homeimg/Comp1.png";
import SEO from "../../SEO";

export default function MBAPharmaCollegesInPune() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const [openIndex, setOpenIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", examScore: "", state: "", city: ""
  });

  const faqs = [
    {
      q: "What is an MBA in Pharma and Healthcare Management?",
      a: "It is a two-year postgraduate management programme designed to train graduates for leadership roles across the pharmaceutical, hospital, and healthcare sectors. The curriculum combines core management subjects with sector specific disciplines such as regulatory affairs, pharmacovigilance, clinical research, and hospital operations."
    },
    {
      q: "What is the eligibility for an MBA in Pharma & Healthcare Management?",
      a: "Graduates from any stream — B.Pharm, B.Sc., BAMS, BDS, BHMS, BCom, BBA, and others with a minimum of 50% marks are eligible to apply. A valid MAH-MBA CET, CAT, or CMAT score is also required for admission. "
    },
    {
      q: "What is the duration of the MBA in Pharma & Healthcare Management at ISMR?",
      a: "The programme is two years full-time, structured across four semesters. Each semester progressively builds on management fundamentals, sector specialisation, and live industry exposure."
    },
    {
      q: "Is an MBA in Pharmaceutical Healthcare Management suitable for working professionals? ",
      a: "Yes — ISMR actively admits working professionals from hospital administration, pharma sales, QA, and clinical coordination backgrounds. The programme is structured to build on existing sector experience and fast-track candidates into senior managerial roles. "
    },
    {
      q: "Is ISMR AICTE-approved and SPPU-affiliated for MBA Pharma programmes? ",
      a: "Yes. ISMR holds AICTE approval along with DTE and AIMS recognition and is affiliated with Savitribai Phule Pune University. The degree carries full national academic and professional validity. "
    },
    {
      q: "What is the scope of MBA Pharma and Healthcare Management in Pune?",
      a: "Graduates can pursue roles across pharmaceutical companies, corporate hospitals, CROs, diagnostic networks, health-tech startups, medical device firms, and insurance organisations. Pune's pharma and healthcare industry concentration further strengthens local placement and networking opportunities. ",

    },
    {
      q: "What salary can I expect after an MBA in Pharma & Healthcare Management?",
      a: "Fresh graduates entering pharma marketing, regulatory affairs, or hospital administration commonly start between ₹3–5 LPA, while those placed with leading pharmaceutical companies or hospital groups may receive offers in the ₹5–7 LPA range. Salaries scale with experience, specialisation, and the type of organisation — pharma MNCs and corporate hospital chains generally offer stronger early-career growth. ",

    },
    {
      q: "What are the fees for MBA Pharma Healthcare Management at ISMR Pune?",
      a: "MBA Pharma Healthcare Management Pune Fees at ISMR are structured to be accessible and are communicated transparently at the time of counselling with no hidden charges. Contact the admissions team directly or request a brochure for the complete and current fee breakdown.  ",

    },
    {
      q: " Is an MBA in Pharma & Healthcare Management worth it? ",
      a: "For science, pharmacy, or allied health graduates, this MBA provides the management layer that clinical roles alone cannot offer. Combined with Pune's pharma and healthcare industry presence, it is one of the stronger sector-specific career investments available to science graduates in Maharashtra. ",

    },
    {
      q: "  Can B.Sc. and B.Pharm students apply? ",
      a: "Yes. B.Sc. and B.Pharm graduates are among the most common applicants for this specialisation and benefit directly from the regulatory, pharmacovigilance, and clinical research modules in the curriculum. ",

    },
    {
      q: "  Is an MBA in Pharma & Healthcare Management better than M.Pharm?",
      a: "They serve different career directions. M.Pharm develops advanced pharmaceutical science expertise suited to research and academic roles. An MBA in Pharma & Healthcare Management develops management capabilities suited to leadership roles in pharma companies, hospital administration, and regulatory affairs. The MBA is the stronger route for students whose goal is a management career rather than a research one.  ",

    },
    {
      q: "  Is mathematics compulsory for this MBA?",
      a: "No. Subjects like Biostatistics and Health Economics are taught with a management and interpretation focus, not advanced quantitative methods.  ",

    },
    {
      q: "What is the scope of an MBA in Pharma & Healthcare Management?",
      a: "Graduates can build careers across pharmaceutical manufacturing, hospital administration, regulatory affairs, clinical research, medical devices, health insurance, and health-tech — domestically and in international regulated markets. Pune's industry concentration strengthens both local placement and long-term networking opportunities.",

    },
  ];

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // wire this up to your actual submit endpoint
  };

  return (
    <section className="apply-wrapper">
      <SEO
        title="MBA in Pharma & Healthcare Management in Pune | ISMR"
        description="Pursue MBA in Pharma and Healthcare Management in Pune at ISMR. Specialised industry curriculum, clinical & regulatory exposure, 100% placement."
        canonical="https://ismrpune.edu.in/programs/mba-in-pharma-healthcare-management-in-pune"
      />
      <style>{`

.content-container p{
font-size:14px;
}

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
          margin: 0 0 5px;
          font-size: 15px;
          font-weight: 700;
          color: #0f3350;
          line-height: 1.2;
        }
          .panel h1 {
          margin: 0 0 20px;
          font-size: 20px;
          font-weight: 700;
          color: #0f3350;
          line-height: 1.2;
        }
        
        .panel p {
          font-size: 14px;
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
          font-size:14px;
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
          margin: 0px 0;
          padding-left: 24px;
        }
        
        .panel li {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #444;
          margin-bottom:0px;
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
            font-size: 15px;
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
  font-size: 14px;
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
  font-size: 13px;
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
  font-size: 13px;
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
    h1{
      font-size: 20px;
    font-weight: 700;
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
            className="mb-2 d-block"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
            }}
          >
            MBA in Pharma & Healthcare  <span className="text-warning">Management</span>
          </span>

          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap mt-2">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/programs/mba-in-business-analytics-pune");
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              • <span className="text-warning">MBA in Pharma & Healthcare  Management</span>
            </p>
          </div>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className=" hero-panel">
            <span className="eyebrow">ISMR PUNE · MBA PHARMA &amp; HEALTHCARE MANAGEMENT</span>
            <h1>Build a Career in Pharma &amp; Healthcare Management with Real Placement Outcomes</h1>

            <div className="two-col-layout">
              <div className="overview-col mt-4">
                <h2>What is the MBA Pharma &amp; Healthcare Management Course in Pune?</h2>

                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    AICTE Approved
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    SPPU Affiliated
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    DTE &amp; AIMS Recognised
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Sector-Specific Curriculum
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Pune–PCMC Industry Network
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Dedicated Placement Cell
                  </li>
                </ul>

                <p className="intro-text">
                  ISMR's programme combines a rigorous, sector-specific
                  curriculum with live industry exposure, preparing
                  graduates for leadership roles across the pharma,
                  hospital, and healthcare sectors.
                </p>
                <p className="intro-text">
                  For students evaluating an MBA in Pharma &amp; Healthcare
                  Management, ISMR offers end-to-end admissions support so
                  that paperwork and deadlines never stand between you and
                  your next step.
                </p>
                <p className="intro-text">
                  We will walk you through the complete cost, payment
                  schedule, and what you get at every stage of the
                  programme.
                </p>
                <p className="intro-text">
                  ISMR's MBA in Pharma &amp; Healthcare Management is an
                  SPPU-affiliated degree that carries full national academic
                  validity. AICTE approval and SPPU affiliation ensure the
                  qualification is recognised by employers, government
                  bodies, and higher education institutions across India.
                </p>
                <p className="intro-text">
                  ISMR provides a complete fee breakdown upfront with no
                  hidden charges or shifting admission criteria. Counselling
                  sessions are designed to give students an honest
                  assessment of fit, not just to convert inquiries into
                  admissions.
                </p>
              </div>

              <div className="facts-col">
                <div className="facts-card">
                  <div className="facts-header">
                    <span className="facts-header-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3L2 8l10 5 8-4.2V15h1.5V8L12 3z" fill="currentColor" />
                        <path d="M6 11.5V16c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5l-6 3-6-3z" fill="currentColor" opacity="0.75" />
                      </svg>
                    </span>
                    <div>
                      <h2 className="facts-title text-white">Quick Facts</h2>
                      <span className="facts-subtitle">MBA in Pharma &amp; Healthcare Management, ISMR Pune</span>
                    </div>
                  </div>

                  <ul className="facts-list">
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Duration</span>
                      <span className="facts-value">2 Years / 4 Semesters</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      </span>
                      <span className="facts-label">Mode</span>
                      <span className="facts-value">Full-Time</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M6 10v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Affiliation</span>
                      <span className="facts-value">Savitribai Phule Pune University (SPPU)</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Approvals</span>
                      <span className="facts-value">AICTE</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Entrance Accepted</span>
                      <span className="facts-value">MAH-MBA CET / CAT / CMAT / ATMA / XAT / MAT</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      </span>
                      <span className="facts-label">Recognitions</span>
                      <span className="facts-value">DTE &amp; AIMS Recognised</span>
                    </li>
                  </ul>
                </div>
                {/* <div className="cta-row">
                  <a className="default-btn" href="#apply">Apply Now 2026</a>
                  <a className="default-btn" href="#fees">Get a Complete Cost Breakdown</a>
                </div> */}
              </div>
            </div>
          </div>


          <style jsx>{`
                .vm-panel {
                    padding: 2.5rem 2.5rem 2.75rem;
                }

                .vm-panel .eyebrow {
                    display: inline-block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: #c9922b;
                    margin-bottom: 0.5rem;
                }

                .vm-panel h2 {
                    margin: 0 0 1.75rem;
                    color: #0f3350;
                    font-size: 15px;
                }

                .vm-grid {
                    display: grid;
                    grid-template-columns: 1fr 40px 1fr;
                    align-items: stretch;
                    gap: 0;
                }

                .vm-card {
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                    padding: 1.75rem 1.85rem;
                    border-radius: 14px;
                    border: 1px solid #e3e9ef;
                    background: #ffffff;
                    box-shadow: 0 10px 26px rgba(15, 51, 80, 0.06);
                    position: relative;
                    overflow: hidden;
                }

                .vm-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                }

                .vm-card--vision::before {
                    background: linear-gradient(90deg, #0f3350, #1d5a8a);
                }

                .vm-card--mission::before {
                    background: linear-gradient(90deg, #c9922b, #f0c869);
                }

                .vm-icon {
                    width: 42px;
                    height: 42px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 9px;
                }

                .vm-card--vision .vm-icon {
                    background: #e8f0f8;
                    color: #0f3350;
                }

                .vm-card--mission .vm-icon {
                    background: #fbf0d6;
                    color: #96701a;
                }

                .vm-label {
                    font-size: 0.7rem;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .vm-card--vision .vm-label {
                    color: #1d5a8a;
                }

                .vm-card--mission .vm-label {
                    color: #96701a;
                }

                .vm-text {
                    margin: 0;
                    color: #33475b;
                    font-size: 0.98rem;
                    line-height: 1.65;
                }

                .vm-connector {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .vm-connector svg {
                    width: 100%;
                    height: 24px;
                }

                @media (max-width: 720px) {
                    .vm-grid {
                        grid-template-columns: 1fr;
                        gap: 1.25rem;
                    }

                    .vm-connector {
                        display: none;
                    }
                }
            `}</style>
        </div>
      </section>

      <style jsx>{`
                .hero-panel {
                    padding: 2.5rem 2.5rem 2.75rem;
                }

                .eyebrow {
                    display: inline-block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: #c9922b;
                    margin-bottom: 0.6rem;
                }

                .hero-panel h1 {
                    margin-top: 0;
                    margin-bottom: 1.75rem;
                    color: #0f3350;
                    line-height: 1.25;
                }

                .two-col-layout {
                    display: grid;
                    grid-template-columns: minmax(280px, 0.8fr) minmax(340px, 1.2fr);
                    gap: 2.5rem;
                    align-items: start;
                }

                .overview-col h2 {
                    font-size: 15px;
                    color: #0f3350;
                    margin: 0 0 0.9rem;
                }

                .overview-col .intro-text {
                    margin: 0;
                    color: #33475b;
                    line-height: 1.7;
                }

                /* --- Facts card --- */

                .facts-card {
                    background: #ffffff;
                    border: 1px solid #e3e9ef;
                    border-radius: 16px;
                    box-shadow: 0 12px 30px rgba(15, 51, 80, 0.08);
                    overflow: hidden;
                }

                .facts-header {
                    display: flex;
                    align-items: center;
                    gap: 0.85rem;
                    padding: 10px 10px;
                    background: linear-gradient(120deg, #0f3350 0%, #164a72 100%);
                    color: #ffffff;
                }

                .facts-header-icon {
                    width: 34px;
                    height: 34px;
                    flex: none;
                    color: #f0c869;
                }

                .facts-title {
                    margin: 0;
                    font-size: 1.1rem;
                    color: #ffffff;
                }

                .facts-subtitle {
                    display: block;
                    font-size: 0.75rem;
                    color: #cdddec;
                    margin-top: 0.15rem;
                }

                .stat-strip {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1px;
                    background: #f2c94c22;
                    border-bottom: 1px solid #eef2f6;
                }

                .stat-block {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 10px 10px;
                    background: #fffaf0;
                }

                .stat-icon {
                    width: 34px;
                    height: 34px;
                    flex: none;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 7px;
                }

                .stat-icon--gold {
                    background: #f7e6b8;
                    color: #96701a;
                }

                .stat-block > div {
                    display: flex;
                    flex-direction: column;
                }

                .stat-number {
                    font-size: 1.2rem;
                    font-weight: 800;
                    color: #0f3350;
                    line-height: 1.2;
                }

                .stat-label {
                    font-size: 0.74rem;
                    color: #6b5a20;
                }

                .facts-list {
                    list-style: none;
                    margin: 0;
                    padding: 0.5rem 1.5rem 1rem;
                }

                .facts-row {
                    display: grid;
                    grid-template-columns: 30px 34% 1fr;
                    align-items: center;
                    gap: 0.9rem;
                    padding: 3px 0;
                    border-bottom: 1px solid #eef2f6;
                }

                .facts-row:last-child {
                    border-bottom: none;
                }

                .facts-row:nth-child(even) {
                    background: #f8fafc;
                    margin: 0 -1rem;
                    padding: 0.8rem 1rem;
                }

                .facts-icon {
                    width: 30px;
                    height: 30px;
                    color: #164a72;
                    background: #eaf1f8;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6px;
                    flex: none;
                }

                .facts-label {
                    font-weight: 700;
                    color: #0f3350;
                    font-size: 0.9rem;
                }

                .facts-value {
                    color: #33475b;
                    font-size: 14px;
                    line-height: 1.5;
                    word-break: break-word;
                }

                @media (max-width: 900px) {
                    .two-col-layout {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 560px) {
                    .stat-strip {
                        grid-template-columns: 1fr;
                    }

                    .facts-row {
                        grid-template-columns: 26px 1fr;
                        grid-template-areas:
                            "icon label"
                            ". value";
                    }

                    .facts-icon {
                        grid-area: icon;
                    }

                    .facts-label {
                        grid-area: label;
                    }

                    .facts-value {
                        grid-area: value;
                    }
                }
            `}</style>


      <section className="marketing-section">
        <div className="content-container">

          {/* FAQ Panel */}
          <div className=" diff-panel">
            <span className="eyebrow">CURRICULUM &amp; CAREER OPPORTUNITIES</span>
            <h2>Curriculum &amp; Career Opportunities</h2>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title">Semester-Wise Syllabus</h3>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Semester</span>
                    <span>Focus Area</span>
                    <span>Key Subjects Covered</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Semester I</span>
                    <span className="tool-applied">Management Foundations</span>
                    <span className="tool-applied">
                      Managerial Accounting, Organisational Behaviour,
                      Business Analytics, Marketing Management Fundamentals,
                      Economic Analysis, Decision Science, Management
                      Fundamentals
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Semester II</span>
                    <span className="tool-applied">Business Management &amp; Research</span>
                    <span className="tool-applied">
                      Marketing Management, Financial Management, Human
                      Resource Management, Operations &amp; Supply Chain
                      Management, Legal Aspects of Business, Business
                      Research Methods
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Semester III</span>
                    <span className="tool-applied">Pharma &amp; Healthcare Specialisation</span>
                    <span className="tool-applied">
                      Fundamentals of Pharma &amp; Healthcare Management,
                      Pharmaceutical Marketing Management, Healthcare
                      Management, Pharmaceutical Supply Chain Management,
                      Pharmaceutical Production Management, Health Insurance
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Semester IV</span>
                    <span className="tool-applied">Advanced Pharma &amp; Regulatory Management</span>
                    <span className="tool-applied">
                      Regulatory Laws in the Indian Pharmaceutical &amp;
                      Healthcare Industry, Regulatory Affairs, Clinical Data
                      Management, International Pharma Marketing, Medical
                      Devices &amp; Diagnostics Marketing, Quality Assurance
                      &amp; Quality Control, Healthcare Analytics
                    </span>
                  </div>
                </div>

                <h3 className="diff-col-title mt-4">Key Subjects (Topic-Wise)</h3>
                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Subject Area</span>
                    <span>Focus</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Pharmaceutical Marketing Management</span>
                    <span className="tool-applied">Product strategy, brand management, MR operations</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Hospital Administration</span>
                    <span className="tool-applied">Hospital systems, patient flow, resource planning</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Drug Regulatory Affairs</span>
                    <span className="tool-applied">CDSCO compliance, dossier preparation, licensing</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Healthcare Operations &amp; Quality Management</span>
                    <span className="tool-applied">NABH standards, process efficiency, and audits</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Clinical Research Management</span>
                    <span className="tool-applied">Trial design, ICH-GCP guidelines, ethics</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Pharmacovigilance</span>
                    <span className="tool-applied">Adverse event reporting, drug safety monitoring</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Health Economics</span>
                    <span className="tool-applied">Pricing models, insurance, health policy</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Supply Chain in Pharma</span>
                    <span className="tool-applied">Cold chain, distribution, vendor management</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Medical Devices Management</span>
                    <span className="tool-applied">Regulatory framework, market access</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">ERP in Healthcare</span>
                    <span className="tool-applied">SAP/Oracle applications in hospital and pharma settings</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Biostatistics</span>
                    <span className="tool-applied">Data interpretation, clinical trial analysis</span>
                  </div>
                </div>

                <h3 className="diff-col-title mt-4">Skills You Will Develop</h3>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <strong>Technical &amp; Domain Skills:</strong> Regulatory
                    documentation and dossier preparation, pharmaceutical
                    sales planning, market access strategy, clinical trial
                    coordination, healthcare analytics, hospital operations
                    management, GMP and NABH compliance, pharmacovigilance
                    reporting, and EHR system navigation.
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <strong>Managerial &amp; Leadership Skills:</strong>
                    Strategic planning, cross-functional team leadership,
                    business communication, vendor and stakeholder
                    negotiation, financial analysis, and project management
                    within regulated healthcare environments.
                  </li>
                </ul>

                <p className="intro-text mt-4">
                  Students pursuing an MBA in Pharmaceutical Management at
                  ISMR in Pune benefit from a structured curriculum that
                  builds expertise for careers in pharmaceutical companies,
                  hospital networks, CROs, and regulatory organisations. It's
                  backed by an MBA in Pharma &amp; Healthcare Management
                  degree awarded under Savitribai Phule Pune University
                  (SPPU) affiliation, recognised across the sector.
                </p>
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title">Roles You Can Explore</h3>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Role</span>
                    <span>Industry</span>
                    <span>Core Responsibilities</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Pharmaceutical Brand Manager</span>
                    <span className="tool-applied">Pharma MNCs, Generic Companies</span>
                    <span className="tool-applied">
                      Product marketing strategy, medical affairs
                      coordination, sales force enablement
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Hospital Administrator / Operations Manager</span>
                    <span className="tool-applied">Corporate &amp; Multi-Specialty Hospitals</span>
                    <span className="tool-applied">
                      Patient flow management, NABH compliance, resource and
                      vendor oversight
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Regulatory Affairs Manager</span>
                    <span className="tool-applied">Pharma, Biotech, Medical Devices</span>
                    <span className="tool-applied">
                      CDSCO dossier submissions, product licensing,
                      pharmacovigilance reporting
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Clinical Research Coordinator / Manager</span>
                    <span className="tool-applied">CROs, Hospitals, Pharma R&amp;D</span>
                    <span className="tool-applied">
                      Trial site management, ICH-GCP compliance, patient
                      recruitment, data oversight
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Healthcare Consultant</span>
                    <span className="tool-applied">Consulting Firms, Health-Tech</span>
                    <span className="tool-applied">
                      Operational efficiency, accreditation advisory, market
                      entry strategy
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Medical Sales &amp; Key Account Manager</span>
                    <span className="tool-applied">Pharma, Medical Devices</span>
                    <span className="tool-applied">
                      Institutional account planning, tender management,
                      clinical stakeholder selling
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Health Insurance &amp; TPA Manager</span>
                    <span className="tool-applied">Insurance Companies, TPAs</span>
                    <span className="tool-applied">
                      Claims processing, provider network management, policy
                      compliance
                    </span>
                  </div>
                </div>

                <h3 className="diff-col-title mt-4">Career Progression Paths</h3>
                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Career Path</span>
                    <span>Typical Progression</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Pharma Sales &amp; Marketing</span>
                    <span className="tool-applied">
                      Medical Representative → Area Sales Manager → Regional
                      Manager → Business Unit Head → Marketing Director
                    </span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Regulatory Affairs</span>
                    <span className="tool-applied">
                      Regulatory Affairs Executive → Senior Executive →
                      Regulatory Affairs Manager → Head of Regulatory
                      Affairs → Director – Regulatory &amp; Medical Affairs
                    </span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Hospital Administration</span>
                    <span className="tool-applied">
                      Administrative Executive → Department Coordinator →
                      Operations Manager → General Manager – Operations →
                      Chief Operating Officer (COO)
                    </span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Clinical Research</span>
                    <span className="tool-applied">
                      Clinical Research Coordinator → Senior Clinical
                      Research Coordinator (CRC) → Clinical Research Manager
                      → Project Director → Vice President – Clinical
                      Operations
                    </span>
                  </div>
                </div>

                <p className="intro-text diff-closing mt-4">
                  Note: Career progression varies depending on the
                  organisation, individual performance, experience, and the
                  specific pharmaceutical or healthcare sector. Structured
                  career growth opportunities are commonly available in
                  pharmaceutical companies, corporate hospitals, CROs, and
                  healthcare organisations.
                </p>

                {/* <a href="/contact-us" className="default-btn diff-cta">
                  Apply Now →
                </a> */}
              </div>
            </div>
          </div>

          <style jsx>{`
                .diff-panel {
                    padding: 2.5rem 2.5rem 2.75rem;
                }

                .diff-panel .eyebrow {
                    display: inline-block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: #c9922b;
                    margin-bottom: 0.5rem;
                }

                .diff-panel > h2 {
                    margin: 0 0 1.75rem;
                    color: #0f3350;
                    font-size: 15px;
                }

                .diff-layout {
                    display: grid;
                    grid-template-columns: 0.9fr 1.1fr;
                    gap: 2.5rem;
                    align-items: start;
                }

                .diff-col-title {
                    color: #0f3350;
                    font-size: 16px;
                    margin: 0 0 1rem;
                    font-weight:600;
                }

                .diff-left {
                    position: sticky;
                    top: 1.5rem;
                }

                /* --- Tool table --- */

                .tool-table-wrap {
                    border: 1px solid #e3e9ef;
                    border-radius: 14px;
                    overflow: hidden;
                    box-shadow: 0 8px 22px rgba(15, 51, 80, 0.05);
                }

                .tool-row {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0.35rem;
                    padding: 0.95rem 1.25rem;
                    border-bottom: 1px solid #eef2f6;
                    background: #ffffff;
                }

                .tool-row:last-child {
                    border-bottom: none;
                }

                .tool-row:nth-child(even):not(.tool-row--head) {
                    background: #f8fafc;
                }

                .tool-row--head {
                    display: none;
                }

                .tool-name {
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                    font-weight: 700;
                    color: #0f3350;
                    font-size: 0.9rem;
                }

                .tool-icon {
                    width: 30px;
                    height: 30px;
                    flex: none;
                    color: #164a72;
                    background: #eaf1f8;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6px;
                }

                .tool-applied {
                    color: #5b6b7a;
                    font-size: 0.82rem;
                    padding-left: 2.55rem;
                }

                /* --- Gap list (the problem) --- */

                .gap-list--styled {
                    list-style: none;
                    margin: 0 0 1.5rem;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }

                .gap-list--styled li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    padding: 0.7rem 1rem;
                    background: #fdf3f2;
                    border: 1px solid #f6dbd8;
                    border-radius: 10px;
                    color: #33475b;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .gap-icon {
                    width: 22px;
                    height: 22px;
                    flex: none;
                    color: #c0392b;
                    background: #f8dedb;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                    margin-top: 0.1rem;
                }

                /* --- Method card (the solution) --- */

                .method-card {
                    background: #fbf6ea;
                    border: 1px solid #f2e6c8;
                    border-radius: 14px;
                    padding: 1.5rem 1.5rem 1.25rem;
                    margin: 0.5rem 0 1.5rem;
                }

                .method-lead {
                    margin: 0 0 1rem;
                    font-weight: 700;
                    color: #0f3350;
                    font-size: 0.98rem;
                }

                .method-list--styled {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.6rem;
                }

                .method-list--styled li {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: #5c4a12;
                    font-size: 14px;
                    line-height: 1.5;
                }

                .method-icon {
                    width: 22px;
                    height: 22px;
                    flex: none;
                    color: #96701a;
                    background: #f0dfa6;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                    margin-top: 0.1rem;
                }

                .diff-closing {
                    font-weight: 600;
                    color: #0f3350;
                    margin: 0;
                }

                .diff-cta {
                    display: inline-block;
                    margin-top: 2rem;
                }

                @media (max-width: 900px) {
                    .diff-layout {
                        grid-template-columns: 1fr;
                    }

                    .diff-left {
                        position: static;
                    }
                }
            `}</style>

          {/* Top Recruiters Panel */}
          <div className="panel diff-panel">
            <span className="eyebrow">FEES &amp; ADMISSION</span>
            <h2>Program Fees &amp; Admission Process</h2>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title">Fee Approach</h3>
                <p className="intro-text">
                  Choosing a Pharma MBA in Pune involves evaluating factors
                  such as programme fees, placement outcomes, and long-term
                  return on investment. MBA in Pharma &amp; Healthcare
                  Management Pune Fees are structured to remain accessible.
                </p>
                <p className="intro-text">
                  ISMR provides a complete fee breakdown upfront with no
                  hidden charges or shifting admission criteria. Counselling
                  sessions are designed to give students an honest
                  assessment of fit, not just to convert inquiries into
                  admissions.
                </p>

                <h3 className="diff-col-title">Eligibility</h3>
                <p className="intro-text">
                  Graduates from any discipline are eligible — including
                  final-year students applying provisionally. SC/ST
                  candidates are eligible as per SPPU and DTE reserved
                  category norms. A valid MAH-MBA CET, CAT, or CMAT score is
                  required alongside the graduation certificate, entrance
                  scorecard, identity proof, and category certificate if
                  applicable.
                </p>

                <h3 className="diff-col-title">Admission Process — Step by Step</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">1. Apply Online</span>
                      <span className="app-task">
                        Applications are submitted through ISMR's online
                        portal with a non-refundable application fee of
                        ₹1,100/-. The process is designed to be completed
                        quickly, and the portal remains open across
                        admission cycles. Students are advised to apply
                        early, given limited seat availability.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">2. Counselling &amp; Telephonic Interview</span>
                      <span className="app-task">
                        Following application review, shortlisted candidates
                        are contacted for a telephonic counselling session.
                        This is not a stress interview; it is a structured
                        conversation to understand the student's academic
                        background, sector interest, and career goals, and
                        to confirm that the programme is the right fit
                        before a seat is offered.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">3. Seat Confirmation</span>
                      <span className="app-task">
                        Selected candidates receive an official offer letter
                        within 4 working days. A seat retention fee of
                        ₹30,000/- is required to confirm the seat, after
                        which the admission is held securely until the next
                        documentation stage.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">4. Provisional Admission</span>
                      <span className="app-task">
                        Once the seat is confirmed, students are guided
                        through documentation requirements including
                        academic marksheets, entrance score certificates,
                        identity proof, and SPPU eligibility verification.
                        ISMR's admissions team provides a complete checklist
                        and assists with any document-related queries to
                        ensure a smooth transition to provisional
                        enrollment.
                      </span>
                    </div>
                  </div>
                </div>

                {/* <a href="/contact-us" className="default-btn diff-cta">
                  Apply Now →
                </a> */}
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title">Industry Collaborations &amp; Top Recruiters</h3>
                <p className="intro-text">
                  Graduates are hired across pharma MNCs, corporate hospital
                  chains, CROs, diagnostic networks, health-tech startups,
                  medical device firms, insurance companies, and public
                  health agencies.
                </p>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Sr. No.</span>
                    <span>Recruiting Partner</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">1</span>
                    <span className="tool-applied">Sun Pharmaceutical Industries</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">2</span>
                    <span className="tool-applied">Cipla</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">3</span>
                    <span className="tool-applied">Dr. Reddy's Laboratories</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">4</span>
                    <span className="tool-applied">Lupin</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">5</span>
                    <span className="tool-applied">Glenmark Pharmaceuticals</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">6</span>
                    <span className="tool-applied">Alkem Laboratories</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">7</span>
                    <span className="tool-applied">Torrent Pharmaceuticals</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">8</span>
                    <span className="tool-applied">Zydus Lifesciences</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">9</span>
                    <span className="tool-applied">Abbott India</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">10</span>
                    <span className="tool-applied">Pfizer India</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">11</span>
                    <span className="tool-applied">Sanofi India</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">12</span>
                    <span className="tool-applied">Novartis India</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">13</span>
                    <span className="tool-applied">GSK Pharmaceuticals</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">14</span>
                    <span className="tool-applied">Mankind Pharma</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">15</span>
                    <span className="tool-applied">Biocon</span>
                  </div>
                </div>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Cross-Sector Mobility</span>
                      <span className="app-task">
                        This degree opens doors across pharma MNCs,
                        multi-specialty hospital chains, contract research
                        organisations, health-tech startups, and insurance
                        and TPA companies. Few MBA specialisations offer
                        this breadth of industry options within a single
                        sector ecosystem.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Dedicated Placement &amp; Corporate Relations</span>
                      <span className="app-task">
                        ISMR maintains targeted placement connects with
                        pharma companies, hospital chains, CROs, and
                        health-tech firms — not a generic placement cell.
                        Students benefit from sector-specific recruitment
                        drives, industry mentors, and role-aligned placement
                        preparation.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel diff-panel mt-4">
            <span className="eyebrow">PLACEMENTS &amp; INDUSTRY EXPOSURE</span>
            <h2>Placements &amp; Industry Exposure</h2>

            <p className="intro-text">
              India's pharma and healthcare sectors collectively employ
              millions and continue to expand through domestic consumption
              growth, medical tourism, and export-led manufacturing.
              Pursuing this specialisation at ISMR offers distinct,
              quantifiable advantages.
            </p>

            <h3 className="diff-col-title">Key Stats</h3>
            <div className="stat-strip">
              <div className="stat-block">
                <span className="stat-icon stat-icon--gold">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M8.5 12.5l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <span className="stat-number">85%</span>
                  <span className="stat-label">
                    Placement Rate — reflects consistent recruiter demand
                    across pharma, hospital, and CRO sectors
                  </span>
                </div>
              </div>

              <div className="stat-block">
                <span className="stat-icon stat-icon--gold">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <span className="stat-number">₹3–5 LPA</span>
                  <span className="stat-label">
                    Typical Starting Package — pharma marketing, regulatory
                    affairs, hospital administration roles
                  </span>
                </div>
              </div>

              <div className="stat-block">
                <span className="stat-icon stat-icon--gold">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 7h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <span className="stat-number">₹5–7 LPA</span>
                  <span className="stat-label">
                    Premium Placements — leading pharmaceutical companies
                    and hospital groups
                  </span>
                </div>
              </div>
            </div>

            <div className="diff-layout mt-3">
              <div className="diff-left">
                <h3 className="diff-col-title">Sector Scale &amp; Hiring Demand</h3>
                <p className="intro-text">
                  India's pharma and healthcare sectors collectively employ
                  millions and continue to expand through domestic
                  consumption growth, medical tourism, and export-led
                  manufacturing. Graduates from this specialisation enter a
                  hiring market where domain-qualified managers are actively
                  sought by pharma MNCs, hospital chains, and CROs across
                  India and internationally.
                </p>

                <h3 className="diff-col-title">Exposure Highlights</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Beyond the Classroom</span>
                      <span className="app-task">
                        Learning goes beyond the classroom through industry
                        case studies, GMP and NABH regulatory simulations,
                        pharma plant visits, and hospital immersions.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Regulatory &amp; Digital Health Exposure</span>
                      <span className="app-task">
                        Subjects covering Drug Regulatory Affairs, ERP in
                        Healthcare, and healthcare operations prepare
                        graduates for roles that are increasingly shaped by
                        EHR systems, telemedicine platforms, and
                        AI-assisted diagnostics. These are not future
                        skills; they are current hiring requirements at
                        progressive healthcare organisations.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title">Who Should Pursue This Course</h3>
                <p className="intro-text">
                  Students exploring this specialisation often come from
                  diverse academic and professional backgrounds, but share
                  one common goal: building a long-term career in the
                  pharmaceutical and healthcare industry through management
                  expertise and industry exposure. This specialization is
                  designed for students and professionals who want to grow
                  within the pharmaceutical and healthcare sector while
                  developing strong leadership, operational, and strategic
                  management capabilities.
                </p>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Science, Pharmacy &amp; Allied Healthcare Graduates</span>
                      <span className="app-task">
                        Students from B.Pharm, B.Sc., BAMS, BDS, BHMS,
                        Biotechnology, and allied healthcare backgrounds
                        often experience limited career progression in
                        purely clinical or laboratory-based roles. This
                        curriculum helps them transition into career
                        opportunities in pharma marketing, regulatory
                        affairs, pharmacovigilance, clinical research, and
                        healthcare operations while continuing to build upon
                        their scientific foundation.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19h16M7 19V9M12 19V5M17 19v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Working Professionals in Pharma or Hospital Settings</span>
                      <span className="app-task">
                        Medical representatives, clinical coordinators, QA
                        executives, and hospital professionals with
                        practical sector experience can use this MBA to move
                        into higher managerial responsibilities. ISMR helps
                        working professionals strengthen business
                        decision-making, operational understanding, and
                        strategic management capabilities that field
                        experience alone may not fully develop.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Commerce and Management Graduates Interested in Healthcare</span>
                      <span className="app-task">
                        BCom and BBA graduates who understand business
                        fundamentals but want to enter the rapidly growing
                        pharmaceutical and healthcare sector gain valuable
                        domain-specific exposure through this programme. The
                        curriculum introduces students to pharmaceutical
                        operations, healthcare systems, compliance
                        structures, and regulated healthcare environments.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Aspiring Hospital Administrators and Healthcare Managers</span>
                      <span className="app-task">
                        For students considering a Hospital and Healthcare
                        Management MBA, this programme provides practical
                        exposure to hospital administration, healthcare
                        operations, patient service management, and
                        healthcare quality systems within medical and
                        pharmaceutical environments. This track develops
                        practical skills in patient care workflows, facility
                        logistics, resource allocation, and healthcare
                        quality compliance standards such as NABH.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Entrepreneurs and Family Business Members in Healthcare</span>
                      <span className="app-task">
                        Individuals involved in pharmaceutical distribution,
                        diagnostic centres, healthcare services, medical
                        retail, or family-run healthcare businesses can use
                        this MBA to professionalise operations. The
                        programme delivers practical methods to strengthen
                        compliance systems, optimise inventory logistics,
                        and modernise established healthcare businesses
                        through stronger managerial systems and
                        industry-focused knowledge.
                      </span>
                    </div>
                  </div>
                </div>

                {/* <a href="/contact-us" className="default-btn diff-cta">
                  Apply Now →
                </a> */}
              </div>
            </div>
          </div>
          <style jsx>{`
                .gap-panel {
                    padding: 2.5rem 2.5rem 2.75rem;
                }

                .gap-panel .eyebrow {
                    display: inline-block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: #c9922b;
                    margin-bottom: 0.5rem;
                }

                .gap-panel h2 {
                    margin: 0 0 1.75rem;
                    color: #0f3350;
                    font-size: 15px;
                    line-height: 1.35;
                    max-width: 46ch;
                }

                .gr-header-row {
                    display: grid;
                    grid-template-columns: 1fr 40px 1fr;
                    gap: 1rem;
                    margin-bottom: 0.75rem;
                }

                .gr-header {
                    font-size: 0.72rem;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 0 0.25rem;
                }

                .gr-header--gap {
                    color: #c0392b;
                }

                .gr-header--response {
                    color: #96701a;
                }

                .gr-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.9rem;
                }

                .gr-row {
                    display: grid;
                    grid-template-columns: 1fr 40px 1fr;
                    gap: 1rem;
                    align-items: stretch;
                }

                .gr-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    padding: 0.9rem 1.1rem;
                    border-radius: 12px;
                    font-size: 0.92rem;
                    line-height: 1.5;
                }

                .gr-card--gap {
                    background: #fdf3f2;
                    border: 1px solid #f6dbd8;
                    color: #33475b;
                }

                .gr-card--response {
                    background: #fbf6ea;
                    border: 1px solid #f2e6c8;
                    color: #4a3c10;
                    font-weight: 600;
                }

                .gr-icon {
                    width: 22px;
                    height: 22px;
                    flex: none;
                    border-radius: 999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                    margin-top: 0.1rem;
                }

                .gr-icon--gap {
                    color: #c0392b;
                    background: #f8dedb;
                }

                .gr-icon--response {
                    color: #96701a;
                    background: #f0dfa6;
                }

                .gr-arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #c9922b;
                }

                .gr-arrow svg {
                    width: 24px;
                    height: 24px;
                }

                @media (max-width: 760px) {
                    .gr-header-row {
                        display: none;
                    }

                    .gr-row {
                        grid-template-columns: 1fr;
                        gap: 0.5rem;
                    }

                    .gr-arrow {
                        transform: rotate(90deg);
                        margin: -0.1rem 0;
                    }
                }
            `}</style>

          {/* Salary Panel */}
          <div className="PROGRAM OUTCOMES & LEARNING FORMAT curr-panel mt-4">
            <span className="eyebrow">PROGRAM OUTCOMES &amp; LEARNING FORMAT</span>
            <h2>Program Outcomes &amp; Learning Format</h2>

            <div className="curr-layout">
              <div className="curr-left">
                <h3 className="curr-col-title">Program Outcomes: What You Will Achieve</h3>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Graduate as a Day-One Ready Specialist</span>
                      <span className="app-task">
                        Transition from a general graduate to an
                        industry-ready professional certified in global
                        logistics and lean operations.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Master Top Enterprise Tech</span>
                      <span className="app-task">
                        Gain immediate career leverage by mastering corporate
                        operations tools, including SAP, Oracle, and
                        advanced inventory simulations.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Command Leadership Roles</span>
                      <span className="app-task">
                        Qualify directly for high-growth corporate tracks
                        like Supply Chain Analyst, Logistics Manager, and
                        Procurement Specialist.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Secure Hassle-Free Admissions</span>
                      <span className="app-task">
                        Navigate your entry smoothly with step-by-step
                        guidance, from management entrance test counseling
                        to final enrollment.
                      </span>
                    </div>
                  </div>
                </div>

                <p className="curr-closing">
                  Have specific questions regarding the MBA SCM Admission in
                  Pune 2026 criteria, accepted cutoff scores, or seat
                  reservation timelines? Get in touch today for personalized
                  counseling.
                </p>

                <h3 className="curr-col-title">Understanding the Programme</h3>
                <p className="intro-text">
                  Operations and supply chain management involves planning
                  procurement, manufacturing, inventory, logistics, and
                  product delivery to improve business efficiency.
                </p>
                <p className="intro-text">
                  This specialized discipline balances day-to-day
                  operational efficiency with long-term strategic planning,
                  teaching students how to transform raw materials into
                  finished products and deliver them globally with maximum
                  speed and minimal cost.
                </p>
                <p className="intro-text">
                  As one of the SPPU-affiliated MBA in Supply Chain colleges
                  in Pune, ISMR offers a curriculum structured over 2 years
                  and 4 comprehensive semesters in a full-time format,
                  progressing from management fundamentals to advanced
                  global logistics architecture.
                </p>

                {/* <a href="/contact-us" className="default-btn curr-cta">
                  Apply Now →
                </a> */}
              </div>

              <div className="curr-right">
                <h3 className="curr-col-title">The Learning Format at ISMR</h3>
                <p className="intro-text">
                  To ensure you graduate with practical, actionable skills,
                  our pedagogy utilizes active, industry-integrated learning
                  methods:
                </p>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Simulations &amp; Case Studies</span>
                      <span className="app-task">
                        Analyze real-world disruptions such as global
                        shipping bottlenecks or sudden demand surges using
                        interactive software to practice real-time risk
                        mitigation.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Live Industry Projects</span>
                      <span className="app-task">
                        Partner with corporate brands across Pune's
                        manufacturing belts to solve actual operational
                        challenges on active shop floors.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Classroom Instruction</span>
                      <span className="app-task">
                        Master core management models delivered by
                        experienced, university-vetted faculty and visiting
                        supply chain veterans.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="curr-col-title">Key Subjects &amp; Enterprise Tools</h3>
                <h4 className="curr-col-subtitle">Core Modules</h4>
                <p className="intro-text">
                  ISMR's curriculum is meticulously designed to cover every
                  touchpoint of the modern product lifecycle:
                </p>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Supply Chain Strategy &amp; Global Logistics —
                    international trade barriers, customs compliance,
                    cross-border risk management
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Logistics &amp; Warehouse Management — multimodal
                    transport networks, distribution planning, automated
                    warehousing layouts
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Procurement &amp; Vendor Management — strategic sourcing
                    models, sustainable supplier networks
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Lean, Six Sigma &amp; Demand Forecasting — waste
                    elimination, quality control, data-driven demand
                    prediction
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    ERP Systems &amp; Inventory Control — SAP/Oracle
                    literacy, Just-In-Time (JIT) inventory models
                  </li>
                </ul>

                <h4 className="curr-col-subtitle mt-4">Tech Exposure</h4>
                <p className="intro-text">
                  Employers look for candidates who can contribute
                  immediately without lengthy training cycles. Students gain
                  hands-on experience with industry-standard systems like
                  SAP and Oracle, alongside practical exposure to Lean and
                  Six Sigma frameworks.
                </p>
              </div>
            </div>
          </div>




          <style jsx>{`
                .curr-panel {
                    padding: 2.5rem 2.5rem 2.75rem;
                }

                .curr-panel .eyebrow {
                    display: inline-block;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    color: #c9922b;
                    margin-bottom: 0.5rem;
                }

                .curr-panel > h2 {
                    margin: 0 0 1.25rem;
                    color: #0f3350;
                    font-size: 15px;
                }

                .curr-subhead {
                    color: #0f3350;
                    font-size: 1.05rem;
                    margin: 0 0 0.75rem;
                }

                .curr-panel .intro-text {
                    color: #33475b;
                }

                .curr-layout {
                    display: grid;
                    grid-template-columns: 1.2fr 0.9fr;
                    gap: 2.5rem;
                    align-items: start;
                    margin-top: 2rem;
                }

                .curr-col-title {
                    color: #0f3350;
                    font-size: 1.05rem;
                    margin: 0 0 1.1rem;
                }

                .curr-right {
                    position: sticky;
                    top: 1.5rem;
                }

                /* --- Semester cards (left) --- */

                .sem-card {
                    border: 1px solid #e3e9ef;
                    border-radius: 14px;
                    overflow: hidden;
                    margin-bottom: 1.1rem;
                    box-shadow: 0 6px 18px rgba(15, 51, 80, 0.05);
                }

                .sem-card:last-child {
                    margin-bottom: 0;
                }

                .sem-header {
                    display: flex;
                    align-items: center;
                    gap: 0.7rem;
                    padding: 0.85rem 1.1rem;
                    background: #eaf1f8;
                    color: #0f3350;
                    font-weight: 700;
                    font-size: 0.95rem;
                }

                .sem-header--highlight {
                    background: linear-gradient(120deg, #0f3350 0%, #164a72 100%);
                    color: #ffffff;
                }

                .sem-badge {
                    width: 24px;
                    height: 24px;
                    flex: none;
                    border-radius: 999px;
                    background: #0f3350;
                    color: #ffffff;
                    font-size: 0.78rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .sem-badge--highlight {
                    background: #f0c869;
                    color: #5c4a12;
                }

                .sem-body {
                    background: #ffffff;
                }

                .sem-row {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 1rem;
                    padding: 0.65rem 1.1rem;
                    border-bottom: 1px solid #eef2f6;
                }

                .sem-row:last-child {
                    border-bottom: none;
                }

                .sem-row:nth-child(even) {
                    background: #f8fafc;
                }

                .sem-subject {
                    font-weight: 600;
                    color: #0f3350;
                    font-size: 0.85rem;
                }

                .sem-skill {
                    color: #5b6b7a;
                    font-size: 0.83rem;
                }

                /* --- Practical application layer (right) --- */

                .curr-right-note {
                    color: #5b6b7a;
                    font-size: 0.88rem;
                    margin: 0 0 1.25rem;
                }

                .app-card {
                    border: 1px solid #e3e9ef;
                    border-radius: 14px;
                    box-shadow: 0 10px 26px rgba(15, 51, 80, 0.06);
                    overflow: hidden;
                    margin-bottom: 1.5rem;
                }

                .app-row {
                    display: flex;
                    gap: 0.85rem;
                    padding: 1rem 1.1rem;
                    border-bottom: 1px solid #eef2f6;
                    background: #ffffff;
                }

                .app-row:last-child {
                    border-bottom: none;
                }

                .app-row:nth-child(even) {
                    background: #f8fafc;
                }

                .app-icon {
                    width: 34px;
                    height: 34px;
                    flex: none;
                    color: #164a72;
                    background: #eaf1f8;
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 7px;
                }

                .app-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0.15rem;
                }

                .app-skill {
                    font-weight: 700;
                    color: #0f3350;
                    font-size: 0.92rem;
                }

                .app-task {
                    color: #33475b;
                    font-size: 0.85rem;
                }

                .app-where {
                    color: #96701a;
                    font-size: 0.78rem;
                    font-weight: 600;
                }

                .curr-closing {
                    font-weight: 700;
                    color: #0f3350;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin: 0 0 1.5rem;
                }

                .curr-cta {
                    display: inline-block;
                }

                @media (max-width: 900px) {
                    .curr-layout {
                        grid-template-columns: 1fr;
                    }

                    .curr-right {
                        position: static;
                    }
                }
            `}</style>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Job Roles Panel */}
          <>
            <style>{`
  .ar-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  @media (max-width: 900px) {
    .ar-wrap { grid-template-columns: 1fr; }
  }

  .ar-card {
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(26, 26, 46, 0.08);
    padding: 32px 28px;
    min-width: 0;
    box-sizing: border-box;
  }

  .ar-card h2 {
    font-size: 15px;
    font-weight: 700;
    color:#0f3350;
    margin: 0 0 14px 0;
    line-height: 1.3;
  }

  .ar-card p.ar-intro {
    font-size: 14px;
    line-height: 1.7;
    color: #4a4a4a;
    margin-bottom: 20px;
  }

  /* Comparison table */
  .ar-table-wrap { overflow-x: auto; }

  .ar-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 0.88rem;
  }

  .ar-table th {
       background: linear-gradient(120deg, #0f3350 0%, #164a72 100%);
    color: #fff;
    padding: 12px 10px;
    text-align: left;
    font-weight: 600;
  }

  .ar-table th:first-child { width: 26%; }

  .ar-table td {
    padding: 12px 10px;
    border-bottom: 1px solid #eee;
    vertical-align: top;
    word-wrap: break-word;
  }

  .ar-table td:first-child {
    font-weight: 600;
    color: #1a1a2e;
  }

  .ar-analyst-col {
    background: #fdf6e3;
    color: #8a6d1a;
    font-weight: 600;
    position: relative;
  }

  .ar-analyst-col::before {
    content: "";
  }

  .ar-callout {
    margin-top: 20px;
    background: #faf8f2;
    border-left: 4px solid #c9a227;
    padding: 14px 18px;
    font-size: 0.92rem;
    font-style: italic;
    color: #4a4a4a;
    line-height: 1.65;
    border-radius: 0 8px 8px 0;
  }

  /* Fee/Admission side */
  .ar-subhead {
    font-size: 1.02rem;
    font-weight: 700;
    color: #0f3350;
    margin: 22px 0 8px 0;
  }

  .ar-subhead:first-of-type { margin-top: 0; }

  .ar-fee-highlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f7f6f2;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 8px;
  }

  .ar-fee-highlight .label {
    font-size: 0.85rem;
    color: #666;
  }

  .ar-fee-highlight .value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #1a1a2e;
  }

  .ar-badge-note {
    font-size: 0.78rem;
    color: #999;
    margin-top: -2px;
    margin-bottom: 16px;
  }

  /* Admission steps */
  .ar-steps {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 8px;
  }

  .ar-step {
    background: #1a1a2e;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .ar-arrow {
    color: #c9a227;
    font-weight: 700;
    font-size: 0.95rem;
  }

  .ar-content-note {
    margin-top: 22px;
    background: #fff8e6;
    border: 1px dashed #e0c268;
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 0.78rem;
    color: #8a6d1a;
    line-height: 1.6;
  }
`}</style>


          </>
          {/* Analyst vs Backend Panel */}

          <>
            <style>{`
  .adm-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  @media (max-width: 900px) {
    .adm-wrap { grid-template-columns: 1fr; }
  }

  .adm-card {
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(26, 26, 46, 0.08);
    padding: 32px 28px;
    min-width: 0;
    box-sizing: border-box;
  }

  .adm-card h2 {
    font-size: 15px;
    font-weight: 700;
    color: #0f3350;
    margin: 0 0 14px 0;
    line-height: 1.3;
  }

  .adm-subhead {
    font-size: 15px;
    font-weight: 700;
    color: #0f3350;
    margin: 22px 0 10px 0;
  }

  .adm-subhead:first-of-type { margin-top: 0; }

  .adm-intro {
    font-size: 0.95rem;
    line-height: 1.7;
    color: #4a4a4a;
    margin-bottom: 14px;
  }

  /* Entrance exam pills */
  .adm-exam-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 6px;
  }

  .adm-exam-pill {
    display: flex;
    flex-direction: column;
    background: #f7f6f2;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px 14px;
    min-width: 120px;
  }

  .adm-exam-pill .exam-name {
    font-size: 0.92rem;
    font-weight: 700;
    color: #1a1a2e;
  }

  .adm-exam-pill .exam-type {
    font-size: 0.72rem;
    color: #8a6d1a;
    background: #fdf6e3;
    border-radius: 6px;
    padding: 2px 6px;
    margin-top: 4px;
    display: inline-block;
    width: fit-content;
  }

  /* Eligibility checklist */
  .adm-check-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
  }

  .adm-check-list li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 10px;
    font-size: 0.92rem;
    line-height: 1.6;
    color: #4a4a4a;
  }

  .adm-check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    top: 0;
    color: #ffffff;
    background: #1a1a2e;
    font-size: 0.7rem;
    font-weight: 700;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .adm-loan-box {
    background: #f7f6f2;
    border-radius: 10px;
    padding: 16px 18px;
    font-size: 0.92rem;
    line-height: 1.7;
    color: #4a4a4a;
  }

  .adm-loan-box strong {
    color: #1a1a2e;
  }

  .adm-fine-note {
    font-size: 0.78rem;
    color: #999;
    margin-top: 8px;
    font-style: italic;
  }

  /* Recruiters table */
  .adm-rec-table-wrap { overflow-x: auto; }

  .adm-rec-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 0.88rem;
  }

  .adm-rec-table th {
    background: linear-gradient(120deg, #0f3350 0%, #164a72 100%);
    color: #fff;
    padding: 12px 10px;
    text-align: left;
    font-weight: 600;
  }

  .adm-rec-table th:first-child { width: 32%; }

  .adm-rec-table td {
    padding: 12px 10px;
    border-bottom: 1px solid #eee;
    vertical-align: top;
    word-wrap: break-word;
    color: #4a4a4a;
  }

  .adm-rec-table td:first-child {
    font-weight: 600;
    color: #1a1a2e;
  }

  .adm-sector-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
  }

  .adm-sector-tag {
    background: #fdf6e3;
    color: #8a6d1a;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 20px;
  }
`}</style>

          </>




          <>
            <style>{`
  .plc-wrap {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  @media (max-width: 900px) {
    .plc-wrap { grid-template-columns: 1fr; }
  }

  .plc-card {
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(26, 26, 46, 0.08);
    padding: 32px 28px;
    min-width: 0;
    box-sizing: border-box;
  }

  .plc-card h2 {
    font-size: 15px;
    font-weight: 700;
    color: #0f3350;
    margin: 0 0 18px 0;
  }

  .plc-card h3 {
    font-size: 14px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 22px 0 8px 0;
  }

  .plc-card h3:first-of-type { margin-top: 0; }

  .plc-intro {
    font-size: 0.93rem;
    line-height: 1.7;
    color: #4a4a4a;
    margin-bottom: 10px;
  }

  /* Stat bar — stacked vertically to fit narrower column */
  .plc-stat-bar {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 22px;
  }

  .plc-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f7f6f2;
    border-radius: 10px;
    padding: 12px 16px;
  }

  .plc-stat .label {
    font-size: 0.8rem;
    color: #666;
  }

  .plc-stat .num {
    font-size: 12px;
    font-weight: 700;
    color: #1a1a2e;
    text-align: right;
  }

  /* Process steps */
  .plc-steps {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }

  .plc-step {
    background: #1a1a2e;
    color: #fff;
    font-size: 0.78rem;
    font-weight: 600;
    padding: 8px 13px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .plc-arrow {
    color: #c9a227;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .plc-example-box {
    background: #faf8f2;
    border-left: 4px solid #c9a227;
    padding: 14px 18px;
    font-size: 0.88rem;
    font-style: italic;
    color: #4a4a4a;
    line-height: 1.65;
    border-radius: 0 8px 8px 0;
    margin: 10px 0;
  }

  .plc-content-note {
    background: #fff8e6;
    border: 1px dashed #e0c268;
    border-radius: 8px;
    padding: 12px 14px;
    font-size: 0.76rem;
    color: #8a6d1a;
    line-height: 1.6;
    margin-top: 16px;
  }

  .plc-partner-note {
    font-size: 0.85rem;
    color: #666;
    font-style: italic;
    margin-top: 4px;
  }
`}</style>


          </>
          {/* Course Structure Panel */}
          <>
            <style>{`
                .gt-wrap {
                    // display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
                    gap: 28px;
                    align-items: start;
                    max-width: 1200px;
                    margin: 40px auto;
                    padding: 0 20px;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Arial, sans-serif;
                }

                @media (max-width: 900px) {
                    .gt-wrap { grid-template-columns: 1fr; }
                }

                .gt-card {
                    background: #ffffff;
                    border-radius: 14px;
                    box-shadow: 0 4px 18px rgba(26, 26, 46, 0.08);
                    padding: 32px 28px;
                    min-width: 0;
                    box-sizing: border-box;
                }

                .gt-card h2 {
                    font-size: 15px;
                    font-weight: 700;
                    color: #0f3350;
                    margin: 0 0 14px 0;
                }

                .gt-intro {
                    font-size: 0.93rem;
                    line-height: 1.7;
                    color: #4a4a4a;
                    margin-bottom: 20px;
                }

                .gt-brochure-btn {
                    display: inline-block;
                    background: #1a1a2e;
                    color: #fff;
                    font-size: 0.9rem;
                    font-weight: 600;
                    padding: 12px 20px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    margin-bottom: 24px;
                }

                .gt-brochure-btn:hover {
                    background: #2a2a4a;
                }

                .gt-field {
                    margin-bottom: 14px;
                }

                .gt-field label {
                    display: block;
                    font-size: 0.82rem;
                    font-weight: 600;
                    color: #1a1a2e;
                    margin-bottom: 5px;
                }

                .gt-field input,
                .gt-field select {
                    width: 100%;
                    padding: 10px 12px;
                    font-size: 0.9rem;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-sizing: border-box;
                    font-family: inherit;
                }

                .gt-field input:focus,
                .gt-field select:focus {
                    outline: none;
                    border-color: #c9a227;
                }

                .gt-submit-btn {
                    width: 100%;
                    background: #c9a227;
                    color: #1a1a2e;
                    font-size: 0.95rem;
                    font-weight: 700;
                    padding: 13px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    margin-top: 6px;
                }

                .gt-submit-btn:hover {
                    background: #b8922a;
                }

                /* Accordion */
                .gt-acc-item {
                    border-bottom: 1px solid #eee;
                }

                .gt-acc-item:last-child { border-bottom: none; }

                .gt-acc-question {
                    width: 100%;
                    background: none;
                    border: none;
                    text-align: left;
                    padding: 16px 0;
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #0f3350;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                }

                .gt-acc-icon {
                    color: #c9a227;
                    font-size: 1.1rem;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .gt-acc-answer {
                    font-size: 14px;
                    line-height: 1.7;
                    color: #4a4a4a;
                    padding-bottom: 16px;
                }

                .gt-acc-note {
                    background: #fff8e6;
                    border: 1px dashed #e0c268;
                    border-radius: 8px;
                    padding: 10px 12px;
                    font-size: 0.75rem;
                    color: #8a6d1a;
                    line-height: 1.55;
                    margin-top: 10px;
                }
            `}</style>


            <div className="gt-wrap">

              {/* LEFT: Get in Touch / Admission Form */}
              {/* <div className="gt-card">
                                <h2> Take the Next Step — MBA Finance Admission 2026</h2>

                                <ISMRFormModal></ISMRFormModal>

                            </div> */}

              {/* RIGHT: FAQ Accordion */}
              <div className="gt-card">
                <h2>13. Frequently Asked Questions</h2>

                {faqs.map((item, idx) => (
                  <div className="gt-acc-item" key={idx}>
                    <button
                      className="gt-acc-question"
                      type="button"
                      onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                    >
                      <span>{item.q}</span>
                      <span className="gt-acc-icon">{openIndex === idx ? "−" : "+"}</span>
                    </button>
                    {openIndex === idx && (
                      <div className="gt-acc-answer">
                        {item.a}
                        {item.note && <div className="gt-acc-note">{item.note}</div>}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>





            <div className="pb-4">
              <div className="">
                <marquee direction="left" behavior="alternate" scrollamount="6">
                  <div className="logo-marquee-item">
                    <img src={britaniaLogo} alt="Britannia Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={aisheLogo} alt="AISHE Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={allstateLogo} alt="Allstate Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={amdocsLogo} alt="Amdocs Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={atosLogo} alt="Atos Syntel Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={bajajLogo} alt="Bajaj Finserv Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={cognizantLogo} alt="Cognizant Logo" />
                  </div>
                  <div className="logo-marquee-item">
                    <img src={learningRoutesLogo} alt="Learning Routes Logo" />
                  </div>
                </marquee>
              </div>
              <style>
                {`.logo-marquee-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px 24px;
    margin: 0 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
}

.logo-marquee-item:hover {
    border-color: #4f46e5;
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.2);
    transform: translateY(-4px);
}

.logo-marquee-item img {
    height: 60px;
    width: auto;
    object-fit: contain;
}`}
              </style>
            </div>

          </>

        </div>
      </section>

      <Faq />
    </section>
  );
}
