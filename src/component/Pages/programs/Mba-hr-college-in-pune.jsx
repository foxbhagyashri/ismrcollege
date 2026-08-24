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


export default function HRManagement() {

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
    .default-btn{
    font-size:12px;
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
            MBA in Marketing  <span className="text-warning">Management</span>
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
            <span className="text-warning">MBA in Marketing Management</span>
          </p>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className=" hero-panel">
            <span className="eyebrow">ISMR PUNE · MBA HR</span>
            <h1>Build a Career in HR with Real Placement Outcomes</h1>

            <div className="two-col-layout">
              <div className="overview-col mt-4">
                <h2>What is the MBA HR Course in Pune?</h2>
                <p className="intro-text">
                  Many students choose an MBA in HR assuming it guarantees a
                  job, but companies today hire based on skills, exposure,
                  and interview readiness, not just degrees. At ISMR, the
                  focus is on building job-ready HR professionals through
                  structured training, practical exposure, and
                  placement-oriented preparation.
                </p>
                <p className="intro-text">
                  The MBA in Human Resource Management in Pune at ISMR is a
                  2-year full-time postgraduate program affiliated with
                  SPPU, designed to align academic learning with real
                  corporate HR requirements.
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
                      <span className="facts-subtitle">MBA in Human Resource Management, ISMR Pune</span>
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
                        <span className="stat-number">3,100+ Placed</span>
                        <span className="stat-label">Out of 3,500+ Students | 600+ Recruiter Partners</span>
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
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      </span>
                      <span className="facts-label">Course Type</span>
                      <span className="facts-value">Full-Time</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                          <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Eligibility</span>
                      <span className="facts-value">Graduation</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Entrance Exams</span>
                      <span className="facts-value">MAH-CET / CAT / CMAT / MAT / ATMA / XAT</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Approval</span>
                      <span className="facts-value">AICTE</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                          <path d="M6 10v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="facts-label">Affiliation</span>
                      <span className="facts-value">SPPU</span>
                    </li>
                    <li className="facts-row">
                      <span className="facts-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                      </span>
                      <span className="facts-label">NAAC</span>
                      <span className="facts-value">Accredited Institute</span>
                    </li>
                  </ul>
                </div>
                <div className="cta-row">
                  <a className="default-btn" href="tel:9923786079">Check Your Eligibility for MBA HR Admission 2026 in Pune</a>
                  <a className="default-btn" href="/contact-us">Limited seats open for MBA HR Admission 2026 in Pune</a>
                </div>
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
            <h2>MBA HR Syllabus &amp; What You Learn</h2>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title">MBA HRM Syllabus — Semester-Wise Breakdown</h3>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Semester</span>
                    <span>Key MBA HRM Papers</span>
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
                      Human Resource Management, Marketing Management,
                      Financial Management, Operations Management, Business
                      Research Methods, Management Information Systems
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
                      Recruitment and Selection, Training and Development,
                      Performance Management, Compensation Management, Labor
                      Laws, Industrial Relations
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
                      Strategic Human Resource Management, Talent Management,
                      Employee Engagement, Leadership and Change Management,
                      HR Analytics, Project Work/Internship
                    </span>
                  </div>
                </div>

                <h3 className="diff-col-title mt-3">Practical Components</h3>
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
                    HR Workshops
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
                    Communication
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Leadership
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Negotiation
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Conflict Resolution
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Team Management
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
                <h3 className="diff-col-title">Core Focus Areas — What You Actually Learn in MBA HR (Beyond Subjects)</h3>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Talent Acquisition &amp; Recruitment Systems</span>
                      <span className="app-task">
                        Students learn how companies hire using tools such as
                        ATS, resume screening techniques, and structured
                        interview processes, helping them understand
                        real-world hiring workflows.
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
                      <span className="app-skill">Performance Management &amp; KPI Frameworks</span>
                      <span className="app-task">
                        Training includes designing appraisal systems,
                        understanding KPI-based evaluation, and managing
                        performance cycles used in organisations.
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
                      <span className="app-skill">Compensation, Payroll &amp; HR Operations</span>
                      <span className="app-task">
                        Covers salary structuring, payroll systems, and
                        employee benefits, which are essential for managing
                        HR operations in companies.
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
                      <span className="app-skill">Labour Laws &amp; Compliance Management</span>
                      <span className="app-task">
                        Students gain a practical understanding of labour
                        regulations, compliance processes, and handling
                        employee relations in Indian organisations.
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
                      <span className="app-skill">Strategic HR Management</span>
                      <span className="app-task">
                        Focuses on aligning HR decisions with business goals,
                        preparing students for leadership roles in HR.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="diff-col-title">Before vs After ISMR Training</h3>
                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Before MBA HR</span>
                    <span>After ISMR Training</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">No interview confidence</span>
                    <span className="tool-applied">Clear communication &amp; structured responses</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">No practical HR exposure</span>
                    <span className="tool-applied">Internship + live HR project experience</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Generic graduate profile</span>
                    <span className="tool-applied">Job-ready HR professional</span>
                  </div>
                  <div className="tool-row">
                    <span className="tool-name">Limited hiring knowledge</span>
                    <span className="tool-applied">Hands-on recruitment understanding</span>
                  </div>
                </div>

                <a href="/contact-us" className="default-btn diff-cta">
                  Apply Now →
                </a>
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
            <span className="eyebrow">CURRICULUM &amp; CAREER OPPORTUNITIES</span>
            <h2>Curriculum &amp; Career Opportunities</h2>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title">Who Should Pursue an MBA in HR</h3>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Graduates seeking structured career paths</span>
                      <span className="app-task">
                        MBA HR provides clearly defined job roles and
                        progression, making it suitable for students unsure
                        about their next step.
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
                      <span className="app-skill">Working professionals aiming for a career transition</span>
                      <span className="app-task">
                        Those in non-specialised roles can move into HR
                        positions with better growth opportunities and
                        salary potential.
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
                      <span className="app-skill">Students searching for MBA HR Colleges near Hadapsar</span>
                      <span className="app-task">
                        ISMR offers a strategic location advantage with
                        access to nearby IT and industrial hubs.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="diff-col-title">Who Should NOT Pursue an MBA in HR</h3>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Individuals not interested in people management</span>
                      <span className="app-task">
                        HR roles require constant interaction, conflict
                        resolution, and communication, making them
                        unsuitable for those who prefer isolated work.
                      </span>
                    </div>
                  </div>

                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Students expecting a high salary without skill development</span>
                      <span className="app-task">
                        MBA HR requires practical skill-building and
                        exposure; without that, placement opportunities are
                        limited.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title">HR Roles &amp; Salary Growth</h3>

                <div className="tool-table-wrap">
                  <div className="tool-row tool-row--head">
                    <span>Role</span>
                    <span>Experience</span>
                    <span>Salary</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">HR Executive</span>
                    <span className="tool-applied">0–2 yrs</span>
                    <span className="tool-applied">₹2.5–4.5 LPA</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">Recruiter</span>
                    <span className="tool-applied">0–3 yrs</span>
                    <span className="tool-applied">₹3–5 LPA</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">HR Generalist</span>
                    <span className="tool-applied">2–5 yrs</span>
                    <span className="tool-applied">₹4.5–7 LPA</span>
                  </div>

                  <div className="tool-row">
                    <span className="tool-name">HR Manager</span>
                    <span className="tool-applied">5+ yrs</span>
                    <span className="tool-applied">₹7–12 LPA</span>
                  </div>
                </div>

                <a href="/contact-us" className="default-btn diff-cta">
                  Apply Now →
                </a>
              </div>
            </div>
          </div>

          <div className="panel diff-panel mt-4">
            <span className="eyebrow">PLACEMENT SYSTEM &amp; RECRUITER NETWORK</span>
            <h2>Placement System &amp; Recruiter Network</h2>

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
                  <span className="stat-number">3,500+</span>
                  <span className="stat-label">
                    Students Passed — demonstrates consistent academic output
                    and a strong alumni base across industries
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
                  <span className="stat-number">3,100+</span>
                  <span className="stat-label">
                    Students Placed — indicates a high placement conversion
                    rate, reflecting effective training and recruiter
                    alignment
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
                  <span className="stat-number">600+</span>
                  <span className="stat-label">
                    Companies Associated — provides diverse opportunities
                    across IT, BFSI, consulting, and corporate sectors
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
                  <span className="stat-number">₹4.0–6.8 LPA</span>
                  <span className="stat-label">
                    Average Package — shows potential for high growth based
                    on skill development and performance
                  </span>
                </div>
              </div>
            </div>

            <div className="diff-layout">
              <div className="diff-left">
                <h3 className="diff-col-title mt-3">Top Recruiters at ISMR</h3>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Infosys, HDFC Bank, Bajaj Finserv, UBS, Reliance — these
                    companies offer roles in HR operations, recruitment, and
                    corporate HR functions
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Tech Mahindra, Atos Syntel, Amdocs, Allstate — IT and
                    service companies that actively hire HR professionals
                    for large-scale workforce management
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Tata Tele Services, Sharekhan, XDBS, XL Dynamics, Jaro
                    Education — organisations across sectors are providing
                    opportunities in recruitment, HR coordination, and
                    business HR roles
                  </li>
                </ul>

                <h3 className="diff-col-title mt-3">Why ISMR's Placement System Works</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Early internship exposure instead of last-year dependency</span>
                      <span className="app-task">
                        Students start working on real HR tasks during the
                        course, which builds confidence and improves their
                        ability to handle actual job responsibilities.
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
                      <span className="app-skill">Continuous mock interview system (not one-time training)</span>
                      <span className="app-task">
                        Multiple mock interviews with feedback ensure
                        students improve step-by-step instead of facing real
                        interviews unprepared.
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
                      <span className="app-skill">Skill-based training aligned with recruiter expectations</span>
                      <span className="app-task">
                        Training focuses on communication, hiring processes,
                        and HR operations — exactly what companies evaluate
                        during placement.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="diff-right">
                <h3 className="diff-col-title mt-3">Top MBA HR Colleges in Pune — How ISMR Compares</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Placement readiness starts early, not in the final semester</span>
                      <span className="app-task">
                        Unlike many MBA HR Colleges in Pune, where training
                        begins late, ISMR integrates internships and skill
                        development from the beginning.
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
                      <span className="app-skill">Structured placement system vs generic support</span>
                      <span className="app-task">
                        ISMR follows a step-by-step placement preparation
                        model, while many colleges rely on basic placement
                        assistance.
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
                      <span className="app-skill">Strategic location advantage near PCMC and IT hubs</span>
                      <span className="app-task">
                        Improves access to internships and real job
                        opportunities compared to less strategically located
                        colleges.
                      </span>
                    </div>
                  </div>
                </div>
                <p className="intro-text diff-closing">
                  This is why ISMR is counted among the Top MBA HR Colleges
                  in Pune.
                </p>

                <h3 className="diff-col-title">Best MBA HR Colleges in Pune for Placements — Why ISMR Stands Out</h3>
                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">Strong recruiter network across industries</span>
                      <span className="app-task">
                        With 600+ companies, students get access to
                        opportunities across IT, BFSI, and corporate sectors.
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
                      <span className="app-skill">Placement-focused training instead of a theory-heavy approach</span>
                      <span className="app-task">
                        Students are prepared for real hiring scenarios, not
                        just exams.
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
                      <span className="app-skill">Continuous preparation instead of last-minute training</span>
                      <span className="app-task">
                        Regular mock interviews and skill sessions improve
                        performance in placement drives.
                      </span>
                    </div>
                  </div>
                </div>
                <p className="intro-text diff-closing">
                  ISMR stands among the Best MBA HR Colleges in Pune for
                  placement outcomes.
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
            `}</style>

          {/* Salary Panel */}
          <div className="panel curr-panel mt-4">
            <span className="eyebrow">FEES &amp; ADMISSION</span>
            <h2>Admission Process &amp; Eligibility</h2>

            <div className="curr-layout">
              <div className="curr-left">
                <h3 className="curr-col-title">Eligibility</h3>

                <div className="app-card">
                  <div className="app-row">
                    <span className="app-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="app-text">
                      <span className="app-skill">A graduation in any discipline from a recognised university</span>
                      <span className="app-task">
                        Students from commerce, science, or arts backgrounds
                        can apply, making MBA HR a flexible career option
                        across academic streams.
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
                      <span className="app-skill">Entrance exam qualification (MAH-CET / CAT / CMAT / ATMA / MAT / XAT)</span>
                      <span className="app-task">
                        These scores are used to assess aptitude and form
                        the base for shortlisting candidates for further
                        evaluation.
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
                      <span className="app-skill">Basic communication and career intent evaluation</span>
                      <span className="app-task">
                        Since HR is a people-centric role, institutes assess
                        communication ability and clarity of career goals
                        during the selection process.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="curr-col-title">Admission Overview</h3>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Entrance exam-based selection — MAH-CET, CAT, or CMAT scores are considered
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Counselling and interview evaluation — ensures alignment with HR career path
                  </li>
                </ul>
              </div>

              <div className="curr-right">
                <h3 className="curr-col-title">Admission Process — Step by Step</h3>

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
                        Visit the official website, click on "Apply Online,"
                        fill out the application form, and pay the ₹1,100
                        registration fee. This step officially registers
                        your application and begins the admission evaluation
                        process.
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
                        The admissions team guides the program and evaluates
                        your career intent. A telephonic interview is
                        conducted to assess communication skills and
                        readiness.
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
                        Selected candidates receive an admission letter via
                        email. A payment of ₹30,000 must be made within four
                        days to confirm the seat.
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
                        Admission is provisionally confirmed after seat
                        confirmation. Final admission depends on document
                        verification and eligibility fulfilment.
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="curr-col-title">Important Admission Insight</h3>
                <ul className="method-list method-list--styled">
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Seats are allotted strictly on a first-confirmation
                    basis — many students lose admission despite selection
                    due to delayed confirmation
                  </li>
                  <li>
                    <span className="method-icon">
                      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Admissions are time-sensitive — early applicants have
                    better chances of securing seats
                  </li>
                </ul>

                <p className="curr-closing">
                  MBA HR Admission 2026 at ISMR in Pune is limited due to a
                  fixed intake capacity.
                </p>

                <a href="/Contactus" className="default-btn curr-cta">
                  Apply Now →
                </a>
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
            `}</style>


            <div className="">
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
