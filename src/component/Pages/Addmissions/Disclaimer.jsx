import React from "react";
import allsectionbg from "../../../assets/allsectionbg.jpg";
import Faq from "../../Faq";

export default function DisclaimerPage() {
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
            Website <span className="text-warning">Disclaimer</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "15px", 
              marginTop: "0.5rem" 
            }}
          >
            Admissions • <span className="text-warning">Disclaimer</span>
          </p>
        </div>
      </section>

      {/* -------- MAIN CONTENT -------- */}
      <div className="container pb-5" style={{ marginTop: "3rem" }}>
        <div 
          className="rounded-3 p-4 p-md-5"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 8px 30px rgba(15,51,80,0.06)",
            border: "1px solid rgba(0,0,0,0.05)"
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontSize: "32px",
              fontWeight: 700,
              color: "#0a2240",
              marginBottom: "1.5rem",
              textAlign: "center"
            }}
          >
            DISCLAIMER
          </h2>
          
          <p
            style={{
              fontSize: "18px",
              color: "#0a2240",
              lineHeight: "1.8",
              marginBottom: "2rem",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify",
              fontWeight: "600"
            }}
          >
            ISMR B-School Pune has not appointed any person or any third party to take admission on behalf of the International School of Management & Research.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "2rem",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify"
            }}
          >
            Candidates are advised to get in touch directly with the institute for any admission related procedure.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "2rem",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify"
            }}
          >
            <strong style={{ color: "#0a2240" }}>Fees to be paid at institute counter or in the following account only:</strong> You are advised to remit the amount through a bank draft, drawn in favour of <strong>"International School of Management & Research (ISMR)"</strong>, payable at Pune or through online payment via NEFT or RTGS.
          </p>

          {/* BANK DETAILS SECTION */}
          <div className="mb-4">
            <h3
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                color: "#0a2240",
                marginBottom: "1.5rem",
                textAlign: "center"
              }}
            >
              College Bank Details
            </h3>
            <div
              className="rounded-3 p-4"
              style={{
                background: "linear-gradient(135deg, #0a2240 0%, #1a4d7a 100%)",
                color: "#fff"
              }}
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-building fa-lg me-3 mt-1" style={{ color: "#FFC333" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>ACCOUNT NAME</p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>International School of Management & Research</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-university fa-lg me-3 mt-1" style={{ color: "#FFC333" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>BANK NAME</p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>ICICI Bank</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-credit-card fa-lg me-3 mt-1" style={{ color: "#FFC333" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>ACCOUNT NUMBER</p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>337601000351</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start mb-3">
                    <i className="fas fa-code-branch fa-lg me-3 mt-1" style={{ color: "#FFC333" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>IFSC CODE</p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>ICIC0003376</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-map-marker-alt fa-lg me-3 mt-1" style={{ color: "#FFC333" }}></i>
                    <div>
                      <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>BRANCH NAME</p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "600" }}>Fursungi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMPORTANT NOTE BOX */}
          <div
            className="rounded-3 p-4"
            style={{
              borderLeft: "4px solid #d95c5c",
              backgroundColor: "#FFEBEE",
              border: "1px solid #FFCDD2"
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#c62828",
                lineHeight: "1.7",
                margin: 0,
                fontWeight: "600",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              ⚠️ <strong>NOTE:</strong> Institute will not be responsible, if any Students pay any fees or part of fees to any person or deposits in any other account.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
            <button
              className="btn fw-semibold"
              onClick={() => window.print()}
              style={{
                padding: "12px 30px",
                backgroundColor: "#d95c5c",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                flex: "1",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              🖨️ Print / Save as PDF
            </button>
          </div>

          {/* LAST UPDATED */}
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "2px solid #f0f0f0",
              textAlign: "center",
              marginTop: "2rem"
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                margin: 0,
                fontStyle: "italic",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              Last updated: <strong>November 18, 2025</strong>
            </p>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}