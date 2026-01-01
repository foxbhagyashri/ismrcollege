import React, { useState } from "react";
import axios from "axios";
import ContactForm from "./form/ContactForm";
import { Link } from "react-router-dom";


export default function FaqAndContactSection() {


  const [showModal, setShowModal] = useState(false);
  const [faqQuery, setFaqQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    program: "",
    message: "",
  });


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");


  /* ================= VALIDATIONS ================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (form.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";

    if (!form.program)
      newErrors.program = "Please select a programme";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const res = await axios.post(
        "https://api.ismrpune.edu.in/api/send-mail",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        setSuccessMsg("✅ Form submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          city: "",
          program: "",
          message: "",
        });
      }
    } catch {
      alert("❌ Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };


  const faqs = [
    {
      q: "What courses does ISMR Pune offer?",
      a: "ISMR offers a full-time SPPU Affiliated MBA, BBA & BCA program with specializations in Marketing, Finance, Human Resource, Business Analytics, Operations & Supply Chain, Agri-Business Management & Pharma Health Care Management.",
    },
    {
      q: "Is the MBA, BBA & BCA program at ISMR affiliated?",
      a: "Yes. The MBA, BBA, & BCA programs are affiliated with SavitribaiPhule Pune University (SPPU).",
    },
    {
      q: "Is the MBA, BBA & BCA program at ISMR approved?",
      a: "Yes. The MBA, BBA & BCA programs areapproved by AICTE, New Delhi.",
    },
    {
      q: "What is the eligibility Criteria for MBA Program?",
      a: "Candidates with minimum 50% marks in graduation (45% for reserved categories) from any recognized university and with a valid score card in national-level entrance tests like with MAH-MBA CET/CMAT/CAT/MAT/XAT/ATMA/GMAT are eligible to apply (all such exams shall be treated at par) enabling the candidate to appear for selection Process directly.",
    },
    {
      q: "Which entrance exams are accepted for MBA Program ?",
      a: "CAT, MAT, CMAT, XAT, ATMA, MH-CET, or any other equivalent and valid national-level entrance exam score are accepted.",
    },
    {
      q: "What is the campus environment like?",
      a: "The ISMR campus offers a modern, industry-oriented learning environment with classrooms, labs, seminar hall, library, recreational facilities, conference room etc.",
    },
    {
      q: "How to apply for admission?",

      a: (
        <>
          You can apply online only through the ISMR website. Or click on the following link
          <br />
          <button
            className="btn btn-secondary mt-2"
            onClick={() => setShowModal(true)}
          >
            Apply Now
          </button>
        </>
      ),
    },
  ];



  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(faqQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(faqQuery.toLowerCase())
  );

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);




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

          <Link to="/Addmissions/more-faqs" class="default-btn">More FAQ's</Link>




          {/* -------- MODAL -------- */}
          {showModal && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <div className="bg-white p-4 rounded" style={{ width: "90%", maxWidth: 500 }}>
                <h4>Enquiry Form</h4>

                <ContactForm />

                {successMsg && <p className="text-success mt-2">{successMsg}</p>}

                <button
                  className="btn btn-link text-danger mt-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}


        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="contact-form">
          <h2>Enquiry Form</h2>
          <p>
            Fill the form and our Admissions team will contact you at the earliest
          </p>



          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="form-control mb-2"
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control mb-2"
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(e) => {
                const nums = e.target.value.replace(/[^0-9]/g, "");
                if (nums.length <= 10)
                  setForm({ ...form, phone: nums });
              }}
              placeholder="Phone"
              className="form-control mb-2"
            />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="form-control mb-2"
            />

            <select
              name="program"
              value={form.program}
              onChange={handleChange}
              className="form-control mb-2"
            >
              <option value="">Select Programme *</option>
              <option value="MBA">MBA</option>
              <option value="BBA">BBA</option>
              <option value="BCA">BCA</option>
            </select>
            {errors.program && (
              <small className="text-danger">{errors.program}</small>
            )}

            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your query"
              className="form-control mb-2"
            />
            {errors.message && (
              <small className="text-danger">{errors.message}</small>
            )}

            <button
              type="submit"
              className="btn w-100 mt-3"
              disabled={loading}
              style={{
                backgroundColor: "#0a2240",
                color: "#fff",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>


            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                style={{ transform: "scale(1.6)", accentColor: "#d32f2f", width: "100px" }} required // scale increases size
              />
              <label htmlFor="vehicle1">I authorize International School of Management and Research, Pune and its representatives to Call, SMS,RCS, Email or WhatsApp me about its programmers and offers. This consent overrides any registration for DNC / NDNC. </label>
            </div>

            {successMsg && (
              <div className="alert alert-success mt-3">{successMsg}</div>
            )}
          </form>


        </div>
      </div>
    </section>
  );
}
