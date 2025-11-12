import React, { useState } from "react";

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
            Eligibility <span className="text-warning">Criteria</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "16px", 
              marginTop: "0.5rem" 
            }}
          >
            Admissions • <span className="text-warning">Eligibility Criteria</span>
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
                className={`btn fw-semibold ${filter === 'graduation' ? '' : 'btn-outline-secondary'}`}
                onClick={() => setFilter('graduation')}
                style={{
                  padding: "12px 24px",
                  backgroundColor: filter === 'graduation' ? "#0a2240" : "transparent",
                  color: filter === 'graduation' ? "#fff" : "#0a2240",
                  border: `2px solid ${filter === 'graduation' ? "#0a2240" : "#0a2240"}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Graduation
              </button>
              <button
                className={`btn fw-semibold ${filter === 'postgraduation' ? '' : 'btn-outline-secondary'}`}
                onClick={() => setFilter('postgraduation')}
                style={{
                  padding: "12px 24px",
                  backgroundColor: filter === 'postgraduation' ? "#0a2240" : "transparent",
                  color: filter === 'postgraduation' ? "#fff" : "#0a2240",
                  border: `2px solid ${filter === 'postgraduation' ? "#0a2240" : "#0a2240"}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Post Graduation
              </button>
              <button
                className={`btn fw-semibold ${filter === 'mba' ? '' : 'btn-outline-secondary'}`}
                onClick={() => setFilter('mba')}
                style={{
                  padding: "12px 24px",
                  backgroundColor: filter === 'mba' ? "#0a2240" : "transparent",
                  color: filter === 'mba' ? "#fff" : "#0a2240",
                  border: `2px solid ${filter === 'mba' ? "#0a2240" : "#0a2240"}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                MBA
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
                border: "1px solid rgba(0,0,0,0.05)"
              }}
            >
              {/* INTRODUCTION TEXT */}
              <p
                style={{
                  fontSize: "16px",
                  color: "#444",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  textAlign: "center"
                }}
              >
                Use the tabs above to switch between eligibility details for different programmes. 
                The content below updates based on the selected tab.
              </p>

              {/* GRADUATION CONTENT */}
              {filter === 'graduation' && (
                <div>
                  <h2
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#0a2240",
                      marginBottom: "1rem"
                    }}
                  >
                    Graduation - Eligibility Criteria
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
                    Candidates applying for undergraduate (graduation) programmes must meet the following minimum criteria:
                  </p>
                  <ol
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "2rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      paddingLeft: "1.5rem"
                    }}
                  >
                    <li className="mb-2">Completed 10+2 (or equivalent) from a recognized board with minimum 50% aggregate marks.</li>
                    <li className="mb-2">Specific subject requirements (e.g. Mathematics / Biology) depend on the chosen course — check course page for details.</li>
                    <li className="mb-2">Entrance test / merit list may be used for final selection where applicable.</li>
                    <li className="mb-2">Reserved category relaxations will follow government norms.</li>
                  </ol>
                  <div
                    className="rounded-3 p-3"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: "4px solid #FFC333"
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
                      📋 <strong>Documents Required:</strong> 10th & 12th mark sheets, ID proof, passport photo, category certificate (if applicable), and other course-specific documents.
                    </p>
                  </div>
                </div>
              )}

              {/* POST GRADUATION CONTENT */}
              {filter === 'postgraduation' && (
                <div>
                  <h2
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#0a2240",
                      marginBottom: "1rem"
                    }}
                  >
                    Post Graduation - Eligibility Criteria
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
                    Applicants for postgraduate programmes should satisfy the following:
                  </p>
                  <ol
                    style={{
                      fontSize: "16px",
                      color: "#444",
                      lineHeight: "1.7",
                      marginBottom: "2rem",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      paddingLeft: "1.5rem"
                    }}
                  >
                    <li className="mb-2">Possess a relevant undergraduate degree from a recognized university with minimum 50% aggregate (or as specified by the programme).</li>
                    <li className="mb-2">Some programmes require a valid score in national/state-level entrance tests or an institutional entrance exam.</li>
                    <li className="mb-2">Relevant work experience may be required/preferred for certain professional masters programmes.</li>
                    <li className="mb-2">Interview or group discussion may form part of the selection process.</li>
                  </ol>
                  <div
                    className="rounded-3 p-3"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: "4px solid #FFC333"
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
                      📋 <strong>Documents Required:</strong> Degree certificate, provisional certificate/mark sheets, ID proof, experience letters (if applicable), and passport-sized photos.
                    </p>
                  </div>
                </div>
              )}

              {/* MBA CONTENT */}
              {filter === 'mba' && (
                <div>
                  <h2
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "28px",
                      fontWeight: "700",
                      color: "#0a2240",
                      marginBottom: "1rem"
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
                      paddingLeft: "1.5rem"
                    }}
                  >
                    <li className="mb-2">A Bachelor's degree with at least 50% marks (or equivalent) from a recognized university.</li>
                    <li className="mb-2">A valid score in an accepted management entrance test (CAT / MAT / XAT / CMAT / institutional test) where applicable.</li>
                    <li className="mb-2">Shortlisted candidates will be called for Group Discussion (GD) and Personal Interview (PI) or a combined selection process.</li>
                    <li className="mb-2">Work experience is desirable for some specialisations but not mandatory for all.</li>
                  </ol>
                  <div
                    className="rounded-3 p-3"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: "4px solid #FFC333"
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
                      📋 <strong>Documents Required:</strong> Degree certificate, entrance test scorecard, work experience certificates (if any), ID proof, and photographs.
                    </p>
                  </div>
                </div>
              )}

              {/* ADDITIONAL INFORMATION */}
              <div className="mt-5 pt-4 border-top">
                <h3
                  style={{
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#0a2240",
                    marginBottom: "1rem"
                  }}
                >
                  Additional Information
                </h3>
                <ul
                  style={{
                    fontSize: "16px",
                    color: "#444",
                    lineHeight: "1.7",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    paddingLeft: "1.5rem"
                  }}
                >
                  <li className="mb-2">All eligibility criteria are subject to change as per university guidelines</li>
                  <li className="mb-2">International students must provide equivalent qualification certificates</li>
                  <li className="mb-2">Application deadlines must be strictly adhered to</li>
                  <li className="mb-2">For specific programme requirements, contact our admissions office</li>
                </ul>
              </div>

              {/* CONTACT CTA */}
              <div
                className="rounded-3 p-4 mt-4 text-center"
                style={{
                  backgroundColor: "#0a2240",
                  color: "#fff"
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "1rem"
                  }}
                >
                  Need Clarification on Eligibility?
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "1.5rem",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    opacity: "0.9"
                  }}
                >
                  Contact our admissions team for personalized guidance on eligibility requirements.
                </p>
                <button
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}