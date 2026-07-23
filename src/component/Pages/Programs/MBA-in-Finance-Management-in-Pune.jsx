import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../form/ContactForm";
import Howtoaplydownoadform from "../../form/Howtoaplydownoadform";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../form/ISMRFormModal";

export default function ISMRLanding() {

    const [openFaq, setOpenFaq] = useState(0); // first item open by default

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    const marketingFaqs = [
        {
            q: "What is the placement process for MBA Finance at ISMR Pune?",
            a: (
                <>
                    <p>
                        ISMR's placement process follows three stages: Excel/aptitude
                        assessment → Case/GD round → Personal Interview.
                    </p>
                    <p>
                        Students are prepared for each stage through structured mock
                        rounds before the actual placement season.
                    </p>
                </>
            ),
        },
        {
            q: "What happens in Excel rounds?",
            a: (
                <>
                    <p>
                        Candidates analyse dataset-based tasks — typically 5,000–10,000
                        rows — within 30–45 minutes.
                    </p>
                    <p>
                        Most students underestimate this stage and prepare for it only
                        after placement season begins. ISMR addresses this with
                        dataset-based training from Semester 1.
                    </p>
                </>
            ),
        },
        {
            q: "Why do students fail in MBA Finance placements?",
            a: (
                <>
                    <p>
                        Most candidates can calculate outputs but cannot interpret them
                        into business decisions.
                    </p>
                    <p>
                        Case rounds evaluate this — for example: "Revenue increased by
                        12%, but profit dropped by 8% — identify the cause and recommend
                        corrective action."
                    </p>
                    <p>
                        Candidates who prepare only on concepts, not interpretation, fail
                        this stage consistently.
                    </p>
                </>
            ),
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
                    <h1
                        className="mb-3"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "40px",
                            fontWeight: 700,
                            margin: 0,
                        }}
                    >
                        MBA in Finance  <span className="text-warning">Management</span>
                    </h1>
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "15px",
                            marginTop: "0.5rem",
                        }}
                    >
                        Courses •{" "}
                        <span className="text-warning">MBA in Finance Management</span>
                    </p>
                </div>
            </section>


            <section className="marketing-section">
                <div className="">
                    <div className="panel">
                        <h1>MBA in Finance Management in Pune: Skills, Placements &amp; Career Outcomes</h1>

                        <h2>Quick Facts: MBA in Finance Management at ISMR Pune</h2>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <tbody>
                                    <tr>
                                        <td>Duration</td>
                                        <td>2 years (4 semesters)</td>
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
                                        <td>Eligibility</td>
                                        <td>Any graduate with a minimum 50% marks</td>
                                    </tr>
                                    <tr>
                                        <td>Accepted Exams</td>
                                        <td>MAH-MBA CET / CAT / CMAT / MAT / XAT / ATMA / SNAP</td>
                                    </tr>
                                    <tr>
                                        <td>Total Fee</td>
                                        <td>Approx. ₹4 lakh (₹2 lakh/year)</td>
                                    </tr>
                                    <tr>
                                        <td>Highest Package</td>
                                        <td className="highlight-cell">₹12 LPA (2025)</td>
                                    </tr>
                                    <tr>
                                        <td>Average Package</td>
                                        <td className="highlight-cell">₹5.2–6.8 LPA (2025)</td>
                                    </tr>
                                    <tr>
                                        <td>Placement Rate</td>
                                        <td className="highlight-cell">86% batch placed</td>
                                    </tr>
                                    <tr>
                                        <td>Top Skills</td>
                                        <td>Financial modelling, Excel, DCF valuation, MIS reporting</td>
                                    </tr>
                                    <tr>
                                        <td>Career Roles</td>
                                        <td>Financial Analyst, Corporate Finance, Investment Analysis</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="panel">
                        <h2>Why Most MBA Finance Students Don't Become Analysts</h2>

                        <p className="intro-text">
                            Most MBA Finance students don't become analysts — despite completing
                            the same degree.
                        </p>

                        <p className="intro-text">
                            The reason isn't knowledge. It's execution.
                        </p>

                        <p className="intro-text">
                            Most students underestimate what placement rounds actually require
                            and begin preparing only after the process has already started.
                            The result:
                        </p>

                        <ul className="gap-list">
                            <li>They understand financial concepts but haven't applied them to real datasets</li>
                            <li>They can explain theory, but struggle under the time pressure of live case rounds</li>
                            <li>They enter placement season without role clarity — and default into backend positions</li>
                        </ul>

                        <p className="intro-text">
                            The gap is not the syllabus. It's what you can do with it.
                        </p>

                        <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
                            ISMR's MBA Finance training is built around how recruiters actually evaluate candidates:
                        </p>

                        <ul className="method-list">
                            <li>Dataset-based Excel tasks (5,000–10,000 rows, 30–45 minute time limit)</li>
                            <li>Case-driven decision analysis — not textbook problems</li>
                            <li>Business interpretation — explaining what the numbers mean, not just calculating them</li>
                        </ul>

                        <p className="intro-text">
                            This is what separates analyst-track outcomes from backend-track
                            outcomes at the same institution.
                        </p>

                        <a href="/Contactus" className="default-btn">
                            Evaluate your placement readiness — speak to an ISMR counsellor →
                        </a>
                    </div>
                </div>
            </section>




            <section className="marketing-section">
                <div className="">

                    {/* FAQ Panel */}
                    <div className="panel">
                        <h2>How MBA Finance Placements at ISMR Pune Work</h2>

                        <div className="accordion">
                            {marketingFaqs.map((item, index) => (
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

                    {/* Top Recruiters Panel */}
                    <div className="panel">
                        <h2>Top Recruiters at ISMR Pune (2025)</h2>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Recruiters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Big 4 — Consulting &amp; Advisory</td>
                                        <td>Deloitte · KPMG · EY (Ernst &amp; Young) · PwC</td>
                                    </tr>
                                    <tr>
                                        <td>Private Sector Banks</td>
                                        <td>HDFC Bank · ICICI Bank · Axis Bank · Kotak Mahindra Bank</td>
                                    </tr>
                                    <tr>
                                        <td>NBFC &amp; Financial Services</td>
                                        <td>Bajaj Finserv · Aditya Birla Capital · Tata Capital</td>
                                    </tr>
                                    <tr>
                                        <td>Insurance</td>
                                        <td>SBI Life Insurance</td>
                                    </tr>
                                    <tr>
                                        <td>Capital Markets &amp; Research</td>
                                        <td>Motilal Oswal · CRISIL · JM Financial</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="sector-note">
                            Sectors covered: BFSI, IT, Education, FMCG, Consulting, E-Commerce
                        </p>
                    </div>

                    {/* Salary Panel */}
                    <div className="panel">
                        <h2>Salary After Completion of MBA Finance at ISMR Pune — What to Expect</h2>

                        <p className="intro-text">
                            Salary outcomes differ significantly based on the role you enter
                            after graduation. Analyst-track and investment roles pay more — and
                            require preparation that goes beyond the standard syllabus.
                        </p>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Role Type</th>
                                        <th>Salary Range</th>
                                        <th>Why It Pays More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Financial Analyst</td>
                                        <td className="salary-range-cell">₹4–8 LPA</td>
                                        <td>Decision support, data interpretation</td>
                                    </tr>
                                    <tr>
                                        <td>Investment Analyst</td>
                                        <td className="salary-range-cell">₹6–12 LPA</td>
                                        <td>Valuation, research, portfolio assessment</td>
                                    </tr>
                                    <tr>
                                        <td>Corporate Finance</td>
                                        <td className="salary-range-cell">₹4–7 LPA</td>
                                        <td>Budgeting, forecasting, planning</td>
                                    </tr>
                                    <tr>
                                        <td>MIS / Reporting Analyst</td>
                                        <td className="salary-range-cell">₹3.5–6 LPA</td>
                                        <td>Excel-heavy, dashboard management</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="intro-text" style={{ marginTop: "20px" }}>
                            Not all graduates reach ₹6–12 LPA immediately. These roles require
                            strong data handling skills, business interpretation ability, and
                            preparation that most students begin too late.
                        </p>

                        <p className="intro-text" style={{ fontWeight: 700, color: "#0f3350" }}>
                            ISMR's Finance specialisation trains students specifically on the
                            skills that determine which salary bracket they enter — not just
                            which concepts they know.
                        </p>
                    </div>

                </div>
            </section>

            <section className="marketing-section">
                <div className="">

                    {/* Job Roles Panel */}
                    <div className="panel">
                        <h2>MBA Finance Job Role After MBA from ISMR Pune</h2>

                        <p className="intro-text">
                            There are multiple MBA Finance jobs after an MBA in Pune, including
                            analyst, corporate finance, and investment roles.
                        </p>

                        <ul className="role-list">
                            <li><strong>Financial Analyst</strong> — reporting, variance analysis, decision support</li>
                            <li><strong>Corporate Finance</strong> — budgeting, forecasting, capital planning</li>
                            <li><strong>Investment Analyst</strong> — equity valuation, portfolio research</li>
                            <li><strong>MIS / Reporting Analyst</strong> — dashboard creation, data tracking</li>
                        </ul>

                        <p className="intro-text">
                            Sectors hiring ISMR MBA Finance graduates: BFSI, IT Services,
                            Healthcare, FMCG, Consulting, E-Commerce
                        </p>
                    </div>

                    {/* Analyst vs Backend Panel */}
                    <div className="panel">
                        <h2>Analyst vs Backend Roles — Understanding the Difference</h2>

                        <p className="intro-text">
                            Most students don't choose backend roles. They default into them
                            because they aren't prepared for analyst-round selection criteria.
                        </p>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Analyst Role</th>
                                        <th>Backend / Operations Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Work Nature</td>
                                        <td className="analyst-col">Decision-focused</td>
                                        <td>Process-focused</td>
                                    </tr>
                                    <tr>
                                        <td>Salary Range</td>
                                        <td className="analyst-col">₹4–12 LPA</td>
                                        <td>₹2.5–4 LPA</td>
                                    </tr>
                                    <tr>
                                        <td>Career Growth</td>
                                        <td className="analyst-col">Faster trajectory</td>
                                        <td>Slower, harder to switch</td>
                                    </tr>
                                    <tr>
                                        <td>Skills Required</td>
                                        <td className="analyst-col">Data interpretation, case solving</td>
                                        <td>Execution, coordination</td>
                                    </tr>
                                    <tr>
                                        <td>Exposure</td>
                                        <td className="analyst-col">High — client/business-facing</td>
                                        <td>Limited</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="intro-text" style={{ marginTop: "20px" }}>
                            Your first role determines your long-term career trajectory.
                            Switching from backend to analyst roles later is possible, but
                            significantly harder. ISMR's placement preparation is built to
                            improve your eligibility for the analyst track — not just the offer.
                        </p>
                    </div>

                    {/* Course Structure Panel */}
                    <div className="panel">
                        <h2>MBA in Finance Management Course Structure at ISMR Pune</h2>

                        <h3 className="sub-heading">What is the MBA Finance Course in Pune offered by ISMR?</h3>

                        <p className="intro-text">
                            This MBA Finance course in Pune focuses on practical financial
                            decision-making and real-world applications.
                        </p>

                        <p className="intro-text">
                            MBA Finance at ISMR Pune is a 2-year, 4-semester programme. The
                            syllabus is aligned with Savitribai Phule Pune University (SPPU) and
                            supplemented by ISMR's practical application layer covering Excel,
                            financial modelling, and case-based learning.
                        </p>

                        <h3 className="year-heading">Year 1 — Core Foundation</h3>

                        <div className="semester-block">
                            <h4>Semester 1</h4>
                            <p>
                                Focuses on core management principles: Financial Management,
                                Financial Accounting, Managerial Economics, Organisational
                                Behaviour, Business Communication, and Quantitative Methods.
                            </p>
                        </div>

                        <div className="semester-block">
                            <h4>Semester 2</h4>
                            <p>
                                Builds analytical depth: Cost and Management Accounting,
                                Financial Markets and Institutions, Marketing Management,
                                Operations Management, Research Methodology, and Business Law.
                            </p>
                        </div>

                        <h3 className="year-heading">Year 2 — Finance Specialisation</h3>

                        <div className="semester-block">
                            <h4>Semester 3</h4>
                            <p>
                                Moves into finance-specific subjects: Investment Analysis and
                                Portfolio Management, Corporate Valuation, Security Analysis,
                                Derivatives and Risk Management, and Banking and Financial Services.
                            </p>
                        </div>

                        <div className="semester-block">
                            <h4>Semester 4</h4>
                            <p>
                                Covers advanced applications: Financial Modelling, Strategic
                                Finance, International Finance, Project Work, and a
                                specialisation elective based on career track
                                (corporate finance/investment / BFSI).
                            </p>
                        </div>

                        <h3 className="sub-heading">What You Actually Learn</h3>

                        <ul className="role-list">
                            <li>Financial statement analysis and ratio interpretation</li>
                            <li>Capital budgeting and project evaluation</li>
                            <li>DCF valuation and M&amp;A basics</li>
                            <li>MIS dashboard creation and reporting</li>
                            <li>Business case analysis under time pressure</li>
                        </ul>

                        <h3 className="sub-heading">Tools Covered</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Tool</th>
                                        <th>Applied In</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Excel (Pivot Tables, XLOOKUP, IF/INDEX)</td>
                                        <td>Placements, MIS, analysis</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Modelling</td>
                                        <td>Valuation, forecasting</td>
                                    </tr>
                                    <tr>
                                        <td>Power BI / Tableau</td>
                                        <td>Dashboard reporting</td>
                                    </tr>
                                    <tr>
                                        <td>MIS Templates</td>
                                        <td>Analyst and corporate finance roles</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="intro-text" style={{ marginTop: "20px", fontWeight: 700, color: "#0f3350" }}>
                            Outcomes differ not because of the syllabus — they differ because of
                            how well students apply the curriculum under real placement
                            conditions. ISMR's practical layer is built to close this gap.
                        </p>
                    </div>

                </div>
            </section>






            <section className="marketing-section">
                <div className="">

                    {/* Admission Process Panel */}
                    <div className="panel">
                        <h2>MBA Finance Admission 2026 at ISMR Pune</h2>

                        <p className="intro-text">
                            The MBA Finance admission process in Pune typically includes
                            application, evaluation, and selection stages.
                        </p>

                        <h3 className="sub-heading">What is the admission process for MBA Finance at ISMR Pune?</h3>

                        <p className="intro-text">
                            ISMR Pune admission follows four stages: Application → Counselling
                            &amp; Telephonic Interview → Seat Confirmation → Provisional Admission
                        </p>

                        <h3 className="sub-heading">What entrance exams does ISMR Pune accept for MBA Finance admission?</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Entrance Exam</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MAH-MBA CET</td>
                                        <td>State-level (Maharashtra)</td>
                                    </tr>
                                    <tr>
                                        <td>CMAT</td>
                                        <td>National-level (NTA)</td>
                                    </tr>
                                    <tr>
                                        <td>CAT</td>
                                        <td>National-level (IIMs)</td>
                                    </tr>
                                    <tr>
                                        <td>MAT</td>
                                        <td>National-level (AIMA)</td>
                                    </tr>
                                    <tr>
                                        <td>XAT</td>
                                        <td>National-level (XLRI)</td>
                                    </tr>
                                    <tr>
                                        <td>ATMA</td>
                                        <td>National-level (AIMS)</td>
                                    </tr>
                                    <tr>
                                        <td>SNAP</td>
                                        <td>National-level (Symbiosis)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="sub-heading">What is the MBA Finance eligibility in Pune at ISMR?</h3>

                        <ul className="reason-list">
                            <li>Bachelor's degree (minimum 3 years after 10+2) from a recognised university</li>
                            <li>Minimum 50% aggregate marks (45% for reserved category candidates from Maharashtra)</li>
                            <li>Final-year graduation students are eligible to apply with a certificate from their institution</li>
                            <li>Valid score in any of the accepted entrance exams above</li>
                        </ul>
                    </div>

                    {/* Fees & ROI Panel */}
                    <div className="panel">
                        <h2>MBA Finance Fees at ISMR Pune — and the ROI Perspective</h2>

                        <h3 className="sub-heading">What are the MBA Finance fees at ISMR Pune?</h3>

                        <p className="intro-text">
                            MBA Finance fees at ISMR Pune are approximately ₹2 lakh per year,
                            totalling approximately ₹4 lakh for the complete 2-year programme.
                            This makes ISMR one of the most cost-accessible AICTE-approved MBA
                            Finance programmes in Pune.
                        </p>

                        <p className="intro-text">
                            For comparison, MBA Finance fees in Pune across institutes range
                            from ₹2 lakh to ₹18 lakh, depending on the institution. ISMR's fee
                            sits at the accessible end of this range while maintaining SPPU
                            affiliation.
                        </p>

                        <h3 className="sub-heading">ROI Calculation — What the Numbers Actually Mean</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <tbody>
                                    <tr>
                                        <td>Total Programme Fee</td>
                                        <td>~₹4 lakh</td>
                                    </tr>
                                    <tr>
                                        <td>Average Package (2025)</td>
                                        <td className="highlight-cell">₹5.2–6.8 LPA</td>
                                    </tr>
                                    <tr>
                                        <td>Highest Package (2025)</td>
                                        <td className="highlight-cell">₹12 LPA</td>
                                    </tr>
                                    <tr>
                                        <td>Fee-to-Salary Ratio</td>
                                        <td className="highlight-cell">~1:1.3 to 1:1.7 in Year 1 alone</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="intro-text" style={{ marginTop: "20px" }}>
                            Two students can pay identical fees and get very different outcomes.
                            The variable is role outcome — analyst-track vs. backend-track — not
                            the institution or the syllabus. ISMR's placement preparation is
                            structured to maximise the probability of analyst-track placements.
                        </p>

                        <h3 className="sub-heading">Are education loans available for MBA Finance at ISMR Pune?</h3>

                        <p className="intro-text">
                            Yes. Students can avail of education loans through SBI and other
                            nationalised banks. Scholarship assistance is also available through
                            the Maharashtra government for eligible candidates. Confirm current
                            scholarship details with the admissions office.
                        </p>
                    </div>

                    {/* Syllabus Panel */}
                    <div className="panel">
                        <h2>MBA Finance Syllabus Pune (SPPU-Aligned)</h2>

                        <p className="intro-text">Semester-wise subject map:</p>

                        <h3 className="year-heading">Semester 1 — Management Foundations</h3>
                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Core Skill Built</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Financial Management</td>
                                        <td className="subject-skill-cell">Capital budgeting, cost of capital</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Accounting and Analysis</td>
                                        <td className="subject-skill-cell">P&amp;L reading, ratio analysis</td>
                                    </tr>
                                    <tr>
                                        <td>Managerial Economics</td>
                                        <td className="subject-skill-cell">Business decision frameworks</td>
                                    </tr>
                                    <tr>
                                        <td>Quantitative Methods</td>
                                        <td className="subject-skill-cell">Statistical tools for finance</td>
                                    </tr>
                                    <tr>
                                        <td>Organisational Behaviour</td>
                                        <td className="subject-skill-cell">Team and stakeholder management</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="year-heading">Semester 2 — Analytical Depth</h3>
                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Core Skill Built</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cost and Management Accounting</td>
                                        <td className="subject-skill-cell">Budgeting, variance analysis</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Markets and Institutions</td>
                                        <td className="subject-skill-cell">Equity, debt, banking systems</td>
                                    </tr>
                                    <tr>
                                        <td>Research Methodology</td>
                                        <td className="subject-skill-cell">Data analysis, report writing</td>
                                    </tr>
                                    <tr>
                                        <td>Operations Management</td>
                                        <td className="subject-skill-cell">Process and supply chain basics</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="year-heading">Semester 3 — Finance Specialisation</h3>
                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Core Skill Built</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Investment Analysis and Portfolio Management</td>
                                        <td className="subject-skill-cell">Portfolio evaluation</td>
                                    </tr>
                                    <tr>
                                        <td>Security Analysis</td>
                                        <td className="subject-skill-cell">Company valuation, equity research</td>
                                    </tr>
                                    <tr>
                                        <td>Corporate Valuation</td>
                                        <td className="subject-skill-cell">DCF, M&amp;A fundamentals</td>
                                    </tr>
                                    <tr>
                                        <td>Derivatives and Risk Management</td>
                                        <td className="subject-skill-cell">Futures, options, and credit risk</td>
                                    </tr>
                                    <tr>
                                        <td>Banking and Financial Services</td>
                                        <td className="subject-skill-cell">BFSI sector fundamentals</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="year-heading">Semester 4 — Advanced Application</h3>
                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Core Skill Built</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Financial Modelling</td>
                                        <td className="subject-skill-cell">Forecasting models, scenario analysis</td>
                                    </tr>
                                    <tr>
                                        <td>Strategic Finance</td>
                                        <td className="subject-skill-cell">Long-range planning, capital strategy</td>
                                    </tr>
                                    <tr>
                                        <td>International Finance</td>
                                        <td className="subject-skill-cell">Forex, global financial markets</td>
                                    </tr>
                                    <tr>
                                        <td>Project Work</td>
                                        <td className="subject-skill-cell">Industry-live research project</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="sub-heading">Practical Application Layer — ISMR-Specific</h3>
                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Skill</th>
                                        <th>Task</th>
                                        <th>Where It Applies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Excel Analysis</td>
                                        <td>Dataset tasks, 5k–10k rows</td>
                                        <td>Placement rounds</td>
                                    </tr>
                                    <tr>
                                        <td>MIS Reporting</td>
                                        <td>Dashboard creation</td>
                                        <td>Analyst roles</td>
                                    </tr>
                                    <tr>
                                        <td>Financial Interpretation</td>
                                        <td>Business case solving</td>
                                        <td>Interview rounds</td>
                                    </tr>
                                    <tr>
                                        <td>Case Analysis</td>
                                        <td>Decision under pressure</td>
                                        <td>GD/Case rounds</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Why Pune / Why ISMR Panel */}
                    <div className="panel">
                        <h2>Why Pursue an MBA in Finance in Pune?</h2>

                        <p className="intro-text">
                            Pune is one of India's strongest cities for finance and analytics
                            careers, driven by:
                        </p>

                        <ul className="reason-list">
                            <li>A dense BFSI ecosystem — banking, insurance, and financial services companies are headquartered here</li>
                            <li>Shared services and analytics centres of multinational corporations (IT + Finance hybrid roles)</li>
                            <li>Direct access to manufacturing and industrial corporate finance roles via the Chakan-Pimpri-Chinchwad belt</li>
                            <li>Active internship and live-project market from Semester 1</li>
                        </ul>

                        <p className="intro-text">
                            For MBA Finance specifically, Pune offers a combination of BFSI
                            placements, corporate finance roles in large conglomerates, and
                            growing analytics-finance hybrid opportunities that do not exist at
                            the same scale in smaller cities.
                        </p>

                        <h3 className="sub-heading">Why ISMR stands out</h3>

                        <p className="intro-text">
                            Most institutes teach the same SPPU syllabus. The difference at ISMR
                            is how that syllabus is applied — specifically in preparation for
                            placement rounds that most students fail, not from lack of
                            knowledge, but from lack of execution practice.
                        </p>
                    </div>

                    {/* Gap / Response Panel */}
                    <div className="panel">
                        <h2>Why MBA Finance Students Don't Reach Their Potential — And How ISMR Addresses It</h2>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Common Gap</th>
                                        <th>ISMR's Response</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>No real dataset exposure before placements</td>
                                        <td className="highlight-cell">Dataset-based Excel training from Semester 1</td>
                                    </tr>
                                    <tr>
                                        <td>Weak business interpretation skills</td>
                                        <td className="highlight-cell">Case analysis as a regular training format</td>
                                    </tr>
                                    <tr>
                                        <td>Late preparation for placement rounds</td>
                                        <td className="highlight-cell">Structured mock placement programme across Year 2</td>
                                    </tr>
                                    <tr>
                                        <td>No clarity on analyst vs. backend roles</td>
                                        <td className="highlight-cell">Role-outcome counselling from admission stage</td>
                                    </tr>
                                    <tr>
                                        <td>Poor presentation and communication skills</td>
                                        <td className="highlight-cell">PSA (Presentation Skill Assessment) as part of the learning track</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Final CTA Panel */}
                    <div className="panel final-cta-panel">
                        <h2>Take the Next Step — MBA Finance Admission 2026 at ISMR Pune</h2>

                        <p className="intro-text" style={{ color: "white" }}>
                            Applications for MBA Finance Admission 2026 at ISMR Pune are open.
                            Seats are limited — ISMR runs a focused cohort model.
                        </p>

                        <a href={brochurePdf} download className="brochure-btn">
                            Download the Brochure
                        </a>
                    </div>

                </div>
            </section>


            <Faq />
        </section>
    );
}
