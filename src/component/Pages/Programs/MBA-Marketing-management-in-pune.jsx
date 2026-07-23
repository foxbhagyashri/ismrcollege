import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

import ContactForm from "../../form/ContactForm";
import Howtoaplydownoadform from "../../form/Howtoaplydownoadform";
import brochurePdf from "/ISMR Brochure.pdf"; // Add your PDF in assets
import ISMRFormModal from "../../form/ISMRFormModal";

export default function ISMRMarketingLanding() {

    const [openFaq, setOpenFaq] = useState(0); // first item open by default

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    const marketingFaqs = [
        {
            q: "What is the MBA in Marketing Management in Pune at ISMR?",
            a: (
                <ul>
                    <li>
                        The MBA in Marketing Management in Pune at ISMR follows the
                        syllabus prescribed by Savitribai Phule Pune University and is
                        structured under the National Education Policy 2020 with a
                        credit-based system.
                    </li>
                    <li>
                        It combines academic learning with practical exposure to prepare
                        students for real marketing roles.
                    </li>
                </ul>
            ),
        },
        {
            q: "What subjects are covered in this MBA Marketing program in Pune?",
            a: (
                <>
                    <p>The program includes a mix of core business and marketing-focused subjects:</p>
                    <ul>
                        <li>MBA marketing subjects in Pune: consumer behaviour, branding, digital marketing</li>
                        <li>Research components: field projects and business research</li>
                        <li>Internship integrated into the curriculum</li>
                    </ul>
                </>
            ),
        },
        {
            q: "How does ISMR provide practical learning in MBA Marketing?",
            a: (
                <>
                    <p>The MBA Marketing program in Pune at ISMR focuses on hands-on learning through:</p>
                    <ul>
                        <li>Live marketing assignments</li>
                        <li>Case-based learning using real business scenarios</li>
                        <li>Campaign planning and execution exposure</li>
                        <li>Internship-based learning</li>
                    </ul>
                    <p>This ensures students develop job-ready marketing skills, not just theoretical knowledge.</p>
                </>
            ),
        },
        {
            q: "Are the MBA Marketing course fees in Pune worth it at ISMR?",
            a: (
                <>
                    <p>
                        When evaluating MBA Marketing course fees in Pune, students should
                        look beyond brand value and focus on outcomes:
                    </p>
                    <ul>
                        <li>Placement opportunities</li>
                        <li>Skill development</li>
                        <li>Internship exposure</li>
                    </ul>
                    <p>
                        At ISMR, the focus is on ensuring that your investment leads to
                        real employability and career growth, not just degree completion.
                    </p>
                </>
            ),
        },
    ];


    return (
        <section className="apply-wrapper">
            <style>{`

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
                        MBA in Marketing <span className="text-warning">Management</span>
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
                        <span className="text-warning">MBA in Marketing Management</span>
                    </p>
                </div>
            </section>


            <section className="marketing-section">
                <div className="">
                    <div className="panel">
                        <h1>MBA in Marketing Management in Pune at ISMR – Admission 2026, Fees, Syllabus & Placements</h1>

                        <p style={{ color: "#0f3350", fontWeight: 700, marginBottom: "16px" }}>
                            Build a Job-Ready Marketing Career with Practical Industry Exposure
                        </p>

                        <p className="intro-text">
                            This MBA program at ISMR focuses on real-world marketing skills through hands-on learning, not just classroom theory.
                        </p>

                        <ul className="highlight-list">
                            <li>Internships integrated into the curriculum</li>
                            <li>Live campaign execution</li>
                            <li>Industry-aligned training modules</li>
                        </ul>

                        <p className="intro-text">
                            Ideal for students planning MBA Marketing admission in Pune for 2026 and looking for better ROI.
                        </p>

                        <a href="/Contactus" className="default-btn">Get Admission Guidance</a>
                    </div>

                    <div className="panel">
                        <h2>Why Students Choose ISMR Over Other MBA Marketing Colleges in Pune</h2>

                        <p className="intro-text">
                            Pune has over 100 colleges offering an MBA with a marketing specialisation. The difference between them is not always visible in a brochure — it shows up in how the program is structured and what students are doing before final placements.
                        </p>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Most Pune MBA Colleges</th>
                                        <th>ISMR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Learning approach</td>
                                        <td>Theory-heavy curriculum</td>
                                        <td className="highlight-cell">Execution-based — live campaigns, real assignments</td>
                                    </tr>
                                    <tr>
                                        <td>Internship structure</td>
                                        <td>End-of-program, often unstructured</td>
                                        <td className="highlight-cell">Integrated into the curriculum from early semesters</td>
                                    </tr>
                                    <tr>
                                        <td>Geographic career exposure</td>
                                        <td>Primarily Pune-city opportunities</td>
                                        <td className="highlight-cell">Dual exposure — Pune startup ecosystem</td>
                                    </tr>
                                    <tr>
                                        <td>University affiliation</td>
                                        <td>Varies — autonomous or affiliated</td>
                                        <td className="highlight-cell">SPPU-affiliated, NEP 2020 compliant, AICTE approved</td>
                                    </tr>
                                    <tr>
                                        <td>Marketing placement rate</td>
                                        <td>Not publicly disclosed by most colleges</td>
                                        <td className="highlight-cell">92% — 2024–25 batch, highest among all ISMR specialisations</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="comparison-note">
                            ISMR is among the Top MBA colleges in Pune. It is a focused institute where marketing as a specialisation consistently outperforms other streams in placement outcomes — and where the program structure is built for students who want a job, not just a degree.

                        </p>
                    </div>
                </div>
            </section>
            <section className="marketing-section">
                <div className="">
                    <div className="panel">
                        <h2>MBA Marketing Program FAQs</h2>

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
                </div>
            </section>

            <section className="marketing-section">
                <div className="">

                    {/* Placement Outcomes Panel */}
                    <div className="panel">
                        <h2>Why ISMR Ranks Among the Top MBA Marketing Colleges in Pune for Placement Outcomes?</h2>

                        <h3 className="sub-heading">MBA Marketing Placements at ISMR Pune — 2024–25 Data</h3>

                        <p className="intro-text">
                            A common concern students have is: "Will I actually get placed after the MBA?"
                        </p>

                        <div className="stat-highlight">
                            <div className="stat-number">92%</div>
                            <div className="stat-text">
                                of MBA Marketing students from the 2024–25 batch were placed —
                                the highest placement rate across all MBA specialisations at ISMR.
                            </div>
                        </div>

                        <p className="intro-text">
                            This is not a blanket "placement assistance" claim. It reflects
                            students securing roles in branding, sales, digital marketing, and
                            B2B marketing across national-level companies.
                        </p>

                        <h3 className="sub-heading">Where MBA Marketing Graduates from ISMR Get Placed</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Company Category</th>
                                        <th>Top Recruiters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>FMCG &amp; Consumer Brands</td>
                                        <td>Hindustan Unilever, ITC, Nestlé India, Dabur, Marico, Britannia, P&amp;G, Godrej Consumer Products, Tata Consumer Products</td>
                                    </tr>
                                    <tr>
                                        <td>Retail &amp; E-commerce</td>
                                        <td>Reliance Retail, Amazon, Flipkart</td>
                                    </tr>
                                    <tr>
                                        <td>Beverages</td>
                                        <td>Coca-Cola India, PepsiCo India</td>
                                    </tr>
                                    <tr>
                                        <td>Paints &amp; Coatings</td>
                                        <td>Asian Paints</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="sub-heading">How ISMR Strengthens Placement Outcomes</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Focus Area</th>
                                        <th>What It Means for You</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Internship-Driven Learning</td>
                                        <td>You gain hands-on experience before final placements, reducing the fresher gap</td>
                                    </tr>
                                    <tr>
                                        <td>Skill-Based Training</td>
                                        <td>You learn skills aligned with real roles like digital marketing, sales, and branding</td>
                                    </tr>
                                    <tr>
                                        <td>Continuous Preparation</td>
                                        <td>You are trained for interviews, communication, and job expectations throughout the program</td>
                                    </tr>
                                    <tr>
                                        <td>Multi-Industry Exposure</td>
                                        <td>You get access to opportunities across startups, agencies, and industrial sectors</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Roles & Salary Panel */}
                    <div className="panel">
                        <h2>MBA Marketing Placements at ISMR — What Roles and Salaries to Expect</h2>

                        <p className="intro-text">
                            After completing an MBA in Marketing, your career path depends on the
                            roles you choose and the skills you build, not just the degree itself.
                            Understanding what each role involves helps you make better career decisions.
                        </p>

                        <h3 className="sub-heading">Key Roles You Can Explore</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Role</th>
                                        <th>What You Will Do</th>
                                        <th>Salary Range</th>
                                        <th>Career Growth</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Digital Marketing Executive</td>
                                        <td>Handle SEO, paid ads, social media campaigns, and performance tracking</td>
                                        <td className="salary-cell">₹3–6 LPA</td>
                                        <td className="growth-arrow">Performance Marketing Manager<span className="arrow-icon">→</span>Digital Head</td>
                                    </tr>
                                    <tr>
                                        <td>Sales Manager</td>
                                        <td>Focus on revenue generation, client acquisition, and managing sales teams</td>
                                        <td className="salary-cell">₹4–7 LPA + incentives</td>
                                        <td className="growth-arrow">Regional Manager<span className="arrow-icon">→</span>Business Head</td>
                                    </tr>
                                    <tr>
                                        <td>Brand Manager</td>
                                        <td>Work on brand positioning, campaign planning, and customer perception</td>
                                        <td className="salary-cell">₹5–8 LPA</td>
                                        <td className="growth-arrow">Senior Brand Manager<span className="arrow-icon">→</span>Marketing Director</td>
                                    </tr>
                                    <tr>
                                        <td>Market Research Analyst</td>
                                        <td>Analyze customer data, market trends, and competitor strategies</td>
                                        <td className="salary-cell">₹3–6 LPA</td>
                                        <td className="growth-arrow">Senior Analyst<span className="arrow-icon">→</span>Strategy Consultant</td>
                                    </tr>
                                    <tr>
                                        <td>Product Marketing Executive</td>
                                        <td>Work on product positioning, go-to-market strategies, and launches</td>
                                        <td className="salary-cell">₹4–7 LPA</td>
                                        <td className="growth-arrow">Product Marketing Manager<span className="arrow-icon">→</span>Product Head</td>
                                    </tr>
                                    <tr>
                                        <td>Social Media Manager</td>
                                        <td>Manage brand presence, content strategy, and audience engagement</td>
                                        <td className="salary-cell">₹3–5 LPA</td>
                                        <td className="growth-arrow">Social Media Lead<span className="arrow-icon">→</span>Digital Marketing Manager</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>



            <section className="marketing-section">
                <div className="">

                    {/* Industry Opportunities Panel */}
                    <div className="panel">
                        <h2>Industry Opportunities in Pune</h2>

                        <ul className="opportunity-list">
                            <li>Strong demand in IT companies, startups, and digital agencies</li>
                            <li>Growing opportunities in FMCG, retail, and D2C brands</li>
                            <li>Stable roles in the industrial and B2B sectors across Pune</li>
                        </ul>

                        <h3 className="sub-heading">What Actually Determines Your Career Growth</h3>

                        <p className="intro-text">
                            Your career after an MBA in Marketing is influenced by:
                        </p>

                        <ul className="factor-list">
                            <li><strong>Internship experience</strong> – Practical exposure to real work environments</li>
                            <li><strong>Skill development</strong> – Tools, analytics, campaign execution</li>
                            <li><strong>Industry exposure</strong> – Understanding different business models and markets</li>
                        </ul>

                        <p className="intro-text">
                            Focusing on these factors helps you move faster from entry-level
                            roles to managerial and leadership positions.
                        </p>
                    </div>

                    {/* Who Should Choose ISMR Panel */}
                    <div className="panel">
                        <h2>Who Should Choose ISMR?</h2>

                        <p className="intro-text">
                            ISMR is ideal for students seeking a career-focused MBA with
                            practical exposure, long-term growth, and strong ROI.
                        </p>

                        <ul className="fit-list">
                            <li className="yes">You want a career in marketing, not just an MBA degree</li>
                            <li className="yes">You want to build a long-term career, not just secure a job</li>
                            <li className="yes">You prefer practical exposure over theory-heavy learning</li>
                            <li className="yes">You are targeting placements in Pune</li>
                            <li className="yes">You are looking for ROI-focused education</li>
                            <li className="no">Not ideal if you only want a degree without focusing on outcomes</li>
                        </ul>
                    </div>

                    {/* Eligibility & Admission Process Panel */}
                    <div className="panel">
                        <h2>MBA Marketing Admission 2026 Pune — ISMR Eligibility &amp; Process</h2>

                        <p className="intro-text">
                            The following are the admission process details and eligibility criteria.
                        </p>

                        <h3 className="sub-heading">Eligibility Criteria</h3>

                        <div className="comparison-table-wrap">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Requirement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Minimum Qualification</td>
                                        <td>Graduate in any discipline from a recognised university</td>
                                    </tr>
                                    <tr>
                                        <td>Minimum Marks</td>
                                        <td>50% aggregate (45% for reserved category candidates)</td>
                                    </tr>
                                    <tr>
                                        <td>Entrance Exam Accepted</td>
                                        <td>MAH-MBA/MMS CET / CAT / MAT / CMAT / ATMA / XAT</td>
                                    </tr>
                                    <tr>
                                        <td>Affiliation</td>
                                        <td>SPPU-affiliated — admission follows DTE Maharashtra norms</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="intro-text" style={{ marginTop: "20px" }}>
                            Final-year graduation students are eligible to apply provisionally.
                        </p>

                        <h3 className="sub-heading">Admission Process</h3>

                        <div className="step-list">
                            <div className="step">
                                <h3>1. Profile Evaluation (Foundation Step)</h3>
                                <p>
                                    ISMR evaluates your academic background, entrance exam score,
                                    and career goals to ensure your eligibility and clarify your
                                    goals before admission.
                                </p>
                            </div>
                            <div className="step">
                                <h3>2. Eligibility-Based Selection Process</h3>
                                <p>
                                    Admission is based on alignment between your profile and the
                                    program's requirements — ensuring that students enter with
                                    clear expectations.
                                </p>
                            </div>
                            <div className="step">
                                <h3>3. Application &amp; Documentation Support</h3>
                                <p>
                                    ISMR ensures your MBA Marketing Admission 2026 Pune process is
                                    complete and error-free.
                                </p>
                            </div>
                            <div className="step">
                                <h3>4. Final Admission &amp; Seat Confirmation</h3>
                                <p>
                                    Admission is confirmed through eligibility verification,
                                    interaction (if applicable), and fee submission.
                                </p>
                            </div>
                        </div>

                        <div className="admission-note">
                            <p>
                                MBA Marketing Admission 2026 at ISMR in Pune is limited due to a
                                fixed intake capacity.
                            </p>
                            <button className="btn-primary">Speak with the ISMR Admission Team Today</button>
                        </div>
                    </div>

                </div>
            </section>


            <Faq />
        </section>
    );
}
