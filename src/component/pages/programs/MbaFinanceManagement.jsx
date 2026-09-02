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

export default function ISMRLanding() {
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
            <SEO
                title="MBA in Finance Management in Pune | Top Finance B-School | ISMR"
                description="Study MBA in Finance Management in Pune at ISMR. Practical financial modelling, corporate internships, and 100% placement track record."
                canonical="https://ismrpune.edu.in/programs/mba-in-finance-management-in-pune"
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
                        MBA in Finance  <span className="text-warning">Management</span>
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
                            • <span className="text-warning">MBA in Finance Management</span>
                        </p>
                    </div>
                </div>
            </section>


            <section className="marketing-section">
                <div className="content-container">
                    <div className=" hero-panel">
                        <span className="eyebrow">ISMR PUNE · MBA FINANCE</span>
                        <h1>MBA in Finance Management </h1>

                        <div className="two-col-layout">
                            <div className="overview-col mt-4">
                                <h2>What is the MBA Finance Course in Pune?</h2>
                                <p className="intro-text">
                                    MBA in Finance Management in Pune at ISMR is a 2-year
                                    full-time postgraduate programme affiliated with
                                    Savitribai Phule Pune University (SPPU) and approved by
                                    AICTE. It focuses on financial decision-making,
                                    real-world data analysis, and placement-ready skills
                                    across corporate finance, investment analysis, and
                                    BFSI roles.
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
                                            <span className="facts-subtitle">MBA in Finance Management, ISMR Pune</span>
                                        </div>
                                    </div>

                                    <div className="stat-strip">
                                        <div className="stat-block">
                                            <span className="stat-icon stat-icon--gold">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 15l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14 7h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <div>
                                                <span className="stat-number">₹4.0–6.8L</span>
                                                <span className="stat-label">Average package, since inception</span>
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
                                                <span className="stat-number">86%</span>
                                                <span className="stat-label">Batch placed</span>
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
                                            <span className="facts-value">2 years (4 semesters)</span>
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
                                            <span className="facts-label">Approval</span>
                                            <span className="facts-value">AICTE Approved</span>
                                        </li>
                                        <li className="facts-row">
                                            <span className="facts-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                                                    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="facts-label">Eligibility</span>
                                            <span className="facts-value">Any graduate with a minimum 50% marks</span>
                                        </li>
                                        <li className="facts-row">
                                            <span className="facts-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                                    <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            <span className="facts-label">Accepted Exams</span>
                                            <span className="facts-value">MAH-MBA CET / CAT / CMAT / MAT / XAT / ATMA / SNAP</span>
                                        </li>
                                        <li className="facts-row">
                                            <span className="facts-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                                </svg>
                                            </span>
                                            <span className="facts-label">Total Fee</span>
                                            <span className="facts-value">As per FRA</span>
                                        </li>
                                        <li className="facts-row">
                                            <span className="facts-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 19h16M7 19V9M12 19V5M17 19v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            <span className="facts-label">Top Skills</span>
                                            <span className="facts-value">Financial modelling, Excel, DCF valuation, MIS reporting</span>
                                        </li>
                                        <li className="facts-row">
                                            <span className="facts-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                                    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.8" />
                                                </svg>
                                            </span>
                                            <span className="facts-label">Career Roles</span>
                                            <span className="facts-value">Financial Analyst, Corporate Finance, Investment Analysis</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-4 vm-panel">
                        <span className="eyebrow">WHY ISMR</span>
                        <h2>Vision &amp; Mission</h2>

                        <div className="vm-grid">
                            <div className="vm-card vm-card--vision">
                                <span className="vm-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                                    </svg>
                                </span>
                                <span className="vm-label">Vision</span>
                                <p className="vm-text">
                                    To shape finance professionals who don't just understand financial concepts, but can apply them under real business and market conditions — turning theoretical knowledge into analyst-ready decision-making ability.
                                </p>
                            </div>

                            <div className="vm-connector" aria-hidden="true">
                                <svg viewBox="0 0 40 24" preserveAspectRatio="none">
                                    <path d="M0 12h40" stroke="#dcc27a" strokeWidth="2" strokeDasharray="4 5" />
                                </svg>
                            </div>

                            <div className="vm-card vm-card--mission">
                                <span className="vm-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 15.9 6.4 19.1l1.4-6.3-4.8-4.3 6.4-.6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span className="vm-label">Mission</span>
                                <p className="vm-text">
                                    To close the gap between classroom finance and live-market execution by training students on the same skills recruiters actually test for — dataset-based Excel analysis, case-driven business interpretation, and structured placement preparation from Semester 1 onward, so that outcomes are determined by preparation, not chance.
                                </p>
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
                        <span className="eyebrow">CORE DIFFERENTIATOR</span>
                        <h2>Specialisation Tracks &amp; Core Differentiator</h2>

                        <div className="diff-layout">
                            <div className="diff-left">
                                <h3 className="diff-col-title">Tools You'll Actually Use</h3>

                                <div className="tool-table-wrap">
                                    <div className="tool-row tool-row--head">
                                        <span>Tool</span>
                                        <span>Applied In</span>
                                    </div>

                                    <div className="tool-row">
                                        <span className="tool-name">
                                            <span className="tool-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                                    <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
                                                </svg>
                                            </span>
                                            Excel (Pivot Tables, XLOOKUP, IF/INDEX)
                                        </span>
                                        <span className="tool-applied">Placements, MIS, analysis</span>
                                    </div>

                                    <div className="tool-row">
                                        <span className="tool-name">
                                            <span className="tool-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 19h16M7 19V9M12 19V5M17 19v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            Financial Modelling
                                        </span>
                                        <span className="tool-applied">Valuation, forecasting</span>
                                    </div>

                                    <div className="tool-row">
                                        <span className="tool-name">
                                            <span className="tool-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                                    <path d="M12 3v9l6 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            Power BI / Tableau
                                        </span>
                                        <span className="tool-applied">Dashboard reporting</span>
                                    </div>

                                    <div className="tool-row">
                                        <span className="tool-name">
                                            <span className="tool-icon">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                                    <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                            MIS Templates
                                        </span>
                                        <span className="tool-applied">Analyst and corporate finance roles</span>
                                    </div>
                                </div>
                            </div>

                            <div className="diff-right">
                                <h3 className="diff-col-title">Why Most MBA Finance Students Don't Become Analysts</h3>

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

                                <ul className="gap-list gap-list--styled">
                                    <li>
                                        <span className="gap-icon">
                                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        They understand financial concepts but haven't applied them to real datasets
                                    </li>
                                    <li>
                                        <span className="gap-icon">
                                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        They can explain theory, but struggle under the time pressure of live case rounds
                                    </li>
                                    <li>
                                        <span className="gap-icon">
                                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </span>
                                        They enter placement season without role clarity — and default into backend positions
                                    </li>
                                </ul>

                                <p className="intro-text">
                                    The gap is not the syllabus. It's what you can do with it.
                                </p>

                                <div className="method-card">
                                    <p className="method-lead">
                                        ISMR's MBA Finance training is built around how recruiters actually evaluate candidates:
                                    </p>

                                    <ul className="method-list method-list--styled">
                                        <li>
                                            <span className="method-icon">
                                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            Dataset-based Excel tasks (5,000–10,000 rows, 30–45 minute time limit)
                                        </li>
                                        <li>
                                            <span className="method-icon">
                                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            Case-driven decision analysis — not textbook problems
                                        </li>
                                        <li>
                                            <span className="method-icon">
                                                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            Business interpretation — explaining what the numbers mean, not just calculating them
                                        </li>
                                    </ul>
                                </div>

                                <p className="intro-text diff-closing">
                                    This is what separates analyst-track outcomes from backend-track
                                    outcomes at the same institution.
                                </p>

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
                    <div className="panel gap-panel mt-4">
                        <span className="eyebrow">GAP TO GROWTH</span>
                        <h2>Why MBA Finance Students Don't Reach Their Potential — And How ISMR Addresses It</h2>

                        <div className="gr-header-row">
                            <span className="gr-header gr-header--gap">Common Gap</span>
                            <span className="gr-header-spacer" aria-hidden="true"></span>
                            <span className="gr-header gr-header--response">ISMR's Response</span>
                        </div>

                        <div className="gr-list">
                            <div className="gr-row">
                                <div className="gr-card gr-card--gap">
                                    <span className="gr-icon gr-icon--gap">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>No real dataset exposure before placements</span>
                                </div>
                                <span className="gr-arrow" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12h15M13 6l6 6-6 6" stroke="#c9922b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="gr-card gr-card--response">
                                    <span className="gr-icon gr-icon--response">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Dataset-based Excel training from Semester 1</span>
                                </div>
                            </div>

                            <div className="gr-row">
                                <div className="gr-card gr-card--gap">
                                    <span className="gr-icon gr-icon--gap">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Weak business interpretation skills</span>
                                </div>
                                <span className="gr-arrow" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12h15M13 6l6 6-6 6" stroke="#c9922b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="gr-card gr-card--response">
                                    <span className="gr-icon gr-icon--response">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Case analysis as a regular training format</span>
                                </div>
                            </div>

                            <div className="gr-row">
                                <div className="gr-card gr-card--gap">
                                    <span className="gr-icon gr-icon--gap">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Late preparation for placement rounds</span>
                                </div>
                                <span className="gr-arrow" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12h15M13 6l6 6-6 6" stroke="#c9922b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="gr-card gr-card--response">
                                    <span className="gr-icon gr-icon--response">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Structured mock placement programme across Year 2</span>
                                </div>
                            </div>

                            <div className="gr-row">
                                <div className="gr-card gr-card--gap">
                                    <span className="gr-icon gr-icon--gap">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>No clarity on analyst vs. backend roles</span>
                                </div>
                                <span className="gr-arrow" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12h15M13 6l6 6-6 6" stroke="#c9922b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="gr-card gr-card--response">
                                    <span className="gr-icon gr-icon--response">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Role-outcome counselling from admission stage</span>
                                </div>
                            </div>

                            <div className="gr-row">
                                <div className="gr-card gr-card--gap">
                                    <span className="gr-icon gr-icon--gap">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>Poor presentation and communication skills</span>
                                </div>
                                <span className="gr-arrow" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12h15M13 6l6 6-6 6" stroke="#c9922b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <div className="gr-card gr-card--response">
                                    <span className="gr-icon gr-icon--response">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>PSA (Presentation Skill Assessment) as part of the learning track</span>
                                </div>
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
                    <div className=" curr-panel mt-4">
                        <span className="eyebrow">CURRICULUM</span>
                        <h2>Curriculum &amp; Career Opportunities</h2>

                        <h3 className="curr-subhead">What is the MBA Finance Course in Pune offered by ISMR?</h3>

                        <p className="intro-text">
                            This MBA Finance course in Pune focuses on practical financial
                            decision-making and real-world applications.
                        </p>

                        <p className="intro-text">
                            MBA Finance at ISMR Pune is a 2-year, 4-semester programme. The
                            syllabus is aligned with Savitribai Phule Pune University (SPPU)
                            and supplemented by ISMR's practical application layer covering
                            Excel, financial modelling, and case-based learning.
                        </p>

                        <div className="curr-layout">
                            <div className="curr-left">
                                <h3 className="curr-col-title">Semester-Wise Curriculum</h3>

                                <div className="sem-card">
                                    <div className="sem-header">
                                        <span className="sem-badge">1</span>
                                        <span>Management Foundations</span>
                                    </div>
                                    <div className="sem-body">
                                        <div className="sem-row">
                                            <span className="sem-subject">Financial Management</span>
                                            <span className="sem-skill">Capital budgeting, cost of capital</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Financial Accounting and Analysis</span>
                                            <span className="sem-skill">P&amp;L reading, ratio analysis</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Managerial Economics</span>
                                            <span className="sem-skill">Business decision frameworks</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Quantitative Methods</span>
                                            <span className="sem-skill">Statistical tools for finance</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Organisational Behaviour</span>
                                            <span className="sem-skill">Team and stakeholder management</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="sem-card">
                                    <div className="sem-header">
                                        <span className="sem-badge">2</span>
                                        <span>Analytical Depth</span>
                                    </div>
                                    <div className="sem-body">
                                        <div className="sem-row">
                                            <span className="sem-subject">Cost and Management Accounting</span>
                                            <span className="sem-skill">Budgeting, variance analysis</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Financial Markets and Institutions</span>
                                            <span className="sem-skill">Equity, debt, banking systems</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Research Methodology</span>
                                            <span className="sem-skill">Data analysis, report writing</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Operations Management</span>
                                            <span className="sem-skill">Process and supply chain basics</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="sem-card sem-card--highlight">
                                    <div className="sem-header sem-header--highlight">
                                        <span className="sem-badge sem-badge--highlight">3</span>
                                        <span>Finance Specialisation</span>
                                    </div>
                                    <div className="sem-body">
                                        <div className="sem-row">
                                            <span className="sem-subject">Investment Analysis and Portfolio Management</span>
                                            <span className="sem-skill">Portfolio evaluation</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Security Analysis</span>
                                            <span className="sem-skill">Company valuation, equity research</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Corporate Valuation</span>
                                            <span className="sem-skill">DCF, M&amp;A fundamentals</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Derivatives and Risk Management</span>
                                            <span className="sem-skill">Futures, options, and credit risk</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Banking and Financial Services</span>
                                            <span className="sem-skill">BFSI sector fundamentals</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="sem-card">
                                    <div className="sem-header">
                                        <span className="sem-badge">4</span>
                                        <span>Advanced Application</span>
                                    </div>
                                    <div className="sem-body">
                                        <div className="sem-row">
                                            <span className="sem-subject">Financial Modelling</span>
                                            <span className="sem-skill">Forecasting models, scenario analysis</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Strategic Finance</span>
                                            <span className="sem-skill">Long-range planning, capital strategy</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">International Finance</span>
                                            <span className="sem-skill">Forex, global financial markets</span>
                                        </div>
                                        <div className="sem-row">
                                            <span className="sem-subject">Project Work</span>
                                            <span className="sem-skill">Industry-live research project</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="curr-right">
                                <h3 className="curr-col-title">Practical Application Layer — ISMR-Specific</h3>
                                <p className="curr-right-note">
                                    This is where curriculum turns into career readiness — the
                                    skills recruiters actually test for.
                                </p>

                                <div className="app-card">
                                    <div className="app-row">
                                        <span className="app-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                                <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
                                            </svg>
                                        </span>
                                        <div className="app-text">
                                            <span className="app-skill">Excel Analysis</span>
                                            <span className="app-task">Dataset tasks, 5k–10k rows</span>
                                            <span className="app-where">Applies to: Placement rounds</span>
                                        </div>
                                    </div>

                                    <div className="app-row">
                                        <span className="app-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 19h16M7 19V9M12 19V5M17 19v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className="app-text">
                                            <span className="app-skill">MIS Reporting</span>
                                            <span className="app-task">Dashboard creation</span>
                                            <span className="app-where">Applies to: Analyst roles</span>
                                        </div>
                                    </div>

                                    <div className="app-row">
                                        <span className="app-icon">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                                <path d="M6 10v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <div className="app-text">
                                            <span className="app-skill">Financial Interpretation</span>
                                            <span className="app-task">Business case solving</span>
                                            <span className="app-where">Applies to: Interview rounds</span>
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
                                            <span className="app-skill">Case Analysis</span>
                                            <span className="app-task">Decision under pressure</span>
                                            <span className="app-where">Applies to: GD/Case rounds</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="curr-closing">
                                    ISMR's Finance specialisation trains students specifically on
                                    the skills that determine which salary bracket they enter —
                                    not just which concepts they know.
                                </p>

                                {/* <a href="/Contactus" className="default-btn curr-cta">
                                    Evaluate your placement readiness — speak to an ISMR counsellor →
                                </a> */}
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

                        <div className="ar-wrap">

                            {/* LEFT: Analyst vs Backend */}
                            <div className="ar-card">
                                <h2>Analyst vs Backend Roles — Understanding the Difference</h2>
                                <p className="ar-intro">
                                    Most students don't choose backend roles. They default into them
                                    because they aren't prepared for analyst-round selection criteria.
                                </p>

                                <div className="ar-table-wrap">
                                    <table className="ar-table">
                                        <thead>
                                            <tr>
                                                <th style={{ borderTopLeftRadius: "10px" }}>Parameter</th>
                                                <th>Analyst Role</th>
                                                <th style={{ borderTopRightRadius: "10px" }}>Backend Role</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Work Nature</td>
                                                <td className="ar-analyst-col">Decision-focused</td>
                                                <td>Process-focused</td>
                                            </tr>
                                            <tr>
                                                <td>Salary Range</td>
                                                <td className="ar-analyst-col">₹4–7 LPA</td>
                                                <td>₹2.5–4 LPA</td>
                                            </tr>
                                            <tr>
                                                <td>Career Growth</td>
                                                <td className="ar-analyst-col">Faster trajectory</td>
                                                <td>Slower, harder to switch</td>
                                            </tr>
                                            <tr>
                                                <td>Skills Required</td>
                                                <td className="ar-analyst-col">Data interpretation, case solving</td>
                                                <td>Execution, coordination</td>
                                            </tr>
                                            <tr>
                                                <td>Exposure</td>
                                                <td className="ar-analyst-col">High — client/business-facing</td>
                                                <td>Limited</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="ar-callout">
                                    Your first role determines your long-term career trajectory.
                                    Switching from backend to analyst roles later is possible, but
                                    significantly harder. ISMR's placement preparation is built to
                                    improve your eligibility for the analyst track — not just the offer.
                                </p>
                            </div>

                            {/* RIGHT: Fees & Admission */}
                            <div className="ar-card">
                                <h2>6. Program Fees &amp; Admission Process</h2>

                                <div className="ar-subhead">What are the MBA Finance fees at ISMR Pune?</div>
                                <p className="ar-intro">
                                    MBA Finance fees at ISMR Pune are approximately ₹2 lakh per year,
                                    totalling approximately ₹4 lakh for the complete 2-year programme —
                                    making ISMR one of the most cost-accessible AICTE-approved MBA
                                    Finance programmes in Pune.
                                </p>
                                <p className="ar-intro">
                                    For comparison, MBA Finance fees in Pune across institutes range
                                    from ₹2 lakh to ₹18 lakh, depending on the institution. ISMR's fee
                                    sits at the accessible end of this range while maintaining SPPU
                                    affiliation.
                                </p>

                                <div className="ar-subhead">ROI Calculation — What the Numbers Actually Mean</div>
                                <div className="ar-fee-highlight">
                                    <span className="label">Total Programme Fee</span>
                                    <span className="value">~₹4 lakh</span>
                                </div>
                                <div className="ar-badge-note">(~₹2 lakh/year, subject to final FRA approval)</div>

                                <div className="ar-fee-highlight">
                                    <span className="label">Average Package (Since inception)</span>
                                    <span className="value">₹4.0–6.8 LPA</span>
                                </div>

                                <p className="ar-callout">
                                    Two students can pay identical fees and get very different
                                    outcomes. The variable is role outcome — analyst-track vs.
                                    backend-track — not the institution or the syllabus. ISMR's
                                    placement preparation is structured to maximise the probability
                                    of analyst-track placements.
                                </p>

                               

                                <div className="ar-subhead">What is the admission process at ISMR Pune?</div>
                                <div className="ar-steps">
                                    <span className="ar-step">Application</span>
                                    <span className="ar-arrow">→</span>
                                    <span className="ar-step">Counselling &amp; Interview</span>
                                    <span className="ar-arrow">→</span>
                                    <span className="ar-step">Seat Confirmation</span>
                                    <span className="ar-arrow">→</span>
                                    <span className="ar-step">Provisional Admission</span>
                                </div>
                            </div>

                        </div>
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

                        <div className="adm-wrap">

                            {/* LEFT: Entrance Exams + Eligibility + Loans */}
                            <div className="adm-card">
                                <h2>Entrance Exams, Eligibility &amp; Financing</h2>

                                <div className="adm-subhead">What entrance exams does ISMR Pune accept for MBA Finance admission?</div>
                                <div className="adm-exam-grid">
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">MAH-MBA CET</span>
                                        <span className="exam-type">State-level (Maharashtra)</span>
                                    </div>
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">CMAT</span>
                                        <span className="exam-type">National (NTA)</span>
                                    </div>
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">CAT</span>
                                        <span className="exam-type">National (IIMs)</span>
                                    </div>
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">MAT</span>
                                        <span className="exam-type">National (AIMA)</span>
                                    </div>
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">XAT</span>
                                        <span className="exam-type">National (XLRI)</span>
                                    </div>
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">ATMA</span>
                                        <span className="exam-type">National (AIMS)</span>
                                    </div>
                                    <div className="adm-exam-pill">
                                        <span className="exam-name">SNAP</span>
                                        <span className="exam-type">National (Symbiosis)</span>
                                    </div>
                                </div>

                                <div className="adm-subhead">What is the MBA Finance eligibility in Pune at ISMR?</div>
                                <ul className="adm-check-list">
                                    <li>Bachelor's degree (minimum 3 years after 10+2) from a recognised university</li>
                                    <li>Minimum 50% aggregate marks (45% for reserved category candidates from Maharashtra)</li>
                                    <li>Final-year graduation students are eligible to apply with a certificate from their institution</li>
                                    <li>Valid score in any of the accepted entrance exams above</li>
                                </ul>

                                <div className="adm-subhead">Are education loans available for MBA Finance at ISMR Pune?</div>
                                <div className="adm-loan-box">
                                    Yes. Students can avail of <strong>education loans through SBI and other nationalised banks</strong>.
                                    Scholarship assistance is also available through the <strong>Maharashtra government</strong> for eligible candidates.
                                </div>
                                <div className="adm-fine-note">Confirm current scholarship details with the admissions office.</div>
                            </div>

                            {/* RIGHT: Recruiters */}
                            <div className="adm-card">
                                <h2>7. Industry Collaborations &amp; Top Recruiters</h2>

                                <div className="adm-subhead">Top Recruiters at ISMR Pune (since inception)</div>

                                <div className="adm-rec-table-wrap">
                                    <table className="adm-rec-table">
                                        <thead>
                                            <tr>
                                                <th style={{ borderTopLeftRadius: "10px" }}>Category</th>
                                                <th style={{ borderTopRightRadius: "10px" }}>Recruiters</th>
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

                                <div className="adm-subhead" style={{ marginBottom: "0" }}>Sectors Covered</div>
                                <div className="adm-sector-tags">
                                    <span className="adm-sector-tag">BFSI</span>
                                    <span className="adm-sector-tag">IT</span>
                                    <span className="adm-sector-tag">Education</span>
                                    <span className="adm-sector-tag">FMCG</span>
                                    <span className="adm-sector-tag">Consulting</span>
                                    <span className="adm-sector-tag">E-Commerce</span>
                                </div>
                            </div>

                        </div>
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

                        <div className="plc-wrap">

                            {/* LEFT: Placements */}
                            <div className="plc-card">
                                <h2> Placements &amp; Industry Exposure</h2>

                                <div className="plc-stat-bar">
                                    <div className="plc-stat">
                                        <span className="label">Placement Rate</span>
                                        <span className="num">86%</span>
                                    </div>
                                    <div className="plc-stat">
                                        <span className="label">Avg Package</span>
                                        <span className="num">₹4.0–6.8 LPA</span>
                                    </div>
                                    <div className="plc-stat">
                                        <span className="label">Top Roles</span>
                                        <span className="num">Financial Analyst · Corp. Finance · Investment Analysis</span>
                                    </div>
                                </div>

                                <h3>What is the placement process for MBA Finance at ISMR Pune?</h3>
                                <div className="plc-steps">
                                    <span className="plc-step">Excel / Aptitude</span>
                                    <span className="plc-arrow">→</span>
                                    <span className="plc-step">Case / GD Round</span>
                                    <span className="plc-arrow">→</span>
                                    <span className="plc-step">Personal Interview</span>
                                </div>
                                <p className="plc-intro">
                                    Students are prepared for each stage through structured mock
                                    rounds before the actual placement season.
                                </p>

                                <h3>What happens in Excel rounds?</h3>
                                <p className="plc-intro">
                                    Candidates analyse dataset-based tasks — typically 5,000–10,000
                                    rows — within 30–45 minutes. Most students underestimate this
                                    stage and prepare for it only after placement season begins. ISMR
                                    addresses this with dataset-based training from Semester 1.
                                </p>

                                <h3>Why do students fail in MBA Finance placements?</h3>
                                <p className="plc-intro">
                                    Most candidates can calculate outputs but cannot interpret them
                                    into business decisions. Case rounds evaluate this — for example:
                                </p>
                                <div className="plc-example-box">
                                    "Revenue increased by 12%, but profit dropped by 8% — identify the
                                    cause and recommend corrective action."
                                </div>
                                <p className="plc-intro">
                                    Candidates who prepare only on concepts, not interpretation, fail
                                    this stage consistently.
                                </p>
                            </div>

                            {/* RIGHT: Internships */}
                            <div className="plc-card">
                                <h2>Internships</h2>

                                <h3>Summer Internship Program (SIP) &amp; Corporate Projects</h3>
                                <p className="plc-intro">
                                    MBA Finance students at ISMR undertake a Summer Internship Program
                                    (SIP) of <strong>[CONFIRM DURATION — e.g. 8 weeks]</strong> between
                                    Semester 2 and Semester 3, placing classroom learning directly
                                    into live business environments.
                                </p>
                                <p className="plc-intro">
                                    During the internship, students work on real finance functions
                                    such as financial analysis, MIS reporting, budgeting support, or
                                    investment research — depending on the host organisation and role
                                    — under the guidance of both a faculty mentor and an industry
                                    supervisor.
                                </p>
                                <p className="plc-intro">
                                    This is followed by a corporate project in Semester 4, where
                                    students apply financial modelling and case-analysis skills
                                    learned in the classroom to an industry-live problem statement.
                                </p>

                                {/* <h3>Industry Partners</h3>
                                <p className="plc-partner-note">[LIST TO BE CONFIRMED]</p> */}

                                {/* <div className="plc-content-note">
                                    ⚠ CONTENT NEEDED: Structure/timing copy above is a draft template,
                                    not confirmed ISMR policy — the bracketed duration and any claims
                                    about mentorship/role types need sign-off from ISMR before
                                    publishing. Partner names and logos still need to be sourced; none
                                    are invented here.
                                </div> */}
                            </div>

                        </div>
                    </>
                    {/* Course Structure Panel */}
                    <>
                        <style>{`
                .gt-wrap {
                    display: grid;
                    // grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
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
                    </>

                </div>
            </section>








            <Faq />
        </section>
    );
}
