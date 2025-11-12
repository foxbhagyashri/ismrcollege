import React, { useState } from "react";

export default function FaqAndContactSection() {
  const [faqQuery, setFaqQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted successfully.");
  };

  const handleReset = () =>
    setFormData({ name: "", phone: "", email: "", program: "", message: "" });

  return (
    <section className="faq-contact-section">
      <style>{`
        .faq-contact-section {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          background: #288aec39;
          padding: 80px 0;
        }

        .faq-contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        /* LEFT - FAQ */
        .faq-section {
          flex: 1;
        }

        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .faq-header h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f3350;
          margin: 0;
        }

        .faq-header span {
          color: #666;
          font-weight: 600;
        }

        .faq-search {
          display: flex;
          gap: 12px;
          align-items: center;
          background: #fff;
          padding: 14px 20px;
          border-radius: 12px;
          border: 2px solid rgba(15,51,80,0.1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          margin-bottom: 24px;
        }

        .faq-search input {
          border: 0;
          outline: none;
          font-size: 1rem;
          width: 100%;
          background: transparent;
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
          padding: 18px 24px;
          cursor: pointer;
          background: linear-gradient(180deg, #fff, #fbfdff);
          border: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #0f3350;
          transition: all 0.3s ease;
        }

        .acc-body {
          padding: 0 24px 18px;
          color: #444;
          font-size: 0.98rem;
          line-height: 1.6;
        }

        .acc-body.closed {
          display: none;
        }

        /* RIGHT - CONTACT FORM */
        .contact-form {
          flex: 1;
          background: #fff;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(15,51,80,0.08);
          border: 1px solid rgba(15,51,80,0.1);
        }

        .contact-form h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f3350;
          margin-bottom: 12px;
        }

        .contact-form p {
          color: #555;
          font-size: 1.05rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #0f3350;
          box-shadow: 0 0 0 3px rgba(15,51,80,0.1);
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #e44747;
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(228,71,71,0.3);
        }

        .btn-primary:hover {
          background: #d03636;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(228,71,71,0.4);
        }

        .btn-secondary {
          background: #fff;
          color: #0f3350;
          border: 1.8px solid #0f3350;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
        }

        .btn-secondary:hover {
          background: #0f3350;
          color: #fff;
          transform: translateY(-2px);
        }

        .form-note {
          font-size: 0.9rem;
          color: #666;
          margin-top: 12px;
        }

        .form-note a {
          color: #0f3350;
          font-weight: 600;
          text-decoration: none;
        }

        .form-note a:hover {
          color: #e44747;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .faq-contact-container {
            flex-direction: column;
          }
        }

        @media (max-width: 576px) {
          .contact-form {
            padding: 28px;
          }
        }
      `}</style>

      <div className="faq-contact-container">
        {/* LEFT: FAQ */}
        <div className="faq-section">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
           
          </div>

          <div className="faq-search">
            <input
              placeholder="Search questions or keywords..."
              value={faqQuery}
              onChange={(e) => setFaqQuery(e.target.value)}
            />
            {faqQuery && (
              <button
                onClick={() => setFaqQuery("")}
                aria-label="Clear search"
                style={{
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#999",
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div className="accordion">
            {filtered.map((f, i) => (
              <div className="acc-item" key={i}>
                <button
                  className="acc-btn"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  {f.q}
                  <span
                    style={{
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                      fontSize: "1.2rem",
                    }}
                  >
                    ▼
                  </span>
                </button>
                <div className={`acc-body ${openIndex === i ? "" : "closed"}`}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: "30px", color: "#666", textAlign: "center" }}>
                No FAQs match your search.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="contact-form">
          <h2>Application Form</h2>
          <p>
            Fill the form and our admissions team will contact you within 2 working days.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
            >
              <option value="">Select Programme (Optional)</option>
              <option value="mba">MBA</option>
              <option value="bba">BBA</option>
              <option value="pgdm">PGDM</option>
            </select>

            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="btn-row">
              <button type="submit" className="btn-primary">
                Send Enquiry
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary"
              >
                Reset
              </button>
            </div>

            <p className="form-note">
              By submitting you agree to our <a href="#">privacy policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
