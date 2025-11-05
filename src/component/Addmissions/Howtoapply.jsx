import React, { useState } from "react";

export default function HowToApply() {
  const [tab, setTab] = useState("overview");
  const [showHeroOverlay] = useState(true);
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
        .apply-wrapper{font-family: Inter, Roboto, Arial, sans-serif;color:#111}
        .hero{position:relative;display:flex;align-items:center;min-height:220px;background:#0f3350;color:#fff;padding:36px 60px;overflow:hidden}
        .hero .library-bg{position:absolute;inset:0;background:linear-gradient(0deg, rgba(6,40,68,0.6), rgba(6,40,68,0.6));background-image:url('./bg-3.jpg');background-size:cover;background-position:center;z-index:0}
        .hero-inner{position:relative;z-index:2;display:flex;align-items:center;width:100%}
        .hero-left{flex:1;max-width:65%}
        .hero-left h1{font-size: 54px;margin:0 0 8px;font-weight:700}
        .breadcrumb{color:#ffd27b;margin-top:6px;display:flex;gap:10px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        .hero-right{flex:0 0 340px;display:flex;justify-content:flex-end;align-items:center;padding-left:20px}
        .photo-card{width:320px;height:180px;border-radius:12px;overflow:hidden;box-shadow:0 10px 28px rgba(0,0,0,0.28);background:#fff}
        .photo-card img{width:100%;height:100%;object-fit:cover}

        .content-area{padding:48px 60px;background:#fff}
        .tabs{display:flex;gap:40px;flex-wrap:wrap;margin-bottom:18px;justify-content:center;}
        .tab-btn{padding:9px 20px;border-radius:9px;border:1px solid rgba(15,51,80,0.06);background:#ffc333;cursor:pointer;font-weight:600;font-size:19px;}
        .tab-btn.active{background:#0f3350;color:#fff;border-color:transparent;box-shadow:0 6px 18px rgba(15,51,80,0.12)}

        .panel{background:#f7f9fb;padding:20px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.04)}
        .step-list{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:12px}
        .step{background:#fff;padding:14px;border-radius:8px;box-shadow:0 4px 16px rgba(15,51,80,0.04)}
        .step h3{margin:0 0 8px;font-size:16px}

        .doc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px}
        .doc{background:#fff;padding:12px;border-radius:8px;border:1px dashed rgba(0,0,0,0.06);text-align:center}

        .cta-row{display:flex;gap:12px;margin-top:18px}
        .btn-primary{background:#ff3a4e;color:#fff;padding:10px 16px;border-radius:8px;border:none;cursor:pointer;font-weight:700}
        .btn-secondary{background:#fff;border:1px solid rgba(15,51,80,0.08);padding:10px 16px;border-radius:8px;cursor:pointer}

        /* PROFESSIONAL FAQ STYLES */
        .faq-wrap{display:flex;gap:24px;align-items:flex-start;margin-top:6px}
        .faq-main{flex:1}
        .faq-search{display:flex;gap:8px;align-items:center;background:#fff;padding:10px;border-radius:10px;border:1px solid rgba(15,51,80,0.06)}
        .faq-search input{border:0;outline:none;font-size:15px;width:100%}
        .faq-meta{width:260px;background:#fff;padding:14px;border-radius:10px;box-shadow:0 6px 20px rgba(15,51,80,0.04)}
        .faq-meta h4{margin:0 0 8px;font-size:16px}
        .faq-meta p{margin:0;font-size:14px;color:#555}

        .accordion{margin-top:14px}
        .acc-item{background:#fff;border-radius:10px;margin-bottom:10px;overflow:hidden;border:1px solid rgba(15,51,80,0.06)}
        .acc-btn{display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 16px;cursor:pointer;background:linear-gradient(180deg,#fff,#fbfdff);border:0;font-size:15px}
        .acc-q{display:flex;gap:12px;align-items:center}
        .acc-q svg{flex-shrink:0}
        .acc-body{padding:0 16px 16px 16px;color:#333;font-size:15px;line-height:1.6;transition:all .28s ease}
        .acc-body.closed{display:none}

        .chev{transition:transform .25s ease}

        /* subtle focus styles for keyboard users */
        .acc-btn:focus{outline:3px solid rgba(34,122,255,0.12);outline-offset:3px}

        @media(max-width:900px){
          .hero{padding:28px 20px}
          .hero-inner{flex-direction:column;align-items:flex-start}
          .hero-right{width:100%;margin-top:18px}
          .step-list{grid-template-columns:1fr}
          .doc-grid{grid-template-columns:1fr}
          .faq-wrap{flex-direction:column}
          .faq-meta{width:100%}
        }
      `}</style>

      <div className="hero" aria-label="How to apply hero">
        <div className="library-bg" aria-hidden />
        <div className="hero-inner">
          <div className="hero-left">
            <h1>How to Apply</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#">Home</a>
              <span aria-hidden>•</span>
              <span aria-current="page">How to Apply</span>
            </nav>
            <p style={{ marginTop: 12, maxWidth: 520 }}>
              Follow our step-by-step guide to apply for programmes. Choose the programme type below to see specific
              requirements, fees and deadlines.
            </p>
          </div>

          <div className="hero-right" aria-hidden>
            <div className="photo-card" role="img" aria-label="Campus photo">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop&s=placeholder"
                alt="Campus"
              />
            </div>
          </div>
        </div>
        {showHeroOverlay && (
          <div style={{ position: "absolute", inset: 0, background: "rgba(6,40,68,0.28)", zIndex: 1 }} />
        )}
      </div>

      <div className="content-area">
        <div className="tabs" role="tablist" aria-label="Apply tabs">
          <button
            className={`tab-btn ${tab === "overview" ? "active" : ""}`}
            onClick={() => setTab("overview")}
            role="tab"
            aria-selected={tab === "overview"}
            id="tab-overview"
          >
            Overview
          </button>
          <button
            className={`tab-btn ${tab === "steps" ? "active" : ""}`}
            onClick={() => setTab("steps")}
            role="tab"
            aria-selected={tab === "steps"}
            id="tab-steps"
          >
            Step-by-step
          </button>
          <button
            className={`tab-btn ${tab === "documents" ? "active" : ""}`}
            onClick={() => setTab("documents")}
            role="tab"
            aria-selected={tab === "documents"}
            id="tab-documents"
          >
            Documents
          </button>
          <button
            className={`tab-btn ${tab === "fees" ? "active" : ""}`}
            onClick={() => setTab("fees")}
            role="tab"
            aria-selected={tab === "fees"}
            id="tab-fees"
          >
            Fees & Deadlines
          </button>
          <button
            className={`tab-btn ${tab === "faq" ? "active" : ""}`}
            onClick={() => setTab("faq")}
            role="tab"
            aria-selected={tab === "faq"}
            id="tab-faq"
          >
            FAQ
          </button>
        </div>

        <div className="panel" role="region" aria-live="polite" style={{ marginTop: 71 }}>
          {tab === "overview" && (
            <div id="panel-overview" aria-labelledby="tab-overview">
              <h2 style={{ margin: 0 }}>Quick overview</h2>
              <p style={{ marginTop: 10 }}>
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
              <h2 style={{ margin: 0 }}>Step-by-step application</h2>
              <div className="step-list">
                <div className="step">
                  <h3>1. Choose programme</h3>
                  <p>Select the course and intake you want to apply for.</p>
                </div>
                <div className="step">
                  <h3>2. Create account</h3>
                  <p>Register on the application portal and verify your email.</p>
                </div>
                <div className="step">
                  <h3>3. Fill form</h3>
                  <p>Complete the online form with accurate personal and academic details.</p>
                </div>
                <div className="step">
                  <h3>4. Upload documents</h3>
                  <p>Upload scanned copies of mark sheets, ID and photos.</p>
                </div>
                <div className="step">
                  <h3>5. Pay fee</h3>
                  <p>Pay application fee using the payment gateway or bank transfer.</p>
                </div>
                <div className="step">
                  <h3>6. Submit &amp; track</h3>
                  <p>Submit the application and track status from your dashboard.</p>
                </div>
              </div>
            </div>
          )}

          {tab === "documents" && (
            <div id="panel-documents" aria-labelledby="tab-documents">
              <h2 style={{ margin: 0 }}>Required documents</h2>
              <p style={{ marginTop: 8 }}>Prepare clear scanned copies (PDF/JPG). Typical documents:</p>
              <div className="doc-grid">
                <div className="doc">10th Marksheet</div>
                <div className="doc">12th Marksheet / Diploma</div>
                <div className="doc">Graduation Degree (if applicable)</div>
                <div className="doc">Photo &amp; ID Proof</div>
                <div className="doc">Entrance scorecard (if applicable)</div>
                <div className="doc">Caste / Category certificate (if applicable)</div>
              </div>
            </div>
          )}

          {tab === "fees" && (
            <div id="panel-fees" aria-labelledby="tab-fees">
              <h2 style={{ margin: 0 }}>Fees & important dates</h2>
              <p style={{ marginTop: 8 }}>
                Application fee: <strong>₹1,000</strong> (online). Fee waiver for eligible categories may apply.
              </p>
              <ul style={{ marginTop: 12 }}>
                <li>
                  Application opens: <strong>June 1</strong>
                </li>
                <li>
                  Application closes: <strong>August 15</strong>
                </li>
                <li>
                  Entrance test (where applicable): <strong>September 5</strong>
                </li>
                <li>
                  Admission list: <strong>September 25</strong>
                </li>
              </ul>
            </div>
          )}

          {tab === "faq" && (
            <div id="panel-faq" aria-labelledby="tab-faq">
              <h2 style={{ margin: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Frequently asked questions</span>
                <span style={{ fontSize: 13, color: "#666" }}>{filtered.length} result(s)</span>
              </h2>

              <div className="faq-wrap" style={{ marginTop: 12 }}>
                <div className="faq-main">
                  <div className="faq-search" role="search" aria-label="Search FAQs">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
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
                        style={{ border: 0, background: "transparent", cursor: "pointer", fontSize: 16 }}
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
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="#0f3350" strokeWidth="1.2" fill="#f0f7ff" />
                              <path
                                d="M10.2 8.5c.4-.9 1.3-1.4 2.3-1.4 1.4 0 2.3.8 2.3 1.9 0 1.1-.7 1.6-1.9 2.2-.9.4-1.1.8-1.1 1.4"
                                stroke="#0f3350"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span style={{ fontWeight: 700 }}>{f.q}</span>
                          </div>

                          <svg
                            className="chev"
                            width="18"
                            height="18"
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

                    {filtered.length === 0 && <div style={{ padding: 20, color: "#666" }}>No FAQs match your search. Try different keywords.</div>}
                  </div>
                </div>

                <aside className="faq-meta" aria-hidden>
                  <h4>Need direct help?</h4>
                  <p>Contact admissions for personalised assistance — include your application ID for faster service.</p>
                  <p style={{ marginTop: 10 }}>
                    <strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:admissions@college.edu">admissions@college.edu</a>
                  </p>

                  <div style={{ marginTop: 12 }}>
                    <h4 style={{ marginBottom: 8 }}>Quick links</h4>
                    <ul style={{ paddingLeft: 18, margin: 0 }}>
                      <li>
                        <a href="#">Application portal</a>
                      </li>
                      <li>
                        <a href="#">Fee payment</a>
                      </li>
                      <li>
                        <a href="#">Download brochure</a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
