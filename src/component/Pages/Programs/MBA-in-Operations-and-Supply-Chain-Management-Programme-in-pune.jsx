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
            MBA in Operations and Supply Chain  <span className="text-warning">Management</span>
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
            <span className="text-warning">MBA in Operations and Supply Chain Management</span>
          </p>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className="panel">
            <h1>MBA in Operations and Supply Chain Management in Pune — Direct Access to Pune's Industrial Corridor</h1>

            <h2>Program Outcomes: What You Will Achieve</h2>

            <ul className="gap-list">
              <li>Graduate as a Day-One Ready Specialist: Transition from a general graduate to an industry-ready professional certified in global logistics and lean operations.</li>
              <li>Master Top Enterprise Tech: Gain immediate career leverage by mastering corporate operations tools, including SAP, Oracle, and advanced inventory simulations.</li>
              <li>Command Leadership Roles: Qualify directly for high-growth corporate tracks like Supply Chain Analyst, Logistics Manager, and Procurement Specialist.</li>
              <li>Secure Hassle-Free Admissions: Navigate your entry smoothly with step-by-step guidance, from management entrance test counseling to final enrollment.</li>
            </ul>

            <p className="intro-text">
              Have specific questions regarding the MBA SCM Admission in Pune 2026 criteria, accepted cutoff scores, or seat reservation timelines? Get in touch today for personalized counseling.
            </p>

            <a href="/Contactus" className="default-btn">
              Get in touch today for personalized counseling →
            </a>
          </div>

          <div className="panel mt-4">
            <h2>Understanding the MBA in Operations and Supply Chain Management Programme</h2>

            <p className="intro-text">
              Operations and supply chain management involves planning procurement, manufacturing, inventory, logistics, and product delivery to improve business efficiency.
            </p>

            <p className="intro-text">
              This specialized discipline balances day-to-day operational efficiency with long-term strategic planning, teaching students how to transform raw materials into finished products and deliver them globally with maximum speed and minimal cost.
            </p>

            <p className="intro-text">
              As one of the SPPU-affiliated MBA in Supply Chain colleges in Pune, ISMR offers a curriculum structured over 2 years and 4 comprehensive semesters in a full-time format, progressing from management fundamentals to advanced global logistics architecture.
            </p>

            <p className="intro-text">
              Students looking for SPPU-affiliated MBA Supply Chain colleges in Pune often evaluate curriculum, faculty, placements, and industry exposure before making a decision.
            </p>
          </div>

          <div className="panel mt-4">
            <h2>The Learning Format at ISMR</h2>

            <p className="intro-text">
              To ensure you graduate with practical, actionable skills, our pedagogy utilizes active, industry-integrated learning methods:
            </p>

            <ul className="method-list">
              <li>Simulations & Case Studies: Analyze real-world disruptions such as global shipping bottlenecks or sudden demand surges using interactive software to practice real-time risk mitigation.</li>
              <li>Live Industry Projects: Partner with corporate brands across Pune's manufacturing belts to solve actual operational challenges on active shop floors.</li>
              <li>Classroom Instruction: Master core management models delivered by experienced, university-vetted faculty and visiting supply chain veterans.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Key Subjects Panel */}
          <div className="panel">
            <h2>MBA Operations & Supply Chain Course in Pune — Key Subjects Covered</h2>

            <p className="intro-text">
              ISMR's curriculum is meticulously designed to cover every touchpoint of the modern product lifecycle:
            </p>

            <ul className="method-list">
              <li>Supply Chain Strategy & Global Logistics — international trade barriers, customs compliance, cross-border risk management</li>
              <li>Logistics & Warehouse Management — multimodal transport networks, distribution planning, automated warehousing layouts</li>
              <li>Procurement & Vendor Management — strategic sourcing models, sustainable supplier networks</li>
              <li>Lean, Six Sigma & Demand Forecasting — waste elimination, quality control, data-driven demand prediction</li>
              <li>ERP Systems & Inventory Control — SAP/Oracle literacy, Just-In-Time (JIT) inventory models</li>
            </ul>
          </div>

          {/* Eligibility Panel */}
          <div className="panel mt-4">
            <h2>Eligibility & Admissions Requirements</h2>

            <p className="intro-text">
              Securing your seat in this competitive program requires fulfilling specific academic and competitive benchmarks:
            </p>

            <ul className="gap-list">
              <li>Academic Criteria: A bachelor's degree in any stream or discipline from a recognized university, with a minimum aggregate of 50% marks (45% for reserved categories).</li>
              <li>Entrance Exam Performance: Admission is strictly merit-based, requiring valid scores in state or national-level management entrance tests, including MAH-MBA CET, CAT, or CMAT.</li>
            </ul>
          </div>

          {/* Who Should Pursue Panel */}
          <div className="panel mt-4">
            <h2>Who Should Pursue an MBA in Operations and Supply Chain Management?</h2>

            <p className="intro-text">
              Choosing a management specialization depends heavily on your professional background and future objectives. The curriculum at ISMR is structured to add career-accelerating value to several distinct profiles:
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Recent Graduates from Any Stream:
            </p>
            <p className="intro-text">
              No prior experience required. ISMR trains graduates to manage procurement pipelines, distribution frameworks, and logistics networks from scratch — regardless of your academic background. Whether you come from engineering, commerce, science, or arts, the programme bridges the gap to a corporate launchpad.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Working Professionals in Operations or Manufacturing:
            </p>
            <p className="intro-text">
              Break the growth ceiling. If you are already working on shop floors, managing warehouses, or handling vendors, you understand daily execution. This MBA provides the macro-level strategic insights and leadership credentials necessary to transition into high-paying managerial positions.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Professionals from BFSI, Retail, or E-Commerce: Lead cross-functional projects.
            </p>
            <p className="intro-text">
              Modern banking, retail, and digital marketplaces rely completely on backend processing speed and distribution efficiency. Professionals from these sectors learn how to optimize multi-city delivery routes and build tech-enabled fulfillment centers.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Aspiring ERP and Tech-Enabled Professionals:
            </p>
            <p className="intro-text">
              Bridge business and technology. Technology has transformed traditional logistics, making data literacy a core requirement. ISMR's MBA in Operations and Supply Chain Management includes strong logistics management training in Pune, preparing you for specialized corporate roles in software implementation and cloud-based inventory tracking.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Entrepreneurs and Family Business Members:
            </p>
            <p className="intro-text">
              Protect and grow your margins. For those running or inheriting enterprises involving manufacturing or wholesale distribution, operational inefficiencies drain profits. This program equips you with Lean and Six Sigma methodologies to eliminate waste and negotiate smarter vendor contracts.
            </p>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Strategic Benefits Panel */}
          <div className="panel">
            <h2>Strategic Market Benefits of the Programme</h2>

            <p className="intro-text">
              Supply chains have become one of the most important business functions because companies now compete on speed, cost efficiency, and customer delivery.
            </p>

            <p className="intro-text">
              Pursuing this specialization at ISMR offers distinct, quantifiable advantages:
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Surging Global Industry Demand:
            </p>
            <p className="intro-text">
              Resilient career paths: Recent disruptions in global logistics have forced companies to completely rethink their sourcing strategies. This shift has created an urgent corporate demand for qualified managers who can anticipate bottlenecks and build resilient vendor networks.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Highly Competitive Earning Potential — Strong ROI:
            </p>
            <p className="intro-text">
              Companies value professionals who can reduce costs, improve productivity, and deliver products faster. This is why MBA graduates in supply chain management often receive competitive salary packages. The average MBA Supply Chain Management Salary in Pune reflects this value, offering graduates competitive starting packages and rapid increments within expanding e-commerce and manufacturing hubs.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Practical Exposure to Enterprise Tools:
            </p>
            <p className="intro-text">
              Day-one productivity: Employers look for candidates who can contribute immediately without lengthy training cycles. Students gain hands-on experience with industry-standard systems like SAP and Oracle, alongside practical exposure to Lean and Six Sigma frameworks.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Versatile Cross-Sector Applicability:
            </p>
            <p className="intro-text">
              Maximum career flexibility: Unlike narrow specializations, operations expertise transfers perfectly across multiple fields. Graduates can build their professional futures anywhere — from automotive assembly lines and FMCG networks to pharmaceutical cold chains and retail infrastructure.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Balanced Managerial Skill Development:
            </p>
            <p className="intro-text">
              Become a complete leader: True operational leadership requires a unique combination of sharp analytical thinking and team management. The program balances quantitative training, like mathematical demand forecasting, with essential modules covering corporate negotiation and leadership psychology.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Unmatched Regional Industrial Placement:
            </p>
            <p className="intro-text">
              Direct corporate access: Geography plays a critical role in management placements. Positioned near Pune and PCMC's massive industrial, automotive, and IT corridors, ISMR students benefit from regular corporate networking, plant visits, and direct recruitment pathways.
            </p>
          </div>

          {/* Fees Panel */}
          <div className="panel mt-4">
            <h2>MBA in Operations and Supply Chain Management Fees in Pune</h2>

            <p className="intro-text">
              The tuition fee for this specialization at ISMR typically ranges between INR 4.5 Lakhs and INR 5.5 Lakhs for the complete two-year full-time program.
            </p>

            <p className="intro-text">
              This covers academic modules, enterprise software training, and on-campus placement services.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Connect with our finance desk for the current fee structure, along with installment and education loan options.
            </p>

            <a href="/Contactus" className="default-btn">
              Connect with our finance desk →
            </a>
          </div>

        </div>
      </section>




      <section className="marketing-section">
        <div className="content-container">

          {/* Admission Process Panel */}
          <div className="panel">
            <h2>The Structured ISMR Admission Process</h2>

            <p className="intro-text">
              Navigating college enrollment should be straightforward and stress-free. ISMR supports students through every stage of the admission journey — from application to final enrollment.
            </p>

            <h3 className="sub-heading">Step 1: Apply Online</h3>
            <p className="intro-text">
              The journey begins on our official institutional website. The online form is designed to be completed in under 15 minutes, requiring basic academic records and a standard application registration fee of Rs 1,100 to initiate your candidate file.
            </p>

            <h3 className="sub-heading">Step 2: Counselling and Telephonic Interview</h3>
            <p className="intro-text">
              Once verified, you will connect with an academic counselor for a structured telephonic interview. This conversation evaluates your management entrance test scores, reviews your background, and aligns your career goals with the program.
            </p>

            <h3 className="sub-heading">Step 3: Seat Confirmation</h3>
            <p className="intro-text">
              Candidates who pass the evaluation receive an official Admission Letter via email. To secure your seat within this highly sought-after specialization, selected students submit a processing fee payment of Rs 30,000 within four days.
            </p>

            <h3 className="sub-heading">Step 4: Provisional Admission</h3>
            <p className="intro-text">
              Upon receiving the confirmation fee, your provisional admission is formally locked into the university registration system. The ISMR team will then provide a comprehensive checklist to guide you through submitting your transcripts and entrance scorecards.
            </p>
          </div>

          {/* Salary Panel */}
          <div className="panel mt-4">
            <h2>MBA Supply Chain Management Salary in Pune</h2>

            <p className="intro-text">
              ISMR graduates typically secure entry-level packages ranging between INR 4.5 Lakhs to INR 7.5 Lakhs per annum, with an 85% placement rate across Pune's automotive, logistics, and e-commerce sectors.
            </p>

            <p className="intro-text">
              Final compensation depends on interview performance, academic record, and the recruiting company.
            </p>
          </div>

        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">

          {/* Career Opportunities Panel */}
          <div className="panel">
            <h2>Career Opportunities After an MBA in Operations and Supply Chain Management</h2>

            <p className="intro-text">
              Graduating with this specialization opens up diverse paths across the global corporate ecosystem.
            </p>

            <p className="intro-text">
              As one of the MBA SCM colleges in Pune with placement support built into every semester, ISMR's end-to-end framework transitions you into high-growth leadership tracks designed around maximum efficiency. The programme records an 85% placement rate, with recruiters including:
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Recruiting Company</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Amazon</td></tr>
                  <tr><td>2</td><td>Flipkart</td></tr>
                  <tr><td>3</td><td>DHL</td></tr>
                  <tr><td>4</td><td>Blue Dart</td></tr>
                  <tr><td>5</td><td>FedEx</td></tr>
                  <tr><td>6</td><td>Maersk</td></tr>
                  <tr><td>7</td><td>Reliance Industries</td></tr>
                  <tr><td>8</td><td>Tata Motors</td></tr>
                  <tr><td>9</td><td>Mahindra & Mahindra</td></tr>
                  <tr><td>10</td><td>Maruti Suzuki</td></tr>
                  <tr><td>11</td><td>Bosch</td></tr>
                  <tr><td>12</td><td>Larsen & Toubro (L&T)</td></tr>
                  <tr><td>13</td><td>Asian Paints</td></tr>
                  <tr><td>14</td><td>Adani Logistics</td></tr>
                  <tr><td>15</td><td>TVS Supply Chain Solutions</td></tr>
                </tbody>
              </table>
            </div>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Job Role</th>
                    <th>Core Corporate Responsibility</th>
                    <th>Strategic Career Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supply Chain Manager</td>
                    <td>Governs the complete movement of products from raw materials to final consumers.</td>
                    <td>Critical for managing procurement protocols, international shipping, and lean inventory systems.</td>
                  </tr>
                  <tr>
                    <td>Operations Manager</td>
                    <td>Focuses heavily on shop-floor orchestration, overall capacity planning, and resource allocation.</td>
                    <td>Utilizes engineering methodologies to eliminate production waste and boost output quality.</td>
                  </tr>
                  <tr>
                    <td>Logistics & Distribution Manager</td>
                    <td>Designs smart multimodal shipping networks and supervises large fulfillment facilities.</td>
                    <td>Focuses on maximizing fleet utilization, scaling automated sorting, and cutting delivery times.</td>
                  </tr>
                  <tr>
                    <td>Procurement & Vendor Manager</td>
                    <td>Analyzes global supplier markets and executes complex commercial agreements.</td>
                    <td>Balances data planning and communication to secure assets while reducing material costs.</td>
                  </tr>
                  <tr>
                    <td>Demand Forecasting Analyst</td>
                    <td>Anticipates changing market patterns to avoid expensive overproduction or stock shortages.</td>
                    <td>Designs mathematical data models and reviews past retail patterns with marketing teams.</td>
                  </tr>
                  <tr>
                    <td>ERP Implementation Analyst</td>
                    <td>Helps companies transition onto cloud platforms by configuring technical software modules.</td>
                    <td>Focuses on designing automated inventory tracking inside systems like SAP or Oracle.</td>
                  </tr>
                  <tr>
                    <td>Operations Consultant</td>
                    <td>Audits third-party infrastructure to find hidden organizational inefficiencies.</td>
                    <td>Gives broad exposure to varied corporate models while deploying customized lean solutions.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="sector-note">
              Key Hiring Industries: Our graduates enjoy high demand across massive automotive assembly hubs, high-volume FMCG businesses, complex pharmaceuticals cold-chains, rapid-delivery e-commerce platforms, multinational logistics enterprises, infrastructure conglomerates, and top-tier corporate consulting firms.
            </p>
          </div>

          {/* Why Choose ISMR Panel */}
          <div className="panel mt-4">
            <h2>Why Choose ISMR for an MBA in Operations and Supply Chain Management in Pune</h2>

            <p className="intro-text">
              Building a successful corporate path depends directly on choosing an educational ecosystem that integrates practical training with solid market authority.
            </p>

            <p className="intro-text">
              As one of the MBA in Operations and Supply Chain Management Colleges in Pune known for structured placement support and strong industry connections, ISMR gives graduates a direct edge when entering Pune's competitive operations and supply chain job market.
            </p>

            <p className="intro-text">
              ISMR offers an AICTE-approved, SPPU-affiliated MBA in Operations and Supply Chain Management with industry-oriented learning, practical projects, and placement support for students seeking admission in 2026.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              AICTE & SPPU Credibility:
            </p>
            <p className="intro-text">
              Rigorous academic backing: Our program carries formal approvals from AICTE and DTE, delivering a university-vetted syllabus from Savitribai Phule Pune University. This ensures your qualification commands instant institutional trust across global corporations.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Tech-Driven Curriculum:
            </p>
            <p className="intro-text">
              Boardroom readiness from day one: The program bypasses purely textbook training by integrating interactive case studies and hands-on software modules. Students practice balancing live procurement flows inside actual SAP and Oracle layouts.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Active Placement Cell:
            </p>
            <p className="intro-text">
              Proactive career launchpads: ISMR's structured placement programme and industry connections give graduates a direct edge when entering Pune's competitive operations and supply chain job market.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Domain-Expert Faculty:
            </p>
            <p className="intro-text">
              Mentorship from corporate veterans: Classes are guided by a mix of accomplished management scholars and visiting supply chain directors. This ensures you analyze actual corporate bottlenecks and study modern, practical solutions.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Strategic Location:
            </p>
            <p className="intro-text">
              Positioned inside an industrial core: Located directly within the expanding Pune and PCMC manufacturing corridors, ISMR offers unrivaled local industrial access for plant visits, summer projects, and routine networking.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Financial Transparency:
            </p>
            <p className="intro-text">
              Honest financial clarity: The institute maintains complete transparency regarding MBA in Operations and Supply Chain Management Fees in Pune, protecting families from sudden hidden costs while offering step-by-step guidance on securing education loans.
            </p>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Final CTA Panel */}
          <div className="panel final-cta-panel">
            <h2>Ready to Shape Global Business Infrastructure?</h2>

            <p className="intro-text" style={{ color: "white" }}>
              Navigating your business school choices is a major milestone, and our expert academic counselors are here to help you make a confident, informed decision.
            </p>

            <p className="intro-text" style={{ color: "white" }}>
              Get a Complete Cost Breakdown: If you would like to review the complete fee structure for this specialisation alongside available hostel packages, our finance desk is happy to provide a clear summary.
            </p>

            <a href="/Contactus" className="default-btn">
              Talk to an Academic Counsellor →
            </a>
          </div>

          {/* FAQ Panel */}
          <div className="panel">
            <h2>Frequently Asked Questions (FAQs)</h2>

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
      </section>



      <Faq />
    </section>
  );
}
