import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../forms/ContactForm";
import Howtoaplydownoadform from "../../forms/HowToApplyDownloadForm";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../forms/ISMRFormModal";
import SEO from "../../SEO";

export default function BBACourse() {

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
                title="BBA Programme in Pune | Top BBA College | ISMR Pune"
                description="Join SPPU-affiliated BBA Programme in Pune at ISMR. Industry practical learning, corporate internships, and comprehensive placement support."
                canonical="https://ismrpune.edu.in/programs/bba-programme-in-pune"
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
                        className="mb-3"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "30px",
                            fontWeight: 700,
                            margin: 0,
                        }}
                    >
                        BBA   <span className="text-warning">Programme</span>
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
                        <span className="text-warning">BBA programme</span>
                    </p>
                </div>
            </section>


            <section className="marketing-section">
                <div className="content-container">
                    <div className="panel">
                        <h1>Launch Your Business Career at ISMR — An AICTE-Approved BBA College in Pune</h1>

                        <ul className="gap-list">
                            <li>Industry-Oriented Learning Approach</li>
                            <li>Specialisation Pathways in Key Business Domains</li>
                            <li>Student-Focused Academic Environment</li>
                            <li>Preparation for Careers, Entrepreneurship, and Higher Studies in Management</li>
                        </ul>
                    </div>

                    <div className="panel mt-4">
                        <h2>Programme Highlights</h2>

                        <table className="highlights-table">
                            <thead>
                                <tr>
                                    <th>Particulars</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Degree Awarded</td>
                                    <td>Bachelor of Business Administration (BBA)</td>
                                </tr>
                                <tr>
                                    <td>Course Duration</td>
                                    <td>3 Years (6 Semesters)</td>
                                </tr>
                                <tr>
                                    <td>Affiliation</td>
                                    <td>Savitribai Phule Pune University (SPPU)</td>
                                </tr>
                                <tr>
                                    <td>Approval</td>
                                    <td>AICTE Approved</td>
                                </tr>
                                <tr>
                                    <td>Accreditation</td>
                                    <td>NAAC B++</td>
                                </tr>
                                <tr>
                                    <td>DTE Code</td>
                                    <td>16301</td>
                                </tr>
                                <tr>
                                    <td>Mode</td>
                                    <td>Full-Time</td>
                                </tr>
                                <tr>
                                    <td>Intake</td>
                                    <td>60</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="panel mt-4">
                        <p className="intro-text">
                            ISMR is an AICTE-approved BBA college in Pune, with its BBA programme affiliated to Savitribai Phule Pune University (SPPU). The programme is designed to bridge academic learning with practical business exposure, enabling students to develop industry-ready knowledge, professional skills, and managerial competencies throughout the three-year course.
                        </p>
                    </div>
                </div>
            </section>

            <section className="marketing-section">
                <div className="content-container">

                    {/* Course Overview Panel */}
                    <div className="panel">
                        <h2>Course Overview & Objectives</h2>

                        <p className="intro-text">
                            As a well-established BBA College in Pune, ISMR offers a comprehensive Bachelor of Business Administration programme that builds a strong foundation in business management, organisational practices, and strategic decision-making.
                        </p>

                        <p className="intro-text">
                            Aligned with the latest SPPU curriculum, the programme combines classroom learning with industry exposure to help students understand how organisations plan, operate, compete, and grow in a rapidly evolving business environment.
                        </p>

                        <p className="intro-text">
                            Throughout the programme, students progressively build expertise in management, finance, marketing, human resources, technology-enabled business practices, and analytical thinking while applying these concepts through practical assignments, case studies, and collaborative projects.
                        </p>

                        <p className="intro-text">
                            It also focuses on developing decision-making abilities, leadership qualities, communication skills, and an entrepreneurial mindset that supports long-term professional growth.
                        </p>
                    </div>

                    {/* What Will You Learn Panel */}
                    <div className="panel mt-4">
                        <h2>What Will You Learn in This BBA Course After 12th in Pune?</h2>

                        <ul className="method-list">
                            <li>Business Analytics & Data Interpretation — Analyse business data, identify market trends, and support strategic decision-making.</li>
                            <li>Marketing & Consumer Behaviour — Understand customer behaviour, branding, market research, and sales strategies.</li>
                            <li>Financial Management Fundamentals — Learn accounting, budgeting, business finance, and investment concepts.</li>
                            <li>Leadership & Organisational Management — Develop leadership, decision-making, planning, and team management skills.</li>
                            <li>Human Resource Management — Understand recruitment, organisational behaviour, talent management, and employee engagement.</li>
                            <li>Digital Business & Technology Applications — Explore digital business models, business technologies, and information systems.</li>
                            <li>Business Communication & Professional Skills — Enhance communication, presentations, report writing, and workplace professionalism.</li>
                            <li>Entrepreneurship & Problem-Solving — Identify business opportunities, solve real-world challenges, and build an entrepreneurial mindset.</li>
                        </ul>

                        <p className="intro-text">
                            These learning areas help students develop the knowledge, practical skills, and managerial competencies required for careers across diverse industries, entrepreneurial ventures, and higher studies such as an MBA.
                        </p>
                    </div>

                    {/* Why Choose ISMR Panel */}
                    <div className="panel mt-4">
                        <h2>Why Choose ISMR for BBA in Pune</h2>

                        <ul className="gap-list">
                            <li>Choosing the right Private BBA College in Pune goes beyond infrastructure and brochures. Students need an institution that offers academic credibility, experienced faculty, industry exposure, practical learning opportunities, and a supportive environment for long-term career growth.</li>
                            <li>ISMR brings these elements together through a well-established undergraduate management programme backed by strong academic foundations and industry engagement.</li>
                            <li>Backed by Sri Balaji Education Society and operating since 2007, ISMR brings over 17 years of experience in undergraduate management education.</li>
                            <li>That history means an established alumni network across industries — a resource students can access from day one, not after graduation.</li>
                            <li>As a NAAC-accredited BBA college in Pune with a B++ grade, ISMR demonstrates its commitment to academic quality, institutional excellence, and continuous improvement. Combined with AICTE approval and SPPU affiliation, these recognitions provide students with confidence in the credibility and value of their undergraduate education.</li>
                            <li>For students deciding on the best college for BBA after 12th in Pune, what often separates institutions is values. ISMR's academic environment actively builds ethical decision-making alongside business knowledge, preparing graduates who are professionally capable and personally grounded.</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className="marketing-section">
                <div className="content-container">

                    {/* Career Opportunities Panel */}
                    <div className="panel">
                        <h2>Career Opportunities & Scope After BBA</h2>

                        <p className="intro-text">
                            Graduates of the Bachelor of Business Administration programme at ISMR are prepared for entry-level roles across multiple industries, where they can apply their knowledge of business management, communication, analytics, and leadership.
                        </p>

                        <p className="intro-text">
                            For those planning ahead, the programme also builds the foundation for an MBA or the business acumen to launch an independent venture.
                        </p>

                        <p className="intro-text">
                            As a BBA college with placements in Pune spanning banking, FMCG, digital media, and IT services, ISMR connects classroom learning directly to entry-level career pathways.
                        </p>

                        <p className="intro-text">
                            Graduates also develop transferable skills such as business communication, analytical thinking, teamwork, leadership, and problem-solving that are valued across multiple industries.
                        </p>

                        <div className="table-wrapper">
                            <table className="highlights-table">
                                <thead>
                                    <tr>
                                        <th>Sector</th>
                                        <th>Entry-Level Roles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Banking & Financial Services</td>
                                        <td>Business Development Executive, Operations Coordinator</td>
                                    </tr>
                                    <tr>
                                        <td>FMCG</td>
                                        <td>Marketing Associate, Sales Executive</td>
                                    </tr>
                                    <tr>
                                        <td>IT Services</td>
                                        <td>HR Assistant, Operations Coordinator</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Marketing & Media</td>
                                        <td>Digital Marketing Executive, Marketing Associate, Business Development Executive</td>
                                    </tr>
                                    <tr>
                                        <td>Consulting</td>
                                        <td>Business Analyst, Management Trainee, Project Coordinator</td>
                                    </tr>
                                    <tr>
                                        <td>Retail & E-Commerce</td>
                                        <td>Category Executive, Retail Operations Executive, Customer Experience Associate</td>
                                    </tr>
                                    <tr>
                                        <td>Startups</td>
                                        <td>Business Development Executive, Operations Associate, Growth Executive</td>
                                    </tr>
                                    <tr>
                                        <td>Hospitality & Tourism</td>
                                        <td>Guest Relations Executive, Operations Executive, Sales Coordinator</td>
                                    </tr>
                                    <tr>
                                        <td>Healthcare & Pharmaceuticals</td>
                                        <td>Marketing Executive, Healthcare Operations Coordinator, HR Executive</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Beyond Employment Panel */}
                    <div className="panel mt-4">
                        <h2>Beyond Employment</h2>

                        <div className="table-wrapper">
                            <table className="highlights-table">
                                <thead>
                                    <tr>
                                        <th>Pathway</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Higher Education</td>
                                        <td>MBA at leading Indian or international business schools</td>
                                    </tr>
                                    <tr>
                                        <td>Entrepreneurship</td>
                                        <td>Launch and grow an independent venture using cross-functional business thinking</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>



            <section className="marketing-section">
                <div className="content-container">

                    {/* Eligibility Criteria Panel */}
                    <div className="panel">
                        <h2>BBA Eligibility Criteria in Pune — ISMR</h2>

                        <p className="intro-text">
                            Students applying for BBA admission in Pune must meet the following criteria:
                        </p>

                        <ul className="gap-list">
                            <li>Qualification: 10+2 (HSC) or equivalent from a recognised board</li>
                            <li>Minimum Marks: 50% aggregate for general category | 45% for reserved category candidates</li>
                            <li>Entrance Requirement: Valid MAH BBA CET scorecard — conducted by the State Common Entrance Test Cell, Maharashtra</li>
                            <li>Admission Route: Merit-based selection through CAP rounds | Limited Institutional/Management quota seats available per DTE Maharashtra norms</li>
                        </ul>
                    </div>

                    {/* Admissions Process Panel */}
                    <div className="panel mt-4">
                        <h2>BBA Admissions 2026 — How to Apply</h2>

                        <p className="intro-text">
                            For students planning BBA admissions in Pune in 2026, the process at ISMR follows the Maharashtra state admission framework:
                        </p>

                        <h3 className="sub-heading">Step 1: Register for the CET</h3>
                        <p className="intro-text">
                            Register for the MAH BBA CET on the official State Common Entrance Test Cell, Maharashtra portal.
                        </p>

                        <h3 className="sub-heading">Step 2: Appear for the Exam</h3>
                        <p className="intro-text">
                            Appear for the examination and secure your scorecard.
                        </p>

                        <h3 className="sub-heading">Step 3: Merit List & CAP Rounds</h3>
                        <p className="intro-text">
                            Participate in the centralised merit list and CAP rounds based on your CET score.
                        </p>

                        <h3 className="sub-heading">Step 4: Allotment & Verification</h3>
                        <p className="intro-text">
                            Receive your allotment and complete document verification at ISMR Pune.
                        </p>

                        <h3 className="sub-heading">Step 5: Seat Confirmation</h3>
                        <p className="intro-text">
                            Confirm your seat through fee payment within the stipulated timeline.
                        </p>

                        <p className="intro-text">
                            A limited number of seats are also available under the Management quota, allocated strictly per DTE Maharashtra regulatory norms.
                        </p>

                        <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
                            Apply now for BBA Admissions 2026 at ISMR Pune.
                        </p>

                        <a href="/Contactus" className="default-btn">
                            Apply Now →
                        </a>
                    </div>

                    {/* Fees & Placements Panel */}
                    <div className="panel mt-4">
                        <h2>Fees & Placements</h2>

                        <p className="intro-text">
                            Choosing an SPPU BBA College involves evaluating academic quality, industry exposure, placement opportunities, and overall value alongside the fee structure.
                        </p>

                        <p className="intro-text">
                            ISMR offers a professionally designed undergraduate management programme supported by experienced faculty, industry engagement, and career-focused learning.
                        </p>

                        <ul className="gap-list">
                            <li>Annual Fee: [INSERT CONFIRMED FEE]</li>
                            <li>Placement Record: [INSERT PLACEMENT STATS]</li>
                        </ul>

                        <p className="intro-text">
                            ISMR's recognition from AIMA and AIMS reflects an academic environment aligned with what industry expects, directly supporting student employability across sectors at the point of graduation.
                        </p>

                        <p className="intro-text">
                            For exact fee structure and placement stats, contact the ISMR admissions office or visit{" "}
                            <a href="https://ismrpune.edu.in" target="_blank" rel="noopener noreferrer">
                                ismrpune.edu.in
                            </a>.
                        </p>
                    </div>

                    {/* Campus & Infrastructure Panel */}
                    <div className="panel mt-4">
                        <h2>Campus & Infrastructure</h2>

                        <p className="intro-text">
                            ISMR's campus is designed to support the full arc of student life: academic, residential, and extracurricular.
                        </p>

                        <ul className="method-list">
                            <li>Library: 4,365+ books and digital resources, giving students research access well beyond standard coursework requirements.</li>
                            <li>Hostel: On-campus accommodation for 100 students, ensuring outstation students have a settled, focused environment close to the academic space.</li>
                            <li>Tech-Enabled Classrooms: Projectors, interactive whiteboards, and campus-wide Wi-Fi supporting modern teaching methods and collaborative learning across all three years of the programme.</li>
                        </ul>
                    </div>

                </div>
            </section>





            <Faq />
        </section>
    );
}
