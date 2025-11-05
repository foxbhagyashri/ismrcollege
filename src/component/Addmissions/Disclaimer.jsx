import React from "react";

export default function DisclaimerPage() {
  return (
    <section className="disclaimer-page">
      <style>{`
        .disclaimer-page{font-family:Inter, Roboto, Arial, sans-serif;color:#0f2b44}
        .hero{position:relative;display:flex;align-items:center;min-height:180px;background:#0f3350;color:#fff;padding:36px 40px;overflow:hidden;}
        .hero-inner{position:relative;z-index:2;width:100%}
        .hero h1{font-size: 54px;margin:0 0 6px;font-weight:700}
        .hero p{margin:0;color:rgba(255,255,255,0.9)}
        .breadcrumb{color:#ffd27b;margin-top:8px;display:flex;gap:8px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        .container{max-width:100%;margin:35px auto;padding:0 20px}
        .panel{background:#fff;padding:22px;border-radius:10px;}
        .lead{font-size:16px;color:#333;line-height:1.7}
        .muted{color:#666}

        .section{margin-top:18px}
        .section h3{margin:0 0 8px;color:#0f3350}
        .section p{margin:0;color:#333;line-height:1.6}

        .list{margin-top:12px;padding-left:18px}
        .list li{margin-bottom:8px}

        .actions{display:flex;gap:12px;margin-top:16px}
        .btn{padding:10px 14px;border-radius:8px;border:0;cursor:pointer}
        .btn-primary{background:#ff3a4e;color:#fff}
        .btn-outline{background:#fff;border:1px solid rgba(15,51,80,0.08);color:#0f3350}

        .note{margin-top:12px;padding:12px;border-left:4px solid #ffc333;background:#fff8e6;border-radius:6px;color:#664400}

        @media(max-width:720px){
          .hero{padding:24px}
          .hero h1{font-size:26px}
        }
      `}</style>

      <div className="hero" aria-label="Disclaimer header">
        <div className="hero-inner">
          <h1>Disclaimer</h1>
          <p className="muted">Important legal information about using this website and the content we publish.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <span aria-hidden>•</span>
            <span aria-current="page">Disclaimer</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="panel" role="region" aria-labelledby="disclaimer-heading">
          <h2 id="disclaimer-heading" style={{ marginTop: 0 }}>Website Disclaimer</h2>
          <p className="lead">The information provided on this website is for general informational purposes only. While we strive to keep the content accurate and up to date, we make no warranties of any kind about the completeness, accuracy, reliability or suitability of the information and materials contained on the site for any purpose.</p>

          <div className="section">
            <h3>No professional advice</h3>
            <p>Nothing on this site should be construed as professional, legal, financial, medical or academic advice. Always consult a qualified professional for specific advice related to your situation.</p>
          </div>

          <div className="section">
            <h3>External links and third parties</h3>
            <p>We may provide links to external websites for convenience. We do not endorse and are not responsible for the content, accuracy, or practices of these external sites.</p>
          </div>

          <div className="section">
            <h3>Limitation of liability</h3>
            <p>To the fullest extent permitted by law, neither the institute nor its staff shall be liable for any loss or damage arising directly or indirectly from the use of this website.</p>
          </div>

          <div className="section">
            <h3>Changes to the content</h3>
            <p>We reserve the right to update or remove content without prior notice. Please check this page periodically for any changes.</p>
          </div>

          <div className="section">
            <h3>Specific disclaimers</h3>
            <ul className="list">
              <li><strong>Admissions & eligibility:</strong> Programme eligibility criteria and intake details are subject to change — always refer to the official programme page or prospectus.</li>
              <li><strong>Fees & dates:</strong> Fee structures and deadlines published here are indicative. Confirm the latest fees with admissions.</li>
              <li><strong>Images & branding:</strong> Images used on the site are for illustrative purposes and may not represent actual facilities.</li>
            </ul>
          </div>

          <div className="note" role="note">
            If you require formal confirmation, please contact our admissions office with specific queries — contact details are available on the Contact page.
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={() => window.print()}>Print / Save PDF</button>
            <a className="btn btn-outline" href="/pdfs/disclaimer.pdf" download>Download PDF</a>
          </div>

          <div style={{ marginTop: 18 }} className="muted">Last updated: <strong>June 1, 2025</strong></div>
        </div>
      </div>
    </section>
  );
}
