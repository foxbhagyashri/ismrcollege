import React, { useState, useEffect } from 'react';

export default function EducationLoad() {
  const [programs, setPrograms] = useState([]);
  const [visible, setVisible] = useState(4);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const ALL_PROGRAMS = [
    { id: 1, name: 'B.Sc Computer Science', type: 'Undergraduate' },
    { id: 2, name: 'M.Sc Biotechnology', type: 'Postgraduate' },
    { id: 3, name: 'MBA (Finance)', type: 'Postgraduate' },
    { id: 4, name: 'B.A Psychology', type: 'Undergraduate' },
    { id: 5, name: 'M.Tech Data Science', type: 'Postgraduate' },
    { id: 6, name: 'B.Com Accounting', type: 'Undergraduate' },
    { id: 7, name: 'BBA', type: 'Undergraduate' },
    { id: 8, name: 'M.A English', type: 'Postgraduate' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setPrograms(ALL_PROGRAMS);
      setLoading(false);
    }, 800);
  }, []);

  const filtered = filter === 'all' ? programs : programs.filter(p => p.type === filter);
  const showLoadMore = filtered.length > visible;

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
            Educational <span className="text-warning">Loan</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "16px", 
              marginTop: "0.5rem" 
            }}
          >
            Admissions • <span className="text-warning">Educational Loan</span>
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
                className={`btn fw-semibold ${filter === 'all' ? '' : 'btn-outline-secondary'}`}
                onClick={() => setFilter('all')}
                style={{
                  padding: "12px 24px",
                  backgroundColor: filter === 'all' ? "#0a2240" : "transparent",
                  color: filter === 'all' ? "#fff" : "#0a2240",
                  border: `2px solid ${filter === 'all' ? "#0a2240" : "#0a2240"}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                All Programs
              </button>
              <button
                className={`btn fw-semibold ${filter === 'Undergraduate' ? '' : 'btn-outline-secondary'}`}
                onClick={() => setFilter('Undergraduate')}
                style={{
                  padding: "12px 24px",
                  backgroundColor: filter === 'Undergraduate' ? "#0a2240" : "transparent",
                  color: filter === 'Undergraduate' ? "#fff" : "#0a2240",
                  border: `2px solid ${filter === 'Undergraduate' ? "#0a2240" : "#0a2240"}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Undergraduate
              </button>
              <button
                className={`btn fw-semibold ${filter === 'Postgraduate' ? '' : 'btn-outline-secondary'}`}
                onClick={() => setFilter('Postgraduate')}
                style={{
                  padding: "12px 24px",
                  backgroundColor: filter === 'Postgraduate' ? "#0a2240" : "transparent",
                  color: filter === 'Postgraduate' ? "#fff" : "#0a2240",
                  border: `2px solid ${filter === 'Postgraduate' ? "#0a2240" : "#0a2240"}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                Postgraduate
              </button>
            </div>
          </div>
        </div>

        {/* PROGRAM GRID */}
        <div className="row g-4">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3">
                <div
                  className="rounded-3 h-100 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "2rem",
                    minHeight: "150px",
                    border: "2px dashed #dee2e6",
                  }}
                >
                  <div
                    className="spinner-border text-primary"
                    role="status"
                    style={{
                      color: "#0a2240 !important"
                    }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p
                    className="mt-2 mb-0"
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      color: "#6c757d",
                      fontSize: "14px"
                    }}
                  >
                    Loading...
                  </p>
                </div>
              </div>
            ))
          ) : (
            filtered.slice(0, visible).map((program) => (
              <div key={program.id} className="col-12 col-sm-6 col-lg-3">
                <div
                  className="rounded-3 h-100 p-4 position-relative"
                  style={{
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
                    border: "1px solid rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    minHeight: "150px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(15,51,80,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(15,51,80,0.06)";
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#0a2240",
                      marginBottom: "0.5rem",
                      lineHeight: "1.4"
                    }}
                  >
                    {program.name}
                  </h3>
                  <div
                    className="badge"
                    style={{
                      backgroundColor: program.type === 'Undergraduate' ? "#FFC333" : "#d95c5c",
                      color: program.type === 'Undergraduate' ? "#0a2240" : "#fff",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                    }}
                  >
                    {program.type}
                  </div>
                  <div
                    className="position-absolute"
                    style={{
                      bottom: "1rem",
                      right: "1rem",
                      fontSize: "24px",
                      color: "rgba(10, 34, 64, 0.1)"
                    }}
                  >
                    📚
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* LOAD MORE BUTTON */}
        {showLoadMore && !loading && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <button
                className="btn fw-semibold"
                onClick={() => setVisible(visible + 4)}
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
                  e.currentTarget.style.backgroundColor = "#d95c5c";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0a2240";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Load More Programs
              </button>
            </div>
          </div>
        )}

        {/* LOAN INFORMATION SECTION */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <div
              className="rounded-3 p-4 p-md-5 text-center"
              style={{
                backgroundColor: "#f8f9fa",
                border: "2px solid #FFC333",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#0a2240",
                  marginBottom: "1rem"
                }}
              >
                Need Help with Educational Loans?
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#444",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  maxWidth: "600px",
                  margin: "0 auto 2rem auto"
                }}
              >
                Our financial aid office can help you explore various educational loan options, 
                scholarship opportunities, and payment plans to make your education affordable.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button
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
                >
                  📞 Contact Financial Aid
                </button>
                <button
                  className="btn fw-semibold"
                  style={{
                    padding: "12px 30px",
                    backgroundColor: "#0a2240",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                  }}
                >
                  📄 Download Loan Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}