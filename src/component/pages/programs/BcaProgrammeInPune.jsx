import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../forms/ContactForm";
import Howtoaplydownoadform from "../../forms/HowToApplyDownloadForm";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../forms/ISMRFormModal";
import SEO from "../../SEO";

export default function BCACourse() {
  const navigate = useNavigate();
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
      <SEO
        title="BCA College in Pune | Best BCA Programme | ISMR Pune"
        description="Study at the top BCA College in Pune at ISMR. SPPU affiliated BCA programme with software engineering, AI, cloud computing, and high IT placement packages."
        canonical="https://ismrpune.edu.in/programs/bca-college-in-pune"
      />
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
  .table-wrapper {
    overflow-x: auto;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    margin-top: 1rem;
}

.highlights-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    min-width: 480px;
}

.highlights-table thead tr {
    background-color: #1e3a6e; /* match your navbar blue */
    color: #ffffff;
    text-align: left;
}

.highlights-table th {
    padding: 14px 20px;
    font-weight: 600;
    letter-spacing: 0.3px;
}

.highlights-table th:first-child {
    border-top-left-radius: 10px;
}

.highlights-table th:last-child {
    border-top-right-radius: 10px;
}

.highlights-table td {
    padding: 12px 20px;
    border-bottom: 1px solid #e5e9f0;
    color: #2c2c2c;
}

.highlights-table tbody tr:nth-child(even) {
    background-color: #f5f7fb;
}

.highlights-table tbody tr:hover {
    background-color: #eaf0fb;
    transition: background-color 0.2s ease;
}

.highlights-table td:first-child {
    font-weight: 600;
    color: #1e3a6e;
    width: 35%;
}

.highlights-table tbody tr:last-child td {
    border-bottom: none;
}

.highlights-table tbody tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

.highlights-table tbody tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

