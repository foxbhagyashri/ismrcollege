import React, { useState } from "react";

export default function HowToApply() {
  const [tab, setTab] = useState("overview");
  const [faqQuery, setFaqQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can I edit my application after submission?",
      a: "No — once you finalise and submit the application, edits are not allowed. Please review all fields carefully before submitting. If you need to make corrections after submission, contact admissions immediately with your application ID.",
    },
    {
      q: "What is the refund policy for the application fee?",
      a: "Application fees are non-refundable. However, in rare cases (for example duplicate payments), you may contact support for review and possible refund.",
    },
    {
      q: "How do I upload large files?",
      a: "We accept PDF/JPG up to 5MB. If a document exceeds size limits, compress it to PDF or split across multiple uploads where allowed.",
    },
    {
      q: "Who do I contact for help?",
      a: "Contact our admissions team at +91 12345 67890 or admissions@college.edu. Provide your application ID and a short description of the issue for faster support.",
    },
    {
      q: "Can I apply for multiple programmes in the same intake?",
      a: "Yes — you can submit separate applications for different programmes. Each application requires a separate fee and unique submission.",
    },
  ];

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(faqQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(faqQuery.toLowerCase())
  );

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="apply-wrapper">
      <style>{`
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
                    className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>

                <div className="container position-relative py-5">
                    <h1
                        className="mb-3"
                        style={{
                            fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                            fontSize: "45px",
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
                            fontSize: "16px", 
                            marginTop: "0.5rem" 
                        }}
                    >
                        Admissions • <span className="text-warning">How to Apply</span>
                    </p>
                </div>
            </section>


      <div className="content-area">
        <div className="content-container">
          <div className="tabs" role="tablist" aria-label="Apply tabs">
            {["overview", "steps", "documents", "fees", "faq"].map((tabName) => (
              <button
                key={tabName}
                className={`tab-btn ${tab === tabName ? "active" : ""}`}
                onClick={() => setTab(tabName)}
                role="tab"
                aria-selected={tab === tabName}
                id={`tab-${tabName}`}
              >
                {tabName.charAt(0).toUpperCase() + tabName.slice(1).replace('-', ' & ')}
              </button>
            ))}
          </div>

          <div className="panel" role="region" aria-live="polite">
            {tab === "overview" && (
              <div id="panel-overview" aria-labelledby="tab-overview">
                <h2>Quick Overview</h2>
                <p>
                  Apply online using the institute application portal, upload required documents, pay the application fee
                  and wait for the selection communication. Below are quick actions:
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
                <p>Follow these simple steps to complete your application successfully:</p>
                <div className="step-list">
                  {[
                    { title: "1. Choose Programme", desc: "Select the course and intake you want to apply for." },
                    { title: "2. Create Account", desc: "Register on the application portal and verify your email." },
                    { title: "3. Fill Application Form", desc: "Complete the online form with accurate personal and academic details." },
                    { title: "4. Upload Documents", desc: "Upload scanned copies of mark sheets, ID and photos." },
                    { title: "5. Pay Application Fee", desc: "Pay application fee using the payment gateway or bank transfer." },
                    { title: "6. Submit & Track", desc: "Submit the application and track status from your dashboard." }
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
                <p>Prepare clear scanned copies (PDF/JPG, max 5MB each). Typical documents required:</p>
                <div className="doc-grid">
                  {[
                    "10th Marksheet & Certificate",
                    "12th Marksheet / Diploma Certificate", 
                    "Graduation Degree (if applicable)",
                    "Recent Photograph & ID Proof",
                    "Entrance Scorecard (if applicable)",
                    "Caste / Category Certificate (if applicable)"
                  ].map((doc, index) => (
                    <div key={index} className="doc">
                      {doc}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "fees" && (
              <div id="panel-fees" aria-labelledby="tab-fees">
                <h2>Fees & Important Dates</h2>
                <p>
                  Application fee: <strong>₹1,000</strong> (online). Fee waiver for eligible categories may apply.
                  Payment can be made via credit/debit card, net banking, or UPI.
                </p>
                <ul>
                  {[
                    "Application opens: June 1, 2024",
                    "Application closes: August 15, 2024", 
                    "Entrance test (where applicable): September 5, 2024",
                    "Admission list announcement: September 25, 2024",
                    "Last date for fee payment: October 10, 2024"
                  ].map((item, index) => (
                    <li key={index}>
                      <strong>{item.split(": ")[0]}:</strong> {item.split(": ")[1]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === "faq" && (
              <div id="panel-faq" aria-labelledby="tab-faq">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <h2 style={{ margin: 0 }}>Frequently Asked Questions</h2>
                  <span style={{ fontSize: "1rem", color: "#666", fontWeight: "600" }}>
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="faq-wrap">
                  <div className="faq-main">
                    <div className="faq-search" role="search" aria-label="Search FAQs">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M21 21l-4.35-4.35" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="11" cy="11" r="6" stroke="#999" strokeWidth="1.5" />
                      </svg>

                      <input
                        placeholder="Search questions or keywords..."
                        value={faqQuery}
                        onChange={(e) => setFaqQuery(e.target.value)}
                        aria-label="Search frequently asked questions"
                      />

                      {faqQuery && (
                        <button
                          onClick={() => setFaqQuery("")}
                          aria-label="Clear search"
                          style={{ border: 0, background: "transparent", cursor: "pointer", fontSize: "18px", color: "#999" }}
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    <div className="accordion" role="list">
                      {filtered.map((f, i) => (
                        <div className="acc-item" key={i} role="listitem">
                          <button
                            className="acc-btn"
                            onClick={() => toggle(i)}
                            aria-expanded={openIndex === i}
                            aria-controls={`faq-${i}-body`}
                          >
                            <div className="acc-q">
                              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="#0f3350" strokeWidth="1.2" fill="#f0f7ff" />
                                <path
                                  d="M10.2 8.5c.4-.9 1.3-1.4 2.3-1.4 1.4 0 2.3.8 2.3 1.9 0 1.1-.7 1.6-1.9 2.2-.9.4-1.1.8-1.1 1.4"
                                  stroke="#0f3350"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{f.q}</span>
                            </div>

                            <svg
                              className="chev"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                              aria-hidden
                            >
                              <path d="M6 9l6 6 6-6" stroke="#666" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </button>

                          <div id={`faq-${i}-body`} className={`acc-body ${openIndex === i ? "" : "closed"}`}>
                            <p style={{ margin: 0 }}>{f.a}</p>
                          </div>
                        </div>
                      ))}

                      {filtered.length === 0 && (
                        <div style={{ padding: "40px", color: "#666", textAlign: "center", fontSize: "1.1rem" }}>
                          No FAQs match your search. Try different keywords.
                        </div>
                      )}
                    </div>
                  </div>

                  <aside className="faq-meta">
                    <h4>Need Direct Help?</h4>
                    <p>Contact our admissions team for personalized assistance. Please include your application ID for faster service.</p>
                    <p>
                      <strong>Phone:</strong><br />
                      <a href="tel:+911234567890">+91 12345 67890</a>
                    </p>
                    <p>
                      <strong>Email:</strong><br />
                      <a href="mailto:admissions@college.edu">admissions@college.edu</a>
                    </p>

                    <div style={{ marginTop: "24px" }}>
                      <h4 style={{ marginBottom: "16px" }}>Quick Links</h4>
                      <ul>
                        <li><a href="#">Application Portal</a></li>
                        <li><a href="#">Fee Payment</a></li>
                        <li><a href="#">Download Brochure</a></li>
                        <li><a href="#">Contact Support</a></li>
                      </ul>
                    </div>
                  </aside>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}