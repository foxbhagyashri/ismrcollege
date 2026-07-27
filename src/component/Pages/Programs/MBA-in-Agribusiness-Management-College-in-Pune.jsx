import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../form/ContactForm";
import Howtoaplydownoadform from "../../form/Howtoaplydownoadform";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../form/ISMRFormModal";

export default function MBAAgribusinessManagement() {

  const [openFaq, setOpenFaq] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };



  const scmFaqs = [
    {
      q: "What is an MBA in Agribusiness Management?",
      a: "The MBA in Agribusiness Management is a two-year postgraduate program that integrates agricultural science with business disciplines, including supply chain management, commodity markets, rural finance, food processing, and agri-policy. The program prepares graduates for leadership roles across agribusiness, agri-tech, food processing, rural banking, commodity trading, and agricultural supply chains. ",
    },
    {
      q: "Who can apply for an MBA in Agribusiness Management in Pune? ",
      a: "The program is open to graduates from any stream — Agriculture, Science, Commerce, or Engineering — holding a minimum of 50% aggregate marks from a recognised university.Applicants must also hold a valid score from an accepted entrance exam such as MAH-MBA CET, CAT, CMAT, ATMA, or MAT.",
    },
    {
      q: "What is the duration of the MBA Agribusiness Management course?",
      a: "The Agribusiness Management course in Pune at ISMR is a two-year full-time program structured across four semesters.Each semester progressively builds on the previous one, moving from foundational agri-economics and supply chain principles to advanced topics in commodity risk management, sustainability strategy, and agri-entrepreneurship.",
    },
    {
      q: "Is MBA Agribusiness Management suitable for non-agriculture graduates?",
      a: "Yes. Commerce, Science, and Engineering graduates are fully eligible and regularly pursue this program to build a specialised career in agri-trade, food processing, rural finance, or commodity markets.The curriculum is structured to develop an agricultural context from the ground up for students without prior agri-science backgrounds.",
    },
    {
      q: "Is ISMR AICTE-approved for MBA Agribusiness Management?",
      a: "Yes. ISMR holds full AICTE approval and is affiliated with Savitribai Phule Pune University (SPPU). It also holds DTE and AIMS recognition, ensuring the degree meets all statutory requirements for employment, government recruitment, and further academic pursuits.",
    },
    {
      q: "What is the scope of MBA Agribusiness Management in India? ",
      a: "Agribusiness management professionals are in active demand across commodity exchanges, food processing companies, agri-tech startups, and rural finance institutions.FMCG supply chains and government development agencies. India's organised agri-economy continues to expand, and the shortage of trained management professionals within the sector makes this one of the more stable and opportunity-rich specialisations available today.",
    },
    {
      q: "What are the MBA Agribusiness Fees at ISMR Pune for 2026?",
      a: "For accurate and current MBA Agribusiness fees Pune 2026 information, we recommend contacting ISMR's admissions office directly or downloading the program brochure, as fee structures are subject to annual revision and may vary based on category, scholarship eligibility, or government-regulated fee norms under the DTE Maharashtra framework.",
    },
    {
      q: "How does an SPPU-affiliated MBA in Agribusiness Management benefit students at ISMR?",
      a: "SPPU affiliation ensures that the degree awarded by ISMR carries full university recognition accepted by employers, public sector institutions, and postgraduate programs across India.It also means the curriculum, examination standards, and academic processes are governed by one of Maharashtra's most established and respected university frameworks, adding credibility to every credential ISMR graduates hold.",
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
            MBA in Agribusiness  <span className="text-warning">Management</span>
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
            <span className="text-warning">MBA in Agribusiness Management</span>
          </p>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className="panel">
            <h1>Searching for the Right MBA in Agribusiness Management College in Pune? Your Answer Starts Here</h1>

            <p className="intro-text">
              India's agriculture sector is evolving fast — from traditional farming into organised supply chains, commodity markets, food processing industries, and agri-tech ventures.
            </p>

            <p className="intro-text">
              ISMR prepares you to lead at every level of this transformation through an SPPU-affiliated academic framework, industry-integrated learning, and experienced faculty that brings real agri-business experience into every classroom.
            </p>

            <a href="/Contactus" className="default-btn">
              Book a Free Counselling Session →
            </a>
            <p className="intro-text small-note">
              Get your questions answered before you commit to anything.
            </p>
          </div>

          <div className="panel mt-4">
            <h2>Why Choose ISMR for an MBA in Agribusiness Management in Pune?</h2>

            <ul className="gap-list">
              <li>AICTE Approved</li>
              <li>SPPU Affiliated</li>
              <li>DTE & AIMS Recognised</li>
              <li>Industry-Oriented Curriculum</li>
              <li>Field Visits & Live Projects</li>
              <li>Practical Value-Chain Exposure</li>
            </ul>

            <p className="intro-text">
              ISMR offers an AICTE-approved MBA in Agribusiness Management in Pune with an industry-oriented curriculum, SPPU affiliation, field visits, live projects, and practical exposure designed to prepare students for leadership roles across the agribusiness value chain.
            </p>
          </div>

          <div className="panel mt-4">
            <h2>Program Snapshot</h2>

            <table className="snapshot-table">
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
                  <td>Affiliation</td>
                  <td>Savitribai Phule Pune University (SPPU)</td>
                </tr>
                <tr>
                  <td>Approval</td>
                  <td>AICTE / DTE / AIMS</td>
                </tr>
                <tr>
                  <td>Learning Format</td>
                  <td>Case Studies, Field Visits, Live Projects</td>
                </tr>
              </tbody>
            </table>

            <p className="intro-text">
              Learning goes beyond the classroom. Students visit agricultural mandis, food processing units, and rural cooperatives, grounding theory in real operational environments before graduation.
            </p>

            <a href="/Contactus" className="default-btn">
              Get the Full Programme Details →
            </a>
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Core Subjects Panel */}
          <div className="panel">
            <h2>Core Subjects at a Glance</h2>

            <h3 style={{ fontSize: "20px" }}>1. Agri-Supply Chain & Logistics</h3>
            <p className="intro-text">
              Learn how produce moves from farm gate to end consumer, covering procurement, cold chain infrastructure, warehousing, and last-mile distribution. Focus is on reducing post-harvest losses and improving margin realisation.
            </p>

            <h3 style={{ fontSize: "20px" }}>2. Agricultural Marketing & Trade</h3>
            <p className="intro-text">
              Understand commodity branding, mandi-to-retail transitions, export documentation, and international agri-trade policy. Build market linkage strategies that deliver real value to producers.
            </p>

            <h3 style={{ fontSize: "20px" }}>3. Rural Finance & Microfinance</h3>
            <p className="intro-text">
              Study NABARD credit programmes, Kisan Credit Card structures, SHG models, and MFI lending frameworks. Learn to assess farm enterprise viability and design rural financial products for smallholder farmers.
            </p>

            <h3 style={{ fontSize: "20px" }}>4. Commodity Markets & Risk Management</h3>
            <p className="intro-text">
              Develop working knowledge of NCDEX and MCX exchanges, futures and options in agri-commodities, and enterprise-level hedging strategies to manage the price volatility inherent in agricultural business.
            </p>

            <h3 style={{ fontSize: "20px" }}>5. Food Processing & Value Chain Management</h3>
            <p className="intro-text">
              Explore how raw produce becomes consumer-ready products — with focus on FSSAI compliance, value addition economics, food safety systems, and retail integration in India's growing food processing sector.
            </p>

            <h3 style={{ fontSize: "20px" }}>6. Agri-Policy, Regulation & Sustainability</h3>
            <p className="intro-text">
              Examine APMC structures, MSP mechanisms, contract farming regulations, and FPO frameworks. Understand how climate-smart agriculture and global sustainability mandates are reshaping agri-business strategy.
            </p>

            <h3 style={{ fontSize: "20px" }}>7. Farm Business Management</h3>
            <p className="intro-text">
              Apply core management principles — financial planning, operational efficiency, cash flow management — directly to farm enterprises. Build business plans suited to both smallholder contexts and commercial farming operations.
            </p>

            <h3 style={{ fontSize: "20px" }}>8. Agri-Entrepreneurship & Startup Ecosystem</h3>
            <p className="intro-text">
              Explore FPO structures, agri-tech incubators, and government startup schemes. Identify unmet market opportunities and develop pitch-ready agri-business concepts capable of attracting institutional funding.
            </p>
          </div>

          {/* Eligibility & Admissions Criteria Panel */}
          <div className="panel mt-4">
            <h2>Eligibility & Admissions Criteria</h2>

            <h3 style={{ fontSize: "20px" }}>Academic Qualification</h3>
            <ul className="gap-list">
              <li>Bachelor's degree in any stream from a recognised university</li>
              <li>Priority for: Agriculture, Horticulture, Food Technology, Dairy, Veterinary, Fisheries graduates</li>
              <li>Commerce, Science & Engineering graduates fully eligible</li>
            </ul>

            <h3 style={{ fontSize: "20px" }}>Minimum Marks</h3>
            <ul className="gap-list">
              <li>General category: 50% aggregate at undergraduate level</li>
              <li>SC / ST / OBC / PwD: 45% aggregate (as per Maharashtra state norms)</li>
            </ul>

            <h3 style={{ fontSize: "20px" }}>Entrance Exams Accepted</h3>
            <ul className="gap-list">
              <li>MAH-MBA CET (mandatory for Maharashtra domicile — CAP Round)</li>
              <li>CAT / CMAT / ATMA / MAT (also accepted)</li>
            </ul>

            <h3 style={{ fontSize: "20px" }}>Work Experience</h3>
            <ul className="gap-list">
              <li>Not mandatory</li>
              <li>Relevant experience in agri-inputs, rural banking, food processing, or agri-tech is an advantage during selection</li>
            </ul>
          </div>

          {/* Admissions Support Panel */}
          <div className="panel mt-4">
            <h2>How ISMR Supports Your Admission</h2>

            <p className="intro-text">
              The DTE Maharashtra CAP Round process — CET registration, document verification, preference filling, and seat acceptance — can be complex for first-time applicants.
            </p>

            <p className="intro-text">
              ISMR's admissions counseling team provides:
            </p>

            <ul className="gap-list">
              <li>✅ Entrance exam identification and registration guidance</li>
              <li>✅ Eligibility documentation support</li>
              <li>✅ Error-free enrollment support</li>
            </ul>

            <p className="intro-text">
              Students seeking MBA in Agribusiness Management admission in Pune for the 2026 academic session receive end-to-end support from ISMR's admissions counselling team, including entrance exam guidance, eligibility verification, documentation assistance, and enrolment support.
            </p>

            <p className="intro-text">
              With SPPU affiliation, AICTE approval, industry-focused learning, and dedicated admission assistance, ISMR helps students move from admission confusion to career clarity — one guided step at a time.
            </p>
          </div>

        </div>
      </section>
      <section className="marketing-section">
        <div className="content-container">

          {/* Who Should Pursue Panel */}
          <div className="panel">
            <h2>Who Should Pursue This Course?</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Is the Agribusiness Management Course in Pune Right for You?
            </p>

            <p className="intro-text">
              Not every MBA is built for every ambition. This program is specifically designed for students and professionals who want to operate at the intersection of agriculture and business leadership. Here's who benefits most:
            </p>

            <h3 style={{ fontSize: "20px" }}>Agriculture & Science Graduates</h3>
            <p className="intro-text">
              Your technical foundation is your biggest advantage — this program adds the business strategy layer on top of it.
            </p>
            <p className="intro-text">
              You graduate as the rare professional who understands both crop science and corporate decision-making, making you a priority hire for agri-input firms, consulting companies, and commodity trading houses.
            </p>

            <h3 style={{ fontSize: "20px" }}>Commerce & Business Graduates</h3>
            <p className="intro-text">
              Financial literacy alone isn't enough to crack agri-commodity markets or rural supply chains.
            </p>
            <p className="intro-text">
              This program gives you the sector-specific grounding — APMC trade structures, commodity pricing mechanics, agri-supply chain logic that no general MBA covers.
            </p>

            <h3 style={{ fontSize: "20px" }}>Working Professionals in Agri, Seed, Fertilizer & FMCG Firms</h3>
            <p className="intro-text">
              Already working in the sector but hitting a ceiling without formal management credentials?
            </p>
            <p className="intro-text">
              This curriculum addresses the strategic and operational challenges you face daily — making every module immediately applicable to your current role and your next one.
            </p>

            <h3 style={{ fontSize: "20px" }}>Rural Economy & Development Professionals</h3>
            <p className="intro-text">
              If your work touches NABARD programmes, FPOs, rural cooperatives, or microfinance institutions — this program sharpens both the financial analysis and policy understanding you need to design interventions that create real, measurable rural impact.
            </p>

            <h3 style={{ fontSize: "20px" }}>Agri-Entrepreneurs & Family Farm Business Members</h3>
            <p className="intro-text">
              Running or inheriting a farm enterprise, agri-input dealership, or rural processing unit?
            </p>
            <p className="intro-text">
              This program replaces guesswork with a framework that covers data-driven planning, enterprise financial management, and market linkage strategies that help traditional agri-businesses scale confidently.
            </p>
          </div>

        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">

          {/* Benefits Panel */}
          <div className="panel">
            <h2>Benefits of Pursuing an MBA in Agribusiness Management</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Career Advantages of Pursuing MBA in Agribusiness Management at ISMR
            </p>

            <p className="intro-text">
              Choosing the right Agribusiness Management specialization in Pune is only the first step. Selecting an institute that combines academic excellence with industry exposure is equally important.
            </p>

            <p className="intro-text">
              ISMR's MBA in Agribusiness Management in Pune combines academic excellence, practical learning, and industry engagement to prepare students for careers across agribusiness, food processing, agri-tech, commodity markets, and rural development.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              1. Entering a Sector With Structural Long-Term Demand:
            </p>
            <p className="intro-text">
              Agriculture is one of India's largest economic contributors, yet organised management talent within the sector remains significantly scarce relative to its scale.
            </p>
            <p className="intro-text">
              This gap creates sustained hiring demand across commodity firms, food processing companies, agri-tech ventures, and rural financial institutions for precisely the kind of professional this program produces.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              2. Career Advantage Over General MBA Graduates:
            </p>
            <p className="intro-text">
              A general MBA graduate entering agri-sector roles lacks contextual fluency — commodity price cycles, mandi regulation, and rural credit infrastructure are invisible to them.
            </p>
            <p className="intro-text">
              ISMR MBA Agribusiness Pune graduates enter as specialists, translating directly into faster role progression and access to opportunities that generalist candidates cannot compete for.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              3. Hands-On Exposure to Industry Tools and Platforms:
            </p>
            <p className="intro-text">
              Students work with tools actively deployed across the industry, including ERP systems used in food processing operations, GIS-based crop mapping tools for precision agriculture, and commodity risk models used on NCDEX and MCX.
            </p>
            <p className="intro-text">
              This operational fluency is what separates ISMR graduates from candidates with only classroom training.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              4. Cross-Sector Career Applicability:
            </p>
            <p className="intro-text">
              This degree opens doors well beyond traditional agriculture; graduates move into FMCG supply chains, agri-tech startups, cooperative banking, commodity brokerage, rural microfinance, export-import firms, and international development organisations.
            </p>
            <p className="intro-text">
              Few management specialisations offer this breadth of sectoral mobility.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              5. A Rare Combination of Technical and Strategic Competence:
            </p>
            <p className="intro-text">
              Most business professionals lack domain knowledge in agriculture. Most agricultural professionals lack strategic business skills.
            </p>
            <p className="intro-text">
              This program builds both — simultaneously. Employers across agri-input firms, food processing conglomerates, and rural development institutions actively seek this combination because it remains genuinely rare.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              6. Location Advantage Within Maharashtra's Agri-Industrial Corridors:
            </p>
            <p className="intro-text">
              Studying in Pune provides access to Maharashtra's major agri-industrial corridors, including Nashik's horticulture and export clusters, Sangli's food processing ecosystem, Kolhapur's cooperative sector, and Pune's growing agri-tech industry.
            </p>
            <p className="intro-text">
              This proximity creates valuable opportunities for internships, field visits, live projects, and industry interaction throughout the program.
            </p>
          </div>

        </div>
      </section>

      <div className="content-container">
        <div className="panel">

          <h2>Frequently Asked Questions — MBA Agribusiness Management at ISMR Pune
          </h2>

          <div className="accordion">
            {scmFaqs.map((item, index) => (
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

      <Faq />
    </section>
  );
}
