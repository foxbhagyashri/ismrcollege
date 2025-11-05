import React, { useState } from "react";

export default function PrivacySection() {
  const [filter, setFilter] = useState("graduation");
  
  const [showHeroOverlay, setShowHeroOverlay] = useState(true);
  const [zoom, setZoom] = useState(100);

  return (
    <section className="privacy-wrapper">
      {/* Internal CSS */}
      <style>{`
        .privacy-wrapper{font-family: Inter, Roboto, Arial, sans-serif;}
        .hero{position:relative;display:flex;align-items:center;min-height:220px;background:#0f3350; color:#fff;padding:36px 60px;overflow:hidden}
        .hero .library-bg {
          position: absolute;
          inset: 0;
          background: rgba(6, 40, 68, 0.6);
          background-image: url('./bg-3.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }
        .hero-inner{position:relative;z-index:2;display:flex;align-items:center;width:100%;}
        .hero-left{flex:1;max-width:60%;}
        .hero-left h1{font-size:54px;margin:0 0 12px;font-weight:700;letter-spacing:0.5px;font-family: 'Inter', Arial, Helvetica, sans-serif;}
        .breadcrumb{color:#ffd27b;margin-top:6px;display:flex;gap:10px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        /* ordered list styles */
        ol{margin-top:20px;padding-left:20px;color:#333;line-height:1.8;}
        ol li{margin-bottom:10px;font-size:17px;}

       
        .filter-row{display:flex;gap:40px;margin-top:18px;justify-content: center;}
        .filter-btn{padding:9px 20px;border-radius:9px;border:1px solid rgba(0,0,0,0.06);background:#ffc333;cursor:pointer;font-weight:600;font-size:19px}
        .filter-btn.active{background:#0f3350;color:#fff;border-color:transparent;box-shadow:0 6px 18px rgba(15,51,80,0.18)}

        /* lower content area */
        .content-area{padding:48px 60px;background:#fff;min-height:320px;position:relative}
        .yellow-swoosh{position:absolute;left:80px;top:50px;width:72px;height:28px;background:#f7b32b;border-radius:60px;transform:rotate(-12deg)}

        /* responsive tweaks */
        @media(max-width:900px){
          .hero{padding:28px 20px}
          .hero-inner{flex-direction:column;align-items:flex-start}
          .hero-left{max-width:100%}
          .hero-right{width:100%;margin-top:20px;justify-content:flex-start}
          .hero-right .photo-card{width:100%;height:180px}
        }
      `}</style>

      {/* Hero section */}
      <div className="hero" aria-label="Privacy hero">
        {/* background image layer (make sure path is correct) */}
        <div className="library-bg" aria-hidden />

        <div className="hero-inner">
          <div className="hero-left">
            <h1>Eligibility Criteria</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="#">Home</a>
              <span aria-hidden>•</span>
              <span aria-current="page">Eligibility Criteria</span>
            </nav>
          </div>

       
        </div>

        {/* opt-in overlay to illustrate hero dim (toggleable) */}
        {showHeroOverlay && <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,40,68,0.35)', zIndex: 1 }} />}
      </div>

      {/* Content area below hero */}
      <div className="content-area">
        {/* Tabs / filters */}
        <div className="filter-row" role="tablist" aria-label="Eligibility filters">
          <button
            className={`filter-btn ${filter === 'graduation' ? 'active' : ''}`}
            onClick={() => setFilter('graduation')}
            role="tab"
            aria-selected={filter === 'graduation'}
            aria-controls="panel-graduation"
            id="tab-graduation"
          >
            Graduation
          </button>

          <button
            className={`filter-btn ${filter === 'postgraduation' ? 'active' : ''}`}
            onClick={() => setFilter('postgraduation')}
            role="tab"
            aria-selected={filter === 'postgraduation'}
            aria-controls="panel-postgraduation"
            id="tab-postgraduation"
          >
            Post Graduation
          </button>

          <button
            className={`filter-btn ${filter === 'mba' ? 'active' : ''}`}
            onClick={() => setFilter('mba')}
            role="tab"
            aria-selected={filter === 'mba'}
            aria-controls="panel-mba"
            id="tab-mba"
          >
            MBA
          </button>
        </div>

        <div style={{ marginTop: 71 }}>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>
            Use the tabs above to switch between eligibility details for different programmes. The content below updates based on the selected tab.
          </p>

          {/* Tab panels: change content depending on selected filter */}
          <div role="region" aria-live="polite" style={{ marginTop: 18 }}>
            {filter === 'graduation' && (
              <section id="panel-graduation" aria-labelledby="tab-graduation">
                <h2 style={{ fontSize: 22, marginBottom: 8 }}>Graduation - Eligibility</h2>
                <p style={{ fontSize: 16, color: '#333' }}>
                  Candidates applying for undergraduate (graduation) programmes must meet the following minimum criteria:
                </p>
                <ol>
                  <li>Completed 10+2 (or equivalent) from a recognized board with minimum 50% aggregate marks.</li>
                  <li>Specific subject requirements (e.g. Mathematics / Biology) depend on the chosen course — check course page for details.</li>
                  <li>Entrance test / merit list may be used for final selection where applicable.</li>
                  <li>Reserved category relaxations will follow government norms.</li>
                </ol>
                <p style={{ fontSize: 15 }}>
                  <strong>Documents required:</strong> 10th &amp; 12th mark sheets, ID proof, passport photo, category certificate (if applicable), and other course-specific documents.
                </p>
              </section>
            )}

            {filter === 'postgraduation' && (
              <section id="panel-postgraduation" aria-labelledby="tab-postgraduation">
                <h2 style={{ fontSize: 22, marginBottom: 8 }}>Post Graduation - Eligibility</h2>
                <p style={{ fontSize: 16, color: '#333' }}>
                  Applicants for postgraduate programmes should satisfy the following:
                </p>
                <ol>
                  <li>Possess a relevant undergraduate degree from a recognized university with minimum 50% aggregate (or as specified by the programme).</li>
                  <li>Some programmes require a valid score in national/state-level entrance tests or an institutional entrance exam.</li>
                  <li>Relevant work experience may be required/preferred for certain professional masters programmes.</li>
                  <li>Interview or group discussion may form part of the selection process.</li>
                </ol>
                <p style={{ fontSize: 15 }}>
                  <strong>Documents required:</strong> Degree certificate, provisional certificate/mark sheets, ID proof, experience letters (if applicable), and passport-sized photos.
                </p>
              </section>
            )}

            {filter === 'mba' && (
              <section id="panel-mba" aria-labelledby="tab-mba">
                <h2 style={{ fontSize: 22, marginBottom: 8 }}>MBA - Eligibility</h2>
                <p style={{ fontSize: 16, color: '#333' }}>
                  Eligibility rules for the MBA programme typically include:
                </p>
                <ol>
                  <li>A Bachelor's degree with at least 50% marks (or equivalent) from a recognized university.</li>
                  <li>A valid score in an accepted management entrance test (CAT / MAT / XAT / CMAT / institutional test) where applicable.</li>
                  <li>Shortlisted candidates will be called for Group Discussion (GD) and Personal Interview (PI) or a combined selection process.</li>
                  <li>Work experience is desirable for some specialisations but not mandatory for all.</li>
                </ol>
                <p style={{ fontSize: 15 }}>
                  <strong>Documents required:</strong> Degree certificate, entrance test scorecard, work experience certificates (if any), ID proof, and photographs.
                </p>
              </section>
            )}
          </div>

          {/* Common checklist below ordered list from original design */}
          <ol style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginTop: 20 }}>
            <li>We respect your privacy and protect your data responsibly.</li>
            <li>Your personal information is used only for communication and service improvement.</li>
            <li>We do not sell or share your data with third parties without consent.</li>
            <li>Cookies are used to enhance user experience and analyze site traffic.</li>
            <li>Users may contact us to request data removal or corrections at any time.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
