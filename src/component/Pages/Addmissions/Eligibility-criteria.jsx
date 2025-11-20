import React, { useState } from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function PrivacySection() {
  const [filter, setFilter] = useState("graduation");

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
            Eligibility <span className="text-warning">Criteria</span>
          </h1>
          <p
            className="mb-0"
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginTop: "0.5rem",
            }}
          >
            Admissions •{" "}
            <span className="text-warning">Eligibility Criteria</span>
          </p>
        </div>
      </section>

      {/* -------- MAIN CONTENT -------- */}
      <div className="container pb-5" style={{ marginTop: "3rem" }}>
        {/* FILTER BUTTONS */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <button
                className={`btn fw-semibold ${
                  filter === "graduation" ? "" : "btn-outline-secondary"
                }`}
                onClick={() => setFilter("graduation")}
                style={{
                  padding: "12px 24px",
                  backgroundColor:
                    filter === "graduation" ? "#0a2240" : "transparent",
                  color: filter === "graduation" ? "#fff" : "#0a2240",
                  border: `2px solid ${
                    filter === "graduation" ? "#0a2240" : "#0a2240"
                  }`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Under Graduation
              </button>
              <button
                className={`btn fw-semibold ${
                  filter === "postgraduation" ? "" : "btn-outline-secondary"
                }`}
                onClick={() => setFilter("postgraduation")}
                style={{
                  padding: "12px 24px",
                  backgroundColor:
                    filter === "postgraduation" ? "#0a2240" : "transparent",
                  color: filter === "postgraduation" ? "#fff" : "#0a2240",
                  border: `2px solid ${
                    filter === "postgraduation" ? "#0a2240" : "#0a2240"
                  }`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Post Graduation
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT CARDS */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div
              className="rounded-3 p-4 p-md-5"
              style={{
                backgroundColor: "#fff",
                boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              {/* INTRODUCTION TEXT */}

              {/* GRADUATION CONTENT */}
              {filter === "graduation" && (
                <div>
                  <h2
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#0a2240",
                      marginBottom: "1rem",
                    }}
                  >
                    ELIGIBILITY CRITERIA FOR BBA/BCA
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Candidates with minimum 50% marks in 10+2 (H.S.C.) standard or its equivalent examination (45% for reserved categories) from any recognized Jr. college/Institute with a valid score card in entrance test of MAH-BCA/BBA/BMS/BBM-CET-2026 is eligible to apply. Enabling the candidate to appear for selection Process directly.
                  </p>
                 
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                  Candidates with 60% at 10th and 12th standard or it’s equivalent examination, will be given preference
                  </p>
               
                </div>
              )}

              {/* POST GRADUATION CONTENT */}
              {filter === "postgraduation" && (
                <div>
                  <h2
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#0a2240",
                      marginBottom: "1rem",
                    }}
                  >
                    ELIGIBILITY CRITERIA FOR MBA
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Candidates with minimum 50% marks in graduation (45% for reserved categories) from any recognized university and with a valid score card in national-level entrance tests like with MAH-MBA CET/CMAT/CAT/MAT/XAT/ATMA/GMAT are eligible to apply (all such exams shall be treated at par) enabling the candidate to appear for selection Process directly.
                  </p>
            
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                   Candidates appearing for final year degree examination up to July 2026 can also apply. Such candidates, whose final year degree results is not declared at the time of admission will be admitted provisionally and after submitting a bonafide certificate from the Head of the Institute stating that he/she is a regular student. The admission of such a candidate will be confirmed only if he/she provides a proof of passing the final year degree examination marksheet on or before 31st July 2026.
                  </p>

                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                  Candidates with 60% throughout their academic career, will be given preference.
                  </p>

            
                </div>
              )}

              {/* MBA CONTENT */}
              {filter === "mba" && (
                <div>
                  <h2
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#0a2240",
                      marginBottom: "1rem",
                    }}
                  >
                    MBA - Eligibility Criteria
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "1.5rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    Eligibility rules for the MBA programme typically include:
                  </p>
                  <ol
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "2rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      paddingLeft: "1.5rem",
                    }}
                  >
                    <li className="mb-2">
                      A Bachelor's degree with at least 50% marks (or
                      equivalent) from a recognized university.
                    </li>
                    <li className="mb-2">
                      A valid score in an accepted management entrance test (CAT
                      / MAT / XAT / CMAT / institutional test) where applicable.
                    </li>
                    <li className="mb-2">
                      Shortlisted candidates will be called for Group Discussion
                      (GD) and Personal Interview (PI) or a combined selection
                      process.
                    </li>
                    <li className="mb-2">
                      Work experience is desirable for some specialisations but
                      not mandatory for all.
                    </li>
                  </ol>
                  <div
                    className="rounded-3 p-3"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: "4px solid #FFC333",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#0a2240",
                        margin: 0,
                        fontWeight: "600",
                        fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      }}
                    >
                      📋 <strong>Documents Required:</strong> Degree
                      certificate, entrance test scorecard, work experience
                      certificates (if any), ID proof, and photographs.
                    </p>
                  </div>
                </div>
              )}

            
              {/* CONTACT CTA */}
              <div
                className="rounded-3 p-4 mt-4 text-center"
                style={{
                  backgroundColor: "#0a2240",
                  color: "#fff",
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "1rem",
                  }}
                >
                  Need Clarification on Eligibility?
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "1.5rem",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    opacity: "0.9",
                  }}
                >
                  Contact our admissions team for personalized guidance on
                  eligibility requirements.
                </p>
                <a href="tel:9923786079"
                  className="btn fw-semibold"
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "#FFC333",
                    color: "#0a2240",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  📞 Contact Admissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}
