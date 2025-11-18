import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function AdmissionContact() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    city: "",
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
            Admissions & <span className="text-warning">Contact</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "15px", 
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
                className="rounded-3"
                style={{
                  height: "190px",
                  overflow: "hidden",
                  border: "2px solid #dee2e6",
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Bypass+Pune+Saswad+Road,+Sr.+No+907,+Opp+Hotel+Vijay+Executive,+Gaidhara+Kanifnath+College+Road,+Wadki,+Pune,+Maharashtra+412308&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ISMR College Location"
                ></iframe>
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
                  }}>Monday - Saturday</span>
                  <strong style={{ 
                    color: "#0a2240",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",  
                  }}>9:30 AM - 5:30 PM</strong>
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
                  Call <a href="tel:7030680680" style={{ color: "#d95c5c", textDecoration: "none", fontWeight: "600" }}>7030680680</a> for urgent admissions help.
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
      <Faq />
    </div>
  );
}