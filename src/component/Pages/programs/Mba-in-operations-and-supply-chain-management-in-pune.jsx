import React, { useState, useEffect } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../form/ContactForm";
import Howtoaplydownoadform from "../../form/Howtoaplydownoadform";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../form/ISMRFormModal";
import britaniaLogo from "../../../assets/Homeimg/britania.png";
import aisheLogo from "../../../assets/Homeimg/AISE.png";
import allstateLogo from "../../../assets/Homeimg/allstate.png";
import amdocsLogo from "../../../assets/Homeimg/Comp6.png";
import atosLogo from "../../../assets/Homeimg/atos.png";
import bajajLogo from "../../../assets/Homeimg/Bajaj-Finserv-Logo.jpg";
import cognizantLogo from "../../../assets/Homeimg/Cognizant-Logo.png";
import learningRoutesLogo from "../../../assets/Homeimg/Comp1.png";


export default function OperationSupplyChainManagement() {

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
      q: "What is the MBA Finance course in Pune offered by ISMR?",
      a: "This MBA Finance course in Pune focuses on practical financial decision-making and real-world applications. MBA Finance at ISMR Pune is a 2-year, 4-semester programme. The syllabus is aligned with Savitribai Phule Pune University (SPPU) and supplemented by ISMR's practical application layer covering Excel, financial modelling, and case-based learning."
    },
    {
      q: "What are the MBA Finance fees at ISMR Pune?",
      a: "MBA Finance fees at ISMR Pune are approximately ₹2 lakh per year, totalling approximately ₹4 lakh for the complete 2-year programme."
    },
    {
      q: "What is the MBA Finance eligibility in Pune at ISMR?",
      a: "Bachelor's degree (minimum 3 years after 10+2) from a recognised university, minimum 50% aggregate marks (45% for reserved category candidates from Maharashtra), final-year graduation students eligible with a certificate from their institution, and a valid score in any accepted entrance exam."
    },
    {
      q: "Why do students fail in MBA Finance placements?",
      a: "Most candidates can calculate outputs but cannot interpret them into business decisions. Case rounds test this directly — candidates who prepare only on concepts, not interpretation, fail this stage consistently."
    },
    {
      q: "Are education loans available for MBA Finance at ISMR Pune?",
      a: "Yes. Students can avail of education loans through SBI and other nationalised banks. Scholarship assistance is also available through the Maharashtra government for eligible candidates."
    },
    {
      q: "Is there a separate eligibility requirement to sit for placement/analyst rounds?",
      a: "All enrolled MBA Finance students are eligible for placement participation; there is no separate academic cutoff for placement rounds beyond regular programme requirements. What determines analyst-track vs backend-track outcomes is preparation, not eligibility — students who complete the dataset-based Excel training, case-analysis practice, and mock placement rounds are better positioned for analyst-round selection.",
      note: "⚠ CONTENT NEEDED: Draft answer above is written to be directionally safe (no invented cutoffs, attendance %, or backlog rules) but is NOT confirmed ISMR policy — if ISMR does have a formal placement-eligibility criterion (e.g. attendance %, no active backlogs), this answer must be replaced with the real one before publishing."
    }
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
            className="mb-3"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "30px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            MBA in Operations & Supply Chain <span className="text-warning">Management</span>
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
            <span className="text-warning">MBA in Operations & Supply Chain Management</span>
          </p>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className=" hero-panel">
            <span className="eyebrow">ISMR PUNE · MBA OPERATIONS & SUPPLY CHAIN MANAGEMENT</span>
            <h1>Build a Career in Operations & Supply Chain Management with Real Placement Outcomes</h1>

            <div className="two-col-layout">
              <div className="overview-col mt-4">
                <h2>What is the MBA Operations & Supply Chain Management Course in Pune?</h2>
                <p className="intro-text">
                  An MBA in Operations and Supply Chain Management in Pune is
                  a postgraduate management program focused on production
                  planning, procurement, logistics, inventory management, and
                  supply chain optimization. It prepares graduates for
                  careers in manufacturing, e-commerce, retail, logistics,
                  and consulting.
                </p>
                <p className="intro-text">
                  ISMR, an SPPU-affiliated institute, combines this
                  curriculum with industry-oriented learning, practical
                  business exposure, and career-focused management training.
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
                      <span className="facts-subtitle">MBA in Operations & Supply Chain Management, ISMR Pune</span>
                    </div>
                  </div>

                  <div className="stat-strip">
                    <div className="stat-block">
                      <span className="stat-icon stat-icon--gold">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                          <path d="M8.5 12.5l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <span className="stat-number">85% Placement Rate</span>
                        <span className="stat-label">Entry-level packages ₹4.5–6.8 LPA</span>
                      </div>
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
                      <span className="facts-value">2 Years (4 Semesters)</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Affiliation / Approval</span>
                      <span className="facts-value">SPPU Affiliated | AICTE & DTE Approved</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Accepted Exams</span>
                      <span className="facts-value">MAH-MBA CET / CAT / CMAT</span>
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
            <span className="eyebrow">CURRICULUM &amp; SKILL DEVELOPMENT</span>
            <h2>MBA Operations &amp; Supply Chain Management Syllabus &amp; What You Learn</h2>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title">MBA OSCM Syllabus — Semester-Wise Breakdown</h3>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Semester</span>
                    <span>Key MBA OSCM Papers</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">
                      <span className="tool-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      Semester 1
                    </span>
                    <span className="tool-applied">
                      Principles of Management, Organizational Behavior,
                      Managerial Economics, Accounting for Managers, Business
                      Communication, Quantitative Techniques
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">
                      <span className="tool-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      Semester 2
                    </span>
                    <span className="tool-applied">
                      Operations Management, Marketing Management,
                      Financial Management, Human Resource Management,
                      Business Research Methods, Management Information Systems
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">
                      <span className="tool-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      Semester 3
                    </span>
                    <span className="tool-applied">
                      Supply Chain Strategy &amp; Global Logistics, Procurement
                      &amp; Vendor Management, Warehouse &amp; Distribution
                      Management, Lean &amp; Six Sigma, Demand Forecasting,
                      ERP Systems &amp; Inventory Control
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">
                      <span className="tool-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      Semester 4
                    </span>
                    <span className="tool-applied">
                      Strategic Supply Chain Management, International Trade
                      &amp; Customs Compliance, Logistics Analytics,
                      Sustainable Supply Chain Practices, Project
                      Work/Internship
                    </span>
                  </div>
                </div>

                <h3 className="diff-col-title mt-4">Key Subjects &amp; Enterprise Tools</h3>
                <h4 className="diff-col-subtitle">Core Modules</h4>
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
                    Supply Chain Strategy &amp; Global Logistics — international
                    trade barriers, customs compliance, cross-border risk
                    management
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

                <h4 className="diff-col-subtitle mt-3">Tech Exposure</h4>
                <p className="intro-text">
                  Employers look for candidates who can contribute
                  immediately without lengthy training cycles. Students gain
                  hands-on experience with industry-standard systems like SAP
                  and Oracle, alongside practical exposure to Lean and Six
                  Sigma frameworks.
                </p>

                <h3 className="diff-col-title">Practical Components</h3>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Summer Internship
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Case Studies
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Industry Projects
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Warehouse &amp; Logistics Simulations
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Seminars
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Research Assignments
                  </li>
                </ul>

                <h3 className="diff-col-title mt-3">Skill Development Focus</h3>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Analytical Thinking
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Process Optimization
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Vendor Negotiation
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Risk Management
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Cross-Functional Coordination
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Strategic Decision-Making
                  </li>
                </ul>
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title">Core Focus Areas — What You Actually Learn in MBA OSCM (Beyond Subjects)</h3>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19h16M7 19V9M12 19V5M17 19v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">ERP &amp; Enterprise Systems</span>
                      <span className="app-task">
                        Students learn how companies run inventory and
                        production through tools such as SAP and Oracle,
                        helping them understand real-world enterprise
                        workflows.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Procurement &amp; Vendor Management</span>
                      <span className="app-task">
                        Training includes strategic sourcing, supplier
                        negotiation, and building sustainable vendor
                        networks used in organisations.
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
                      <span className="app-skill">Logistics &amp; Warehouse Operations</span>
                      <span className="app-task">
                        Covers multimodal transport, distribution planning,
                        and automated warehousing layouts essential for
                        managing supply chain operations.
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
                      <span className="app-skill">Global Trade &amp; Compliance</span>
                      <span className="app-task">
                        Students gain a practical understanding of
                        international trade barriers, customs compliance,
                        and cross-border risk management.
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
                      <span className="app-skill">Strategic Supply Chain Management</span>
                      <span className="app-task">
                        Focuses on aligning supply chain decisions with
                        business goals, preparing students for leadership
                        roles in operations.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="diff-col-title mt-4">Before vs After ISMR Training</h3>
                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Before MBA OSCM</span>
                    <span>After ISMR Training</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">No interview confidence</span>
                    <span className="tool-applied">Clear communication &amp; structured responses</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">No practical supply chain exposure</span>
                    <span className="tool-applied">Internship + live logistics/procurement project experience</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Generic graduate profile</span>
                    <span className="tool-applied">Job-ready operations &amp; supply chain professional</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Limited ERP/tools knowledge</span>
                    <span className="tool-applied">Hands-on SAP/Oracle &amp; Lean Six Sigma understanding</span>
                  </div>
                </div>

                {/* <a href="/Contactus" className="default-btn diff-cta">
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
            <span className="eyebrow">CAREER OPPORTUNITIES &amp; ELIGIBILITY</span>
            <h2>Career Opportunities &amp; Eligibility</h2>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title">Core Roles &amp; Strategic Relevance</h3>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Job Role</span>
                    <span>Core Corporate Responsibility</span>
                    <span>Strategic Career Relevance</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Supply Chain Manager</span>
                    <span className="tool-applied">
                      Governs the complete movement of products from raw
                      materials to final consumers.
                    </span>
                    <span className="tool-applied">
                      Critical for managing procurement protocols,
                      international shipping, and lean inventory systems.
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Operations Manager</span>
                    <span className="tool-applied">
                      Focuses heavily on shop-floor orchestration, overall
                      capacity planning, and resource allocation.
                    </span>
                    <span className="tool-applied">
                      Utilizes engineering methodologies to eliminate
                      production waste and boost output quality.
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Logistics &amp; Distribution Manager</span>
                    <span className="tool-applied">
                      Designs smart multimodal shipping networks and
                      supervises large fulfillment facilities.
                    </span>
                    <span className="tool-applied">
                      Focuses on maximizing fleet utilization, scaling
                      automated sorting, and cutting delivery times.
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Procurement &amp; Vendor Manager</span>
                    <span className="tool-applied">
                      Analyzes global supplier markets and executes complex
                      commercial agreements.
                    </span>
                    <span className="tool-applied">
                      Balances data planning and communication to secure
                      assets while reducing material costs.
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Demand Forecasting Analyst</span>
                    <span className="tool-applied">
                      Anticipates changing market patterns to avoid
                      expensive overproduction or stock shortages.
                    </span>
                    <span className="tool-applied">
                      Designs mathematical data models and reviews past
                      retail patterns with marketing teams.
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">ERP Implementation Analyst</span>
                    <span className="tool-applied">
                      Helps companies transition onto cloud platforms by
                      configuring technical software modules.
                    </span>
                    <span className="tool-applied">
                      Focuses on designing automated inventory tracking
                      inside systems like SAP or Oracle.
                    </span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Operations Consultant</span>
                    <span className="tool-applied">
                      Audits third-party infrastructure to find hidden
                      organizational inefficiencies.
                    </span>
                    <span className="tool-applied">
                      Gives broad exposure to varied corporate models while
                      deploying customized lean solutions.
                    </span>
                  </div>
                </div>

                <p className="intro-text mt-3">
                  <strong>Key Hiring Industries:</strong> Our graduates enjoy
                  high demand across massive automotive assembly hubs,
                  high-volume FMCG businesses, complex pharmaceuticals
                  cold-chains, rapid-delivery e-commerce platforms,
                  multinational logistics enterprises, infrastructure
                  conglomerates, and top-tier corporate consulting firms.
                </p>
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title">Eligibility &amp; Target Profiles</h3>

                <h4 className="diff-col-subtitle mb-4">Academic Criteria</h4>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    A bachelor's degree in any stream or discipline from a
                    recognized university, with a minimum aggregate of 50%
                    marks (45% for reserved categories).
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Admission is strictly merit-based, requiring valid scores
                    in state or national-level management entrance tests,
                    including MAH-MBA CET, CAT, or CMAT.
                  </li>
                </ul>

                <h4 className="diff-col-subtitle mt-3 mb-4">Target Profiles</h4>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Recent Graduates from Any Stream</span>
                      <span className="app-task">
                        No prior experience required. ISMR trains graduates
                        to manage procurement pipelines, distribution
                        frameworks, and logistics networks from scratch —
                        regardless of your academic background. Whether you
                        come from engineering, commerce, science, or arts,
                        the programme bridges the gap to a corporate
                        launchpad.
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
                      <span className="app-skill">Working Professionals in Operations or Manufacturing</span>
                      <span className="app-task">
                        Break the growth ceiling. If you are already working
                        on shop floors, managing warehouses, or handling
                        vendors, you understand daily execution. This MBA
                        provides the macro-level strategic insights and
                        leadership credentials necessary to transition into
                        high-paying managerial positions.
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
                      <span className="app-skill">Professionals from BFSI, Retail, or E-Commerce</span>
                      <span className="app-task">
                        Lead cross-functional projects. Modern banking,
                        retail, and digital marketplaces rely completely on
                        backend processing speed and distribution
                        efficiency. Professionals from these sectors learn
                        how to optimize multi-city delivery routes and build
                        tech-enabled fulfillment centers.
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
                      <span className="app-skill">Aspiring ERP and Tech-Enabled Professionals</span>
                      <span className="app-task">
                        Bridge business and technology. Technology has
                        transformed traditional logistics, making data
                        literacy a core requirement. ISMR's MBA in
                        Operations and Supply Chain Management includes
                        strong logistics management training in Pune,
                        preparing you for specialized corporate roles in
                        software implementation and cloud-based inventory
                        tracking.
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
                      <span className="app-skill">Entrepreneurs and Family Business Members</span>
                      <span className="app-task">
                        Protect and grow your margins. For those running or
                        inheriting enterprises involving manufacturing or
                        wholesale distribution, operational inefficiencies
                        drain profits. This program equips you with Lean and
                        Six Sigma methodologies to eliminate waste and
                        negotiate smarter vendor contracts.
                      </span>
                    </div>
                  </div>
                </div>

                {/* <a href="/Contactus" className="default-btn diff-cta">
                  Apply Now →
                </a> */}
              </div>
            </div>
          </div>

          <div className="panel diff-panel mt-4">
            <span className="eyebrow">STRATEGIC MARKET BENEFITS &amp; RECRUITER NETWORK</span>
            <h2>Strategic Market Benefits &amp; Location Advantage</h2>

            <p className="intro-text">
              Supply chains have become one of the most important business
              functions because companies now compete on speed, cost
              efficiency, and customer delivery. Pursuing this specialization
              at ISMR offers distinct, quantifiable advantages.
            </p>

            <h3 className="diff-col-title">Placement Snapshot</h3>
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
                    across manufacturing, logistics, and e-commerce sectors
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
                  <span className="stat-number">₹4.5–6.8 LPA</span>
                  <span className="stat-label">
                    Entry-Level Package — competitive starting packages with
                    rapid increments in expanding hubs
                  </span>
                </div>
              </div>

              <div className="stat-block">
                <span className="stat-icon stat-icon--gold">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M8.5 12.5l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">
                    Core Recruiting Partners — spanning logistics, e-commerce,
                    automotive, and manufacturing majors
                  </span>
                </div>
              </div>
            </div>

            <div className="diff-layout mt-3">
              <div className="diff-left">
                <h3 className="diff-col-title mt-3">Strategic Market Benefits</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Surging Global Industry Demand</span>
                      <span className="app-task">
                        Resilient career paths: Recent disruptions in global
                        logistics have forced companies to completely rethink
                        their sourcing strategies. This shift has created an
                        urgent corporate demand for qualified managers who
                        can anticipate bottlenecks and build resilient
                        vendor networks.
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
                      <span className="app-skill">Highly Competitive Earning Potential — Strong ROI</span>
                      <span className="app-task">
                        Companies value professionals who can reduce costs,
                        improve productivity, and deliver products faster.
                        This is why MBA graduates in supply chain management
                        often receive competitive salary packages. The
                        average MBA Supply Chain Management Salary in Pune
                        reflects this value, offering graduates competitive
                        starting packages and rapid increments within
                        expanding e-commerce and manufacturing hubs.
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
                      <span className="app-skill">Versatile Cross-Sector Applicability</span>
                      <span className="app-task">
                        Maximum career flexibility: Unlike narrow
                        specializations, operations expertise transfers
                        perfectly across multiple fields. Graduates can
                        build their professional futures anywhere — from
                        automotive assembly lines and FMCG networks to
                        pharmaceutical cold chains and retail
                        infrastructure.
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
                      <span className="app-skill">Balanced Managerial Skill Development</span>
                      <span className="app-task">
                        Become a complete leader: True operational leadership
                        requires a unique combination of sharp analytical
                        thinking and team management. The program balances
                        quantitative training, like mathematical demand
                        forecasting, with essential modules covering
                        corporate negotiation and leadership psychology.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="diff-col-title">Location Advantage — Unmatched Regional Industrial Placement</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Direct corporate access</span>
                      <span className="app-task">
                        Geography plays a critical role in management
                        placements. Positioned near Pune and PCMC's massive
                        industrial, automotive, and IT corridors, ISMR
                        students benefit from regular corporate networking,
                        plant visits, and direct recruitment pathways.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="diff-right mt-3">
                <h3 className="diff-col-title">Industry Collaborations &amp; Recruiters</h3>
                <p className="intro-text">
                  As one of the MBA SCM colleges in Pune with placement
                  support built into every semester, ISMR's end-to-end
                  framework transitions you into high-growth leadership
                  tracks designed around maximum efficiency. The programme
                  records an 85% placement rate, with recruiters including:
                </p>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Sr. No.</span>
                    <span>Recruiting Company</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">1</span>
                    <span className="tool-applied">Amazon</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">2</span>
                    <span className="tool-applied">Flipkart</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">3</span>
                    <span className="tool-applied">DHL</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">4</span>
                    <span className="tool-applied">Blue Dart</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">5</span>
                    <span className="tool-applied">FedEx</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">6</span>
                    <span className="tool-applied">Maersk</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">7</span>
                    <span className="tool-applied">Reliance Industries</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">8</span>
                    <span className="tool-applied">Tata Motors</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">9</span>
                    <span className="tool-applied">Mahindra &amp; Mahindra</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">10</span>
                    <span className="tool-applied">Maruti Suzuki</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">11</span>
                    <span className="tool-applied">Bosch</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">12</span>
                    <span className="tool-applied">Larsen &amp; Toubro (L&amp;T)</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">13</span>
                    <span className="tool-applied">Asian Paints</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">14</span>
                    <span className="tool-applied">Adani Logistics</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">15</span>
                    <span className="tool-applied">TVS Supply Chain Solutions</span>
                  </div>
                </div>

                <p className="intro-text diff-closing mt-3">
                  This is why ISMR is counted among the leading MBA SCM
                  colleges in Pune for placement outcomes.
                </p>
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
                    h4{
                    font-size:15px;
                    }
            `}</style>

          {/* Salary Panel */}
          <div className="panel curr-panel mt-4">
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

                {/* <a href="/Contactus" className="default-btn curr-cta">
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
                    display: grid;
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
                    /* FAQ Accordion Styles */

.diff-right {
  width: 100%;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: inherit;
}

.accordion-item {
  border: 1px solid #e2e6ee;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(15, 34, 79, 0.06);
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}

.accordion-item:hover {
  border-color: #c7d2f0;
  box-shadow: 0 4px 10px rgba(15, 34, 79, 0.08);
}

.accordion-item summary {
  list-style: none;
  cursor: pointer;
  padding: 18px 48px 18px 20px;
  font-weight: 600;
  font-size: 1rem;
  color: #0f224f;
  position: relative;
  background-color: #f7f9fd;
  transition: background-color 0.2s ease;
}

.accordion-item summary::-webkit-details-marker {
  display: none;
}

.accordion-item summary::marker {
  content: "";
}

/* Custom arrow icon */
.accordion-item summary::after {
  content: "";
  position: absolute;
  right: 20px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-right: 2px solid #0f224f;
  border-bottom: 2px solid #0f224f;
  transform: translateY(-65%) rotate(45deg);
  transition: transform 0.25s ease;
}

.accordion-item[open] summary::after {
  transform: translateY(-35%) rotate(-135deg);
}

.accordion-item[open] summary {
  background-color: #eef2fc;
  border-bottom: 1px solid #e2e6ee;
}

.accordion-item summary:hover {
  background-color: #eef2fc;
}

.accordion-item p {
  margin: 0;
  padding: 18px 20px 20px 20px;
  color: #495168;
  font-size: 0.95rem;
  line-height: 1.65;
}

/* Smooth open/close animation */
.accordion-item[open] > p {
  animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .accordion-item summary {
    font-size: 0.9rem;
    padding: 14px 40px 14px 16px;
  }
  .accordion-item p {
    font-size: 0.88rem;
    padding: 14px 16px 16px 16px;
  }
}
            `}</style>


            <div className="panel faq-panel">
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2>MBA Operations &amp; Supply Chain Management — FAQs</h2>

              <div className="diff-layout">
                <div className="diff-left">
                  <h3 className="diff-col-title">Still Have Questions?</h3>
                  <p className="intro-text">
                    Get quick, clear answers on eligibility, duration,
                    approvals, placements, and salary expectations for the MBA
                    in Operations &amp; Supply Chain Management at ISMR Pune.
                  </p>

                  <div className="app-card">
                    <div className="app-row">
                      <span className="app-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div className="app-text">
                        <span className="app-skill">AICTE &amp; DTE Approved</span>
                        <span className="app-task">
                          SPPU-affiliated programme with full statutory
                          approvals, ensuring nationwide degree validity.
                        </span>
                      </div>
                    </div>

                    <div className="app-row">
                      <span className="app-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                          <path d="M8.5 12.5l2.3 2.3 4.7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div className="app-text">
                        <span className="app-skill">85% Placement Rate</span>
                        <span className="app-task">
                          Recruiters include Amazon, Flipkart, DHL, Maersk,
                          Tata Motors, and 10+ other core industry partners.
                        </span>
                      </div>
                    </div>

                    <div className="app-row">
                      <span className="app-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <div className="app-text">
                        <span className="app-skill">Open to All Streams</span>
                        <span className="app-task">
                          Graduates from any discipline, including working
                          professionals, are eligible to apply.
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="intro-text diff-closing">
                    Didn't find your answer? Our counselors are just a call
                    away.
                  </p>

                  <a href="tel:9923786079" className="default-btn diff-cta">
                    Talk to a Counselor →
                  </a>
                </div>

                <div className="diff-right">
                  <div className="accordion">
                    <details className="accordion-item">
                      <summary>What is an MBA in Operations and Supply Chain Management in Pune?</summary>
                      <p>
                        An MBA in Operations and Supply Chain Management in
                        Pune is a specialized two-year postgraduate degree
                        centered on making business production and
                        distribution lines as efficient as possible. The
                        program trains students to manage raw material
                        sourcing, organize automated warehousing layouts, and
                        coordinate international transportation networks. It
                        blends traditional corporate leadership principles
                        with modern analytical tools to prepare graduates for
                        high-level management roles.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>Who can apply for an MBA in Supply Chain Management in Pune?</summary>
                      <p>
                        Any graduate holding a bachelor's degree in any stream
                        from a recognized university with a minimum aggregate
                        of 50% marks (45% for reserved categories) is fully
                        eligible to apply. Additionally, candidates must
                        possess a valid scorecard from state or national
                        management entrance examinations like MAH-MBA CET,
                        CAT, or CMAT. This ensures every student admitted to
                        the programme meets the academic rigour that ISMR and
                        Savitribai Phule Pune University demand.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>What is the duration of the MBA Operations and Supply Chain Management course?</summary>
                      <p>
                        The program spans a fixed duration of two academic
                        years, which are systematically split into four
                        comprehensive semesters. The first year focuses on
                        building foundational management capabilities, while
                        the second year dives deeply into advanced
                        operations, ERP systems, and field-based industry
                        projects. This full-time learning track ensures a
                        complete transition from classroom theory to
                        practical corporate readiness.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>Is an MBA in SCM suitable for working professionals?</summary>
                      <p>
                        Yes, this management track is exceptionally rewarding
                        for working professionals currently employed in
                        manufacturing units, logistics companies, or backend
                        retail roles. The corporate frameworks, lean
                        strategies, and software insights taught in the
                        program provide the strategic domain authority needed
                        to step away from daily frontline execution. It gives
                        experienced individuals the formal credentials
                        required to clear senior internal promotions.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>Is ISMR AICTE-approved for an MBA in Supply Chain Management?</summary>
                      <p>
                        Yes, ISMR holds complete statutory approvals from the
                        All India Council for Technical Education (AICTE) and
                        the Directorate of Technical Education (DTE),
                        Maharashtra. The program is formally affiliated with
                        Savitribai Phule Pune University (SPPU), guaranteeing
                        that your postgraduate degree follows strict
                        educational quality controls. This gives your
                        qualification global validity across both corporate
                        hiring boards and higher academic institutions.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>What is the scope of MBA Supply Chain Management in Pune?</summary>
                      <p>
                        The professional scope is exceptionally broad due to
                        Pune's status as a booming automotive, manufacturing,
                        and IT center. Graduates can step straight into
                        diverse corporate tracks such as procurement
                        logistics, inventory forecasting, warehouse
                        automation, and strategic global sourcing. Because
                        corporate profitability relies directly on lean
                        operations, our graduates enjoy consistent, long-term
                        demand across multiple industries.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>What is the typical MBA Supply Chain Management salary in Pune for fresh graduates?</summary>
                      <p>
                        ISMR graduates typically secure entry-level packages
                        ranging between INR 4.5 Lakhs to INR 7.5 Lakhs per
                        annum, with placements across Pune's automotive,
                        logistics, and e-commerce sectors. Your final
                        compensation depends heavily on your performance
                        during interviews, your academic track record, and
                        the recruiting company. As you gain hands-on
                        experience managing large-scale global networks, your
                        earning potential increases rapidly.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>Which companies recruit MBA graduates in Operations and Supply Chain Management from ISMR?</summary>
                      <p>
                        The MBA in Operations and Supply Chain Management
                        programme at ISMR has an 85% placement rate, with
                        recruiters including Amazon, Flipkart, DHL, Blue Dart,
                        FedEx, Maersk, Reliance Industries, Tata Motors,
                        Mahindra &amp; Mahindra, Maruti Suzuki, Bosch, Larsen
                        &amp; Toubro, Asian Paints, Adani Logistics, and TVS
                        Supply Chain Solutions.
                      </p>
                    </details>

                    <details className="accordion-item">
                      <summary>What is the difference between an MBA in Operations and Supply Chain Management and an MBA in Logistics Management?</summary>
                      <p>
                        MBA in Operations and Supply Chain Management covers
                        the full scope of procurement, production, inventory,
                        and distribution across an organization, while MBA in
                        Logistics Management in Pune focuses more
                        specifically on transportation, warehousing, and
                        distribution execution. ISMR's Operations and Supply
                        Chain Management programme includes logistics as one
                        of several core modules, giving graduates broader
                        managerial exposure across the entire supply chain
                        rather than logistics alone.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>



            <div className="mt-4 mb-4 pb-4">
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
