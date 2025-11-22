import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function HowToApply() {
  const [tab, setTab] = useState("overview");

  const [openIndex, setOpenIndex] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("OMS Students");



  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
      `}</style>

      <section
        className="py-5 text-white text-center position-relative"
        style={{
          background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
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
            How To <span className="text-warning">Apply</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Admissions • <span className="text-warning">How to Apply</span>
          </p>
        </div>
      </section>

      <div className="content-area">
        <div className="content-container">
          <div className="tabs" role="tablist" aria-label="Apply tabs">
            {["overview", "steps", "documents", "fees"].map(
              (tabName) => (
                <button
                  key={tabName}
                  className={`tab-btn ${tab === tabName ? "active" : ""}`}
                  onClick={() => setTab(tabName)}
                  role="tab"
                  aria-selected={tab === tabName}
                  id={`tab-${tabName}`}
                >
                  {tabName.charAt(0).toUpperCase() +
                    tabName.slice(1).replace("-", " & ")}
                </button>
              )
            )}
          </div>

          <div className="panel" role="region" aria-live="polite">
            {tab === "overview" && (
              <div id="panel-overview" aria-labelledby="tab-overview">
                <h2>Quick Overview</h2>
                <p>
                  Admission consideration is based on valid entrance exam scores (MAH-MBA CET/CMAT/CAT/MAT/XAT/ATMA/GMAT) and a minimum of 50% marks in graduation (45% for reserved categories), along with performance in the telephonic interview.
                </p>
                <div className="cta-row">
                  <button className="btn-primary">Apply Now</button>
                  <button className="btn-secondary">Download Brochure</button>
                </div>
              </div>
            )}

            {tab === "steps" && (
              <div id="panel-steps" aria-labelledby="tab-steps">
                <h2>Step-by-Step Application Process</h2>
                <p>
                  Follow these simple steps to complete your application
                  successfully:
                </p>
                <div className="step-list">
                  {[
                    {
                      title: "1. Apply Online",
                      desc: "Visit the official website, click on Apply Online, fill the institute portal form, and pay the ₹ 1105 registration fee.",
                    },

                    {
                      title: "2. Counselling & Interview",
                      desc: "Once the form is submitted, the admission cell initiates the counselling process followed by an interview session.",
                    },


                    {
                      title: "3. Seat Confirmation",
                      desc: "After clearing counselling and interview, candidates must confirm their seat by paying ₹30,000 within four days of receiving the Admission Letter.",
                    },

                    {
                      title: "4. Provisional Admission",
                      desc: "Upon payment, admission is provisionally confirmed subject to completing remaining formalities and submitting all required documents.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="step">
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "documents" && (
              <div id="panel-documents" aria-labelledby="tab-documents">
                <h2>Required Documents</h2>
                <h5>(Documents required for MBA)</h5>
                <p>
                  List of Documents to be submitted at the time of Admission
                </p>

                {/* Category Tabs */}
                <div className="category-tabs">
                  {[
                    "OMS Students",
                    "SC / ST Students",
                    "OBC / SBC / VJNT / SEBC Students",
                    "Open / General / EBC / EWS Students",
                  ].map((category, index) => (
                    <button
                      key={index}
                      className={`category-tab ${selectedCategory === category ? "active" : ""
                        }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Category-wise Documents List Format */}
                <div className="doc-list">
                  {selectedCategory === "OMS Students" && (
                    <div className="doc-list">
                      <ul>
                        <li>	Valid Entrance Score Card</li>
                        <li>	S.S.C. (Std. X<sup>th</sup>) Marksheet and certificate</li>
                        <li>	H.S.C. (Std. XII<sup>th</sup>)/ Diploma Marksheet and certificate</li>
                        <li>All Semester Graduation Marksheet and certificate</li>
                        <li>Leaving/Transfer Certificate</li>
                        <li>	Domicile and Nationality Certificate</li>
                        <li>Migration Certificate (Other than Home University)</li>
                        <li>Copy of Aadhar Card</li>
                        <li>Copy of Pan Card</li>
                        <li>Passport Size Colour Photos (10 Copies)</li>
                        <li>	Gap Certificate <b>(If Applicable)</b></li>
                      </ul>
                      <h4>Note :-</h4>
                      <ul>
                        <li>All the above documents should be colour-scanned in the PDF format & to be emailed on admissions@ismrpune.edu.in</li>
                        <li>For any documents related queries contact us on +91-9923786079 / +91-9158000595</li>

                      </ul>
                    </div>
                  )}

                  {selectedCategory === "SC / ST Students" && (
                    <div className="doc-list">
                      <ul>
                        <li>Valid Entrance Score Card</li>
                        <li>S.S.C. (Std. X<sup>th</sup>) Marksheet and certificate</li>
                        <li>H.S.C. (Std. XII<sup>th</sup>)/ Diploma Marksheet and certificate</li>
                        <li>All Semester Graduation Marksheet and certificate</li>
                        <li>Leaving/Transfer Certificate</li>
                        <li>Domicile and Nationality Certificate</li>
                        <li>	Migration Certificate (Other than Home University)</li>
                        <li>Income Certificate of Current Financial Year issued by Tahasildar / Sub Div. Officer/ Deputy Collector</li>
                        <li>Copy of Aadhar Card</li>
                        <li>	Copy of Pan Card</li>
                        <li>	Passport Size Colour Photos (10 Copies)</li>
                        <li>Gap Certificate <b>(If Applicable)</b></li>
                        <li>Caste Certificate</li>
                        <li>	Caste Validity Certificate</li>
                        <li>Linking of Aadhar Number to Bank Account</li>
                        <li>	Students Nationalized Bank Account Details (First Page of Passbook)</li>
                      </ul>
                      <h4>Note :-</h4>
                      <ul>
                        <li>All the above documents should be colour-scanned in the PDF format & to be emailed on admissions@ismrpune.edu.in</li>
                        <li>For any documents related queries contact us on +91-9923786079 / +91-9158000595</li>

                      </ul>
                    </div>
                  )}

                  {selectedCategory === "OBC / SBC / VJNT / SEBC Students" && (
                    <div className="doc-list">
                      <ul>
                        <li>Valid Entrance Score Card</li>
                        <li>S.S.C. (Std. X<sup>th</sup>) Marksheet and certificate</li>
                        <li>H.S.C. (Std. XII<sup>th</sup>)/ Diploma Marksheet and certificate</li>
                        <li>	All Semester Graduation Marksheet and certificate</li>
                        <li>	Leaving/Transfer Certificate</li>
                        <li>Domicile and Nationality Certificate</li>
                        <li>	Migration Certificate (Other than Home University)</li>
                        <li>	Income Certificate of Current Financial Year issued by Tahasildar / Sub Div. Officer/ Deputy Collector</li>
                        <li>	Copy of Aadhar Card</li>
                        <li>Copy of Pan Card</li>
                        <li>Passport Size Colour Photos (10 Copies)</li>
                        <li>Gap Certificate <b>(If Applicable)</b></li>
                        <li>Caste Certificate</li>
                        <li>Caste Validity Certificate</li>
                        <li>Non Creamy Layer certificate Valid till 2026</li>
                        <li>Linking of Aadhar Number to Bank Account</li>
                        <li>	Students Nationalized Bank Account Details (First Page of Passbook)</li>
                      </ul>

                      <h4>Note :-</h4>
                      <ul>
                        <li>All the above documents should be colour-scanned in the PDF format & to be emailed on admissions@ismrpune.edu.in</li>
                        <li>For any documents related queries contact us on +91-9923786079 / +91-9158000595</li>

                      </ul>
                    </div>
                  )}

                  {selectedCategory === "Open / General / EBC / EWS Students" && (
                    <div className="doc-list">
                      <ul>
                        <li>	Valid Entrance Score Card</li>
                        <li>	S.S.C. (Std. X<sup>th</sup>) Marksheet and certificate</li>
                        <li>	H.S.C. (Std. XII<sup>th</sup>)/ Diploma Marksheet and certificate</li>
                        <li>All Semester Graduation Marksheet and certificate</li>
                        <li>Leaving/Transfer Certificate</li>
                        <li>Domicile and Nationality Certificate</li>
                        <li>	Migration Certificate (Other than Home University)</li>
                        <li>	Income Certificate of Current Financial Year issued by Tahasildar / Sub Div. Officer/ Deputy Collector <b>(If Applicable)</b></li>
                        <li>Copy of Aadhar Card</li>
                        <li>	Copy of Pan Card</li>
                        <li>Passport Size Colour Photos (10 Copies)</li>
                        <li>Gap Certificate <b>(If Applicable)</b></li>
                      </ul>

                      <h4>Note :-</h4>
                      <ul>
                        <li>All the above documents should be colour-scanned in the PDF format & to be emailed on admissions@ismrpune.edu.in</li>
                        <li>For any documents related queries contact us on +91-9923786079 / +91-9158000595</li>
                        <li>Eligibility Certificate for Economically Weaker Section is Mandatory for those who want to enroll their admission in EWS Category. </li>
                      </ul>
                      <a
                        href="/Eligibility-Certificate-for-Economically-Weaker-Section.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Annexure - A for EWS Eligibility Certificate</strong>
                      </a>

                    </div>

                  )}
                </div>
              </div>
            )}



            {tab === "fees" && (
              <div id="panel-fees" aria-labelledby="tab-fees">
                <h2>Fees & Important Dates</h2>
                <p>
                  Application fee: <strong>₹ 1105</strong> (online). Fee waiver
                  for eligible categories may apply. Payment can be made by clicking on this link.
                  
                </p>
                <ul>
                  {[
                    "Application opens: Nov 1, 2025",
                    "Application closes: August 15, 2026",
                    "Entrance test (where applicable): September 5, 2025",
                    "Admission list announcement: September 25, 2026",
                    "Last date for fee payment: October 10, 2026",
                  ].map((item, index) => (
                    <li key={index}>
                      <strong>{item.split(": ")[0]}:</strong>{" "}
                      {item.split(": ")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Faq />
    </section>
  );
}
