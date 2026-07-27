import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../form/ContactForm";
import Howtoaplydownoadform from "../../form/Howtoaplydownoadform";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../form/ISMRFormModal";

export default function OperationSupplyChainManagement() {

  const [openFaq, setOpenFaq] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const scmFaqs = [
    {
      q: "What is an MBA in Operations and Supply Chain Management in Pune?",
      a: "An MBA in Operations and Supply Chain Management in Pune is a specialized two-year postgraduate degree centered on making business production and distribution lines as efficient as possible. The program trains students to manage raw material sourcing, organize automated warehousing layouts, and coordinate international transportation networks. It blends traditional corporate leadership principles with modern analytical tools to prepare graduates for high-level management roles.",
    },
    {
      q: "Who can apply for an MBA in Supply Chain Management in Pune?",
      a: "Any graduate holding a bachelor's degree in any stream from a recognized university with a minimum aggregate of 50% marks (45% for reserved categories) is fully eligible to apply. Additionally, candidates must possess a valid scorecard from state or national management entrance examinations like MAH-MBA CET, CAT, or CMAT. This ensures every student admitted to the programme meets the academic rigour that ISMR and Savitribai Phule Pune University demand.",
    },
    {
      q: "What is the duration of the MBA Operations and Supply Chain Management course?",
      a: "The program spans a fixed duration of two academic years, which are systematically split into four comprehensive semesters. The first year focuses on building foundational management capabilities, while the second year dives deeply into advanced operations, ERP systems, and field-based industry projects. This full-time learning track ensures a complete transition from classroom theory to practical corporate readiness.",
    },
    {
      q: "Is an MBA in SCM suitable for working professionals?",
      a: "Yes, this management track is exceptionally rewarding for working professionals currently employed in manufacturing units, logistics companies, or backend retail roles. The corporate frameworks, lean strategies, and software insights taught in the program provide the strategic domain authority needed to step away from daily frontline execution. It gives experienced individuals the formal credentials required to clear senior internal promotions.",
    },
    {
      q: "Is ISMR AICTE-approved for an MBA in Supply Chain Management?",
      a: "Yes, ISMR holds complete statutory approvals from the All India Council for Technical Education (AICTE) and the Directorate of Technical Education (DTE), Maharashtra. The program is formally affiliated with Savitribai Phule Pune University (SPPU), guaranteeing that your postgraduate degree follows strict educational quality controls. This gives your qualification global validity across both corporate hiring boards and higher academic institutions.",
    },
    {
      q: "What is the scope of MBA Supply Chain Management in Pune?",
      a: "The professional scope is exceptionally broad due to Pune's status as a booming automotive, manufacturing, and IT center. Graduates can step straight into diverse corporate tracks such as procurement logistics, inventory forecasting, warehouse automation, and strategic global sourcing. Because corporate profitability relies directly on lean operations, our graduates enjoy consistent, long-term demand across multiple industries.",
    },
    {
      q: "What is the typical MBA Supply Chain Management salary in Pune for fresh graduates?",
      a: "ISMR graduates typically secure entry-level packages ranging between INR 4.5 Lakhs to INR 7.5 Lakhs per annum, with placements across Pune's automotive, logistics, and e-commerce sectors. Your final compensation depends heavily on your performance during interviews, your academic track record, and the recruiting company. As you gain hands-on experience managing large-scale global networks, your earning potential increases rapidly.",
    },
    {
      q: "Which companies recruit MBA graduates in Operations and Supply Chain Management from ISMR?",
      a: "The MBA in Operations and Supply Chain Management programme at ISMR has an 85% placement rate, with recruiters including Amazon, Flipkart, DHL, Blue Dart, FedEx, Maersk, Reliance Industries, Tata Motors, Mahindra & Mahindra, Maruti Suzuki, Bosch, Larsen & Toubro, Asian Paints, Adani Logistics, and TVS Supply Chain Solutions.",
    },
    {
      q: "What is the difference between an MBA in Operations and Supply Chain Management and an MBA in Logistics Management?",
      a: "MBA in Operations and Supply Chain Management covers the full scope of procurement, production, inventory, and distribution across an organization, while MBA in Logistics Management in Pune focuses more specifically on transportation, warehousing, and distribution execution. ISMR's Operations and Supply Chain Management programme includes logistics as one of several core modules, giving graduates broader managerial exposure across the entire supply chain rather than logistics alone.",
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
            MBA in HR   <span className="text-warning">Management</span>
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
            <span className="text-warning">MBA in HR Management</span>
          </p>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className="panel">
            <h1>MBA HR College in Pune – Where Deloitte, TCS & HDFC Bank Hire HR Talent</h1>

            <p className="intro-text">
              The MBA in Human Resource Management at ISMR is offered by an AICTE-approved MBA HR College in Pune, designed to prepare students for careers in recruitment, HR operations, talent management, and strategic human resources.
            </p>

            <a href="/Contactus" className="default-btn">
              Get in touch today for personalized counseling →
            </a>
          </div>

          <div className="panel mt-4">
            <h2>How ISMR's MBA HR Placement System Works</h2>

            <p className="intro-text">
              When Big 4 consulting firms recruit HR professionals from a Pune B-school, that's not a standard outcome. It's the result of a specific system.
            </p>

            <p className="intro-text">
              Many management institutes introduce placement preparation only during the final semester.
            </p>

            <p className="intro-text">
              ISMR B-School's "Success Cell" — a dedicated placement unit with a Corporate Relations Department — operates throughout the program.
            </p>

            <p className="intro-text">
              Pre-placement training, summer internship coordination, and final placement drives are all managed by the same structured cell, not handed off to a single placement officer in the final year.
            </p>
          </div>

          <div className="panel mt-4">
            <h2>2024–25 Placement Highlights</h2>

            <p className="intro-text">
              The 2024–25 MBA HR batch at ISMR recorded a 90% placement rate.
            </p>

            <p className="intro-text">
              Recruiters this year included Deloitte, Accenture, Infosys, TCS, Wipro, Cognizant, Capgemini, EY, PwC, KPMG, HCL Technologies, Tech Mahindra, ICICI Bank, HDFC Bank, and Aditya Birla Group.
            </p>

            <p className="intro-text">
              That is a recruiter profile — especially the Big 4 and Aditya Birla Group — that distinguishes ISMR's MBA HR program among SPPU-affiliated management institutes in Pune.
            </p>

            <p className="intro-text">
              The page below explains exactly what produces this outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Course Overview Panel */}
          <div className="panel">
            <h2>MBA in Human Resource Management in Pune – Course Overview</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full Program Name</td>
                    <td>MBA in Human Resource Management</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>2 Years (4 Semesters)</td>
                  </tr>
                  <tr>
                    <td>Program Mode</td>
                    <td>Full-Time, On-Campus</td>
                  </tr>
                  <tr>
                    <td>Affiliation</td>
                    <td>Savitribai Phule Pune University (SPPU)</td>
                  </tr>
                  <tr>
                    <td>Approval</td>
                    <td>AICTE</td>
                  </tr>
                  <tr>
                    <td>Accreditation</td>
                    <td>NAAC B++</td>
                  </tr>
                  <tr>
                    <td>Recognitions</td>
                    <td>AIMA, AIMS, AISHE</td>
                  </tr>
                  <tr>
                    <td>Ranking</td>
                    <td>20th — Beyond IIM Top 100 B-School Survey</td>
                  </tr>
                  <tr>
                    <td>Entrance Exams Accepted</td>
                    <td>MAH-CET / CAT / CMAT / MAT / XAT / ATMA / GMAT</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>Wadki, Hadapsar, Pune</td>
                  </tr>
                  <tr>
                    <td>2024–25 MBA HR Placement Rate</td>
                    <td>90%</td>
                  </tr>
                  <tr>
                    <td>Highest Package (2023)</td>
                    <td>₹17.50 LPA</td>
                  </tr>
                  <tr>
                    <td>MBA Fee (2 Years)</td>
                    <td>₹4.6 Lakhs – ₹5.3 Lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Eligibility Panel */}
          <div className="panel mt-4">
            <h2>MBA HR Eligibility in Pune – Admission Criteria at ISMR</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Academic Requirement</td>
                    <td>Graduation from any UGC-recognised university in any stream — arts, science, commerce, or engineering. No prior HR or management background is required to apply.</td>
                  </tr>
                  <tr>
                    <td>Minimum Marks</td>
                    <td>50% aggregate in graduation. Reserved category candidates (SC/ST/OBC) are eligible at 45%, as per SPPU norms.</td>
                  </tr>
                  <tr>
                    <td>Entrance Exam Requirement</td>
                    <td>A valid score in any one of the following: MAH-MBA CET, CAT, CMAT, MAT, XAT, ATMA, or GMAT.</td>
                  </tr>
                  <tr>
                    <td>Selection Process</td>
                    <td>Shortlisted candidates complete a telephonic or video call interview conducted by ISMR's admissions team. The interview evaluates communication clarity and career intent — skills that are relevant to an HR career from day one.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fees Panel */}
          <div className="panel mt-4">
            <h2>MBA HR Course Fees in Pune – What You Pay at ISMR</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Total 2-Year MBA HR Fees Range at ISMR: ₹4.6 Lakhs – ₹5.3 Lakhs
            </p>

            <p className="intro-text">
              The fee is paid across four semesters. Students can also choose from ISMR's MBA Global or MBA Advanced variants, which carry different fee structures.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Education Loan Partners:
            </p>
            <p className="intro-text">
              ISMR has formal tie-ups with the following lenders for education loan assistance: InVCred, Avanse, Auxilo, Credila, and Axis Bank. The admissions team provides loan documentation support directly.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Hostel Fee:
            </p>
            <p className="intro-text">
              On-campus hostel (separate facilities for girls and boys): ₹1.1 Lakhs per year. The hostel fee includes food.
            </p>

            <a href="/Contactus" className="default-btn">
              Get the Full Fee Structure & Loan Details →
            </a>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Curriculum Panel */}
          <div className="panel">
            <h2>Semester-Wise MBA HR Curriculum at ISMR</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Semester 1</td>
                    <td>Principles of Management, Business Economics, Organizational Behaviour, Financial Accounting & Control, Marketing Management, Business Communication & Soft Skills</td>
                  </tr>
                  <tr>
                    <td>Semester 2</td>
                    <td>Human Resource Management, Industrial Relations & Labour Laws, Research Methodology, Operations Management, Management Information Systems, Business Ethics & Corporate Governance</td>
                  </tr>
                  <tr>
                    <td>Semester 3</td>
                    <td>Talent Acquisition & Recruitment, Compensation & Benefits Management, Learning & Development, Performance Management Systems, HR Analytics, Organisational Behaviour (Advanced)</td>
                  </tr>
                  <tr>
                    <td>Semester 4</td>
                    <td>Strategic Human Resource Management, Organisational Development & Change Management, International HRM, Project Dissertation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text small-note mt-4">
              Subjects are as per the SPPU MBA curriculum. Confirm the current semester structure with the admissions office.
            </p>
          </div>

          {/* Value-Added Certifications Panel */}
          <div className="panel mt-4">
            <h2>Value-Added Certification Courses (Included in Program)</h2>

            <p className="intro-text">
              Beyond the MBA curriculum, ISMR students complete certification courses that directly map to HR technology and operations:
            </p>

            <ul className="gap-list">
              <li>Digital Marketing</li>
              <li>Business Analytics</li>
              <li>Advanced Excel (relevant for HR data, payroll, workforce analytics)</li>
              <li>Entrepreneurship Management</li>
              <li>Negotiation Skills</li>
              <li>Investment Banking & Hedge Funds</li>
            </ul>

            <p className="intro-text">
              For HR students specifically, Business Analytics and Advanced Excel certifications build the quantitative HR skills — workforce planning, attrition analysis, compensation benchmarking — that large recruiters test during interviews.
            </p>
          </div>

          {/* Program Depth Panel */}
          <div className="panel mt-4">
            <h2>What the MBA HR Program Actually Builds</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Talent Acquisition in Real Hiring Environments:
            </p>
            <p className="intro-text">
              Students learn end-to-end recruitment — job description writing, sourcing, ATS-based screening, structured interview design, and offer closure. By the time of final placement interviews, this is applied experience, not textbook knowledge.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Compensation, Payroll, and HR Operations:
            </p>
            <p className="intro-text">
              CTC structuring, PF, ESIC, and payroll compliance are taught at an operational level. These are the first responsibilities most HR executives handle on the job.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Labour Laws and Compliance — India-Specific:
            </p>
            <p className="intro-text">
              The program covers the Industrial Disputes Act, Factories Act, Contract Labour Act, Shops & Establishments Act, and modern updates relevant to Indian HR professionals.
            </p>
            <p className="intro-text">
              Companies like HDFC Bank and Aditya Birla Group — both of which recruit from ISMR — operate at a significant regulatory scale and expect working knowledge of compliance from HR hires.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Performance Management and KPI Design:
            </p>
            <p className="intro-text">
              Appraisal cycle design, KPI framework building, bell-curve calibration, and 360-degree feedback systems are part of the curriculum — areas frequently tested in HR generalist and HRBP interviews at consulting and IT services firms.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Strategic HR and People Analytics:
            </p>
            <p className="intro-text">
              Final-year exposure to HR as a business function — workforce planning, DEI metrics, HR technology adoption — prepares students for growth beyond the executive level.
            </p>
          </div>

          {/* Location Advantage Panel */}
          <div className="panel mt-4">
            <h2>MBA in HR Management Near PCMC</h2>

            <p className="intro-text">
              Pimpri-Chinchwad's manufacturing and auto belt runs on compliance-heavy HR — factory floor labour law, contractor management, industrial relations.
            </p>

            <p className="intro-text">
              The MBA HR curriculum's coverage of the Industrial Disputes Act, Factories Act, Contract Labour Act, and Shops & Establishments Act builds exactly the working knowledge that HR hires at PCMC's manufacturing employers are expected to have from day one.
            </p>

            <a href="/Contactus" className="default-btn">
              Talk to Our Admissions Team →
            </a>
          </div>

        </div>
      </section>



      <section className="marketing-section">
        <div className="content-container">

          {/* Success Cell Panel */}
          <div className="panel">
            <h2>How ISMR's 'Success Cell' Drives MBA HR Placements in Pune</h2>

            <p className="intro-text">
              ISMR's placement process goes beyond conventional placement support by providing continuous training throughout the MBA HR program.
            </p>

            <p className="intro-text">
              The Success Cell operates as a Corporate Relations Department (CRD) with three distinct functions:
            </p>

            <h3 className="sub-heading">Pre-Placement Training</h3>
            <p className="intro-text">
              Communication, HR situational interviews, case-based problem solving, and role-specific mock interviews run continuously from Semester 1. Students are not introduced to interview preparation in the final month.
            </p>

            <h3 className="sub-heading">Summer Internship Coordination</h3>
            <p className="intro-text">
              The CRD matches students with companies for internships during the program. Students from the MBA HR batch have interned with companies like Infosys, HDFC Bank, Aditya Birla Sunlife Insurance, IDFC First Bank, and Bajaj Finserv. A completed internship in a company that later recruits from campus is a practical advantage.
            </p>

            <h3 className="sub-heading">Final Placement Drives</h3>
            <p className="intro-text">
              Recruiters are mapped to student profiles before the drive — not assigned randomly on the day. The HR-specific 2024–25 batch achieved a 90% placement rate under this model.
            </p>
          </div>

          {/* Placement Snapshot Panel */}
          <div className="panel mt-4">
            <h2>MBA HR Placements in Pune – ISMR 2024–25 Data</h2>

            <h3 className="sub-heading">HR Batch Placement Snapshot</h3>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Figure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MBA HR Placement Rate 2024–25</td>
                    <td>90%</td>
                  </tr>
                  <tr>
                    <td>Overall Institute Placement Rate 2024–25</td>
                    <td>92%</td>
                  </tr>
                  <tr>
                    <td>Highest Package (Institute, 2023)</td>
                    <td>₹17.50 LPA</td>
                  </tr>
                  <tr>
                    <td>Placement Cell</td>
                    <td>Success Cell (CRD)</td>
                  </tr>
                  <tr>
                    <td>Award</td>
                    <td>National Excellence Award for Campus Placement in Maharashtra — Integrated Chambers of Commerce and Industry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* HR Roles Panel */}
          <div className="panel mt-4">
            <h2>HR Roles Offered by Recruiters</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Recruiter</th>
                    <th>Typical HR Roles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Deloitte, EY, PwC, KPMG</td>
                    <td>HR Analyst, Talent Acquisition Analyst, People Advisory Associate</td>
                  </tr>
                  <tr>
                    <td>Infosys, TCS, Wipro, Accenture, Cognizant, Capgemini, HCL</td>
                    <td>HR Executive, Campus Recruiter, HR Operations, HRBP (entry)</td>
                  </tr>
                  <tr>
                    <td>Tech Mahindra</td>
                    <td>HR Coordinator, Talent Acquisition</td>
                  </tr>
                  <tr>
                    <td>ICICI Bank, HDFC Bank</td>
                    <td>HR Operations Executive, Recruitment Executive, Compensation & Benefits</td>
                  </tr>
                  <tr>
                    <td>Aditya Birla Group</td>
                    <td>HR Management Trainee, HRBP, Talent Acquisition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Salary Panel */}
          <div className="panel mt-4">
            <h2>HR Salary Range After MBA HR at ISMR</h2>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Experience</th>
                    <th>Salary Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>HR Executive</td>
                    <td>0–2 years</td>
                    <td>₹3.0 – 4.5 LPA</td>
                  </tr>
                  <tr>
                    <td>Recruiter / Talent Acquisition</td>
                    <td>0–2 years</td>
                    <td>₹3.5 – 5.5 LPA</td>
                  </tr>
                  <tr>
                    <td>HR Analyst (Big 4 / Consulting)</td>
                    <td>0–2 years</td>
                    <td>₹5.0 – 8.0 LPA</td>
                  </tr>
                  <tr>
                    <td>HR Generalist</td>
                    <td>3–5 years</td>
                    <td>₹5.0 – 9.0 LPA</td>
                  </tr>
                  <tr>
                    <td>HR Business Partner</td>
                    <td>5+ years</td>
                    <td>₹9.0 – 18.0 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text small-note">
              Final compensation depends on interview performance, academic record, and the recruiting company.
            </p>
          </div>

        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">

          {/* Location & Accessibility Panel */}
          <div className="panel">
            <h2>MBA HR College in Pune – Location & Accessibility</h2>

            <p className="intro-text">
              ISMR B-School is located in Wadki, Hadapsar, Pune — on the Pune–Solapur Road corridor in eastern Pune. This positions the institute within direct reach of:
            </p>

            <ul className="gap-list">
              <li>Kharadi IT Park — One of Pune's largest IT employment zones, housing Infosys, Cognizant, and Capgemini operations that actively recruit HR professionals</li>
              <li>Magarpatta City — A self-contained township with a large corporate zone employing thousands of professionals across IT and ITES</li>
              <li>Hadapsar MIDC — Manufacturing and industrial units requiring HR operations and compliance professionals</li>
              <li>Viman Nagar and Lohegaon corridor — Home to aviation, logistics, and services firms</li>
            </ul>

            <p className="intro-text">
              For students commuting from Solapur Road, Kondhwa, Katraj, Undri, Wanowrie, and the Pune–Solapur highway belt, ISMR is the most accessible full-time MBA HR college in this zone of Pune.
            </p>
          </div>

          {/* Comparison Panel */}
          <div className="panel mt-4">
            <h2>Why ISMR is a Preferred MBA HR College in Pune</h2>

            <p className="intro-text">
              This is not a self-assessment. It is a comparison against what the segment actually offers.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>What the segment typically offers</th>
                    <th>What ISMR delivers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Accreditation</td>
                    <td>AICTE + SPPU</td>
                    <td className="highlight-cell">AICTE + SPPU + NAAC B++</td>
                  </tr>
                  <tr>
                    <td>Placement cell</td>
                    <td>Single placement officer, final semester</td>
                    <td className="highlight-cell">Dedicated Success Cell with CRD, running all year</td>
                  </tr>
                  <tr>
                    <td>HR recruiter profile</td>
                    <td>Local SMEs, staffing firms, mid-tier IT</td>
                    <td className="highlight-cell">Deloitte, EY, PwC, KPMG, TCS, Infosys, HDFC Bank</td>
                  </tr>
                  <tr>
                    <td>Internship</td>
                    <td>Optional, self-arranged</td>
                    <td className="highlight-cell">CRD-coordinated, part of the program</td>
                  </tr>
                  <tr>
                    <td>Value-add certifications</td>
                    <td>None or a single course</td>
                    <td className="highlight-cell">6 certifications, including HR-relevant Analytics and Excel</td>
                  </tr>
                  <tr>
                    <td>International exposure</td>
                    <td>None</td>
                    <td className="highlight-cell">Industrial visit to Dubai & South East Asia</td>
                  </tr>
                  <tr>
                    <td>Recognition</td>
                    <td>Not ranked</td>
                    <td className="highlight-cell">20th – Beyond IIM Top 100 B-School Survey</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text">
              ISMR also holds the National Excellence Award for Campus Placement in Maharashtra, awarded by the Integrated Chambers of Commerce and Industry, and has been recognised as a Top 10 College and Institute in Maharashtra by Higher Education Digest.
            </p>
          </div>

          {/* Admission Process Panel */}
          <div className="panel mt-4">
            <h2>MBA HR Admission 2026 Pune at ISMR – Step-by-Step Process</h2>

            <h3 className="sub-heading">Step 1 – Apply Online or Offline</h3>
            <p className="intro-text">
              Apply at ismrpune.edu.in. The application form can also be collected from the ISMR campus at Wadki, Hadapsar. Application fee: ₹1,000 (non-refundable).
            </p>

            <h3 className="sub-heading">Step 2 – Entrance Score Submission</h3>
            <p className="intro-text">
              Submit your MAH-MBA CET, CAT, CMAT, MAT, XAT, ATMA, or GMAT scorecard. ISMR accepts all major management entrance exam scores.
            </p>

            <h3 className="sub-heading">Step 3 – Telephonic or Video Interview</h3>
            <p className="intro-text">
              Shortlisted candidates complete a brief interview with the admissions team. The process evaluates career intent and communication — not academic history alone.
            </p>

            <h3 className="sub-heading">Step 4 – Seat Confirmation</h3>
            <p className="intro-text">
              Admitted candidates receive a letter by email. Seat confirmation requires a payment of ₹30,000 within four working days. Seats are confirmed in order of payment completion — delayed confirmation results in seat cancellation even after selection.
            </p>

            <h3 className="sub-heading">Step 5 – Document Verification and Provisional Admission</h3>
            <p className="intro-text">
              Final admission is subject to document verification. Provisional admission is granted immediately after seat confirmation.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Documents Required:
            </p>
            <ul className="gap-list">
              <li>Graduation certificates and mark sheets</li>
              <li>Class 10 and 12 certificates</li>
              <li>Entrance exam scorecard</li>
              <li>Caste certificate (if applicable)</li>
              <li>Migration certificate</li>
              <li>Passport-size photographs</li>
            </ul>

            <p className="intro-text small-note">
              Seats are limited and fill by confirmation order. Apply early for MBA HR Admission 2026.
            </p>

            <a href="/Contactus" className="default-btn">
              Apply Now for MBA HR Admission 2026 →
            </a>
          </div>

        </div>
      </section>


      <Faq />
    </section>
  );
}
