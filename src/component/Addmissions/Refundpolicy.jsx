import React from "react";

export default function RefundPolicy() {
  return (
    <section className="refund-policy">
      <style>{`
        .refund-policy{font-family:Inter, Roboto, Arial, sans-serif;color:#0f2b44}
        .hero{position:relative;display:flex;align-items:center;min-height:180px;background:#0f3350;color:#fff;padding:36px 40px;overflow:hidden;}
        .hero-inner{position:relative;z-index:2;width:100%}
        .hero h1{font-size: 54px;margin:0 0 6px;font-weight:700}
        .hero p{margin:0;color:rgba(255,255,255,0.92)}
        .breadcrumb{color:#ffd27b;margin-top:8px;display:flex;gap:8px;align-items:center}
        .breadcrumb a{color:#ffd27b;text-decoration:none;font-weight:600}

        .container{max-width:100%;margin:35px auto;padding:0 20px}
        .panel{background:#fff;padding:26px;border-radius:10px;}
        .lead{font-size:16px;color:#333;line-height:1.7}

        .section{margin-top:20px}
        .section h3{margin:0 0 8px;color:#0f3350}
        .section p{margin:0;color:#333;line-height:1.6}

        .table{width:100%;border-collapse:collapse;margin-top:12px}
        .table th,.table td{padding:12px;border:1px solid rgba(15,51,80,0.06);text-align:left}
        .table th{background:#fbfdff;color:#0f3350}

        .note{margin-top:14px;padding:14px;border-left:4px solid #ffb74d;background:#fff8e6;border-radius:6px;color:#664400}

        .steps{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:12px}
        .step{background:#f7f9fb;padding:12px;border-radius:8px}

        .actions{display:flex;gap:12px;margin-top:18px}
        .btn{padding:10px 14px;border-radius:8px;border:0;cursor:pointer}
        .btn-primary{background:#ff3a4e;color:#fff}
        .btn-outline{background:#fff;border:1px solid rgba(15,51,80,0.08);color:#0f3350}

        .muted{color:#666;margin-top:12px}

        @media(max-width:800px){
          .hero{padding:24px}
          .hero h1{font-size:26px}
          .steps{grid-template-columns:1fr}
        }
      `}</style>

      <div className="hero" aria-label="Refund policy header">
        <div className="hero-inner">
          <h1>Refund Policy</h1>
          <p className="muted">Clear, fair rules for refunds on application fees, course fees and deposits.</p>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#">Home</a>
            <span aria-hidden>•</span>
            <span aria-current="page">Refund Policy</span>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="panel" role="region" aria-labelledby="refund-heading">
          <h2 id="refund-heading" style={{ marginTop: 0 }}>Overview</h2>
          <p className="lead">We want to make refunds simple and transparent. This page explains when refunds are available, timelines, how to request a refund, and any applicable deductions or exceptions.</p>

          <div className="section">
            <h3>Scope</h3>
            <p>This policy applies to: application fees, admission deposits, tuition fees paid via the institute portal, and other administrative fees charged directly by the institute. Third‑party charges (payment gateway fees, partner services) are subject to the third party's terms.</p>
          </div>

          <div className="section">
            <h3>Refund timelines & amounts</h3>
            <p>Refunds depend on the fee type and timing of the request. Typical rules are summarised below.</p>

            <table className="table" aria-describedby="refund-heading">
              <thead>
                <tr>
                  <th>Fee type</th>
                  <th>When refunded</th>
                  <th>Refund amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Application fee</td>
                  <td>Within 15 working days of a verified duplicate payment request</td>
                  <td>Full refund (less any gateway charges)</td>
                </tr>

                <tr>
                  <td>Admission deposit</td>
                  <td>Before programme start date and within specified withdrawal window</td>
                  <td>Partial refund depending on withdrawal date (see details)</td>
                </tr>

                <tr>
                  <td>Tuition fees</td>
                  <td>Per programme refund schedule — depends on withdrawal date</td>
                  <td>Pro‑rated refund may apply; administrative deductions possible</td>
                </tr>
              </tbody>
            </table>

            <div className="note">Note: All refunds are processed to the original payment method where possible. Bank processing times may apply after the institute issues the refund.</div>
          </div>

          <div className="section">
            <h3>Example refund schedule (Admission deposit)</h3>
            <ul className="list" style={{ marginTop: 12 }}>
              <li>Withdrawal more than 30 days before start: 90% refund of deposit</li>
              <li>Withdrawal 15–30 days before start: 50% refund</li>
              <li>Withdrawal less than 15 days before start: No refund</li>
            </ul>
          </div>

          <div className="section">
            <h3>How to request a refund</h3>
            <div className="steps">
              <div className="step">
                <strong>1. Submit request</strong>
                <p className="muted">Log in to the admissions portal and raise a refund request from your application dashboard, or email admissions with your application ID.</p>
              </div>
              <div className="step">
                <strong>2. Verification</strong>
                <p className="muted">We will verify payment records and supporting documents (bank receipt, proof of duplicate payment, etc.).</p>
              </div>
              <div className="step">
                <strong>3. Approval & processing</strong>
                <p className="muted">Approved refunds are processed and issued within 15 working days. You will receive an email when processing begins.</p>
              </div>
              <div className="step">
                <strong>4. Receive funds</strong>
                <p className="muted">Refunds appear in your account depending on your bank/card provider — usually 5–10 working days after the institute issues the refund.</p>
              </div>
            </div>
          </div>

          <div className="section">
            <h3>Exceptions & deductions</h3>
            <p>We may deduct reasonable administrative charges and any non‑refundable third‑party fees (e.g. payment gateway charges). No refunds will be issued in cases of disciplinary dismissals where the institute has followed due process.</p>
          </div>

          <div className="section">
            <h3>Contact & escalation</h3>
            <p>If you have questions or an urgent refund issue, please contact:</p>
            <p style={{ marginTop: 8 }}><strong>Email:</strong> <a href="mailto:finance@college.edu">finance@college.edu</a></p>
            <p><strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></p>
            <div className="muted">If you do not receive a satisfactory response within 10 working days, escalate to the Registrar's office with your ticket ID.</div>
          </div>

          <div className="note">If a refund is approved, the institute reserves the right to offset outstanding dues (if any) from the refundable amount before issuing the payment.</div>

          <div className="actions">
            <button className="btn btn-primary" onClick={() => window.print()}>Print / Save PDF</button>
            <a className="btn btn-outline" href="/pdfs/refund-policy.pdf" download>Download PDF</a>
          </div>

          <div className="muted" style={{ marginTop: 16 }}>Last updated: <strong>June 1, 2025</strong></div>
        </div>
      </div>
    </section>
  );
}
