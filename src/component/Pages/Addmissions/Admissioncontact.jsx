import React, { useState } from "react";

export default function AdmissionContact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "", 
    programme: "" 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
      {/* -------- HEADER SECTION -------- */}
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
              fontSize: "40px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Admissions & <span className="text-warning">Contact</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "16px", 
              marginTop: "0.5rem" 
            }}
          >
            Admissions • <span className="text-warning">Admissions & Contact</span>
          </p>
        </div>
      </section>

      {/* -------- MAIN CONTENT -------- */}
      <div className="container pb-5" style={{ marginTop: "3rem" }}>
        <div className="row">
          {/* LEFT COLUMN - FORM & CONTACT INFO */}
          <div className="col-12 col-lg-8">
            {/* CONTACT FORM */}
            <div 
              className="rounded-3 p-4 mb-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                border: "1px solid rgba(0,0,0,0.05)"
              }}
            >
              <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#0a2240",
                  marginBottom: "1rem"
                }}
              >
                Get in Touch
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#444",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                }}
              >
                Fill the form and our admissions team will contact you within 2 working days. 
                For urgent queries, use the phone numbers below.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        fontSize: "16px",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        fontSize: "16px",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      fontSize: "16px",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <select
                    name="programme"
                    className="form-select"
                    value={form.programme}
                    onChange={handleChange}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      fontSize: "16px",
                      color: form.programme ? "#000" : "#6c757d",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    <option value="">Select Programme (Optional)</option>
                    <option>B.Sc Computer Science</option>
                    <option>MBA (Finance)</option>
                    <option>M.A. English</option>
                    <option>BBA</option>
                    <option>M.Sc Data Science</option>
                  </select>
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="How can we help you?"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      fontSize: "16px",
                      resize: "vertical",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  ></textarea>
                </div>

                <div className="d-flex gap-3 align-items-center mb-3">
                  <button
                    type="submit"
                    className="btn fw-semibold"
                    style={{
                      padding: "12px 30px",
                      backgroundColor: "#d95c5c",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                    disabled={submitted}
                  >
                    {submitted ? "Submitted ✓" : "Send Enquiry"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setForm({ name: '', email: '', phone: '', message: '', programme: '' })}
                    style={{
                      padding: "12px 30px",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Reset
                  </button>
                </div>

                <p style={{ 
                  fontSize: "14px", 
                  color: "#666", 
                  margin: 0,
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                }}>
                  By submitting you agree to our{" "}
                  <a href="#" style={{ color: "#0a2240", textDecoration: "none" }}>
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* OTHER CONTACTS */}
            <div 
              className="rounded-3 p-4 mb-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                border: "1px solid rgba(0,0,0,0.05)"
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#0a2240",
                  marginBottom: "1.5rem"
                }}
              >
                Other Contacts
              </h3>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#0a2240",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        flexShrink: 0,
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      AD
                    </div>
                    <div>
                      <h5 style={{ 
                        fontSize: "18px", 
                        fontWeight: "600", 
                        color: "#0a2240", 
                        marginBottom: "0.5rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                      }}>
                        Admissions Office
                      </h5>
                      <p style={{ 
                        fontSize: "14px", 
                        color: "#444", 
                        margin: 0, 
                        lineHeight: "1.5",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                      }}>
                        Phone: <a href="tel:+911234567890" style={{ color: "#d95c5c", textDecoration: "none" }}>+91 12345 67890</a><br />
                        Email: <a href="mailto:admissions@ismr.edu" style={{ color: "#d95c5c", textDecoration: "none" }}>admissions@ismr.edu</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#0a2240",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        flexShrink: 0,
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      FI
                    </div>
                    <div>
                      <h5 style={{ 
                        fontSize: "18px", 
                        fontWeight: "600", 
                        color: "#0a2240", 
                        marginBottom: "0.5rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                      }}>
                        Fees & Finance
                      </h5>
                      <p style={{ 
                        fontSize: "14px", 
                        color: "#444", 
                        margin: 0, 
                        lineHeight: "1.5",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                      }}>
                        Phone: <a href="tel:+911234567891" style={{ color: "#d95c5c", textDecoration: "none" }}>+91 12345 67891</a><br />
                        Email: <a href="mailto:finance@ismr.edu" style={{ color: "#d95c5c", textDecoration: "none" }}>finance@ismr.edu</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#0a2240",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        flexShrink: 0,
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      RG
                    </div>
                    <div>
                      <h5 style={{ 
                        fontSize: "18px", 
                        fontWeight: "600", 
                        color: "#0a2240", 
                        marginBottom: "0.5rem",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                      }}>
                        Registrar
                      </h5>
                      <p style={{ 
                        fontSize: "14px", 
                        color: "#444", 
                        margin: 0, 
                        lineHeight: "1.5",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                      }}>
                        Phone: <a href="tel:+911234567892" style={{ color: "#d95c5c", textDecoration: "none" }}>+91 12345 67892</a><br />
                        Email: <a href="mailto:registrar@ismr.edu" style={{ color: "#d95c5c", textDecoration: "none" }}>registrar@ismr.edu</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VISIT US SECTION */}
            <div 
              className="rounded-3 p-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                border: "1px solid rgba(0,0,0,0.05)"
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#0a2240",
                  marginBottom: "1rem"
                }}
              >
                Visit Us
              </h3>
              <p style={{ 
                fontSize: "16px", 
                color: "#444", 
                marginBottom: "1.5rem",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              }}>
                <strong>ISMR Campus</strong><br />
                123 College Avenue,<br />
                Pune, Maharashtra, India 411001
              </p>
              
              <div
                className="rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  height: "250px",
                  backgroundColor: "#f8f9fa",
                  border: "2px dashed #dee2e6",
                  color: "#6c757d",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                }}
              >
                Map Placeholder - Embed Google Maps Here
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="col-12 col-lg-4">
            <div 
              className="rounded-3 p-4 mb-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                border: "1px solid rgba(0,0,0,0.05)"
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#0a2240",
                  marginBottom: "1.5rem"
                }}
              >
                Office Hours
              </h3>

              <div className="space-y-3">
                <div className="d-flex justify-content-between py-2 border-bottom">
                  <span style={{ 
                    color: "#444", 
                    fontSize: "16px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                  }}>Monday - Friday</span>
                  <strong style={{ 
                    color: "#0a2240",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",  
                  }}>9:30 AM - 5:30 PM</strong>
                </div>
                <div className="d-flex justify-content-between py-2 border-bottom">
                  <span style={{ 
                    color: "#444", 
                    fontSize: "16px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                  }}>Saturday</span>
                  <strong style={{ 
                    color: "#0a2240",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",  
                  }}>9:30 AM - 1:00 PM</strong>
                </div>
                <div className="d-flex justify-content-between py-2">
                  <span style={{ 
                    color: "#444", 
                    fontSize: "16px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                  }}>Sunday</span>
                  <strong style={{ 
                    color: "#6c757d",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",  
                  }}>Closed</strong>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top">
                <h4 style={{ 
                  fontSize: "18px", 
                  fontWeight: "600", 
                  color: "#0a2240", 
                  marginBottom: "0.5rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                }}>
                  Quick Help
                </h4>
                <p style={{ 
                  fontSize: "14px", 
                  color: "#444", 
                  marginBottom: "1rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                }}>
                  Call <a href="tel:+911234567890" style={{ color: "#d95c5c", textDecoration: "none", fontWeight: "600" }}>+91 12345 67890</a> for urgent admissions help.
                </p>
              </div>

              <div className="mt-3">
                <h4 style={{ 
                  fontSize: "18px", 
                  fontWeight: "600", 
                  color: "#0a2240", 
                  marginBottom: "1rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
                }}>
                  Download Brochure
                </h4>
                <button
                  className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                  style={{
                    padding: "12px",
                    backgroundColor: "#0a2240",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  <span>📄</span> Download Admissions Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}