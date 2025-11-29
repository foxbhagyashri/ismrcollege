import React from 'react';
import allsectionbg from "../../../assets/allsectionbg.jpg";
import loanImage from "../../../assets/Homeimg/loann.jpg";
import Faq from "../../Faq";

export default function EducationLoad() {

  return (
    <div style={{ fontFamily: "'Inter', Arial, Helvetica, sans-serif" }}>
      {/* Add FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

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
            Educational <span className="text-warning">Loan</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem"
            }}
          >
            Admissions • <span className="text-warning">Educational Loan</span>
          </p>
        </div>
      </section>

      {/* -------- MAIN CONTENT -------- */}
      <div className="container py-5">
        {/* Introduction Section with Image */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h2
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "32px",
                fontWeight: "700",
                color: "#0a2240",
                marginBottom: "1.5rem",
              }}
            >
              <i className="fas fa-graduation-cap me-3" style={{ color: "#FFC333" }}></i>
              EDUCATION LOAN
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.8",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
              }}
            >
              International School of Management & Research has tied up with HDFC (Credila) and ICICI to help students avail education loans easily from a number of banks and NBFCs. The education loan for the students of International School of Management & Research is offer based on the credit history of the co-applicant and academic performance of the applicant.
            </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img
              src={loanImage}
              alt="Education Loan"
              className="img-fluid rounded-3 shadow-lg"
              style={{
                maxWidth: "400px",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              className="rounded-3 p-4 p-md-5"
              style={{
                background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                color: "#fff",
              }}
            >
              <h3
                className="text-center mb-4"
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "28px",
                  fontWeight: "700",
                }}
              >
                <i className="fas fa-gift me-3" style={{ color: "#FFC333" }}></i>
                BENEFITS
              </h3>
              <div className="row g-4">
                {/* <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-check-circle fa-2x me-3" style={{ color: "#FFC333", flexShrink: 0 }}></i>
                    <p style={{ fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                      Easy availability of education loans for a number of courses
                    </p>
                  </div>
                </div> */}
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-percent fa-2x me-3" style={{ color: "#FFC333", flexShrink: 0 }}></i>
                    <p style={{ fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                      Low interest rates with a repayment period ranging from 5 to 15 years
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-hand-holding-usd fa-2x me-3" style={{ color: "#FFC333", flexShrink: 0 }}></i>
                    <p style={{ fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                      Education, living and other expenses covered
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-calendar-alt fa-2x me-3" style={{ color: "#FFC333", flexShrink: 0 }}></i>
                    <p style={{ fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                      Moratorium period ranging from 6 months to a year
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-file-invoice-dollar fa-2x me-3" style={{ color: "#FFC333", flexShrink: 0 }}></i>
                    <p style={{ fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                      Income Tax Benefits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Options Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              className="rounded-3 p-4 p-md-5"
              style={{
                backgroundColor: "#f8f9fa",
                border: "2px solid #FFC333",
              }}
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#0a2240",
                }}
              >
                <i className="fas fa-briefcase me-3" style={{ color: "#FFC333" }}></i>
                LOAN OPTIONS
              </h3>
              <div className="row align-items-center">
                <div className="col-lg-8 mb-3 mb-lg-0">
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.8",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      marginBottom: "1rem",
                    }}
                  >
                    <i className="fas fa-info-circle me-2" style={{ color: "#0a2240" }}></i>
                    HDFC (Credila) & ICICI is a tech-enabled platform committed to making education loans more accessible, affordable and transparent. It provides a personalized rate of interest with the best terms and fastest response time.
                  </p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#0a2240",
                      lineHeight: "1.8",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    <i className="fas fa-handshake me-2" style={{ color: "#FFC333" }}></i>
                    Tie Up with HDFC (Credila) and ICICI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Checklist Section */}
        <div className="row">
          <div className="col-12">
            <div
              className="rounded-3 p-4 p-md-5"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                className="text-center mb-5"
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#0a2240",
                }}
              >
                <i className="fas fa-clipboard-list me-3" style={{ color: "#FFC333" }}></i>
                DOCUMENTS CHECKLIST
              </h3>

              <div className="row g-4">
                {/* Borrower Documents */}
                <div className="col-lg-6">
                  <div
                    className="h-100 rounded-3 p-4"
                    style={{
                      background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                      color: "#fff",
                    }}
                  >
                    <h4
                      className="mb-4"
                      style={{
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        fontSize: "22px",
                        fontWeight: "700",
                        borderBottom: "2px solid #FFC333",
                        paddingBottom: "10px",
                      }}
                    >
                      <i className="fas fa-user-graduate me-2" style={{ color: "#FFC333" }}></i>
                      Borrower Documents
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        <i className="fas fa-id-card me-2" style={{ color: "#FFC333" }}></i>
                        Aadhaar Card/ PAN Card
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        <i className="fas fa-certificate me-2" style={{ color: "#FFC333" }}></i>
                        X<sup>th</sup> and XII<sup>th</sup> Marksheets
                      </li>

                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        <i className="fas fa-envelope-open-text me-2" style={{ color: "#FFC333" }}></i>
                        College Admission Letter
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        <i className="fas fa-envelope-open-text me-2" style={{ color: "#FFC333" }}></i>
                        Graduation Marksheets (If Applicable)
                      </li>
                    </ul>
                    <p><b>Note :-</b> Any other documents as required by the bank</p>
                  </div>
                </div>

                {/* Co-Borrower Documents */}
                <div className="col-lg-6">
                  <div
                    className="h-100 rounded-3 p-4"
                    style={{
                      backgroundColor: "#f8f9fa",
                      border: "2px solid #0a2240",
                    }}
                  >
                    <h4
                      className="mb-4"
                      style={{
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#0a2240",
                        borderBottom: "2px solid #FFC333",
                        paddingBottom: "10px",
                      }}
                    >
                      <i className="fas fa-users me-2" style={{ color: "#FFC333" }}></i>
                      Co-Borrower Documents
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-id-card me-2" style={{ color: "#0a2240" }}></i>
                        Aadhaar Card
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-id-badge me-2" style={{ color: "#0a2240" }}></i>
                        PAN Card
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-home me-2" style={{ color: "#0a2240" }}></i>
                        Residence Proof
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-university me-2" style={{ color: "#0a2240" }}></i>
                        6 Months Bank Account Statement
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-file-alt me-2" style={{ color: "#0a2240" }}></i>
                        ITR/Form 16
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-money-check-alt me-2" style={{ color: "#0a2240" }}></i>
                        Income Proof
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                        <i className="fas fa-building me-2" style={{ color: "#0a2240" }}></i>
                        Assets And Liabilities Brief (If Providing Collateral)
                      </li>
                      <li className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                        <i className="fas fa-file-invoice me-2" style={{ color: "#0a2240" }}></i>
                        Salary Slip (If Employed)
                      </li>
                    </ul>
                    <p><b>Note :-</b> Any other documents as required by the bank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="rounded-3 p-4 text-center"
              style={{
                backgroundColor: "#FFC333",
              }}
            >
              <h4
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#0a2240",
                  marginBottom: "1rem",
                }}
              >
                <i className="fas fa-phone-alt me-2"></i>
                Need Help with Your Loan Application?
              </h4>
              <p style={{ fontSize: "16px", color: "#0a2240", marginBottom: "1.5rem" }}>
                Contact our financial aid office for assistance
              </p>
              <a href="tel:9923786079">   <button
                className="btn fw-semibold"
                style={{
                  padding: "12px 40px",
                  backgroundColor: "#0a2240",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a4d7a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0a2240";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i className="fas fa-envelope me-2"></i>
                Contact Us
              </button></a>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}