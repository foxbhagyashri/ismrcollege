import React from "react";

export default function DisclaimerPage() {
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
            Website <span className="text-warning">Disclaimer</span>
          </h1>
          <p
            className="mb-0"
            style={{ 
              fontFamily: "'Inter', Arial, Helvetica, sans-serif", 
              fontSize: "16px", 
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
              marginBottom: "1.5rem"
            }}
          >
            Website Disclaimer
          </h2>
          
          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.7",
              marginBottom: "2rem",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              textAlign: "justify",
              textJustify: "inter-word"
            }}
          >
            The information provided on this website is for general informational purposes only. 
            While we strive to keep the content accurate and up to date, we make no warranties of any kind 
            about the completeness, accuracy, reliability or suitability of the information and materials 
            contained on the site for any purpose.
          </p>

          {/* NO PROFESSIONAL ADVICE SECTION */}
          <div className="mb-4">
            <h3
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#0a2240",
                marginBottom: "1rem"
              }}
            >
              No Professional Advice
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                margin: 0,
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word"
              }}
            >
              Nothing on this site should be construed as professional, legal, financial, medical or academic advice. 
              Always consult a qualified professional for specific advice related to your situation.
            </p>
          </div>

          {/* EXTERNAL LINKS SECTION */}
          <div className="mb-4">
            <h3
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#0a2240",
                marginBottom: "1rem"
              }}
            >
              External Links and Third Parties
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                margin: 0,
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word"
              }}
            >
              We may provide links to external websites for convenience. We do not endorse and are not responsible 
              for the content, accuracy, or practices of these external sites.
            </p>
          </div>

          {/* LIABILITY SECTION */}
          <div className="mb-4">
            <h3
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#0a2240",
                marginBottom: "1rem"
              }}
            >
              Limitation of Liability
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                margin: 0,
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word"
              }}
            >
              To the fullest extent permitted by law, neither the institute nor its staff shall be liable for any 
              loss or damage arising directly or indirectly from the use of this website.
            </p>
          </div>

          {/* CONTENT CHANGES SECTION */}
          <div className="mb-4">
            <h3
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#0a2240",
                marginBottom: "1rem"
              }}
            >
              Changes to the Content
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                margin: 0,
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                textAlign: "justify",
                textJustify: "inter-word"
              }}
            >
              We reserve the right to update or remove content without prior notice. Please check this page 
              periodically for any changes.
            </p>
          </div>

          {/* SPECIFIC DISCLAIMERS SECTION */}
          <div className="mb-4">
            <h3
              style={{
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#0a2240",
                marginBottom: "1rem"
              }}
            >
              Specific Disclaimers
            </h3>
            <ul 
              className="ps-4"
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: "1.7",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              <li className="mb-3">
                <strong style={{ color: "#0a2240" }}>Admissions & Eligibility:</strong> Programme eligibility criteria 
                and intake details are subject to change — always refer to the official programme page or prospectus.
              </li>
              <li className="mb-3">
                <strong style={{ color: "#0a2240" }}>Fees & Dates:</strong> Fee structures and deadlines published here 
                are indicative. Confirm the latest fees with admissions.
              </li>
              <li className="mb-3">
                <strong style={{ color: "#0a2240" }}>Images & Branding:</strong> Images used on the site are for 
                illustrative purposes and may not represent actual facilities.
              </li>
              <li className="mb-3">
                <strong style={{ color: "#0a2240" }}>Course Content:</strong> Curriculum and course structures are 
                subject to change based on industry requirements and academic reviews.
              </li>
              <li>
                <strong style={{ color: "#0a2240" }}>Placement Statistics:</strong> Placement records represent 
                historical data and do not guarantee future employment outcomes.
              </li>
            </ul>
          </div>

          {/* NOTE BOX */}
          <div
            className="rounded-3 p-4 mb-4"
            style={{
              borderLeft: "4px solid #FFC333",
              backgroundColor: "#FFF8E6",
              border: "1px solid #FFE8A3"
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#664400",
                lineHeight: "1.7",
                margin: 0,
                fontWeight: "500",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              📝 <strong>Important Note:</strong> If you require formal confirmation of any information, 
              please contact our admissions office with specific queries — contact details are available 
              on the Contact page.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
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
            <button
              className="btn fw-semibold"
              style={{
                padding: "12px 30px",
                backgroundColor: "#0a2240",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                flex: "1",
                fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              }}
            >
              📥 Download Disclaimer PDF
            </button>
          </div>

          {/* LAST UPDATED */}
          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "2px solid #f0f0f0",
              textAlign: "center"
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
              Last updated: <strong>June 1, 2025</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}