@media (max-width: 600px) {
    .highlights-table th,
    .highlights-table td {
        padding: 10px 14px;
        font-size: 0.9rem;
    }
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
            BCA   <span className="text-warning">Programme</span>
          </span>

          <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap mt-2">
            <button
              type="button"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate("/academics/programs");
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
              • <span className="text-warning">BCA College in Pune</span>
            </p>
          </div>
        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">
          <div className="panel">
            <h1>Build a Strong Tech Foundation with a BCA Course in Pune at ISMR</h1>

            <p className="intro-text">
              If you have finished Class 12 and want a direct, practical path into the world of software, programming, and IT careers — this is where it starts.
            </p>

            <p className="intro-text">
              ISMR's BCA programme gives you the skills, exposure, and industry-connected learning environment that turns your ambition into a career.
            </p>

            <p className="intro-text">
              No lengthy engineering degrees, no guessing what comes next — just focused, relevant training in the technologies that companies are actually hiring for.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Request the Detailed BCA Course Brochure and Fee Structure
            </p>

            <a href="/Contactus" className="default-btn">
              Request Brochure →
            </a>
          </div>
        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Overview Panel */}
          <div className="panel">
            <h2>Overview of the BCA Course In Pune</h2>

            <p className="intro-text">
              The Bachelor of Computer Applications (BCA) is a three-year undergraduate programme that combines computer science fundamentals with practical technology applications.
            </p>

            <p className="intro-text">
              Designed for students aspiring to build careers in software development, programming, web technologies, and IT services, the programme focuses on both technical knowledge and hands-on learning.
            </p>
          </div>

          {/* Programme at a Glance Panel */}
          <div className="panel mt-4">
            <h2>BCA Programme at a Glance</h2>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration</td>
                    <td>3 Years</td>
                  </tr>
                  <tr>
                    <td>Semester Structure</td>
                    <td>6 Semesters</td>
                  </tr>
                  <tr>
                    <td>Affiliation</td>
                    <td>Savitribai Phule Pune University (SPPU)</td>
                  </tr>
                  <tr>
                    <td>Learning Areas</td>
                    <td>Programming, Database Management, Software Engineering, Networking, Web Technologies</td>
                  </tr>
                  <tr>
                    <td>Practical Exposure</td>
                    <td>Labs, Assignments, Mini Projects, Project-Based Learning</td>
                  </tr>
                  <tr>
                    <td>Outcome</td>
                    <td>Industry-Ready Technical and Problem-Solving Skills</td>
                  </tr>
                  <tr>
                    <td>Career Scope</td>
                    <td>Software Development, IT Services, Web Technologies, Higher Education</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text">
              By combining classroom learning with practical exposure, the programme helps students develop the analytical, technical, and problem-solving skills required in today's technology sector while preparing them for both employment opportunities and postgraduate studies.
            </p>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Syllabus Intro Panel */}
          <div className="panel">
            <h2>BCA Syllabus — Semester-Wise Course Structure (SPPU | NEP 2020)</h2>

            <p className="intro-text">
              Pune has over two dozen BCA colleges ranging from autonomous institutions to SPPU-affiliated ones. What separates them is not just infrastructure but how current their curriculum is and how early students get practical exposure.
            </p>

            <p className="intro-text">
              The BCA programme at ISMR follows the SPPU NEP 2020 curriculum, structured across 6 semesters and 132 credits.
            </p>

            <p className="intro-text">
              Each semester combines core theory, lab practicals, and skill-based courses — ensuring students build technical depth alongside hands-on application from day one.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              ISMR follows the latest SPPU 2024 Pattern — implemented from Academic Year 2025–26.
            </p>
          </div>

          {/* Year 1 Panel */}
          <div className="panel mt-4">
            <h2>Year 1 — Foundation in Programming and Computing</h2>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Core Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Semester I</td>
                    <td>Problem Solving and Programming in C, Computer Organization & Architecture, Discrete Mathematics and Statistics, Introduction to Data Science, HTML and Web Page Designing</td>
                  </tr>
                  <tr>
                    <td>Semester II</td>
                    <td>Advanced C Programming, Introduction to Microcontrollers, Linear Algebra, Data Science Using Spreadsheet Software, Software Tools for Business Communications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Year 2 Panel */}
          <div className="panel mt-4">
            <h2>Year 2 — Data, Networks, and Object-Oriented Programming</h2>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Core Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Semester III</td>
                    <td>Data Structures, C++ Programming, Data Communication (Networking), Field Work, Indian Knowledge System for Computing, Introduction to Artificial Intelligence</td>
                  </tr>
                  <tr>
                    <td>Semester IV</td>
                    <td>Database Management Systems, Python Programming, Communication Networks, Spreadsheet Applications, Community Services, Introduction to AI and Machine Learning (Minor)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Year 3 Panel */}
          <div className="panel mt-4">
            <h2>Year 3 — Specialisation and Industry Readiness</h2>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Semester</th>
                    <th>Core Focus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Semester V</td>
                    <td>Specialisation Paper I — choose from: Data Analysis using Excel / Information Security Concepts / Statistical Programming using R / E-Commerce</td>
                  </tr>
                  <tr>
                    <td>Semester VI</td>
                    <td>Specialisation Paper II + Mandatory Industry Internship (50 days)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text">
              Students in Semester V select one specialisation track from: Data Analysis, Information Security, Data Science, or Information Systems. The choice is made at the start of the third year.
            </p>
          </div>

          {/* Industry Relevance Panel */}
          <div className="panel mt-4">
            <h2>What Makes This Curriculum Industry-Relevant</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              NEP 2020 Multiple Exit Options:
            </p>
            <p className="intro-text">
              Exit after Year 1 with a UG Certificate, Year 2 with a UG Diploma, or complete Year 3 for a full Bachelor's Degree.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              MOOC Integration:
            </p>
            <p className="intro-text">
              Students complete two industry-recognised online courses (from platforms like NPTEL, Coursera, Swayam) as add-on credits in Semesters III–V.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Mandatory Internship:
            </p>
            <p className="intro-text">
              Every student completes a 50-day industry internship at the end of Semester VI, assessed for 200 marks through a report and a viva voce.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Community and Field Projects:
            </p>
            <p className="intro-text">
              Embedded in Semesters III and IV, these projects develop real-world problem-solving skills beyond the classroom.
            </p>

            <p className="intro-text">
              ISMR's curriculum stands out for combining SPPU's structured academic framework with practical project exposure starting in the second year.
            </p>
          </div>

        </div>
      </section>


      <section className="marketing-section">
        <div className="content-container">

          {/* Eligibility Panel */}
          <div className="panel">
            <h2>BCA Admission in Pune 2026 — Eligibility Criteria at ISMR</h2>

            <p className="intro-text">
              Planning your BCA admission in Pune 2026? Here is everything you need to know about qualification requirements, the admission process, and what to expect at each stage.
            </p>

            <h3 className="sub-heading">Eligibility at a Glance</h3>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Minimum Qualification</td>
                    <td>Passed HSC (10+2) or equivalent from any recognised Board</td>
                  </tr>
                  <tr>
                    <td>Eligible Streams</td>
                    <td>Science / Commerce / Arts — all streams accepted</td>
                  </tr>
                  <tr>
                    <td>Entrance Test</td>
                    <td>MAH-BCA CET conducted by CET CELL, Maharashtra</td>
                  </tr>
                  <tr>
                    <td>Admission Basis</td>
                    <td>Merit in CET score</td>
                  </tr>
                  <tr>
                    <td>Category Relaxation</td>
                    <td>As per DTE Maharashtra reservation norms</td>
                  </tr>
                  <tr>
                    <td>Fourth Year (Honours)</td>
                    <td>Available after completing a 3-year degree</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Admission Process Panel */}
          <div className="panel mt-4">
            <h2>Step-by-Step Admission Process</h2>

            <h3 className="sub-heading">Step 1: Appear for MAH-BCA CET</h3>
            <p className="intro-text">
              The Maharashtra BCA Common Entrance Test (MAH-BCA CET) is conducted by CET CELL. Registration is done online through the official CETCELL portal. The exam tests aptitude in logical reasoning, mathematics, and English — no advanced technical knowledge is required at this stage.
            </p>

            <h3 className="sub-heading">Step 2: Register for DTE CAP Round</h3>
            <p className="intro-text">
              After CET results are declared, candidates register for the Centralised Admission Process (CAP) conducted by DTE Maharashtra. This involves online form submission and document upload.
            </p>

            <h3 className="sub-heading">Step 3: Document Verification</h3>
            <p className="intro-text">
              Candidates must submit attested copies of HSC marksheets, school leaving certificate, CET scorecard, category certificate (if applicable), and domicile proof at the designated facilitation centre.
            </p>

            <h3 className="sub-heading">Step 4: Merit List and Seat Allotment</h3>
            <p className="intro-text">
              Seats are allotted based on CET merit rank and category. ISMR's BCA seats are filled through this centralised process — students are allotted ISMR based on their preference and rank.
            </p>

            <h3 className="sub-heading">Step 5: Reporting to ISMR</h3>
            <p className="intro-text">
              Once allotted, students report to ISMR within the deadline, submit original documents, and complete fee payment to confirm admission.
            </p>
          </div>

          {/* BCA vs B.Tech Comparison Panel */}
          <div className="panel mt-4">
            <h2>Choosing the Best College for BCA After 12th in Pune</h2>

            <p className="intro-text">
              BCA suits students from any stream who want a direct, three-year path into software and IT. B.Tech requires Science with PCM and adds a fourth year.
            </p>

            <p className="intro-text">
              The table below maps out the key differences.
            </p>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>BCA</th>
                    <th>B.Tech (CS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration</td>
                    <td>3 Years</td>
                    <td>4 Years</td>
                  </tr>
                  <tr>
                    <td>Stream Eligibility</td>
                    <td>Science, Commerce, Arts</td>
                    <td>Science (PCM) only</td>
                  </tr>
                  <tr>
                    <td>Focus</td>
                    <td>Applications and Software</td>
                    <td>Engineering and Core CS</td>
                  </tr>
                  <tr>
                    <td>Entry Route</td>
                    <td>MAH-BCA CET</td>
                    <td>JEE / MHT-CET</td>
                  </tr>
                  <tr>
                    <td>Higher Study Path</td>
                    <td>MCA / MBA</td>
                    <td>M.Tech / MBA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="intro-text">
              BCA is the preferred route for students who want a focused IT career without the engineering pathway, and it remains one of the most direct ways to enter the software industry within three years after Class 12.
            </p>
          </div>

        </div>
      </section>

      <section className="marketing-section">
        <div className="content-container">

          {/* Who Should Pursue Panel */}
          <div className="panel">
            <h2>Who Should Pursue the BCA Course?</h2>

            <p className="intro-text">
              The BCA course attracts a wide range of students, and that breadth is one of its biggest strengths. It is not a programme reserved for any single academic background — it is built to be accessible and valuable whether you come from a Science, Commerce, or Arts stream. Here is a closer look at who benefits most from this programme at ISMR.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Science Students (PCM or PCB) Looking for a Direct IT Path:
            </p>
            <p className="intro-text">
              If you have studied Physics, Chemistry, and Mathematics (or Biology) in Class 12, you already have the logical thinking and analytical skills that programming demands. BCA gives you a structured way to convert that potential into a concrete tech career without spending four years on a traditional engineering degree. The programming subjects in BCA build directly on the problem-solving mindset that Science students naturally develop — making the transition into coding both natural and faster.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Commerce and Arts Students Who Want to Enter the Tech Industry:
            </p>
            <p className="intro-text">
              This is one of the most important things to understand about BCA: you do not need to be from a Science background to succeed. If you have completed Class 12 in Commerce or Arts and you are curious about technology, software, or digital careers, BCA is one of the most accessible and practical routes available. You will not be asked to study Physics or Chemistry. What you will need is a willingness to learn logic, work with computers, and build projects — and ISMR's teaching approach supports non-Science students with additional guidance in the early semesters.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Students Who Already Have a Passion for Coding or App Development:
            </p>
            <p className="intro-text">
              Maybe you have already tried building a website, written a small script, or downloaded a coding app out of pure curiosity. If that spark exists, BCA gives it structure and depth. The course takes your raw interest and turns it into job-ready skills — teaching you not just how to write code, but how to write it professionally, collaborate in teams, and deliver software that works. Many students who join BCA with some coding background end up significantly ahead in practical projects and placement interviews.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Students Planning to Pursue MCA After Graduation:
            </p>
            <p className="intro-text">
              If your long-term goal is a Master of Computer Applications (MCA) — which opens doors to senior developer roles, research positions, and higher salaries — BCA is the most recognised and widely accepted undergraduate degree for that path. Most universities, including SPPU, design their MCA entrance and admission processes with BCA graduates as the primary cohort. Completing BCA at ISMR gives you both the academic foundation and the eligibility to transition smoothly into a postgraduate IT programme without any bridge courses or complications.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Students Who Want an IT Career Without a Four-Year Engineering Commitment:
            </p>
            <p className="intro-text">
              Not everyone wants to spend four years on a B.Tech or B.E. programme, and that is completely valid. BCA offers a focused, three-year alternative that is shorter, more affordable, and equally respected in the IT services and technology industry. Companies hiring for roles in software development, web development, testing, and IT support recruit BCA graduates alongside engineers — because what matters most is what you can actually do, not the name of your degree. ISMR's programme ensures you graduate with demonstrable skills, not just theoretical knowledge.
            </p>
          </div>

          {/* Key Benefits Panel */}
          <div className="panel mt-4">
            <h2>Key Benefits of Pursuing a BCA Course</h2>

            <p className="intro-text">
              The BCA degree has earned its reputation as one of the most practical and career-oriented undergraduate programmes in the Indian education landscape. Here is why so many students and their families consider it a smart investment.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Strong and Growing Demand Across Industries:
            </p>
            <p className="intro-text">
              IT, Banking and Financial Services (BFSI), e-commerce, digital marketing agencies, healthcare technology, and government IT wings are all actively recruiting BCA graduates. Every company that runs software, manages data, or operates online needs IT professionals — and BCA graduates fill that demand at the junior to mid-level. The hiring volume in these sectors has grown consistently year over year, making BCA a degree with reliable, tangible career outcomes.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Shorter Duration, Lower Cost Compared to B.Tech:
            </p>
            <p className="intro-text">
              A three-year BCA programme costs significantly less than a four-year B.Tech — both in tuition and the opportunity cost of time spent in education. For students researching BCA fees in Pune, ISMR's fee structure sits within the competitive range for unaided private colleges while including labs, MOOC credits, and placement support in the package.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Curriculum Aligned with Current Industry Tools and Technologies:
            </p>
            <p className="intro-text">
              The technology landscape changes fast, and BCA programmes that are actively maintained — like ISMR's SPPU-affiliated course — update their content to stay relevant. Students work with programming languages, database platforms, web development frameworks, and cloud tools that are currently in use across the industry. This means what you learn in the classroom is directly applicable in your first job, not outdated theory that companies have moved past.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Flexibility to Specialise or Continue Studies:
            </p>
            <p className="intro-text">
              After BCA, students are not locked into a single path. Many choose to pursue MCA for deeper technical specialisation. Others opt for an MBA in IT or Systems to move into management roles. Certifications in cloud computing (AWS, Azure), data science, cybersecurity, or full-stack development can be pursued independently and add significant value to a BCA degree. This flexibility means your BCA qualification is a launchpad, not a ceiling.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Practical Foundation for Multiple IT Roles:
            </p>
            <p className="intro-text">
              The breadth of the BCA curriculum, which covers development, databases, networking, and testing, means graduates are not limited to one type of role. Whether you want to write code, manage networks, test software quality, or work with data, the BCA course gives you enough exposure to explore and then specialise. This versatility is especially valuable for students who are still figuring out which area of IT excites them most.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Portfolio-Ready Project Experience:
            </p>
            <p className="intro-text">
              Unlike purely theoretical programmes, BCA at ISMR emphasises project-based learning. Students complete lab assignments, group projects, and a final-year project that together form a practical portfolio. Students researching BCA colleges in Pune with placement support will find that what separates strong placement outcomes is not company footfall alone but how prepared graduates are when they walk in. At ISMR, that preparation is built into the curriculum from day one.
            </p>
          </div>

          {/* Career Roles Panel */}
          <div className="panel mt-4">
            <h2>What Can You Do After a BCA Course in Pune?</h2>

            <p className="intro-text">
              A BCA degree opens two tracks — direct workforce entry or a postgraduate qualification that fast-tracks your career. Roles span software development, data, infrastructure, and support across virtually every industry running on technology.
            </p>

            <h3 className="sub-heading">Technical and Analytical Roles for BCA Graduates</h3>

            <ul className="method-list">
              <li>Software Developer / Junior Programmer — The most direct entry point for BCA graduates with programming skills in Python, Java, or C++. IT services firms, software product companies, and in-house tech teams at banks and logistics companies actively hire at this level.</li>
              <li>Web Developer (Front-End / Back-End) — HTML, web technologies, and DBMS in the BCA curriculum directly support web development roles at digital agencies, e-commerce companies, and startups. Front-end covers interfaces; back-end covers server logic and database connectivity.</li>
              <li>Database Administrator (Junior DBA) — Organisations in healthcare, banking, and manufacturing need graduates who can structure, query, and secure databases. BCA's DBMS coverage — SQL, transaction management, access control — prepares students for junior DBA roles across these sectors.</li>
              <li>Network Support Engineer / IT Support Analyst — Data communication and networking knowledge prepares graduates for IT infrastructure roles involving network configuration, troubleshooting, and end-user support. These positions exist across all large organisations, not just IT companies.</li>
              <li>Software Tester / QA Analyst — Software testing is one of the most consistently hired areas for BCA graduates in Pune's IT sector. Companies in the PCMC and Hinjewadi corridors regularly recruit for QA roles, with structured onboarding training provided before deployment.</li>
              <li>Data Analyst (Entry Level) — Python, Spreadsheet Applications, and introductory AI/ML exposure in the curriculum position BCA graduates for data analyst roles in retail, logistics, fintech, and healthcare — involving dashboards, reports, and data-driven decision support.</li>
              <li>Technical Support Specialist — IT companies, SaaS firms, and tech-enabled BPOs hire BCA graduates for support roles requiring product knowledge and problem-diagnosis skills. These roles frequently serve as entry points with clear internal mobility toward development or QA.</li>
              <li>IT Coordinator / ERP Support Executive — Manufacturing, logistics, and hospital organisations need tech-capable staff who can bridge IT and operations. BCA graduates with DBMS and software engineering exposure are well-suited for ERP support and user training roles.</li>
            </ul>

            <h3 className="sub-heading">Industries Hiring BCA Graduates in Pune</h3>

            <div className="table-wrapper">
              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Industry</th>
                    <th>Typical Entry Roles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>IT Services and Software Products</td>
                    <td>Developer, Tester, Support Analyst</td>
                  </tr>
                  <tr>
                    <td>Banking and Financial Services</td>
                    <td>Junior DBA, Data Analyst, IT Support</td>
                  </tr>
                  <tr>
                    <td>Healthcare and Hospital Chains</td>
                    <td>ERP Support, Database Coordinator</td>
                  </tr>
                  <tr>
                    <td>E-Commerce and Digital Retail</td>
                    <td>Web Developer, Data Analyst</td>
                  </tr>
                  <tr>
                    <td>Manufacturing and Logistics</td>
                    <td>Network Support, IT Coordinator</td>
                  </tr>
                  <tr>
                    <td>Digital Marketing and Agencies</td>
                    <td>Web Developer, Analytics Support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Postgraduate Pathways Panel */}
          <div className="panel mt-4">
            <h2>Postgraduate Pathways</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              MCA (Master of Computer Applications):
            </p>
            <p className="intro-text">
              SPPU and most Indian universities recognise BCA as a direct qualifying degree for MCA admission. The two-year MCA builds advanced software engineering and systems skills — together, BCA + MCA form a strong five-year technology education pathway.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              MBA in IT / Systems Management:
            </p>
            <p className="intro-text">
              BCA graduates pursuing an MBA in IT management or operations gain a combination that is valued in consulting, product management, and IT project delivery roles at mid-to-large organisations.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Industry Certifications and Upskilling:
            </p>
            <p className="intro-text">
              Cloud platforms (AWS, Azure), cybersecurity, data science, and full-stack development certifications sharpen post-BCA employability. The NEP 2020 curriculum's MOOC integration builds the habit of self-directed learning from the second year itself.
            </p>
          </div>

          {/* Why ISMR Panel */}
          <div className="panel mt-4">
            <h2>Why ISMR Stands Out Among BCA Colleges in Pune</h2>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              AICTE Approval and SPPU Affiliation:
            </p>
            <p className="intro-text">
              ISMR holds AICTE approval, DTE Maharashtra recognition, and AIMS affiliation — ensuring your degree is nationally valid for employment, government recruitment, and postgraduate admissions across India. These credentials matter most when your degree is evaluated outside Pune.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              NEP 2020 Curriculum — Latest Pattern, Genuine Implementation:
            </p>
            <p className="intro-text">
              ISMR delivers the SPPU 2024 Pattern BCA curriculum effective from AY 2025-26, with lab sessions running parallel to every major theory subject. Among the top private colleges in Pune for BCA, implementation quality — not just curriculum listing — is what determines how prepared students actually are.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Structured Placement Assistance — Not Just Coordination:
            </p>
            <p className="intro-text">
              Placement support at ISMR covers resume building, aptitude preparation, and technical interview readiness — starting before the final year. This structured approach gives graduates from BCA colleges in Pune with placement support a measurable edge over self-prepared candidates.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Faculty with Academic Depth and Practical Familiarity:
            </p>
            <p className="intro-text">
              ISMR's BCA faculty bring both subject expertise and working familiarity with the tools the curriculum covers — meaning explanations are grounded in real application, not just textbook definitions. This directly improves student readiness for labs, internships, and technical interviews.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              PCMC Location — Close to Pune's IT Hiring Belt:
            </p>
            <p className="intro-text">
              Located in Akurdi within the PCMC zone, ISMR sits close to the Hinjewadi–Wakad–Nashik Phata IT corridor. For students from Pimpri, Chinchwad, Nigdi, and Akurdi looking for the best college for BCA after 12th in Pune, this location reduces commute time and improves access to internship and placement opportunities.
            </p>

            <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
              Transparent Admissions Guidance for CET and CAP:
            </p>
            <p className="intro-text">
              ISMR's admissions team walks students through MAH-BCA CET registration, document preparation, and DTE CAP rounds without ambiguity. For families researching BCA admission in Pune 2026, this clarity in the process is often the deciding factor when comparing colleges.
            </p>
          </div>

        </div>
      </section>


      <Faq />
    </section>
  );
}
