import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";
import ReCAPTCHA from "react-google-recaptcha";
//import brochurePdf from "../../../assets/Admissions-Brochure.pdf"; // Add your PDF in assets

export default function AdmissionContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    programme: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    // Trigger PDF download
    // const link = document.createElement("a");
    // link.href = brochurePdf;
    // link.download = "Admissions-Brochure.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    setShowModal(false);
    setForm({ name: "", email: "", phone: "", city: "" });
    setCaptchaValue(null);
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
              marginTop: "0.5rem",
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
            {/* VISIT US SECTION */}
            <div
              className="rounded-3 p-4"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#0a2240",
                  marginBottom: "1rem",
                }}
              >
                Reach Us
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "#444",
                  marginBottom: "1.5rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                }}
              >
                <strong>ISMR Campus</strong>
                <br />
                Bypass Pune Saswad Road,
                <br /> Sr.No.907, Opp Hotel Vijay Executive,
                <br />
                Gaidhara Kanifnath College Road,
                <br />
                Wadki, Pune – 412308.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4852719774135!2d73.9687828737175!3d18.41626317235503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c058e8d9e15b%3A0x541eee74dbde91ba!2sISMR%20-%20MBA%20College%20Pune!5e0!3m2!1sen!2sin!4v1763628879556!5m2!1sen!2sin"
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
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#0a2240",
                  marginBottom: "1.5rem",
                }}
              >
                Office Hours
              </h3>

              <div className="space-y-3">
                <div className="d-flex justify-content-between py-2 border-bottom">
                  <span
                    style={{
                      color: "#444",
                      fontSize: "16px",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Monday - Saturday
                  </span>
                  <strong
                    style={{
                      color: "#0a2240",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    9:30 AM - 5:30 PM
                  </strong>
                </div>

                <div className="d-flex justify-content-between py-2">
                  <span
                    style={{
                      color: "#444",
                      fontSize: "16px",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Sunday
                  </span>
                  <strong
                    style={{
                      color: "#6c757d",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Closed
                  </strong>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top">
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#0a2240",
                    marginBottom: "0.5rem",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  Quick Help
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#444",
                    marginBottom: "1rem",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  Call{" "}
                  <a
                    href="tel:9923786079"
                    style={{
                      color: "#d95c5c",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    9923786079
                  </a>{" "}
                  for urgent admissions help.
                </p>
              </div>

              <div className="mt-3">
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#0a2240",
                    marginBottom: "1rem",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
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
                  onClick={() => setShowModal(true)}
                >
                  <span>📄</span> Download Admissions Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------- FORM MODAL -------- */}
      {showModal && (
        <div
          className="modal-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="modal-content rounded-3 p-4"
            style={{
              backgroundColor: "#fff",
              maxWidth: "500px",
              width: "90%",
            }}
          >
            <h4 style={{ color: "#0a2240", marginBottom: "1rem" }}>
              Fill the form to download brochure
            </h4>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="form-control mb-3"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="form-control mb-3"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="form-control mb-3"
              />
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="form-control mb-3"
              />

              {/* -------- RECAPTCHA -------- */}
              <div className="mb-3">
                <ReCAPTCHA
                  sitekey="YOUR_SITE_KEY_HERE"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#0a2240",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Submit & Download
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "10px",
                background: "transparent",
                border: "none",
                color: "#d95c5c",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Faq />
    </div>
  );
}
